import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Button from '@mui/material/Button';
import './App.css';

function HomePage() {
  return (
    <header className="App-header">
      <h1>Profile Hub</h1>
        <Link to="/login">
          <Button variant="outlined" color="primary">Login</Button>
        </Link>
        <span style={{marginRight: '10px'}}></span>

        <Link to="/signup">
          <Button variant="outlined" color="primary">Sign Up</Button>
        </Link>
    </header>
  )
}


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
