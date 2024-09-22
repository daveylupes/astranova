// src/components/PriceCard.js

import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function PriceCard({ prices }) {
  if (!prices || prices.length === 0) return <Typography>No price information available</Typography>;

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Price Information
        </Typography>
        {prices.map((price, index) => (
          <Typography key={index} variant="body2" color="text.secondary">
            {price.date}: {price.value}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
}

export default PriceCard;
