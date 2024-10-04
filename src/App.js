import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Change Switch to Routes
import AppNavbar from './components/AppNavbar'; // Import the Navbar
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from './pages/AdminDashboard'; // Include other pages

function App() {
  return (
    <Router>
      <AppNavbar /> {/* Render the Navbar */}
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/" element={<Home />} /> {/* Update route definition */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminDashboard />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
