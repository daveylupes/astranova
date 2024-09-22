// src/services/Api.js

const API_BASE_URL = 'https://astranova.snth.fi/api';

export const fetchStrategies = async () => {
  const response = await fetch(`${API_BASE_URL}/strategies`);
  if (!response.ok) {
    throw new Error('Failed to fetch strategies');
  }
  return await response.json();
};

export const fetchStrategyDetails = async (strategyId) => {
  const response = await fetch(`${API_BASE_URL}/strategy/${strategyId}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch details for strategy ${strategyId}`);
  }
  return await response.json();
};

export const fetchStrategyPerformance = async (strategyId) => {
  const response = await fetch(`${API_BASE_URL}/performance/${strategyId}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch performance for strategy ${strategyId}`);
  }
  return await response.json();
};
