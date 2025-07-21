import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default class FancyCard extends Component {
  render() {
    return (
      <View>
        <Text style={styles.headingText}>Treading places</Text>
        <View style={[styles.card, styles.cardElevated]}>
          <Image
            source={{ uri: "https://picsum.photos/200" }}
            style={styles.cardImage}
          />
          <View style={[styles.cardBody]}>
            <Text style={styles.cardTitle}>Card Title</Text>
            <Text style={styles.cardLabel}>Card Description</Text>
            <Text style={styles.cardDiscription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore.
            </Text>
            <Text style={styles.cardFooter}>Card Footer</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 8,
  },
  card: {
    width: 350,
    height: 360,
    borderRadius: 6,
    // marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: "#ffffff",
    elevation: 4,
    shadowOffset: { width: 1, height: 1 },
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    color: "#000000",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    width: "100%",
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: "#000000",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 6,
  },
  cardLabel: {
    color: "#000000",
        fontSize: 14,
        marginBottom: 12,
  },
  cardDiscription: {
        fontSize: 12,
        marginBottom: 12,
        flex: 1,
        flexShrink: 1,
        color: "#0e476dff",
  },
  cardFooter: {
    color: "#000000",
  },
});
