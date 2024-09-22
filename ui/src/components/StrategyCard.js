// src/components/StrategyCard.js

import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { fetchCost, fetchMaxLeverage, fetchTradePair } from '../services/Api';

function StrategyCard({ strategy }) {
  const [cost, setCost] = useState(null);
  const [maxLeverage, setMaxLeverage] = useState(null);
  const [tradePair, setTradePair] = useState(null);

  useEffect(() => {
    if (strategy) {
      const fetchData = async () => {
        try {
          const costData = await fetchCost(strategy.id);
          const leverageData = await fetchMaxLeverage(strategy.id);
          const tradePairData = await fetchTradePair(strategy.id);

          setCost(costData);
          setMaxLeverage(leverageData);
          setTradePair(tradePairData);
        } catch (error) {
          console.error('Error fetching strategy details:', error);
        }
      };

      fetchData();
    }
  }, [strategy]);

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
          Trade Pair: {tradePair ? tradePair.name : 'Loading...'}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Max Leverage: {maxLeverage ? maxLeverage.value : 'Loading...'}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Cost: {cost ? cost.value : 'Loading...'}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default StrategyCard;
