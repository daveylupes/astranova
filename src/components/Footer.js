// src/components/Footer.js

import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#CFFE7F', padding: '16px 0', marginTop: 'auto' }}>
      <Container>
        <Typography variant="body1" align="center" color="#34495e">
          © {new Date().getFullYear()} Astro Nova. All rights reserved.
        </Typography>
        <Typography variant="body2" align="center" color="#34495e">
          Follow us on social media: 
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a>, 
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
