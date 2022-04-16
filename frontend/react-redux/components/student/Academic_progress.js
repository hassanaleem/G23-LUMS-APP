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
import { getEnrollments } from "../../actions/coursesactions";
import { getGrade } from "../../actions/courseGradeActions";
const { width, height } = Dimensions.get("screen");
import { useFonts } from "expo-font";
export const Academic_progress = ({ navigation }) => {
  const [loaded] = useFonts({
    Outfit: require("../assets/fonts/static/Outfit-Bold.ttf"),
  });
  // var gpa = 3.8; // Here we just need to fetch the GPA thing and we are good to go
  const dispatch = useDispatch();
  const [get, setGet] = useState(false);

  const calcaulateGpa = () => {
    let totalCredits = 0;
    let totalGrades = 0;
    let gradeToValue = {
      "A+": 4.0,
      A: 4.0,
      "A-": 3.7,
      "B+": 3.3,
      B: 3.0,
      "B-": 2.7,
      "C+": 2.3,
      C: 2.0,
      "C-": 1.7,
      "D+": 1.3,
      D: 1.0,
      "D-": 0.7,
      F: 0.0,
      NA: 0.0,
      NA: 0.0,
    };
    for (let i = 0; i < grades.length; i++) {
      let temp1 = totalCredits;
      totalCredits += parseFloat(grades[i].credit_hrs);

      let temp = grades[i].grade;
      if (temp == "NA") {
        totalCredits = temp1;
      } else {
        totalGrades +=
          parseFloat(gradeToValue[temp]) * parseFloat(grades[i].credit_hrs);
      }
    }
    let gpa = totalGrades / totalCredits;
    gpa = gpa.toFixed(2);
    return gpa;
  };


  let userState = useSelector((state) => state.loginReducer);
  let user = userState.user.Id;

  if (get == false) {
    dispatch(getGrade(user));
    setGet(true);
  }

  let gradesState = useSelector((state) => state.courseGradeReducer);
  let grades = gradesState.data;

  let gpa = calcaulateGpa();

  return (
    <ImageBackground
      source={require("../assets/background.png")}
      resizeMode="cover"
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Logout_button nav={navigation} />

        <Text style={styles.topheading}> Academic </Text>
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
          {grades.map((data, index) => (
            <View key={index}>
              <Text style={styles.textstyle}>
                {data.course_id} : {data.course_name} : {data.grade}
              </Text>
            </View>
          ))}
        </ScrollView>

        <Main_button
          text="Go Back"
          onPress={() => navigation.navigate("student")}
          horizontal_padding={50}
          margintop={height / 1.58}
          marginleft={width / 6}
          marginright={width / 6}
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
    fontSize: 27,
    fontWeight: "bold",
    fontFamily: "Outfit",
    marginTop: height / 24,
    marginLeft: width / 12,
  },

  topheading2: {
    position: "absolute",
    fontSize: 27,
    fontWeight: "bold",
    fontFamily: "Outfit",
    marginTop: height / 12.5,
    marginLeft: width / 12,
  },

  CGPAview: {
    position: "absolute",
    top: height / 6.5,
    left: width / 30,
  },

  CGPAtext: {
    marginTop: height / 700,
    marginLeft: width / 20,
    fontSize: 20,
    fontFamily: "Outfit",
  },

  Gradesview: {
    position: "absolute",
    top: height / 4.8,
    left: width / 30,
  },

  Gradestext: {
    marginTop: height / 700,
    marginLeft: width / 20,
    fontSize: 20,
    fontFamily: "Outfit",
  },

  logoutbuttonview: {
    position: "absolute",
    top: 50,
    right: 10,
  },

  rectangle2: {
    position: "absolute",
    height: height / 2.8,
    top: height / 3.8,
    width: width / 1.219,
    marginLeft: width / 10,
    marginTop: height / 1000,
    backgroundColor: "#eceded",
    zIndex: 99,
    borderRadius: 5,
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
  
  textstyle: {
    marginLeft: 10,
    marginTop: 10,
    fontFamily: "Outfit",
    fontSize: 13
  },
});
