import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import carousel1 from "./Images/Carousels/Carousels1.jpg";
import carousel2 from "./Images/Carousels/Carousels1.jpg";
import carousel3 from "./Images/Carousels/Carousels1.jpg";
import carousel4 from "./Images/Carousels/Carousels1.jpg";
import carousel5 from "./Images/Carousels/Carousels1.jpg";


export function MyCarousel() {
    return (
        <div style={{ marginTop: '20px', marginBottom: '40px' }}>
        <Carousel>
        <Carousel.Item>
                <img
                    className="d-block mx-auto" // Center the image
                    style={{height : '500px', width :'1200px'}}
                    src={carousel1}
                    alt="First slide"
                />

            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block mx-auto" // Center the image
                    style={{height : '500px', width :'1200px' }}
                    src={carousel2}
                    alt="Second slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block mx-auto" // Center the image
                    style={{height : '500px', width :'1200px' }}
                    src={carousel3}
                    alt="Third slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block mx-auto" // Center the image
                    style={{height : '500px',width :'1200px' }}
                    src={carousel4}
                    alt="Fourth slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block mx-auto" // Center the image
                    style={{height : '500px',width :'1200px' }}
                    src={carousel5}
                    alt="Fifth slide"
                />

            </Carousel.Item>
        </Carousel>
        </div>
    );
}