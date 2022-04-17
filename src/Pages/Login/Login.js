import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGoogle
} from "react-firebase-hooks/auth";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../firebase.init";
import "./Login.css";

const Login = () => {
  const [user, loading, error] = useAuthState(auth);
  // google
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  // facebook
  const [signInWithFacebook, fbuser, fbloading, fberror] = useSignInWithFacebook(auth);
  // reset
  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);

  // email and password
  const [signInWithEmailAndPassword, userEmail, loadingEmail, errorEmail] =
    useSignInWithEmailAndPassword(auth);
  // login
  const [userInfo, setUserinfo] = useState({
    email: "",
    password: "",
    confirmPass: "",
  });
  const [inputError, setInputError] = useState({
    email: "",
    password: "",
    confirmPass: "",
    otherError: "",
  });

  const handleEmail = (e) => {
    const validEmail = /.+@[^@]+\.[^@]{2,}$/.test(e.target.value);
    if (validEmail) {
      setUserinfo({ ...userInfo, email: e.target.value });
      setInputError({ ...inputError, email: "" });
    } else {
      setInputError({ ...inputError, email: "invalid email" });
    }
  };

  const handlePassword = (e) => {
    setUserinfo({ ...userInfo, password: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(userInfo.email, userInfo.password);

    // error handleing
  };
  const handleResetPass = async (e) => {
    if(userInfo.email){
      sendPasswordResetEmail(userInfo.email);
      toast("send email")
    }
    else{
      toast("plz enter email")
    }
  };
  // console.log(resetError?.message);
  useEffect(() => {
    if (errorEmail) {
      switch (errorEmail?.code) {
        case "auth/wrong-password":
          setInputError({ ...inputError, otherError: "wrong password" });
        default:
          break;
      }
    }
  }, [errorEmail]);

  useEffect(() => {
    if (errorEmail) {
      switch (errorEmail?.code) {
        case "auth/user-not-found":
          toast("user not found");
        default:
          break;
      }
    }
  }, [errorEmail]);

  // redirect
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
      toast.success("welcome back");
    }
  }, [user]);

  return (
    <div className="mx-auto mt-5">
      <ToastContainer></ToastContainer>
      <div className="container">
        <div className="row">
          <div
            className="col-sm-6 col-md-6 mx-auto 
          form-container"
          >
            <h1 className="text-center">Login</h1>
            <Form onClick={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  onChange={handleEmail}
                  type="email"
                  placeholder="Enter email"
                />
                <Form.Text className="text-danger">
                  {inputError.email}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={handlePassword}
                  type="password"
                  placeholder="Password"
                />
                <Form.Text className="text-danger mt-4">
                  {inputError.otherError}
                </Form.Text>
              </Form.Group>
              <div className="text-center">
                <Button className="w-100  mt-4">Login</Button>
              </div>
            </Form>
            <div className="text-center mt-3">
              <button
                className="btn btn-link text-center"
                onClick={handleResetPass}
              >
                reset your password
              </button>
            </div>
            <p className="fs-6 mt-4 text-center">
              You are new? <Link to="/signup">Signup</Link>
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
              <FaFacebook onClick={()=>signInWithFacebook()} className="icon text-primary mx-2"></FaFacebook>
              <FaGoogle
                onClick={() => signInWithGoogle()}
                className="icon google-Icon"
              ></FaGoogle>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
