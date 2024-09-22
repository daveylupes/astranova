import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../assets/AstraNova_logo.jpg'; // Adjusted import path
import './../App.css';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar className="navbar">
      <Button className="navbar-button" component={Link} to="/">
        <img src={Logo} alt="Astro Nova Logo" className="navbar-logo" />
      </Button>
        <Typography variant="h6" component="div" className="navbar-title">
          
        </Typography>
        <Button className="navbar-button" component={Link} to="/">
          Home
        </Button>
        <Button className="navbar-button" component={Link} to="/about">
          About
        </Button>
        {/* Add more buttons for additional routes as needed */}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
