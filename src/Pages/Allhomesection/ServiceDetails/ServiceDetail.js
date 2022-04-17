import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { serviceDataContext } from "../../../App";

const ServiceDetail = () => {
  const {id} = useParams()
  const [services,setServices] = useContext(serviceDataContext);
  const serviceItem = services.find(service => service.id === id)
  const navigate = useNavigate()
  return (
   <div>
     <Container>
       <Row className="d-flex align-items-center justify-content-center mt-5">
         <Col md={6} className=" px-4 py-5 rounded">
           <h1>{serviceItem?.name}</h1>
           <h4>{serviceItem?.price}</h4>
           <p>{serviceItem?.description}</p>
         </Col>
         <Col md={6}>
           <img className="img-fluid" src={serviceItem?.picture} alt="" />
         </Col>
       </Row>
     </Container>
     <div className="text-center mt-5">
       <button onClick={()=> navigate("/checkout")} className="service-btn text-center">go to checkout</button>
     </div>
   </div>
  );
};

export default ServiceDetail;
