﻿using Dapper;
using JmliebeBlogApi.Models;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace JmliebeBlogApi.Data
{
    public class DataRepository : IDataRepository
    {
        private readonly string _connectionString;

        public DataRepository(IConfiguration configuration)
        {
            _connectionString = configuration["ConnectionStrings:DefaultConnection"];
        }

        public IEnumerable<EntryGetResponse> GetAllEntries_WithComments()
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();

                var questionDictionary =
                    new Dictionary<int, EntryGetResponse>();
                return connection
                    .Query<
                        EntryGetResponse,
                        CommentGetResponse,
                        EntryGetResponse>(
                            "EXEC [Blog].[dbo].[SP_Get_All_Entries]",
                        map: (q, a) =>
                        {
                            EntryGetResponse question;

                            if (!questionDictionary.TryGetValue(q.Id, out question))
                            {
                                question = q;
                                question.Comments =
                                    new List<CommentGetResponse>();
                                questionDictionary.Add(question.Id, question);
                            }
                            question.Comments.Add(a);
                            return question;
                        },
                        splitOn: "Id"
                    )
                    .Distinct()
                    .ToList();
            }
        }

        public EntryGetResponse PostNewEntry(EntryPostRequest request)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();

                return connection.QueryFirst<EntryGetResponse>(
                    @" EXEC [Blog].[dbo].[SP_Create_New_Entry] @Subject = @Subject, @Content = @Content, @Author = @Author",
                    new { Subject = request.Subject, Content = request.Content, Author = request.Author }
                );
            }
        }

        public CommentGetResponse PostNewComment(CommentPostRequest request)
       {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();

                return connection.QueryFirst<CommentGetResponse>(
                    @" EXEC [Blog].[dbo].[SP_Create_New_Comment] @EntryId = @EntryId, @Content = @Content, @Author = @Author",
                    new { EntryId = request.EntryId, Content = request.Content, Author = request.Author }
                );
            }
        }
    }
}
