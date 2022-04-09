import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";

import { Logout_button } from "../buttons/Logout_button";
import { Main_button } from "../buttons/Main_button";
import { getEvents } from "../../actions/eventsAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";
const { width, height } = Dimensions.get("screen");

export const Academic_progress = () => {
  var gpa = 3.8; // Here we just need to fetch the GPA thing and we are good to go
  var dict = [
    { Course_code: "Cs 100", Title: "Intro to CS", Grade: "A-" },
    { Course_code: "Cs 200", Title: "Intro to Programming", Grade: "A" },
    { Course_code: "Cs 300", Title: "Advace Programming", Grade: "TBH" },
    { Course_code: "Cs 100", Title: "Intro to CS", Grade: "A-" },
    { Course_code: "Cs 200", Title: "Intro to Programming", Grade: "A" },
    { Course_code: "Cs 300", Title: "Advace Programming", Grade: "TBH" },
    { Course_code: "Cs 100", Title: "Intro to CS", Grade: "A-" },
    { Course_code: "Cs 200", Title: "Intro to Programming", Grade: "A" },
    { Course_code: "Cs 300", Title: "Advace Programming", Grade: "TBH" },
    { Course_code: "Cs 100", Title: "Intro to CS", Grade: "A-" },
    { Course_code: "Cs 200", Title: "Intro to Programming", Grade: "A" },
    { Course_code: "Cs 300", Title: "Advace Programming", Grade: "TBH" },
    { Course_code: "Cs 100", Title: "Intro to CS", Grade: "A-" },
    { Course_code: "Cs 200", Title: "Intro to Programming", Grade: "A" },
    { Course_code: "Cs 300", Title: "Advace Programming", Grade: "TBH" },
    { Course_code: "Cs 100", Title: "Intro to CS", Grade: "A-" },
    { Course_code: "Cs 200", Title: "Intro to Programming", Grade: "A" },
    { Course_code: "Cs 300", Title: "Advace Programming", Grade: "TBH" },
  ];

  return (
    <ImageBackground
      source={require("../assets/background.png")}
      resizeMode="cover"
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Logout_button />
        <Text style={styles.topheading}> Acamedic </Text>
        <Text style={styles.topheading2}> Progress </Text>

        <View style={styles.CGPAview}>
          <Text style={styles.CGPAtext}> CGPA </Text>
        </View>
        <View style={styles.CGPAview}>
          <Text style={styles.CGPAtext}> CGPA: {gpa} </Text>
        </View>
        <View style={styles.Gradesview}>
          <Text style={styles.Gradestext}> Grades: </Text>
        </View>
        <ScrollView style={styles.rectangle2}>
          {dict.map((data, index) => (
            <View key={index}>
              <Text style={styles.textstyle}>
                {data.Course_code} : {data.Title} : {data.Grade}
              </Text>
            </View>
          ))}
        </ScrollView>

        <Main_button
          text="Go Back"
          onPress={() => navigation.navigate("student")}
          horizontal_padding={50}
          margintop={height / 2}
          marginleft={50}
          marginright={47}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  container: {
    flex: 1,
    height: "100%",
  },

  topheading: {
    position: "absolute",
    top: height / 30,
    left: width / 30,
    fontSize: 30,
    lineHeight: 37.8,
    fontWeight: "bold",
  },
  topheading2: {
    position: "absolute",
    top: height / 15,
    left: width / 30,
    fontSize: 30,
    lineHeight: 37.8,
    fontWeight: "bold",
  },
  CGPAview: {
    position: "absolute",
    top: height / 6.5,
    left: width / 30,
  },
  CGPAtext: {
    fontSize: 25,
    lineHeight: 30,
    fontWeight: "bold",
  },
  Gradesview: {
    position: "absolute",
    top: height / 4.8,
    left: width / 30,
  },
  Gradestext: {
    fontSize: 25,
    lineHeight: 30,
    fontWeight: "bold",
  },

  logoutbuttonview: {
    position: "absolute",
    top: 50,
    right: 10,
  },

  rectangle2: {
    position: "absolute",
    width: width / 1.1,
    height: height / 3.8,
    top: height / 3.8,
    left: width / 30,
    borderRadius: 7,
    backgroundColor: "#EDEDED",
  },
  logoutbutton: {
    backgroundColor: "#87CEFA",
    padding: 5,
    borderRadius: 180,
  },
  event: {
    color: "black",
    position: "absolute",
    left: 10,
    top: 50,
    fontSize: 15,
    fontWeight: "bold",
  },
});
