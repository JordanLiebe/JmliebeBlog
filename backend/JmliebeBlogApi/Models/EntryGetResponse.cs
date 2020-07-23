using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JmliebeBlogApi.Models
{
    public class EntryGetResponse
    {
        public int Id { get; set; }
        public string Subject { get; set; }
        public string Content { get; set; }
        public List<CommentGetResponse> Comments { get; set; }
        public DateTime Created { get; set; }
        public string Author { get; set; }
    }
}
