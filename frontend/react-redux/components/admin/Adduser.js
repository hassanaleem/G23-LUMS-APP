import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  ScrollView,
  TextInput,
  StyleSheet,
  Alert,
} from "react-native";

export const Adduser = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.topheading}>Adduser</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    // alignItems: "center",
  },
  topheading: {
    color: "#000000",
    height: 38,
    width: 234,
    left: 37,
    top: 82,
    borderRadius: null,
    textAlign: "left",

    fontSize: 30,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 38,
    letterSpacing: 0,
  },
  logout: {},
});
