import React, { Component } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default class ElevatorCards extends Component {
  render() {
    return (
      <View>
        <Text style={styles.headingText}>ElevatorCards</Text>
        <ScrollView horizontal={true} style={styles.container}>
          <View style={[styles.card, styles.cardElevator]}>
            <Text>tap</Text>
          </View>
          <View style={[styles.card, styles.cardElevator]}>
            <Text>me</Text>
          </View>
          <View style={[styles.card, styles.cardElevator]}>
            <Text>to</Text>
          </View>
          <View style={[styles.card, styles.cardElevator]}>
            <Text>scroll</Text>
          </View>
          <View style={[styles.card, styles.cardElevator]}>
            <Text>more..</Text>
          </View>
          <View style={[styles.card, styles.cardElevator]}>
            <Text>see</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
  container: {
    padding: 8,
    flex: 1,
    flexDirection: "row",
  },
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: 100,
    borderRadius: 10,
    margin: 8,
  },
  cardElevator: {
    backgroundColor: "pink",
    elevation: 4,
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.95,
    shadowRadius: 3.84,
    shadowColor: "blue",
  },
});
