// src/components/BacktestCard.js

import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function BacktestCard({ backtests }) {
  if (!backtests || backtests.length === 0) return null;

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Backtest Results
        </Typography>
        {backtests.map((backtest, index) => (
          <Typography key={index} variant="body2" color="text.secondary">
            Date: {backtest.date}, Result: {backtest.result}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
}

export default BacktestCard;
