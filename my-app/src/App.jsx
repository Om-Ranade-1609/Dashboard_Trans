import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Conversion from './pages/Conversion';
import './App.css';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/conversion" element={<Conversion />} />
        </Routes>
    );
}

export default App;