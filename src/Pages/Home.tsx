import React from 'react';
import CarouselBox from '../Components/CarouselBox';

export interface IHomeProps {};

const Home: React.FunctionComponent<IHomeProps> = props => {
    return (
        <>
            <CarouselBox />
        </>
    );
}
export default Home;