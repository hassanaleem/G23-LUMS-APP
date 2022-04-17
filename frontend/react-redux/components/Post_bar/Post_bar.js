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
  import { useFonts } from "expo-font";
  
  const {width, height} = Dimensions.get("screen");
  
  export function Post_bar(props) {

    const [loaded] = useFonts({
      Outfit: require("../assets/fonts/static/Outfit-Bold.ttf"),
    });

    // const [text, setText] = useState("");
    return (
      <View>
        <TextInput
          style={{
            fontFamily: "Outfit",
            position: "absolute",
            fontSize: props.font_size,
            // alignSelf: "center",
            height: 40,
            width: width / 1.7,
            marginTop: height/14,
            borderBottomLeftRadius:5,
            borderTopLeftRadius:5,
            marginLeft: width/10,
            backgroundColor: "#eceded",
            paddingVertical: 10,
            paddingHorizontal: 15,
          }}
          placeholder={props.bar_text}
          onChangeText={(text) => {
            // setText(text);
            props.onChangeText(text);
          }}
          value={props.bar_value}
        />
  
        <TouchableOpacity
          style={{
            fontFamily: "Outfit",
            position: "absolute",
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 8,
            height: 40,
            paddingHorizontal: width/12,
            borderBottomRightRadius: 5,
            borderTopRightRadius: 5,
            backgroundColor: "#79c4f2",
            marginTop: height/14,
            marginLeft: width/1.49,
          }}
          onPress={props.onPress}
        >
          <Text style={styles.text}>Post</Text>
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
      fontFamily: "Outfit",
    },
  });
  