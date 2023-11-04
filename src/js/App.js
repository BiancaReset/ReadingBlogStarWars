import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../styles/App.css';
import injectContext from './store/context'
import Home from './views/Home';
import Character from './views/Character';
import Navbar from './component/Navbar';
import Vehicle from './views/Vehicle';
import Planet from './views/Planet';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/character/:id" element={<Character />}/>
        <Route path="/vehicle/:id" element={<Vehicle />}/>
        <Route path="/planet/:id" element={<Planet />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default injectContext(App);