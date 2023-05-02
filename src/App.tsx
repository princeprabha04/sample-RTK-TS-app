import './App.css';

import { Route, Routes, useNavigate } from 'react-router-dom';

import Home from './components/Home';
import React from 'react';
import Valor from './Valor';
import logo from './logo.svg';

function App() {

  return (
    <div className="App">
      
      <Routes>
      <Route path='/' element={<Valor/>}/>
        <Route path='/home' element={<Home/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
