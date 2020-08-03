import React, { FC, useState } from 'react';
import { EntryGetResponse } from '../functional/api-interfaces';
import { Post } from '../partials/Post';
import PostForm from '../forms/PostForm';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

interface PostListProps {
  posts: EntryGetResponse[] | null;
  loaded?: boolean;
  updatePosts: () => void;
}

export const PostList: FC<PostListProps> = ({
  posts,
  loaded = true,
  updatePosts,
}) => {
  return (
    <div
      css={css`
        padding-bottom: 5px;
      `}
    >
      <PostForm />
      {loaded ? (
        posts &&
        posts.map((post) => (
          <Post key={post.id} post={post} updatePosts={updatePosts} />
        ))
      ) : (
        <div
          css={css`
            text-align: center;
            padding: 100px;
            font-size: 25px;
          `}
        >
          Loading...
        </div>
      )}
    </div>
  );
};

export default PostList;
