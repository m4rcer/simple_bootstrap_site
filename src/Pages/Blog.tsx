import React from 'react';
import Cards from '../Components/Cards';
import Posts from '../Components/Posts';
export interface IBlogProps {};

const Blog: React.FunctionComponent<IBlogProps> = props => {
    return (
        <>
        <br/>
        <br/>
        <br/>
        <Cards/>
        <Posts/>
        </>
    );
}
export default Blog;