import React from "react";
import {Link, Route, Routes, useNavigate} from 'react-router-dom';
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import "./styles/login.css";
import "./styles/signup.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
