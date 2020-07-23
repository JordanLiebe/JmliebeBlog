using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JmliebeBlogApi.Models
{
    public class CommentPostRequest
    {
        public int EntryId { get; set; }
        public string Content { get; set; }
        public string Author { get; set; }
    }
}
