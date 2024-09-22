// src/components/Home.js

import React, { useEffect, useState } from 'react';
import { Typography, Button, CircularProgress } from '@mui/material';
import StrategyCard from '../StrategyCard';
import PriceCard from '../PriceCard';
import BacktestCard from '../BacktestCard';
import { fetchStrategies, fetchStrategyDetails } from '../../services/Api'

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
      setSelectedStrategy(data);
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
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '16px' }}>
        {strategies.length > 0 ? (
          strategies.map(strategy => (
            <Button
              key={strategy.publicId}
              variant="contained"
              onClick={() => handleStrategySelect(strategy.publicId)}
              style={{ flex: '1 1 calc(50% - 16px)', minWidth: '200px' }}
            >
              {strategy.name}
            </Button>
          ))
        ) : (
          <Typography>No strategies available</Typography>
        )}
      </div>
      {selectedStrategy && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ flex: '1 1 50%', minWidth: '300px' }}>
            <StrategyCard strategy={selectedStrategy} />
          </div>
          <div style={{ flex: '1 1 50%', minWidth: '300px' }}>
            <PriceCard prices={selectedStrategy.prices} />
          </div>
          <div style={{ flex: '1 1 100%' }}>
            <BacktestCard backtests={selectedStrategy.strategyBackTests} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
