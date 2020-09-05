import React, { FC, useEffect, useState } from 'react';
import { PostList } from '../partials/PostList';
import {
  EntryGetResponse,
  CategoryGetResponse,
} from '../functional/api-interfaces';
import { getPostsFromCategory } from '../functional/api-client';
import { ContentWithRightSidebar } from '../divisions/ContentWithRightSidebar';
import Sidebar from '../sections/Sidebar';
import { RouteComponentProps, useParams } from 'react-router-dom';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

export const CategoryPage: FC<RouteComponentProps> = ({
  history,
  location,
  match,
}) => {
  const { category } = useParams();

  const [loaded, setLoaded] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');
  const [posts, setPosts] = useState<EntryGetResponse[] | null>(null);

  const updatePosts = async () => {
    setLoaded(false);
    const allPosts = await getPostsFromCategory(category);
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
      sidebar={
        <Sidebar
          search={search}
          setSearch={setSearch}
          history={history}
          location={location}
          match={match}
        />
      }
    />
  );
};

export default CategoryPage;
