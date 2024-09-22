import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '../styles/styles';

const ReviewCard = ({ review }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{review.name}</Text>
      <View style={styles.rating}>
        {[...Array(5)].map((_, index) => (
          <Text key={index} style={styles.star}>
            {index < review.rating ? '★' : '☆'}
          </Text>
        ))}
      </View>
      <Text style={styles.review}>{review.review}</Text>
    </View>
  );
};

export default ReviewCard;
