import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/styles';

const MarketData = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.header}>Market Data</Text>
      <Text>Current Price of BTC: $30,000</Text>
      <Text>Market Cap: $600 Billion</Text>
    </View>
  );
};

export default MarketData;
