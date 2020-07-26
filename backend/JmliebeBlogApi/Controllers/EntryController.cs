using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;
using JmliebeBlogApi.Data;
using JmliebeBlogApi.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JmliebeBlogApi.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class EntryController : ControllerBase
    {
        private readonly IDataRepository _dataRepository;

        public EntryController(IDataRepository dataRepository)
        {
            _dataRepository = dataRepository;
        }

        [HttpGet]
        public IEnumerable<EntryGetResponse> GetAllEntries()
        {
            var results = _dataRepository.GetAllEntries_WithComments();
            return results;
        }

        [HttpPost]
        [Authorize]
        public EntryGetResponse PostNewEntry(EntryPostRequest request)
        {
            var results = _dataRepository.PostNewEntry(request);
            return results;
        }

        [HttpPost("comment")]
        [Authorize]
        public CommentGetResponse PostNewComment(CommentPostRequest request)
        {
            var results = _dataRepository.PostNewComment(request);
            return results;
        }
    }
}
