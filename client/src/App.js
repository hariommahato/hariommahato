import React from "react";
import About from "./Pages/About/About";
import Header from "./components/Header";
import Home from "./Pages/Home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import Project from "./Pages/Project/Project";
import Contact from "./Pages/Contact/Contact";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
