import React, { FC } from 'react';
import { EntryGetResponse } from '../functional/api-interfaces';
import { Post } from '../partials/Post';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

interface PostListProps {
  posts: EntryGetResponse[] | null;
}

export const PostList: FC<PostListProps> = ({ posts }) => (
  <div
    css={css`
      padding-bottom: 5px;
    `}
  >
    {posts && posts.map((post) => <Post key={post.id} post={post} />)}
  </div>
);

export default PostList;
