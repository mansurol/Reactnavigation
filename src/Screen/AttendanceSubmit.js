import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function AttendanceSubmit() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Submitted</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#B4C7E7",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "red",
  },
});
