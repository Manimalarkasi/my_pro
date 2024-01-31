import React from 'react'
import Navbar from './Navbarweb'
import { Switch } from '@mui/material';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from '../Webpage/Login';
import Home from '../Webpage/Home'
import Home2 from '../Webpage/Home2';
import Contactweb from './Contactweb';
import Aboutweb from './Aboutweb';
import Cortoon from './Cortoon'
import Registerweb from './Register';
import './Websitesty.css'
import Singupweb from './Signupweb';

function Websitecall() {
  return (
    <div>
     
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"/>
        <Route path='/login' element={<Login />}  />
          <Route path='/Home/:userName' element={<Home />} />
          <Route path='/navbar' element={<Navbar/>} />
          <Route path='/Singup/' element={<Singupweb />} />
          <Route path='/register/' element={<Registerweb />} />
          <Route path="/aboutweb" element={<Aboutweb />} />
          <Route path="/contactweb" element={<Contactweb />} />
          <Route path="/corttoon" element={<Cortoon />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        {/* </Route> */}
       
      </Routes>
    </BrowserRouter>
      {/* <Navbar /> */}
    </div>
  )
}

export default Websitecall
