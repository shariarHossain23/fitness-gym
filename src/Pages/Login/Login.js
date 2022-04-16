import React from "react";
import { Button, Form } from "react-bootstrap";
import "./Login.css";

const Login = () => {
  return (
    <div className="mx-auto mt-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-6 mx-auto form-container">
            <Form>
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
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button>Login</Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
