import React from 'react';
import  { useSearchParams } from 'react-router-dom';

const Home = () => {
    const [SearchParams, setSerchParams] = useSearchParams();
    console.log(SearchParams.get("sort"));
    console.log(SearchParams.get("sort"));
    return (
        <div>
            Home Page
        </div>
    );
};

export default Home;