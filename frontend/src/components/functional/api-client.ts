import { EntryGetResponse } from './api-interfaces';
import { CommentPost } from '../forms/CommentForm';
import { EntryObj } from '../forms/PostForm';

export const getPosts = async (): Promise<EntryGetResponse[]> => {
  let posts: EntryGetResponse[] = [];
  await fetch('https://api.jmliebe.com/blog/Entry')
    .then((res) => res.json())
    .then((body) => {
      posts = body;
    })
    .catch((err) => {
      console.error(err);
    });
  return posts.map((post) => ({
    ...post,
    created: new Date(post.created),
    comments:
      post.comments.length > 0 && post.comments[0] !== null
        ? post.comments.map((comment) => ({
            ...comment,
            created: new Date(comment.created),
          }))
        : [],
  }));
};

export const postComment = async (body: CommentPost, accessToken: string) => {
  const request = new Request('https://api.jmliebe.com/blog/Entry/comment', {
    method: 'post',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(body),
  });
  request.headers.set('authorization', `bearer ${accessToken}`);

  let response = await fetch(request).catch((error) => {
    console.log(error);
  });

  console.log(response);
};

export const postEntry = async (body: EntryObj, accessToken: string) => {
  const request = new Request('https://api.jmliebe.com/blog/Entry', {
    method: 'post',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(body),
  });
  request.headers.set('authorization', `bearer ${accessToken}`);

  let response = await fetch(request).catch((error) => {
    console.log(error);
  });
};
