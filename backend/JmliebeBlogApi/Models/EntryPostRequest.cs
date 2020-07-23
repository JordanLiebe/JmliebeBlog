using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JmliebeBlogApi.Models
{
    public class EntryPostRequest
    {
        public string Subject { get; set; }
        public string Content { get; set; }
        public string Author { get; set; }
    }
}
