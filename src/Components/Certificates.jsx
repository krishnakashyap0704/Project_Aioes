import React from 'react';
import './Style/Certificates.css';
import certificate1 from './Images/Certificates/Certificate1.jpg';
import certificate2 from './Images/Certificates/Certificate2.jpg';
import certificate3 from './Images/Certificates/Certificate3.jpg';

export function Certificates () {
  return (
    <div className="certificates-page">
      <h1>Our Certificates</h1>
      <div className="certificate-gallery">
        <img src={certificate1} alt="Certificate 1" className="certificate-thumbnail" />
        <img src={certificate2} alt="Certificate 2" className="certificate-thumbnail" />
        <img src={certificate3} alt="Certificate 2" className="certificate-thumbnail" />
      </div>
    </div>
  );
};

