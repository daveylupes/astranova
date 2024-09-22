import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, CircularProgress } from '@mui/material';
import { fetchStrategies, fetchStrategyDetails, fetchCost, fetchMaxLeverage, fetchTradePair, fetchPerformance } from '../services/Api';

function StrategyCard({ strategy }) {
  const [cost, setCost] = useState(null);
  const [maxLeverage, setMaxLeverage] = useState(null);
  const [tradePair, setTradePair] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [costData, leverageData, tradePairData] = await Promise.all([
          fetchCost(strategy.id),
          fetchMaxLeverage(strategy.id),
          fetchTradePair(strategy.id)
        ]);
        setCost(costData);
        setMaxLeverage(leverageData);
        setTradePair(tradePairData);
      } catch (error) {
        console.error('Error fetching strategy details:', error);
      } finally {
        setLoading(false);
      }
    };

    if (strategy) {
      fetchData();
    }
  }, [strategy]);

  if (loading) return <CircularProgress />;

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {strategy.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Category: {strategy.category || 'Unknown'}
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
