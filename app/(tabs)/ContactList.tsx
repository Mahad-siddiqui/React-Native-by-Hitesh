import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function ContactList() {
  const contacts = [
    {
      id: 1,
      name: "Alice Johnson",
      status: "Online now",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      id: 2,
      name: "Bob Smith",
      status: "Last seen 2 hours ago",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      id: 3,
      name: "Charlie Davis",
      status: "Away - will reply soon",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      id: 4,
      name: "Diana Green",
      status: "Do not disturb",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      id: 5,
      name: "Edward White",
      status: "Offline",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
  ];

  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container}>
        {contacts.map(({ id, name, status, image }) => (
          <View key={id} style={styles.card}>
            <Image source={{ uri: image }} style={styles.avatar} />
            <View>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.status}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  container: {
    paddingHorizontal: 10,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    backgroundColor: "#a1e9a8ff",
    padding: 10,
    borderRadius: 8,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
  },
  status: {
    fontSize: 14,
    color: "#555",
  },
});
