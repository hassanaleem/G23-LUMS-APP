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
import { Search_bar } from "../searchBar/Search_bar";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useFonts } from "expo-font";
import {
  getCourse,
  clearState,
  updateCourse,
} from "../../actions/coursesactions";
const { width, height } = Dimensions.get("screen");

export const Update_course_timings = ({ navigation }) => {
  const [loaded] = useFonts({
    Outfit: require("../assets/fonts/static/Outfit-Bold.ttf"),
  });
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [isEditable, setisEditable] = useState(false);
  const [courseTimings, setcourseTimings] = useState("");
  const [courseDay, setcourseDay] = useState("");
  const [courseCode, setcourseCode] = useState("");
  const [courseName, setcourseName] = useState("");
  const [courseInstructorID, setcourseInstructorID] = useState("");
  const [creditHours, setCreditHours] = useState("");
  const makeSearch = () => {
    if (searchQuery === "") {
      Alert.alert("Please enter a search query");
    } else {
      dispatch(getCourse(searchQuery.toUpperCase()));
    }
  };
  let userState = useSelector((state) => state.courseReducer);
  let find = userState.find;
  let query = userState.queryRun;
  const validate = (find, query) => {
    if (query == true && find == true) {
      setcourseCode(userState.data.Course_ID);
      setcourseName(userState.data.Course_Name);
      setcourseInstructorID(userState.data.Instructor_ID);
      setCreditHours(userState.data.Credit_Hours);
      setcourseTimings(userState.data.Time);
      setcourseDay(userState.data.Days);

      setisEditable(true);
      dispatch(clearState());
    } else if (query == true && find == false) {
      Alert.alert("Course not found");
      dispatch(clearState());
    }
  };
  validate(find, query);

  const update = () => {
    if (
      courseTimings === "" ||
      courseDay === "" ||
      courseCode === "" ||
      courseName === "" ||
      courseInstructorID === "" ||
      creditHours === ""
    ) {
      Alert.alert("No course searched");
    } else {
      dispatch(
        updateCourse(
          courseCode,
          courseName,
          courseTimings,
          courseDay,
          courseInstructorID,
          creditHours
        )
      );
      Alert.alert("Course updated");
      setisEditable(false);
    }
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background.png")}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      >
        <Logout_button onpress="" />

        <Text
          style={{
            position: "absolute",
            fontSize: 27,
            fontWeight: "bold",
            marginTop: height / 24,
            marginLeft: width / 12,
          }}
        >
          Update Course
        </Text>

        <Text
          style={{
            position: "absolute",
            fontSize: 27,
            fontWeight: "bold",
            marginTop: height / 13,
            marginLeft: width / 12,
          }}
        >
          Timings
        </Text>

        <Search_bar
          bar_text="Enter course code"
          font_size={15}
          functionType=""
          onChangeText={(text) => {
            setSearchQuery(text);
          }}
          onPress={makeSearch}
        />

        <Text style={styles.id_text1}>Course Timings</Text>

        <TextInput
          style={[
            styles.input_fields1,
            {
              backgroundColor: isEditable ? "#eceded" : "#C8C8C8",
            },
          ]}
          placeholder={
            isEditable ? courseTimings : "Input Disabled [search for course]"
          }
          editable={isEditable}
          onChangeText={(text) => {
            setcourseTimings(text);
          }}
          value={courseTimings}
        />

        <Text style={styles.id_text2}>Course Day</Text>

        <TextInput
          style={[
            styles.input_fields2,
            {
              backgroundColor: isEditable ? "#eceded" : "#C8C8C8",
            },
          ]}
          placeholder={
            isEditable ? courseDay : "Input Disabled [search for course]"
          }
          editable={isEditable}
          onChangeText={(text) => {
            setcourseDay(text);
          }}
          value={courseDay}
        />

        <Main_button
          text="Update Timings"
          onPress={update}
          horizontal_padding={0}
          margintop={height / 4.2}
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

  id_text1: {
    marginTop: height / 6,
    marginLeft: width / 10,
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "Outfit",
  },

  id_text2: {
    marginTop: height / 50,
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
});
