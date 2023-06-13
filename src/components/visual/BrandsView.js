import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../../assets/banner1.jpg'
import banner2 from '../../assets/banner2.jpg'
import banner3 from '../../assets/banner3.jpg'

export default function BrandsView(){
    return(
        <div className='bg-red-950 rounded p-10'>
            <div className="text-6xl text-white font-sans font-bold p-1">                    
                Sales & Promotions
            </div>
            <Carousel className='p-5 border-solid w-screen'>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner1}
                    />                 
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner2}
                    />            
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner3}
                    />                 
                </Carousel.Item>
            </Carousel>
        </div>
    );
}