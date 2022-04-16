import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ServiceDetail from './Pages/Allhomesection/ServiceDetails/ServiceDetail';
import Home from './Pages/Home/Home';
import Fotter from './Pages/Shared/Fotter/Fotter';
import Header from './Pages/Shared/Header/Header';
import Notfound from './Pages/Shared/Notfound/Notfound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path="/servicedetail/:id" element={<ServiceDetail></ServiceDetail>}></Route>
      <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
      <Fotter></Fotter>
    </div>
  );
}

export default App;
