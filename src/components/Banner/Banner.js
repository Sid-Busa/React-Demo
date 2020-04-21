import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './style.css';

class Banner extends Component{
    render(){
        return (
            <div>
            <Carousel centerMode showThumbs={false}   autoPlay interval={2500} infiniteLoop  className='Banner'>
                <div>
                    <img src="https://in.bmscdn.com/showcaseimage/eventimage/food-trails-of-panjim-10-04-2020-01-47-16-533.jpg" />
                </div>
                <div>
                    <img src="https://in.bmscdn.com/showcaseimage/eventimage/theatre-live-04-04-2020-01-57-49-839.jpg" />
                </div>
                <div>
                    <img src="https://in.bmscdn.com/showcaseimage/eventimage/live-from-hq-comedy-edition-06-04-2020-12-09-38-495.jpg" />
                </div>
             
            </Carousel>
            </div>
        )
    }
}
export default Banner