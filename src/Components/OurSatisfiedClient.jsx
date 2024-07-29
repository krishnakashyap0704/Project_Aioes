import React from 'react';
import './Style/OurSatisfiedClient.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Client1 from './Images/OurSatisfiedClient/Client1.png';
import Client2 from './Images/OurSatisfiedClient/Client2.png';
import Client3 from './Images/OurSatisfiedClient/Client3.png';
import Client4 from './Images/OurSatisfiedClient/Client4.png';
import Client5 from './Images/OurSatisfiedClient/Client5.png';
import Client6 from './Images/OurSatisfiedClient/Client6.png';
import Client7 from './Images/OurSatisfiedClient/Client7.png';
import Client8 from './Images/OurSatisfiedClient/Client8.png';
import Client9 from './Images/OurSatisfiedClient/Client9.png';
import Client10 from './Images/OurSatisfiedClient/Client10.png';
import Client11 from './Images/OurSatisfiedClient/Client11.png';
import Client12 from './Images/OurSatisfiedClient/Client12.png';

const logos = [
    Client1,
    Client2,
    Client3,
    Client4,
    Client5,
    Client6,
    Client7,
    Client8,
    Client9,
    Client10,
    Client11,
    Client12
];

export function OurSatisfiedClient() {
    return (
        <>
            <h2 className="text-center font-weight-bold mb-1 mt-4 pagetitle">Trusted by Healthcare Leaders</h2>
            <div className="pyramid-container">
                <div className="pyramid">
                    {logos.map((logo, index) => (
                        <div className={`pyramid-card card-${index + 1}`} key={index}>
                            <img src={logo} alt={`Client Logo ${index}`} className="logo" />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
