import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import useData from "../../../Customhook/useData";
import auth from "../../../firebase.init";

const ServiceDetail = () => {
  // const {id} = useParams()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAdress] = useState("");
  const [updateProfile, updating, error] = useUpdateProfile(auth);
  const [services,setServices] = useData()
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleNumber = (e) => {
    setNumber(e.target.value);
  };
  const handleAddress = (e) => {
    setAdress(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (name && email && number && address) {
      updateProfile({ name, email, number, address });
      toast.success("your booking successful");
    } else {
      toast("plz fill the form");
    }
  };

  return (
    <div>
      <div className="mt-5">
        <ToastContainer />
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-6 form-container">
              <h1 className="text-center">Please fill the form</h1>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    onChange={handleName}
                    type="text"
                    placeholder="Enter Name"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    onChange={handleEmail}
                    type="email"
                    placeholder="Enter email"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Phone number</Form.Label>
                  <Form.Control
                    onChange={handleNumber}
                    type="number"
                    placeholder="Enter your number"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    onChange={handleAddress}
                    type="text"
                    placeholder="address"
                  />
                </Form.Group>
                <div className="text-center">
                  <Button onClick={handleForm} className="w-100">
                    Booking now
                  </Button>
                </div>
              </Form>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
