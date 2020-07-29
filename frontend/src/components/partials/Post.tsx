import React, { FC } from 'react';
import { EntryGetResponse } from '../functional/api-interfaces';
import { CommentList } from '../partials/CommentList';
import Comment from '../forms/Comment';
import { useAuth0 } from '@auth0/auth0-react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

interface PostProps {
  post: EntryGetResponse;
}

export const Post: FC<PostProps> = ({ post }) => {
  const { isAuthenticated } = useAuth0();
  return (
    <div
      css={css`
        margin: 20px;
        padding: 15px;
        border-top: 3px lightsalmon solid;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 5px 0px;
      `}
    >
      <h3>{post.subject}</h3>
      <p>{post.content}</p>
      <span>
        Posted By: <u>{post.author}</u>
        <span> at </span> {post.created.toLocaleTimeString()} on{' '}
        {post.created.toLocaleDateString()}
      </span>
      {isAuthenticated && <Comment />}
      {post.comments.length > 0 && post.comments[0] !== null && (
        <CommentList comments={post.comments} />
      )}
    </div>
  );
};

export default Post;
