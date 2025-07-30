import type { PropsWithChildren } from 'react';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type CurrencyButtonProps =  PropsWithChildren<{
  name :string,
  flag:string,  
}>
const CurrencyButton = (props : CurrencyButtonProps) => {
  return (
    <LinearGradient
      colors={['#00ff00', '#00ffff']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.button}
    >
      <Text style={styles.flag}>{props.flag}</Text>
      <Text style={styles.country}>{props.name}</Text>
    </LinearGradient>
  );
};

export default CurrencyButton;

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  flag: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  country:{
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  }
});
