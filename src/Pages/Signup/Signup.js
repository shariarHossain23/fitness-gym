import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGoogle,
  useUpdateProfile
} from "react-firebase-hooks/auth";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../firebase.init";

const Signup = () => {
  const [user, loading, error] = useAuthState(auth);
  
  // google
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  //   facebook
  const [signInWithFacebook, fbuser, fbloading, fberror] = useSignInWithFacebook(auth);
    // create email and password
    
  const [createUserWithEmailAndPassword, emailuser, emailloading, emailerror] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [displayName, setDisplayName] = useState('');
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);


  const [toggle, setToggle] = useState(false);

  // email and password create
  
  const [userInfo, setUserinfo] = useState({
    email: "",
    password: "",
    confirmPass: "",
  });
  const [inputError, setInputError] = useState({
    email: "",
    password: "",
    confirmPass: "",
    otherError:''
  });

  const handleName = (e) => {
    setDisplayName(e.target.value)
  };
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
    const validPassword = /.{6,}/.test(e.target.value);
    if (validPassword) {
      setUserinfo({ ...userInfo, password: e.target.value });
      setInputError({ ...inputError, password: "" });
    } else {
      setInputError({
        ...inputError,
        password: "password minimum 6 character",
      });
    }
  };
  const handleConfirmPass = (e) => {
    const password = userInfo.password;
    if (password === e.target.value) {
      setUserinfo({ ...userInfo, confirmPass: e.target.value });
      setInputError({ ...inputError, confirmPass: "" });
    } else {
      setInputError({ ...inputError, confirmPass: "don't match password" });
    }
  };
  const handleSignup = async (e) => {
    e.preventDefault();
    if(userInfo.confirmPass){
      await createUserWithEmailAndPassword(userInfo.email,userInfo.password)
    }
    await updateProfile({ displayName});
  };
  useEffect(()=>{
    if(emailerror){
      switch(emailerror?.code){
        case"auth/email-already-in-use":
        setInputError({...inputError,otherError:"Email already use"})
        break;
      }
    }
  },[emailerror])
  
  // redirect
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";
  useEffect(()=>{
    if (user) {
      navigate(from, { replace: true });
      toast.success("login successful");
    }
  },[user])
  return (
    <div className="mt-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-6 mx-auto form-container">
            <h1 className="text-center">Signup</h1>
            <Form onClick={handleSignup}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  onChange={handleName}
                  type="text"
                  placeholder="Enter Name"
                />
              </Form.Group>
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
                <Form.Text className="text-danger">
                  {inputError.password}
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  onChange={handleConfirmPass}
                  type="password"
                  placeholder="Confirm Password"
                />
                <Form.Text className="text-danger">
                  {inputError.confirmPass}
                </Form.Text>
              </Form.Group>
              <div className="text-center">
                <Button className="w-100  " disabled={!toggle}>
                  Signup
                </Button>
              </div>
              <Form.Text className="text-danger">
                  {inputError.otherError}
                </Form.Text>
            </Form>
            <ToastContainer></ToastContainer>
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
              <FaFacebook onClick={()=> signInWithFacebook()} className="icon text-primary mx-2"></FaFacebook>
              <FaGoogle
                onClick={() => signInWithGoogle()}
                className="icon google-Icon"
              ></FaGoogle>
            </div>
          </div>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default Signup;
