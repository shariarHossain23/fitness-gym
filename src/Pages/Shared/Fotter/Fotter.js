import React from "react";
import { useNavigate } from "react-router-dom";

const Fotter = () => {
  const navigate = useNavigate();
  return (
    <div className="text-center mt-5">
      <h1 className="text-danger text-center">404 Not Found!!!</h1>
      <button onClick={() => navigate("/")} className="btn btn-primary mt-4">
        Go to Homepage
      </button>
    </div>
  );
};

export default Fotter;
