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
  ImageBackground,
  Pressable,
  Dimensions,
} from "react-native";

import { Logout_button } from "../buttons/Logout_button";
import { Main_button } from "../buttons/Main_button";
import { addCourse } from "../../actions/coursesactions";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useFonts } from "expo-font";

const { width, height } = Dimensions.get("screen");

export const Add_course = ({ navigation }) => {
  const [loaded] = useFonts({
    Outfit: require("../assets/fonts/static/Outfit-Bold.ttf"),
  });
  const dispatch = useDispatch();
  const [courseCode, setcourseCode] = useState("");
  const [courseName, setcourseName] = useState("");
  const [courseTimings, setcourseTimings] = useState("");
  const [courseDay, setcourseDay] = useState("");
  const [courseInstructorID, setcourseInstructorID] = useState("");
  const [creditHours, setCreditHours] = useState("");

  function call() {
    if (
      courseCode == "" ||
      courseName == "" ||
      courseTimings == "" ||
      courseDay == "" ||
      courseInstructorID == "" ||
      creditHours == ""
    ) {
      Alert.alert("Oops, You missed a field");
    } else {
      dispatch(
        addCourse(
          courseCode.toUpperCase(),
          courseName,
          courseTimings,
          courseDay,
          courseInstructorID,
          creditHours
        )
      );
      setcourseCode("");
      setcourseName("");
      setcourseTimings("");
      setcourseDay("");
      setcourseInstructorID("");
      setCreditHours("");
    }
  }
  let check = useSelector((state) => state.courseReducer).message;
  if (check.length) {
    if (check === "Success") Alert.alert("Course Added Successfully");
    if (check === "Failure") Alert.alert("Course Addition Failed");
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background.png")}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      >
        <Logout_button nav={navigation} />

        <Text
          style={{
            position: "absolute",
            fontSize: 27,
            fontWeight: "bold",
            marginTop: height / 24,
            marginLeft: width / 12,
          }}
        >
          Add Course
        </Text>

        <Text style={styles.id_text0}>All fields are required</Text>

        <Text style={styles.id_text1}>Course Code</Text>

        <TextInput
          style={styles.input_fields1}
          placeholder="Enter course code"
          onChangeText={(text) => {
            setcourseCode(text);
          }}
          value={courseCode}
        />

        <Text style={styles.id_text2}>Course Name</Text>

        <TextInput
          style={styles.input_fields2}
          placeholder="Enter course name"
          onChangeText={(text) => {
            setcourseName(text);
          }}
          value={courseName}
        />

        <Text style={styles.id_text3}>Course Timings</Text>

        <TextInput
          style={styles.input_fields3}
          placeholder="Enter time in format: hh/mm - hh/mm"
          onChangeText={(text) => {
            setcourseTimings(text);
          }}
          value={courseTimings}
        />

        <Text style={styles.id_text4}>Course Day</Text>

        <TextInput
          style={styles.input_fields4}
          placeholder="Enter course day in format day/day"
          onChangeText={(text) => {
            setcourseDay(text);
          }}
          value={courseDay}
        />

        <Text style={styles.id_text5}>Course Instructor ID</Text>

        <TextInput
          style={styles.input_fields5}
          placeholder="Enter instructor ID"
          onChangeText={(text) => {
            setcourseInstructorID(text);
          }}
          value={courseInstructorID}
        />

        <Text style={styles.id_text5}>Credit Hours</Text>

        <TextInput
          style={styles.input_fields5}
          placeholder="Enter Credit Hours"
          onChangeText={(text) => {
            setCreditHours(text);
          }}
          value={creditHours}
        />

        <Main_button
          text="Add Course"
          onPress={call}
          horizontal_padding={0}
          margintop={height / 45}
          marginleft={width / 6}
          marginright={width / 6}
        />

        <Main_button
          text="Go Back"
          onPress={() => navigation.navigate("admin")}
          horizontal_padding={0}
          margintop={height / 50}
          marginleft={width / 6}
          marginright={width / 6}
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

  id_text0: {
    marginTop: height / 50,
    marginLeft: width / 11,
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "Outfit",
  },

  id_text1: {
    marginTop: height / 120,
    marginLeft: width / 10,
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "Outfit",
  },

  id_text2: {
    marginTop: height / 90,
    marginLeft: width / 10,
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "Outfit",
  },

  id_text3: {
    marginTop: height / 90,
    marginLeft: width / 10,
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "Outfit",
  },

  id_text4: {
    marginTop: height / 90,
    marginLeft: width / 10,
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "Outfit",
  },

  id_text5: {
    marginTop: height / 90,
    marginLeft: width / 10,
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "Outfit",
  },

  input_fields1: {
    height: 40,
    width: width / 1.2,
    marginTop: 3,
    borderColor: "gray",
    borderWidth: 0,
    borderRadius: 20,
    backgroundColor: "#eceded",
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignSelf: "center",
  },

  input_fields2: {
    height: 40,
    width: width / 1.2,
    marginTop: 3,
    borderColor: "gray",
    borderWidth: 0,
    borderRadius: 20,
    backgroundColor: "#eceded",
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignSelf: "center",
  },

  input_fields3: {
    height: 40,
    width: width / 1.2,
    marginTop: 3,
    borderColor: "gray",
    borderWidth: 0,
    borderRadius: 20,
    backgroundColor: "#eceded",
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignSelf: "center",
  },

  input_fields4: {
    height: 40,
    width: width / 1.2,
    marginTop: 3,
    borderColor: "gray",
    borderWidth: 0,
    borderRadius: 20,
    backgroundColor: "#eceded",
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignSelf: "center",
  },

  input_fields5: {
    height: 40,
    width: width / 1.2,
    marginTop: 3,
    borderColor: "gray",
    borderWidth: 0,
    borderRadius: 20,
    backgroundColor: "#eceded",
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignSelf: "center",
  },
});
