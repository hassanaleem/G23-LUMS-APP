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
  TouchableOpacity,
  Dimensions,
} from "react-native";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const {width, height} = Dimensions.get("screen");

export function Search_bar(props) {
  const [text, setText] = useState("");
  return (
    <View>
      <TextInput
        style={{
          position: "absolute",
          fontSize: props.font_size,
          alignSelf: "center",
          height: 40,
          width: width / 1.2,
          marginTop: 65,
          borderRadius: 5,
          backgroundColor: "#eceded",
          paddingVertical: 10,
          paddingHorizontal: 15,
        }}
        placeholder={props.bar_text}
        onChangeText={(text) => {
          setText(text);
          props.onChangeText(text);
        }}
        value={props.bar_value}
      />

      <TouchableOpacity
        style={{
          position: "absolute",
          alignItems: "center",
          justifyContent: "center",
          paddingVertical: 8,
          paddingHorizontal: width/13,
          borderBottomRightRadius: 5,
          borderTopRightRadius: 5,
          backgroundColor: "#79c4f2",
          marginTop: 65,
          marginLeft: width/1.55,
        }}
        onPress={props.onPress}
      >
        <Text style={styles.text}>Search</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
