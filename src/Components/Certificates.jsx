import React from 'react';
import './Style/Certificates.css';
import certificate1 from './Images/Certificates/Certificate1.jpg';
import certificate2 from './Images/Certificates/Certificate2.jpg';
import certificate3 from './Images/Certificates/Certificate3.jpg';
import { Container } from 'react-bootstrap';

export function Certificates() {
  return (
    <>
      <Container className="bg-light text-center mt-2 p-2 pb-1 rounded">
        <h1 className="display-4 mb-1 font-weight-bold custom-heading">
          ALL IN ONE ENGINEERING SOLUTION
        </h1>
        <p className="lead">
          "At Aioes, we believe that every small step towards innovation and safety makes a giant leap towards a healthier and safer tomorrow for all."
        </p>
      </Container>
      <div className="certificates-page">
        <h1 className="text-center font-weight-bold mb-4 pagetitle">Certificates</h1>
        <div className="certificate-gallery">
          <img src={certificate1} alt="Certificate 1" className="certificate-thumbnail" />
          <img src={certificate2} alt="Certificate 2" className="certificate-thumbnail" />
          <img src={certificate3} alt="Certificate 3" className="certificate-thumbnail" />
        </div>
      </div>
    </>
  );
};

