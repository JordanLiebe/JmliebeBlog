import React from 'react';

export interface EntryGetResponse {
  id: string;
  subject: string;
  content: string;
  comments: CommentGetResponse[];
  created: Date;
  author: string;
}

export interface CommentGetResponse {
  id: string;
  entryId: string;
  content: string;
  created: Date;
  author: string;
}
