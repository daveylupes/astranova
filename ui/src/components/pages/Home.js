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
      const [data, cost, maxLeverage, tradePair, performance] = await Promise.all([
        fetchStrategyDetails(strategyId),
        fetchCost(strategyId),
        fetchMaxLeverage(strategyId),
        fetchTradePair(strategyId),
        fetchPerformance(strategyId)
      ]);
  
      const combinedData = {
        ...data,
        cost,
        maxLeverage,
        tradePair,
        performance
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
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to Astro Nova
      </Typography>
      <Typography variant="body1" paragraph>
        At Astro Nova, we empower cryptocurrency enthusiasts with innovative trading strategies and actionable insights. Our platform enables you to navigate the dynamic world of digital assets with confidence.
      </Typography>

      <Typography variant="h5" component="h2" gutterBottom>
        Why Choose Astro Nova?
      </Typography>
      <Typography variant="body1" paragraph>
        - <strong>User-Friendly Interface:</strong> An intuitive design that makes trading accessible for both beginners and experts.
      </Typography>
      <Typography variant="body1" paragraph>
        - <strong>Diverse Trading Strategies:</strong> A wide array of strategies tailored to various market conditions, maximizing your trading potential.
      </Typography>
      <Typography variant="body1" paragraph>
        - <strong>Real-Time Performance Analytics:</strong> Track your strategies with live data to make informed adjustments on the fly.
      </Typography>

      <Typography variant="h5" component="h2" gutterBottom>
        Explore Our Latest Trading Strategies
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', mb: 4 }}>
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
          <Typography>No strategies available at this time.</Typography>
        )}
      </Box>

      {selectedStrategy && (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', mt: 4 }}>
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
            <Typography><strong>Cost:</strong> {selectedStrategy.cost ? selectedStrategy.cost : 'N/A'}</Typography>
            <Typography><strong>Max Leverage:</strong> {selectedStrategy.maxLeverage ? selectedStrategy.maxLeverage : 'N/A'}</Typography>
            <Typography><strong>Trade Pair:</strong> {selectedStrategy.tradePair ? selectedStrategy.tradePair.name : 'N/A'}</Typography>
            <Typography><strong>Performance:</strong> {selectedStrategy.performance ? JSON.stringify(selectedStrategy.performance) : 'N/A'}</Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default Home;
