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
  const [loaded, setLoaded] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');
  const [posts, setPosts] = useState<EntryGetResponse[] | null>(null);

  const updatePosts = async () => {
    setLoaded(false);
    const allPosts = await getPosts();
    setPosts(allPosts);
    setLoaded(true);
    console.log('Updating...');
  };

  useEffect(() => {
    updatePosts();
  }, []);
  return (
    <ContentWithRightSidebar
      content={
        <PostList posts={posts} loaded={loaded} updatePosts={updatePosts} />
      }
      sidebar={<Sidebar search={search} setSearch={setSearch} />}
    />
  );
};

export default HomePage;
