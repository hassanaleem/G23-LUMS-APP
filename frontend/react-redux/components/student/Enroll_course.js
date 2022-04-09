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
import { Search_bar } from '../searchBar/Search_bar';

import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";

const {width, height} = Dimensions.get("screen");

export const Enroll_course = ({navigation}) => {
    
    const [code, setcode] = useState("");
    const [title, settitle] = useState("");
    const [timing, settiming] = useState("");
    const [day, setday] = useState("");
    const [instructor, setinstructor] = useState("");

    return(
    <View style = {styles.container}>
        <ImageBackground
        source={require("../assets/background.png")}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}>

        <Text
          style={{
            position: 'absolute',
            fontSize: 27,
            fontWeight: 'bold',
            marginTop: height/24,
            marginLeft: width/12,
          }}>
          Enroll Course
        </Text>
        
        <Logout_button nav = {navigation}/>

        <Search_bar bar_text = "Enter Course Code" font_size = {10}/>

        <Text style = {styles.test1}>Course Code: {code}</Text>
        <Text style = {styles.test2}>Course Title: {title}</Text>
        <Text style = {styles.test3}>Course Timing: {timing}</Text>
        <Text style = {styles.test4}>Course Day: {day}</Text>
        <Text style = {styles.test5}>Course Instructor Name: {instructor} </Text>

        <Main_button
          text="Enroll"
          onpress=""
          horizontal_padding={0}
          margintop={height/7}
          marginleft={width/6}
          marginright={width/6}
        />

        <Main_button
          text="Go Back"
          onPress={() => navigation.navigate("student")}
          horizontal_padding={0}
          margintop={height/50}
          marginleft={width/6}
          marginright={width/6}
        />

        </ImageBackground>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
    },

    test1: {
        marginTop: height/5,
        marginLeft: width/9,
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'sans-serif-thin',
    },

    test2: {
        marginTop: height/50,
        marginLeft: width/9,
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'sans-serif-thin',
    },

    test3: {
        marginTop: height/50,
        marginLeft: width/9,
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'sans-serif-thin',
    },

    test4: {
        marginTop: height/50,
        marginLeft: width/9,
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'sans-serif-thin',
    },

    test5: {
        marginTop: height/50,
        marginLeft: width/9,
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'sans-serif-thin',
    },
});