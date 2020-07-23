import React, { FC, useEffect, useState } from 'react';

import { PostList } from '../partials/PostList';
import { EntryGetResponse } from '../functional/api-interfaces';
import { getPosts } from '../functional/api-client';

interface HomePageProps {
  Test?: string;
}

export const HomePage: FC<HomePageProps> = ({ Test }) => {
  const [posts, setPosts] = useState<EntryGetResponse[] | null>(null);
  useEffect(() => {
    const doGetPosts = async () => {
      const allPosts = await getPosts();
      setPosts(allPosts);
    };
    doGetPosts();
  }, []);
  return (
    <div>
      <PostList posts={posts} />
    </div>
  );
};

export default HomePage;
