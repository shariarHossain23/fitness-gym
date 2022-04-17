import React from "react";
import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./service.css";

const Service = ({ serviceItem }) => {
  const { id,name, price, picture, description } = serviceItem;
  const navigate = useNavigate()
  return (
    <Col  md={4} className="gx-5 mt-4 card-item">
      <div>
        <img
          className="mx-auto"
          width={350}
          height={300}
          src={picture}
          alt=""
        />
      </div>
      <div className="text-center mt-4">
        <h2>{name}</h2>
        <p className="fs-5 fw-bold">{price}</p>
        <p className="text-muted fs-5">
          <small>{description}</small>
        </p>
        <button onClick={() => navigate(`/checkout/${id}`)} className="service-btn">Checkout</button>
      </div>
    </Col>
  );
};

export default Service;
