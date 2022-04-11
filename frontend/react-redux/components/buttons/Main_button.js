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
  Pressable,
  TouchableHighlight,
} from "react-native";
import { useFonts } from "expo-font";

export function Main_button(props) {
  
  const [loaded] = useFonts({
    Outfit: require("../assets/fonts/static/Outfit-Regular.ttf"),
  });

  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      style={{
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 10,
        paddingHorizontal: props.horizontal_padding,
        borderRadius: 20,
        backgroundColor: "#79c4f2",
        marginTop: props.margintop,
        marginLeft: props.marginleft,
        marginRight: props.marginright,
      }}
      onPress={props.onPress}
    >
      <Text style={styles.text}>{props.text}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    // fontFamily: "Outfit",
  },
});
