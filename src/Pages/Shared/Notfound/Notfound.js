import React from "react";
import { useNavigate } from "react-router-dom";

const Notfound = () => {
  const navigate = useNavigate();
  return (
    <div style={{marginTop:"150px"}} className=" text-center">
      <h1 className="text-danger text-center">404 Not Found!!!</h1>
      <button onClick={() => navigate("/")} className="btn btn-primary mt-4">
        Go to Homepage
      </button>
    </div>
  );
};

export default Notfound;
