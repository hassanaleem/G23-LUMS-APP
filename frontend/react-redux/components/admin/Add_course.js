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
import { addCourse, clearMessage } from "../../actions/coursesactions";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useFonts } from "expo-font";
import { Picker } from "@react-native-picker/picker";

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
    
    var h1 = parseInt(courseTimings.substring(0,2));
    var m1 = parseInt(courseTimings.substring(3,5));
    var h2 = parseInt(courseTimings.substring(6,8));
    var m2 = parseInt(courseTimings.substring(9,11));

    var TempDay = courseDay.toUpperCase();
    
    var d1 = TempDay.substring(0,3);
    var d2 = TempDay.substring(4,7);

    // console.log(h1, m1, h2, m2);
    // console.log(d1,d2)

    if (courseCode == "" ||
        courseName == "" ||
        courseTimings == "" ||
        courseDay == "" ||
        courseInstructorID == "" ||
        creditHours == "-") {
      
        Alert.alert("Please fill all the fields");
    }
    else if(h1 > 24 || h2 > 24 || h1 < 0 || h2 < 0 || m1 > 59 || m2 > 59 || m1 < 0 || m2 < 0 || h1 > h2) {
      Alert.alert("Incorrect Time Format","Format: hh:mm-hh:mm\n\ni.e. 13:00-15:00");
    }
    else if(courseTimings[2] != ':' || courseTimings[5] != '-' || courseTimings[8] != ':') {
      Alert.alert("Incorrect Time Format","Format: hh:mm-hh:mm\n\ni.e. 13:00-15:00");
    }
    else if(d1 != "MON" && d1 != "TUE" && d1 != "WED" && d1 != "THU" && d1 != "FRI" && d1 != "SAT" && d1 != "SUN")
    {
      Alert.alert("Incorrect Day Format","Format: day/day\n\ni.e. MON/WED, TUE/THU");
    }
    else if(d2 != "MON" && d2 != "TUE" && d2 != "WED" && d2 != "THU" && d2 != "FRI" && d2 != "SAT" && d2 != "SUN")
    {
      Alert.alert("Incorrect Day Format","Format: day/day\n\ni.e. MON/WED, TUE/THU");
    }
    else if(TempDay[3] != '/')
    {
      Alert.alert("Incorrect Day Format","Format: day/day\n\ni.e. MON/WED, TUE/THU");
    }
    else 
    {
      dispatch(
        addCourse(
          courseCode.toUpperCase(),
          courseName,
          courseTimings,
          courseDay.toUpperCase(),
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
    if (check === "Success") 
    {
      Alert.alert("Course Added Successfully");
      dispatch(clearMessage())
    }
    if (check === "Failure")
    {
      Alert.alert("Course Addition Failed", "No Such instructor exists");
      dispatch(clearMessage())
    } 
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
          placeholder="Enter time in format: hh:mm-hh:mm"
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

        <View style={styles.typeContainer}>
          <Picker
            selectedValue={creditHours}
            style={styles.gradesDropdown}
            onValueChange={(itemValue, itemIndex) => {
              setCreditHours(itemValue);
          }}>
            
            <Picker.Item label=" -" value="-"/>
            <Picker.Item label=" 1" value="1"/>
            <Picker.Item label=" 2" value="2"/>
            <Picker.Item label=" 3" value="3"/>
            <Picker.Item label=" 4" value="4"/>

          </Picker>
        </View>

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

  typeContainer: {
    height: 40,
    width: width / 1.2,
    marginTop: height / 200,
    borderRadius: 20,
    backgroundColor: "#eceded",
    alignSelf: "center",
    justifyContent: "center",
  },
});
