import React, { FC, useEffect, useState } from 'react';
import { PostList } from '../partials/PostList';
import { EntryGetResponse } from '../functional/api-interfaces';
import { getPosts } from '../functional/api-client';
import { RouteComponentProps } from 'react-router-dom';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

export const SearchPage: FC<RouteComponentProps> = ({ history, location }) => {
  const [posts, setPosts] = useState<EntryGetResponse[] | null>(null);
  useEffect(() => {
    const doGetPosts = async () => {
      const allPosts = await getPosts();
      setPosts(allPosts);
    };
    doGetPosts();
  }, []);
  return (
    <div
      css={css`
        padding-right: 1%;
        padding-left: 1%;
      `}
    >
      {/*<PostList posts={posts} loaded={true} />*/}
    </div>
  );
};

export default SearchPage;
