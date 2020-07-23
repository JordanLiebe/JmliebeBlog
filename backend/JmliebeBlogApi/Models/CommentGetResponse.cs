using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JmliebeBlogApi.Models
{
    public class CommentGetResponse
    {
        public int Id { get; set; }
        public int EntryId { get; set; }
        public string Content { get; set; }
        public DateTime Created { get; set; }
        public string Author { get; set; }
    }
}
