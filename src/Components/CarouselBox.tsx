import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import forestImg from '../Assets/forest.jpg';
import starsImg from '../Assets/stars.jpg';
import skyImg from '../Assets/sky.jpg';

export interface ICarouselBoxProps {};

const CarouselBox: React.FunctionComponent<ICarouselBoxProps> = props => {
    return (
        <>
        <Carousel>
            <Carousel.Item>
                <img 
                    className='d-block w-100'
                    height={630}
                    src={ forestImg }  
                    alt='forest'              
                />
                <Carousel.Caption>
                    <h3>Forest image</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet bibendum enim facilisis gravida neque convallis.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    className='d-block w-100'
                    height={630}
                    src={ starsImg }  
                    alt='stars'              
                />
                <Carousel.Caption>
                    <h3>Stars image</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet bibendum enim facilisis gravida neque convallis.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    className='d-block w-100'
                    height={630}
                    src={ skyImg }  
                    alt='sky'              
                />
                <Carousel.Caption>
                    <h3>Sky image</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet bibendum enim facilisis gravida neque convallis.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </>
    );
}
export default CarouselBox;