import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/Allhomesection/About/About";
import Blogs from "./Pages/Allhomesection/Blogs/Blogs";
import Ourservice from "./Pages/Allhomesection/Ourservice/Ourservice";
import ServiceDetail from "./Pages/Allhomesection/ServiceDetails/ServiceDetail";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import RequireAuth from "./Pages/RequireAuth/RequireAuth";
import Fotter from "./Pages/Shared/Fotter/Fotter";
import Header from "./Pages/Shared/Header/Header";
import Notfound from "./Pages/Shared/Notfound/Notfound";
import Signup from "./Pages/Signup/Signup";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/servicedetail/:id"
          element={
            <RequireAuth>
              <ServiceDetail></ServiceDetail>
            </RequireAuth>
          }
        ></Route>
        <Route path="/services" element={<Ourservice></Ourservice>}></Route>
        <Route path="/about"element={<About></About>}></Route>
        <Route path="/blogs"element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
      <Fotter></Fotter>
    </div>
  );
}

export default App;
