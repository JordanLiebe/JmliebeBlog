using JmliebeBlogApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JmliebeBlogApi.Data
{
    public interface IDataRepository
    {
        IEnumerable<EntryGetResponse> GetAllEntries_WithComments();

        EntryGetResponse PostNewEntry(EntryPostRequest request);

        CommentGetResponse PostNewComment(CommentPostRequest request);
    }
}
