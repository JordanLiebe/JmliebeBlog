using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Runtime.CompilerServices;
using System.Security.Claims;
using System.Threading.Tasks;
using JmliebeBlogApi.Data;
using JmliebeBlogApi.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using Microsoft.AspNetCore.Cors;

namespace JmliebeBlogApi.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class EntryController : ControllerBase
    {
        private readonly IDataRepository _dataRepository;
        private readonly IHttpClientFactory _clientFactory;
        private readonly string _auth0UserInfo;

        public EntryController(IDataRepository dataRepository, IHttpClientFactory clientFactory, IConfiguration configuration)
        {
            _dataRepository = dataRepository;
            _clientFactory = clientFactory;
            _auth0UserInfo = $"{configuration["Auth0:Authority"]}userinfo";
        }

        private async Task<string> GetUserName()
        {
            var request = new HttpRequestMessage(HttpMethod.Get,
                _auth0UserInfo);
            request.Headers.Add("Authorization",
                Request.Headers["Authorization"].First());
            var client = _clientFactory.CreateClient();
            var response = await client.SendAsync(request);

            if (response.IsSuccessStatusCode)
            {
                var jsonContent = await response.Content.ReadAsStringAsync();
                var user = JsonSerializer.Deserialize<User>(
                    jsonContent,
                    new JsonSerializerOptions
                    {
                        PropertyNameCaseInsensitive = true
                    });
                return user.Name;
            }
            else
            {
                return "";
            }
        }

        [HttpGet]
        public IEnumerable<EntryGetResponse> GetAllEntries()
        {
            var results = _dataRepository.GetAllEntries_WithComments();
            return results;
        }

        [HttpGet("{category?}")]
        public IEnumerable<EntryGetResponse> GetAllEntries(string category)
        {
            var results = _dataRepository.GetAllEntries_WithComments_ByCategory(category);
            return results;
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> PostNewEntry(EntryPostRequest request)
        {
            var userEmail = await GetUserName();
            var access = _dataRepository.GetUserAccess(userEmail);

            if (access.Admin != 1 && access.Editor != 1)
                return Unauthorized(new { message = "Access Denied" }); 

            var results = _dataRepository.PostNewEntry(request, userEmail);
            return Ok(results);
        }

        
        [HttpPost("comment")]
        [Authorize]
        public async Task<IActionResult> PostNewComment(CommentPostRequest request)
        {
            var userEmail = await GetUserName();
            var access = _dataRepository.GetUserAccess(userEmail);

            if (access.Admin != 1 && access.Editor != 1)
                return Unauthorized(new { message = "Access Denied" });

            var results = _dataRepository.PostNewComment(request, userEmail);
            return Ok(results);
        }

        [HttpGet("UserAccess")]
        [Authorize]
        public async Task<UserAccess> GetUserAccess()
        {
            string User = await GetUserName();

            var results = _dataRepository.GetUserAccess(User);

            return results;
        }
    }
}
