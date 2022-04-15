import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Pressable,
  ScrollView,
  Dimensions,
} from "react-native";

import { Logout_button } from "../buttons/Logout_button";
import { Main_button } from "../buttons/Main_button";
import { useFonts } from "expo-font";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getDeadline } from "../../actions/deadlineactions";
import { getEnrollments } from "../../actions/coursesactions";
const { width, height } = Dimensions.get("screen");

export const Deadlines = ({ navigation }) => {
  const dispatch = useDispatch();

  const [loaded] = useFonts({
    Outfit: require("../assets/fonts/static/Outfit-Bold.ttf"),
  });

  const [fetched, setFetched] = useState(false);
  const [deadlines, setDeadlines] = useState([]);
  const [studentId, setStudentID] = useState("");
  const [stored, setStored] = useState(false);
  const [enrollments, setEnrollments] = useState([]);
  const [get, setGet] = useState(false);
  const [tempPrev, setTempPrev] = useState(0);
  const [courses, setCourses] = useState([]);

  if (get == false) {
    dispatch(getEnrollments("all_json"));
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
    // get length of enrollments object
    const keys = Object.keys(enrollments);
    // loop through each key
    for (let i = 0; i < keys.length; i++) {
      // get the value of the key
      const key = keys[i];
      // get the value of the key
      const value = enrollments[key];
      if (value.student_id == user) {
        temp2.push(value);
      }
    }

    if (temp2.length != 0) {
      setCourses(temp2);
    }
  }
  if (courses.length != 0 && stored == false && deadlines.length == 0) {
    for (let i = 0; i < courses.length; i++) {
      dispatch(getDeadline(courses[i].course_id));
    }
    setStored(true);
  }
  let deadlinesState = useSelector((state) => state.deadlineReducer);
  let deadlineslist = deadlinesState.data;
  if (deadlineslist.length != 0 && deadlineslist.length != tempPrev) {
    // add to previous state
    setDeadlines(deadlineslist);
    setTempPrev(deadlineslist.length);
  }

  return (
    <ImageBackground
      source={require("../assets/background.png")}
      resizeMode="cover"
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Logout_button nav={navigation} />
        <Text style={styles.topheading}> Deadlines </Text>

        <ScrollView style={styles.rectangle2}>
          {deadlines.map((deadline, index) => (
            <View key={index}>
              <Text style={styles.textstyle}>
                {deadline.Course_ID} : {deadline.Deadline_Title} :{" "}
                {deadline.Deadline_Date} : {deadline.Deadline_Time}
              </Text>
            </View>
          ))}
        </ScrollView>
        <Main_button
          text="Go Back"
          onPress={() => navigation.navigate("student")}
          horizontal_padding={50}
          margintop={height / 1.59}
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
    //top: height / 27,
    //left: width / 30,
    // fontSize: 30,
    // lineHeight: 37.8,
    // fontWeight: "bold",
    // position: "absolute",
    fontFamily: "Outfit",
    fontSize: 27,
    fontWeight: "bold",
    marginTop: height / 24,
    marginLeft: width / 12,
  },

  rectangle2: {
    position: "absolute",
    width: width / 1.289,
    height: height / 2,
    top: height / 9.5,
    marginLeft: width / 9,
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
