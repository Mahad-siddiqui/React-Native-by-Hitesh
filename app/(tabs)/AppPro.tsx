import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.container}>
      <Text style={isDarkMode ? styles.darkText : styles.lightText}>App Pro</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',         // center horizontally
    justifyContent: 'center',     // center vertically
    backgroundColor: '#280808ff',   // optional for visibility
    padding: 20,                 // optional for spacing
  },
  lightText: {
    color: '#d3c9e4ff', // black text in light mode
    fontSize: 24,
  },
  darkText: {
    color: '#fff', // white text in dark mode
    fontSize: 24,
  },
});

export default AppPro;
