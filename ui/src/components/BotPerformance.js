import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/styles';

const RiskManagement = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.header}>Risk Management</Text>
      <Text>Value at Risk: $500</Text>
      <Text>Sharpe Ratio: 1.5</Text>
      <Text>Max Drawdown: 10%</Text>
    </View>
  );
};

export default RiskManagement;
