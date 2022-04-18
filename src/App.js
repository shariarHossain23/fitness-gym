import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/Allhomesection/About/About";
import Blogs from "./Pages/Allhomesection/Blogs/Blogs";
import Checkout from "./Pages/Allhomesection/Checkout/Checkout";
import ServiceDetail from "./Pages/Allhomesection/ServiceDetails/ServiceDetail";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import RequireAuth from "./Pages/RequireAuth/RequireAuth";
import Fotter from "./Pages/Shared/Fotter/Fotter";
import Header from "./Pages/Shared/Header/Header";
import Notfound from "./Pages/Shared/Notfound/Notfound";
import Signup from "./Pages/Signup/Signup";

export const serviceDataContext = React.createContext();

function App() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <Toaster></Toaster>
      <serviceDataContext.Provider value={[services, setServices]}>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route
            path="/servicedetail/:id"
            element={<ServiceDetail></ServiceDetail>}
          ></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route
            path="/checkout"
            element={
              <RequireAuth>
                <Checkout></Checkout>
              </RequireAuth>
            }
          ></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="*" element={<Notfound></Notfound>}></Route>
        </Routes>
        <Fotter></Fotter>
      </serviceDataContext.Provider>
    </div>
  );
}

export default App;
