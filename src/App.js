import React from "react";
import {Link, Route, Routes, useNavigate} from 'react-router-dom';
import Login from "./Components/Login";
import "./styles/login.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
