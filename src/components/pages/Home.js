// src/components/Home.js

import React, { useEffect, useState } from 'react';
import { Typography, Button, CircularProgress, Box } from '@mui/material';
import StrategyCard from '../StrategyCard';
import PriceCard from '../PriceCard';
import BacktestCard from '../BacktestCard';
import { fetchStrategies, fetchStrategyDetails, fetchCost, fetchMaxLeverage, fetchTradePair, fetchPerformance } from '../../services/Api';

function Home() {
  const [strategies, setStrategies] = useState([]);
  const [selectedStrategy, setSelectedStrategy] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadStrategies = async () => {
      setLoading(true);
      try {
        const data = await fetchStrategies();
        setStrategies(data);
      } catch (error) {
        console.error('Error fetching strategies:', error);
      } finally {
        setLoading(false);
      }
    };

    loadStrategies();
  }, []);

  const handleStrategySelect = async (strategyId) => {
    setLoading(true);
    try {
      const data = await fetchStrategyDetails(strategyId);
      const cost = await fetchCost(strategyId);
      const maxLeverage = await fetchMaxLeverage(strategyId);
      const tradePair = await fetchTradePair(strategyId);
      const performance = await fetchPerformance(strategyId);

      // Combine all data into a single object
      const combinedData = {
        ...data,
        cost,
        maxLeverage,
        tradePair,
        performance,
      };

      setSelectedStrategy(combinedData);
    } catch (error) {
      console.error('Error fetching strategy details:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <CircularProgress />;

  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Astro Nova Dashboard
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {strategies.length > 0 ? (
          strategies.map(strategy => (
            <Box key={strategy.publicId} sx={{ m: 2 }}>
              <Button
                variant="contained"
                onClick={() => handleStrategySelect(strategy.publicId)}
                style={{ width: '100%' }}
              >
                {strategy.name}
              </Button>
            </Box>
          ))
        ) : (
          <Typography>No strategies available</Typography>
        )}
      </Box>
      {selectedStrategy && (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Box sx={{ m: 2 }}>
            <StrategyCard strategy={selectedStrategy} />
          </Box>
          <Box sx={{ m: 2 }}>
            <PriceCard prices={selectedStrategy.prices} />
          </Box>
          <Box sx={{ m: 2 }}>
            <BacktestCard backtests={selectedStrategy.strategyBackTests} />
          </Box>
          <Box sx={{ m: 2 }}>
            <Typography variant="h6">Additional Information</Typography>
            <Typography>Cost: {selectedStrategy.cost}</Typography>
            <Typography>Max Leverage: {selectedStrategy.maxLeverage}</Typography>
            <Typography>Trade Pair: {selectedStrategy.tradePair.name}</Typography>
            <Typography>Performance: {JSON.stringify(selectedStrategy.performance)}</Typography>
          </Box>
        </Box>
      )}
    </div>
  );
}

export default Home;