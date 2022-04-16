import React from "react";
import { Button, Form } from "react-bootstrap";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="mt-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-6 mx-auto form-container">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <div className="text-center">
                <Button className="w-100  ">Login</Button>
              </div>
            </Form>
            <p className="fs-6 mt-4 text-center">
              You have Already Account? <Link to="/login">Login</Link>
            </p>
            <div className="d-flex align-items-center mt-4">
              <div
                style={{ height: "1px", border: "1px solid #cccccc" }}
                className="w-50"
              ></div>
              <p className="mt-2 mx-1">or</p>
              <div
                style={{ height: "1px", border: "1px solid #cccccc" }}
                className="w-50"
              ></div>
            </div>
            <div className="text-center">
              <FaFacebook className="icon text-primary mx-2"></FaFacebook>
              <FaGoogle className="icon google-Icon"></FaGoogle>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
