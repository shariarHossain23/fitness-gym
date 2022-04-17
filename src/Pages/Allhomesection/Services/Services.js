import React from "react";
import { Container, Row } from "react-bootstrap";
import useData from "../../../Customhook/useData";
import Service from "../Service/Service";

const Services = () => {
  const [services] = useData();
  return (
    <div id="services">
      <Container>
          <h1 className="text-center mt-5">Services</h1>
        <Row>
        {services.map((serviceItem) => (
            <Service key={serviceItem.id} serviceItem={serviceItem}></Service>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
