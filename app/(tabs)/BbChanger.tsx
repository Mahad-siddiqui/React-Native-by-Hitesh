import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const BbChanger = () => {
  const [randomBackground, setRandomBackground] = useState("#ffffff");

  const generateColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
      console.log(color);
    }
    console.log(color);
    setRandomBackground(color);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#dea061ff" />
      <Text style={styles.title}>4-BackGround Changer App</Text>
      <View style={[styles.container, { backgroundColor: randomBackground }]}>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Press me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default BbChanger
const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#332f2fff',
    marginBottom: 10,
    textAlign: 'center',
  },

  container: {
    flex: 1,
    backgroundColor: '#deb845ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
    borderRadius: 10,
    margin: 10,
  },
  actionButton: {
    borderRadius: 10,
    backgroundColor: '#086978ff',
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
  actionButtonText: {
    color: '#ffffff',
    fontSize: 12,
    textTransform: 'uppercase', // ✅ Fixed here
  },
});
