import React from "react";
import {
    Button,
    Image,
    Linking,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function Action() {
  function openWebsite(url: string) {
    if (url) {
      Linking.openURL(url).catch((err) =>
        console.error("Failed to open URL:", err)
      );
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Blog Card</Text>

      <View style={[styles.card, styles.ElevateCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.subHeadingText}>
            What New in JavaScript in 2025 - ES12
          </Text>
        </View>

        <Image
          style={styles.image}
          source={{
            uri: "https://picsum.photos/200",
          }}
        />

        <View style={styles.bodyContainer}>
          <Text numberOfLines={3} style={styles.bodyText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </View>

        <View style={styles.footerContainer}>
          <TouchableOpacity onPress={() => openWebsite("https://example.com")}>
            <Text style={styles.socialLinks}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openWebsite("https://example.com")}>
            <Text style={styles.socialLinks}>Follow Me</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Button
        title="Open Website"
        onPress={() => openWebsite("https://example.com")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f2f2f2",
  },

  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
    color: "#222",
  },

  card: {
    width: "100%",
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#fff",
    marginBottom: 20,
  },

  ElevateCard: {
    backgroundColor: "#fff",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },

  headingContainer: {
    padding: 12,
    backgroundColor: "#172e3eff",
    alignItems: "center",
  },

  subHeadingText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#fff",
  },

  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },

  bodyContainer: {
    padding: 12,
  },

  bodyText: {
    fontSize: 14,
    color: "#444",
    lineHeight: 20,
  },

  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#f0f0f0",
  },

  socialLinks: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007aff",
  },
});
