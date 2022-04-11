import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  ScrollView,
  TextInput,
  StyleSheet,
  ImageBackground,
  Alert,
  Pressable,
  Touchable,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import { Main_button } from "../buttons/Main_button";
import { Logout_button } from "../buttons/Logout_button";
import { Search_bar } from "../searchBar/Search_bar";
import { useState } from "react";
const { width, height } = Dimensions.get("screen");

export const Discussion_forum = ({ navigation }) => {
  const [post, setPost] = useState("");
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background.png")}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      >
        <Text
          style={{
            position: "absolute",
            fontSize: 27,
            fontWeight: "bold",
            marginTop: height / 24,
            marginLeft: width / 12,
          }}
        >
          Discussion Forum
        </Text>

        <Logout_button nav={navigation} />
        <TextInput
          style={{
            position: "absolute",
            fontSize: 14,
            alignSelf: "center",
            width: width / 1.2,
            marginTop: height / 5,
            borderRadius: 5,
            backgroundColor: "#eceded",
            paddingVertical: 10,
            paddingHorizontal: 15,
          }}
          placeholder={"Whats on your mind?"}
          onChangeText={(text) => {
            setPost(text);
          }}
          value={post}
        />

        <TouchableOpacity
          style={{
            position: "absolute",
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 8,
            paddingHorizontal: width / 13,
            borderBottomRightRadius: 5,
            borderTopRightRadius: 5,
            backgroundColor: "#79c4f2",
            marginTop: height / 5,
            marginLeft: width / 1.45,
            height: height / 15,
          }}
        >
          <Text style={styles.text}>Post</Text>
        </TouchableOpacity>

        {/* 
        <Main_button
          text="Enroll"
          onPress={""}
          horizontal_padding={0}
          margintop={height / 7}
          marginleft={width / 6}
          marginright={width / 6}
        />

        <Main_button
          text="Go Back"
          onPress={() => navigation.navigate("student")}
          horizontal_padding={0}
          margintop={height / 50}
          marginleft={width / 6}
          marginright={width / 6}
        /> */}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

  bartext: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
