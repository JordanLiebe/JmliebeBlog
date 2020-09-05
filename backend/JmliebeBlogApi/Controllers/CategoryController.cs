using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using JmliebeBlogApi.Data;
using JmliebeBlogApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace JmliebeBlogApi.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly IDataRepository _dataRepository;
        private readonly IHttpClientFactory _clientFactory;
        private readonly string _auth0UserInfo;

        public CategoryController(IDataRepository dataRepository, IHttpClientFactory clientFactory, IConfiguration configuration)
        {
            _dataRepository = dataRepository;
            _clientFactory = clientFactory;
            _auth0UserInfo = $"{configuration["Auth0:Authority"]}userinfo";
        }

        [HttpGet]
        public IEnumerable<CategoryGetResponse> GetAllCategories()
        {
            var results = _dataRepository.GetAllCategories();
            return results;
        }
    }
}
