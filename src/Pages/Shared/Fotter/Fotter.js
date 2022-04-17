import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Fotter.css';

const Fotter = () => {
  const date = new Date()
  const year = date.getFullYear()
  return (
   <div className="fotter">
     <Container fluid className="text-center">
       <Row>
         <Col md={6}>
          <h4>Social Account</h4>
          <div className="mx-4">
          <FaFacebook className="mx-2 fs-4 mt-2"></FaFacebook>
          <FaInstagram className="mx-2 fs-4 mt-2"></FaInstagram>
          <FaLinkedin className="mx-2 fs-4 mt-2"></FaLinkedin>
          <FaTwitter className="mx-2 fs-4 mt-2"></FaTwitter>
          </div>
         </Col>
         <Col md={6} className="mt-3">
           <p>&copy;{year} Fitness gym</p>
         </Col>
       </Row>
     </Container>
   </div>
  );
};

export default Fotter;
