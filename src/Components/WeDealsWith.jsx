import React, { useState } from 'react';
import './Style/WeDealsWith.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import logo1 from './Images/WeDealsWith/WeDealsWith1.png';
import logo2 from './Images/WeDealsWith/WeDealsWith2.png';
import logo3 from './Images/WeDealsWith/WeDealsWith3.png';
import logo4 from './Images/WeDealsWith/WeDealsWith4.png';
import logo5 from './Images/WeDealsWith/WeDealsWith5.png';
import logo6 from './Images/WeDealsWith/WeDealsWith6.png';
import logo7 from './Images/WeDealsWith/WeDealsWith7.png';
import logo8 from './Images/WeDealsWith/WeDealsWith8.png';
import logo9 from './Images/WeDealsWith/WeDealsWith9.png';
import logo10 from './Images/WeDealsWith/WeDealsWith10.png';
import logo11 from './Images/WeDealsWith/WeDealsWith11.png';
import logo12 from './Images/WeDealsWith/WeDealsWith12.png';
import logo13 from './Images/WeDealsWith/WeDealsWith13.png';
import logo14 from './Images/WeDealsWith/WeDealsWith14.png';
import logo15 from './Images/WeDealsWith/WeDealsWith15.png';
import logo16 from './Images/WeDealsWith/WeDealsWith16.png';
import logo17 from './Images/WeDealsWith/WeDealsWith17.png';
import logo18 from './Images/WeDealsWith/WeDealsWith18.png';
import logo19 from './Images/WeDealsWith/WeDealsWith19.png';
import logo20 from './Images/WeDealsWith/WeDealsWith20.png';
import logo21 from './Images/WeDealsWith/WeDealsWith21.png';
import logo22 from './Images/WeDealsWith/WeDealsWith22.png';
import logo23 from './Images/WeDealsWith/WeDealsWith23.png';
import logo24 from './Images/WeDealsWith/WeDealsWith24.png';

const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11,
    logo12,
    logo13,
    logo14,
    logo15,
    logo16,
    logo17,
    logo18,
    logo19,
    logo20,
    logo21,
    logo22,
    logo23,
    logo24
]; // Replace with your logo image paths

export function WeDealsWith () {
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleLogos = 10;

    const handleNext = () => {
        if (currentIndex < logos.length - visibleLogos) {
            setCurrentIndex(currentIndex + 2);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 2);
        }
    };
    return (
        <>
        <h2 className="text-center font-weight-bold mb-1 mt-4 pagetitle">Experts in Safety Solutions</h2>
        <div className="we-deals-with">
            <button className="nav-button" onClick={handlePrev}>
                <i className="fas fa-arrow-left"></i>
            </button>
            <div className="carousel2">
                <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * (100 / visibleLogos)}%)` }}>
                    {logos.map((logo, index) => (
                        <div className="card2" key={index}>
                            <img src={logo} alt={`Company Logo ${index}`} className="logo" />
                        </div>
                    ))}
                </div>
            </div>
            <button className="nav-button" onClick={handleNext}>
                <i className="fas fa-arrow-right"></i>
            </button>
        </div>
        </>
    );
};

