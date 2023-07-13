import "./App.css";

import { Route, Routes, useNavigate } from "react-router-dom";

import Home from "./components/Home";
import React from "react";
import Valor from "./Valor";
import logo from "./logo.svg";
import Homepage from "./react/Homepage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Valor />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/react" element={<Homepage />} />

      </Routes>
    </div>
  );
}

export default App;
