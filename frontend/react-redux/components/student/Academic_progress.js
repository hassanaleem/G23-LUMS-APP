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

export const Academic_progress = () => {
  // var gpa = 3.8; // Here we just need to fetch the GPA thing and we are good to go
  const dispatch = useDispatch();
  const [courses, setCourses] = useState([]);
  const [get, setGet] = useState(false);
  const [enrollments, setEnrollments] = useState([]);
  const [grades, setGrades] = useState([]);
  const [hmm, setHmm] = useState(false);
  const [tempPrev, setTempPrev] = useState(0);
  const [gpa, setGpa] = useState(0);
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
    };
    for (let i = 0; i < grades.length; i++) {
      totalCredits += parseFloat(grades[i].Credit_Hrs);
      let temp = grades[i].Grade;
      totalGrades +=
        parseFloat(gradeToValue[temp]) * parseFloat(grades[i].Credit_Hrs);
    }
    let gpa = totalGrades / totalCredits;
    gpa = gpa.toFixed(2);
    setGpa(gpa);
  };

  if (get == false) {
    dispatch(getEnrollments("all"));
    setGet(true);
  }
  let coursesState = useSelector((state) => state.courseReducer);
  let enrollmentslist = coursesState.data;
  if (enrollmentslist.length != 0 && enrollments.length == 0) {
    setEnrollments(enrollmentslist);
  }
  let userState = useSelector((state) => state.loginReducer);
  let user = userState.user.Id;
  if (courses.length == 0) {
    let temp2 = [];
    for (let i = 0; i < enrollments.length; i++) {
      if (enrollments[i].includes(user)) {
        temp2.push(enrollments[i]);
      }
    }
    if (temp2.length != 0) {
      setCourses(temp2);
    }
  }
  if (hmm == false && courses.length != 0 && grades.length == 0) {
    for (let i = 0; i < courses.length; i++) {
      dispatch(getGrade(courses[i]));
    }
    setHmm(true);
  }
  let gradesState = useSelector((state) => state.courseGradeReducer);
  let gradeslist = gradesState.data;
  if (gradeslist.length != 0 && gradeslist.length != tempPrev) {
    setGrades(gradeslist);
    setTempPrev(gradeslist.length);
    calcaulateGpa();
  }

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
          {grades.map((data, index) => (
            <View key={index}>
              <Text style={styles.textstyle}>
                {data.Course_ID} : {data.Course_Name} : {data.Grade}
              </Text>
            </View>
          ))}
        </ScrollView>

        <Main_button
          text="Go Back"
          onPress={() => navigation.navigate("student")}
          horizontal_padding={50}
          margintop={height / 1.2}
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
