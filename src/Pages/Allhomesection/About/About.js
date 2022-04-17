import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../../images/sh2_protfolio-removebg-preview.png";
import "./About.css";

const About = () => {
  return (
    <div>
      <Container>
        <Row className="d-flex align-items-center mt-5">
          <Col md={6}>
            {" "}
            <div className="text-center protfolio">
              <img className="text-center img-fluid"  src={logo} alt="" />
            </div>
          </Col>
          <Col md={6}>
              <p>
                  Hi, I am shariar hossain.I am learning web development from complete web development with Jhankar mahabub.Last 4 month i am learning Html,css,bootstrap,tailwind,javascript and still now learning react js.after 3 month later i want to job as a web developer usa base IT company.
                  I know that is so hard but I will try my best and hardworking everyday next 3-4 months for getting the job.then I will focus prithon course cz i want join a tech giant company.but i am non cse background. I realize that cse or non cse dosen't matter for tech giant company job.so I will try my best and expect of Allah.
              </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
