// src/components/Navbar.js

import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          <Typography variant="h6">
            <img src="path/to/your/logo.png" alt="Astro Nova Logo" style={{ height: '40px', marginRight: '10px' }} />
            Astro Nova
          </Typography>
        </Link>
        {/* Other navbar items can go here */}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
