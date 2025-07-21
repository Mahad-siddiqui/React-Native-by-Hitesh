// rnfs
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function FlateCards() {
  return (
    <View>
      <Text style={styles.headingText}>FlateCards</Text>    
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Card 1</Text>
        </View>
         <View style={[styles.card, styles.cardTwo]}>
          <Text>Card 2</Text>
        </View>
         <View style={[styles.card, styles.cardThree]}>
          <Text>Card 3</Text>
        </View>
         <View style={[styles.card, styles.cardThree]}>
          <Text>Card 4</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
  container: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 8,

  },
    card: {
        height: 100,
        width: 100,
        borderRadius: 10,
        margin: 10,
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    cardOne: {
        backgroundColor:"#c22d2dff",
    },
     cardTwo: {
        backgroundColor:"#f48787ff",
    },
     cardThree: {
        backgroundColor:"#a84747ff",
    }
});
