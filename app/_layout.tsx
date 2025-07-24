// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   useColorScheme,
// } from 'react-native';
// import AppPro from './(tabs)/AppPro';

// function App(): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={isDarkMode ?styles.lightText: styles.darkText }>Main App</Text>
//       <AppPro />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',         // center horizontally
//     justifyContent: 'center',     // center vertically
//     backgroundColor: '#7ed527ff',   // optional for visibility
//   },
//   lightText: {
//     color: '#f48787ff', // black text in light mode
//     fontSize: 24,
//   },
//   darkText: {
//     color: '#24178cff', // white text in dark mode
//     fontSize: 24,
//   },
// });

// export default App;

import React, { Component } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import Action from "./(tabs)/Action";
import BbChanger from "./(tabs)/BbChanger";
import ContactList from "./(tabs)/ContactList";
import ElevatorCards from "./(tabs)/ElevatorCards";
import FlateCards from "./(tabs)/FlateCards";
import PasswordGenerator from "./(tabs)/PasswordGenerator";
import FancyCard from "./FancyCard";

export class _layout extends Component {
  render() {
    console.log("hello");
    return (
      <SafeAreaView>
        <ScrollView>
          <View>
            <FlateCards />
            <ElevatorCards />
            <FancyCard />
            <Action />
            <ContactList />
            <PasswordGenerator/>
            <BbChanger/>
          </View> 
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default _layout;
