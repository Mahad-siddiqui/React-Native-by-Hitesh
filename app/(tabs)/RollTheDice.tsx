import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const RollTheDice = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>5-Roll The Dice</Text>
    </View>
  );
};

export default RollTheDice;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dec45cff', // optional background
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#595252ff',
  },
});
