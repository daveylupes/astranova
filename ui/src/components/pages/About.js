import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import './../../App.css';

function Home() {
  return (
    <Container>
      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to Astro Nova
        </Typography>
        <Typography variant="body1" paragraph>
          Astro Nova is a cutting-edge platform designed to simplify and enhance trading strategies for cryptocurrency enthusiasts. Our mission is to empower traders with the tools and insights they need to make informed decisions in the ever-evolving digital asset landscape.
        </Typography>
      </Box>

      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Key Features
        </Typography>
        <Typography variant="body1" paragraph>
          - <strong>User-Friendly Interface:</strong> Navigate our platform effortlessly with an intuitive design that caters to both novice and experienced traders.
        </Typography>
        <Typography variant="body1" paragraph>
          - <strong>Diverse Trading Strategies:</strong> Explore a variety of strategies tailored for different market conditions, helping you maximize your trading potential.
        </Typography>
        <Typography variant="body1" paragraph>
          - <strong>Real-Time Performance Analytics:</strong> Monitor your strategies with live performance data to make timely adjustments.
        </Typography>
        <Typography variant="body1" paragraph>
          - <strong>Community-Driven Insights:</strong> Join a vibrant community of traders to share insights, tips, and strategies.
        </Typography>
      </Box>

      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Technology Stack
        </Typography>
        <Typography variant="body1" paragraph>
          Astro Nova leverages modern technologies to ensure a seamless user experience. Our stack includes:
        </Typography>
        <Typography variant="body1" paragraph>
          - <strong>Frontend:</strong> Built with React for a dynamic and responsive interface.
        </Typography>
        <Typography variant="body1" paragraph>
          - <strong>Backend:</strong> Powered by FastAPI, providing a robust and scalable API.
        </Typography>
        <Typography variant="body1" paragraph>
          - <strong>Containerization:</strong> Deployed using Docker for easy scaling and management.
        </Typography>
      </Box>

      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Future Plans
        </Typography>
        <Typography variant="body1" paragraph>
          We are continuously improving Astro Nova by adding new features, enhancing user experience, and expanding our strategy offerings. Stay tuned for exciting updates!
        </Typography>
      </Box>

      <Box>
        <Typography variant="h5" component="h2" gutterBottom>
          Join Us
        </Typography>
        <Typography variant="body1" paragraph>
          Ready to elevate your trading experience? Sign up today and explore the world of Astro Nova!
        </Typography>
      </Box>
    </Container>
  );
}

export default Home;
