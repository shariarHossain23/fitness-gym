import React from "react";
import { Button, Form } from "react-bootstrap";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from "../../firebase.init";
import "./Login.css";


const Login = () => {
  const [user, loading, error] = useAuthState(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    let navigate = useNavigate();
    let location = useLocation();

  let from = location.state?.from?.pathname || "/";
  if(user){
    navigate(from, { replace: true });
    toast("welcome back")
  }

  return (
    <div className="mx-auto mt-5">
        <ToastContainer></ToastContainer>
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
              <div className="text-center">
                <Button className="w-100  mt-4">Login</Button>
              </div>
            </Form>
            <p className="fs-6 mt-4 text-center">You are new? <Link to='/signup'>Signup</Link></p>
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
              <FaGoogle onClick={()=>signInWithGoogle()} className="icon google-Icon"></FaGoogle>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
