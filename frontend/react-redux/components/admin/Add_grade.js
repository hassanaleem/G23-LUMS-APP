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
import { Picker } from "@react-native-picker/picker";

import { Logout_button } from "../buttons/Logout_button";
import { Main_button } from "../buttons/Main_button";
import { Search_bar } from "../searchBar/Search_bar";
import { addGrade, clearMessage } from "../../actions/courseGradeActions";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useFonts } from "expo-font";

const { width, height } = Dimensions.get("screen");

export const Add_grade = ({ navigation }) => {
  const [loaded] = useFonts({
    Outfit: require("../assets/fonts/static/Outfit-Bold.ttf"),
  });

  const [studentRollNumber, setstudentRollNumber] = useState("");
  const [courseCode, setcourseCode] = useState("");
  const [grade, setgrade] = useState("-");

  const dispatch = useDispatch();
  function call() {
    if (studentRollNumber == "" || courseCode == "" || grade == "-") {
      Alert.alert("Please fill all the fields");
    } else 
    {
      dispatch(addGrade(courseCode.toUpperCase(), grade, studentRollNumber));
      setcourseCode("");
      setgrade("-");
      setstudentRollNumber("");
    }
  }

  let check = useSelector((state) => state.courseGradeReducer).message;
  if (check.length) {
    if (check === "Success")
    {
      Alert.alert("Grade Added Successfully");
      dispatch(clearMessage())
    } 
    if (check === "Failure")
    {
      Alert.alert("Grade Addition Failed");
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
          Add Grade
        </Text>
        <Text style={styles.id_text0}>All fields are required</Text>
        <Text style={styles.id_text1}>Student Roll Number</Text>
        <TextInput
          style={styles.input_fields1}
          placeholder="Enter student roll number"
          onChangeText={(text) => {
            setstudentRollNumber(text);
          }}
          value={studentRollNumber}
        />
        <Text style={styles.id_text2}>Course Code</Text>
        <TextInput
          style={styles.input_fields2}
          placeholder="Enter course code"
          onChangeText={(text) => {
            setcourseCode(text);
          }}
          value={courseCode}
        />
        <Text style={styles.id_text3}>Grade</Text>
        <View style={styles.gradesContainer}>
          <Picker
            selectedValue={grade}
            style={styles.gradesDropdown}
            onValueChange={(itemValue, itemIndex) => {
              setgrade(itemValue);
            }}
          >
            <Picker.Item label=" -" value="-" />
            <Picker.Item label=" A+" value="A+" />
            <Picker.Item label=" A" value="A" />
            <Picker.Item label=" A-" value="A-" />
            <Picker.Item label=" B+" value="B+" />
            <Picker.Item label=" B" value="B" />
            <Picker.Item label=" B-" value="B-" />
            <Picker.Item label=" C+" value="C+" />
            <Picker.Item label=" C" value="C" />
            <Picker.Item label=" C-" value="C-" />
            <Picker.Item label=" D+" value="D+" />
            <Picker.Item label=" D" value="D" />
            <Picker.Item label=" D-" value="D-" />
            <Picker.Item label=" F" value="F" />
          </Picker>
        </View>
        <Main_button
          text="Add Grade"
          onPress={call}
          horizontal_padding={0}
          margintop={height / 3.9}
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
    marginTop: height / 40,
    marginLeft: width / 11,
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "Outfit",
  },

  id_text1: {
    marginTop: height / 110,
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

  id_text3: {
    marginTop: height / 50,
    marginLeft: width / 10,
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "Outfit",
  },

  id_text4: {
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
  gradesContainer: {
    height: 40,
    width: width / 1.2,
    marginTop: height / 200,
    borderRadius: 20,
    backgroundColor: "#eceded",
    alignSelf: "center",
    justifyContent: "center",
  },
  gradesDropdown: { width: width / 1.2 },
});
