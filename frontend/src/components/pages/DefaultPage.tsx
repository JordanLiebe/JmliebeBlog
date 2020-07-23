import React, { FC } from 'react';

interface HomePageProps {
    Test?: string;
}

export const HomePage: FC<HomePageProps> = ({Test}) => {
    return (
        <div>
            Hello World!
        </div>
    )
}

export default HomePage;