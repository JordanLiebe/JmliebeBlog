import React, { FC, useEffect } from 'react';

interface SearchPageProps {
  Query?: string;
}

export const HomePage: FC<SearchPageProps> = ({ Query }) => {
  useEffect(() => {}, []);
  return <div>Hello World!</div>;
};

export default HomePage;
