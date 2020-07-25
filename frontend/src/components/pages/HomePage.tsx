import React, { FC, useEffect, useState } from 'react';
import { PostList } from '../partials/PostList';
import { EntryGetResponse } from '../functional/api-interfaces';
import { getPosts } from '../functional/api-client';
import { ContentWithRightSidebar } from '../divisions/ContentWithRightSidebar';
import Sidebar from '../sections/Sidebar';
import { RouteComponentProps } from 'react-router-dom';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

export const HomePage: FC<RouteComponentProps> = ({ history, location }) => {
  const [posts, setPosts] = useState<EntryGetResponse[] | null>(null);
  useEffect(() => {
    const doGetPosts = async () => {
      const allPosts = await getPosts();
      setPosts(allPosts);
    };
    doGetPosts();
  }, []);
  return (
    <ContentWithRightSidebar
      content={<PostList posts={posts} />}
      sidebar={<Sidebar />}
    />
  );
};

export default HomePage;
