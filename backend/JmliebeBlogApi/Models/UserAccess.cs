using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JmliebeBlogApi.Models
{
    public class UserAccess
    {
        public int Admin { get; set; }
        public int Editor { get; set; }
        public int Contributor { get; set; }
        public int Guest { get; set; }
    }
}
