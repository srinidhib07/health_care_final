import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './components/About';
import RegisterForm from './components/Signup';
import LoginForm from './components/LoginForm';
import Index from './components/index';
import Doctors from './components/doctors';
import Service from './components/service';
import Hospitals from './components/hospitals';
import BookApp from './components/bookApp';
import Confirmation from './components/confirmation';
import Diagnostics from './components/diagnostics';
import Login1 from './components/Login';
ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/about" element={<About />} />
      {/* <Route path="/signup" element={<RegisterForm />}></Route> */}
      <Route path="/login" element={<LoginForm />}/>
      <Route path="/" element={<Index />}/>
      <Route path="/home" element={<Index />}/>
      <Route path="/doctors" element={<Doctors />}/>
      <Route path="/service" element={<Service />}/>
      <Route path="/hospitals" element={<Hospitals />}/>
      <Route path="/bookapp" element = {<BookApp />}/>
      <Route path="/success" element = {<Confirmation />}/>
      <Route path="/diag" element = {<Diagnostics />}/>
      <Route path="/signup" element = {<Login1 />}/>
    </Routes>
  </Router>,

  document.getElementById("root")
);
reportWebVitals();
