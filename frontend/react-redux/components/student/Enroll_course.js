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
import { useFonts } from "expo-font";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getCourse,
  clearState,
  enrollCourse,
  getEnrollments,
} from "../../actions/coursesactions";
const { width, height } = Dimensions.get("screen");

export const Enroll_course = ({ navigation }) => {
  const [loaded] = useFonts({
    Outfit: require("../assets/fonts/static/Outfit-Bold.ttf"),
  });
  const dispatch = useDispatch();
  const [code, setcode] = useState("");
  const [title, settitle] = useState("");
  const [timing, settiming] = useState("");
  const [day, setday] = useState("");
  const [instructor, setinstructor] = useState("");
  const [searchQuery, setsearchQuery] = useState("");
  const [student, setstudent] = useState("");
  const [enrollments, setenrollments] = useState([]);
  const [callGetEnrollments, setcallGetEnrollments] = useState(false);
  if (callGetEnrollments == false) {
    dispatch(getEnrollments("all"));
    setcallGetEnrollments(true);
  }
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
  let user = useSelector((state) => state.loginReducer.user.Id);
  let enrollmentslist = userState.data;
  if (enrollmentslist.length != 0 && enrollments.length == 0) {
    setenrollments(enrollmentslist);
  }

  if (student == "") {
    setstudent(user);
  }
  const validate = (find, query) => {
    if (query == true && find == true) {
      setcode(userState.data.Course_ID);
      settitle(userState.data.Course_Name);
      settiming(userState.data.Time);
      setday(userState.data.Days);
      setinstructor(userState.data.Instructor_ID);
      dispatch(clearState());
    } else if (query == true && find == false) {
      Alert.alert("Course not found");
      dispatch(clearState());
    }
  };
  const enroll = () => {
    if (
      code === "" ||
      title === "" ||
      timing === "" ||
      day === "" ||
      instructor === ""
    ) {
      Alert.alert("Please search for a course");
    } else {
      let check = false;

      for (let i = 0; i < enrollments.length; i++) {
        if (enrollments[i] == code + student) {
          check = true;
          break;
        }
      }
      if (check == false) {
        dispatch(enrollCourse(code, student));
        Alert.alert("Enrolled Successfully");
        setcode("");
        settitle("");
        settiming("");
        setday("");
        setinstructor("");
        setsearchQuery("");
      } else {
        Alert.alert("You are already enrolled in this course");
        setcode("");
        settitle("");
        settiming("");
        setday("");
        setinstructor("");
        setsearchQuery("");
      }
    }
  };
  validate(find, query);
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
          Enroll Course
        </Text>

        <Logout_button nav={navigation} />

        <Search_bar
          bar_text="Enter Course Code"
          font_size={10}
          onChangeText={(text) => {
            setsearchQuery(text);
          }}
          value={searchQuery}
          onPress={() => {
            makeSearch();
          }}
        />

        <Text style={styles.test1}>Course Code: {code}</Text>
        <Text style={styles.test2}>Course Title: {title}</Text>
        <Text style={styles.test3}>Course Timing: {timing}</Text>
        <Text style={styles.test4}>Course Day: {day}</Text>
        <Text style={styles.test5}>Course Instructor Name: {instructor} </Text>

        <Main_button
          text="Enroll"
          onPress={enroll}
          horizontal_padding={0}
          margintop={height / 6.4}
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
    marginTop: height / 5,
    marginLeft: width / 9,
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "sans-serif-thin",
  },

  test2: {
    marginTop: height / 50,
    marginLeft: width / 9,
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "sans-serif-thin",
  },

  test3: {
    marginTop: height / 50,
    marginLeft: width / 9,
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "sans-serif-thin",
  },

  test4: {
    marginTop: height / 50,
    marginLeft: width / 9,
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "sans-serif-thin",
  },

  test5: {
    marginTop: height / 50,
    marginLeft: width / 9,
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "sans-serif-thin",
  },
});
