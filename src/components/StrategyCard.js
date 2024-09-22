// src/components/StrategyCard.js

import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function StrategyCard({ strategy }) {
  if (!strategy) return null;

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {strategy.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Category: {strategy.category}
        </Typography>
        <Typography variant="body1">
          {strategy.descriptions && strategy.descriptions.length > 0
            ? strategy.descriptions[0].shortDescription
            : 'No description available'}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Trade Pair: {strategy.strategy.tradePair.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Max Leverage: {strategy.strategy.maxLeverage}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default StrategyCard;
