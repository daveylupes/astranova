const BASE_URL = 'https://astranova.snth.fi/api';

export async function fetchStrategies() {
  const response = await fetch(`${BASE_URL}/strategies`);
  if (!response.ok) {
    throw new Error('Failed to fetch strategies');
  }
  return response.json();
}

export async function fetchStrategyDetails(strategy_id) {
  const response = await fetch(`${BASE_URL}/strategy/${strategy_id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch strategy details');
  }
  return response.json();
}

export async function fetchCost(strategy_id) {
  const response = await fetch(`${BASE_URL}/cost/${strategy_id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch cost data');
  }
  return response.json();
}

export async function fetchMaxLeverage(strategy_id) {
  const response = await fetch(`${BASE_URL}/max_leverage/${strategy_id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch max leverage data');
  }
  return response.json();
}

export async function fetchTradePair(strategy_id) {
  const response = await fetch(`${BASE_URL}/trade_pair/${strategy_id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch trade pair data');
  }
  return response.json();
}

export async function fetchPerformance(strategy_id) {
  const response = await fetch(`${BASE_URL}/performance/${strategy_id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch performance data');
  }
  return response.json();
}
