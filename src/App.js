import React from 'react';
import { BrowserRouter as Router, Route, Routes , Navigate } from 'react-router-dom';
import Home from './pages/home/home'; 
import AdminLogin from './pages/adminLogin/adminLogin'; 

import './App.css';
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home/*" element={<Home />} />
        <Route path="/admin-login" element={<AdminLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
