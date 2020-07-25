import React, { FC } from 'react';
import { EntryGetResponse } from '../functional/api-interfaces';
import { Post } from '../partials/Post';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

interface PostListProps {
  posts: EntryGetResponse[] | null;
  loaded?: boolean;
}

export const PostList: FC<PostListProps> = ({ posts, loaded = true }) => {
  return (
    <div
      css={css`
        padding-bottom: 5px;
      `}
    >
      {loaded ? (
        posts && posts.map((post) => <Post key={post.id} post={post} />)
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
