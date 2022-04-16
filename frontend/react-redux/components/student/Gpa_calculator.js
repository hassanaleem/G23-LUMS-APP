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
  Pressable,
  Touchable,
  TouchableOpacity,
  ImageBackground,
  TouchableHighlight,
  Dimensions,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Logout_button } from "../buttons/Logout_button";
import { Main_button } from "../buttons/Main_button";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getEnrollments } from "../../actions/coursesactions";
import { getGrade } from "../../actions/courseGradeActions";
import { useFonts } from "expo-font";

const { width, height } = Dimensions.get("screen");

export const Gpa_calculator = ({ navigation }) => {

  const [loaded] = useFonts({
    Outfit: require("../assets/fonts/static/Outfit-Bold.ttf"),
  });
  const dispatch = useDispatch();
  const [countArray, setCountarray] = useState([0]);
  const [creditsList, setCreditsList] = useState([0]);
  const [gradesList, setGradesList] = useState(["A+"]);
  const [get, setGet] = useState(false);


  ////////////////////////
  let frontendCredits = 0;
  let frontendGrades = 0;
  const calcaulateGpa = () => {
    let totalCredits = 0;
    let totalGrades = 0;
    for (let i = 0; i < creditsList.length; i++) {
      totalCredits += parseFloat(creditsList[i]);
      totalGrades += parseFloat(gradesList[i]) * parseFloat(creditsList[i]);
    }
    let gpa = totalGrades / totalCredits;
    frontendCredits = totalCredits;
    frontendGrades = totalGrades;
    gpa = gpa.toFixed(2);
    return gpa;
  };
  const calculateCgpa = () => {
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

      let temp1 = totalCredits
      totalCredits += parseFloat(grades[i].credit_hrs);
      let temp = grades[i].grade;
      if (temp == "NA") {
        totalCredits = temp1;
      } else {
      totalGrades +=
        parseFloat(gradeToValue[temp]) * parseFloat(grades[i].credit_hrs);
      }
    }

    if (totalCredits != 0 && totalGrades != 0 && frontendCredits == 0) {
      let gpa = totalGrades / totalCredits;
      gpa = gpa.toFixed(2);
      return gpa;
    } else if (frontendCredits != 0 && frontendGrades != 0) {
      let gpa =
        (totalGrades + frontendGrades) / (totalCredits + frontendCredits);
      gpa = gpa.toFixed(2);
      return gpa
    }
  };

  /////////////////////////

  let userState = useSelector((state) => state.loginReducer);
  let user = userState.user.Id;
  if (get == false) {
    dispatch(getEnrollments(user));
    setGet(true);
  }

  let gradesState = useSelector((state) => state.courseGradeReducer);
  let grades = gradesState.data;

  let gpa = calcaulateGpa();
  let cgpa = calculateCgpa()

  ////////////////////////

  return (
    <ImageBackground
      source={require("../assets/whiteBackground.png")}
      resizeMode="cover"
      style={styles.backgroundImage}
    >
      <ScrollView style={styles.container}>
        <Logout_button nav={navigation} />
        <Text style={styles.topheading}>GPA Calculator</Text>
        <Text style={styles.unitsheading}> Units </Text>
        <Text style={styles.gradeheading}> Grade </Text>
        {countArray.map((item, index) => {
          return (
            <View style={styles.picker} key={index}>
              <Text style={{ color: "white" }}>{index}</Text>
              <Picker
                selectedValue={creditsList[index]}
                style={styles.unitsDropdown}
                onValueChange={(itemValue, itemIndex) => {
                  let newArr = [...creditsList];
                  newArr[index] = itemValue;
                  setCreditsList(newArr);
                }}
              >
                <Picker.Item label="  -" value="0" />
                <Picker.Item label="  1" value="1" />
                <Picker.Item label="  2" value="2" />
                <Picker.Item label="  3" value="3" />
                <Picker.Item label="  4" value="4" />
              </Picker>

              <Picker
                selectedValue={gradesList[index]}
                style={styles.gradesDropdown}
                onValueChange={(itemValue, itemIndex) => {
                  let newArr = [...gradesList];
                  newArr[index] = itemValue;
                  setGradesList(newArr);
                }}
              >
                <Picker.Item label="  -" value="0" />
                <Picker.Item label="  A+" value="4" />
                <Picker.Item label="  A" value="4.0" />
                <Picker.Item label="  A-" value="3.7" />
                <Picker.Item label="  B+" value="3.3" />
                <Picker.Item label="  B" value="3.0" />
                <Picker.Item label="  B-" value="2.7" />
                <Picker.Item label="  C+" value="2.3" />
                <Picker.Item label="  C" value="2" />
                <Picker.Item label="  C-" value="1.7" />
                <Picker.Item label="  D+" value="1.3" />
                <Picker.Item label="  D" value="1" />
                <Picker.Item label="  F" value="0" />
              </Picker>
            </View>
          );
        })}

        <TouchableOpacity
          style={styles.moreButton}
          onPress={() => {
            setCountarray([...countArray, countArray.length]);
          }}
        >
          <Text style={styles.moreText}>Click here to add another course</Text>
        </TouchableOpacity>
        <View style={styles.gpaBox}>
          <Text style={styles.gpaText}>
            Predicted GPA: {gpa} Predicted CGPA: {cgpa}
          </Text>
        </View>
        <Main_button
          text="Go Back"
          onPress={() => navigation.navigate("student")}
          horizontal_padding={0}
          margintop={90}
          marginleft={width/6}
          marginright={width/6}
        />
      </ScrollView>
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
    fontFamily: "Outfit",
    fontSize: 27,
    fontWeight: "bold",
    marginTop: height / 24,
    marginLeft: width / 12,
  },

  unitsheading: {
    position: "absolute",
    top: height/8,
    left: width/5.3,
    fontFamily: 'Outfit',
    fontSize: 24,
  },

  picker: {
    top: -100,
    left: 0,
    width: 200,
    height: 50,
    marginTop: 20,
  },

  gradeheading: {
    position: "absolute",
    top: height/8,
    left: width/1.55,
    fontFamily: 'Outfit',
    fontSize: 24,
  },

  unitsDropdown: {
    position: "absolute",
    width: 144,
    height: 37,
    top: 168,
    left: 30,
    fontSize: 24,
    borderRadius: 7,
    textAlign: "center",
    backgroundColor: "#EDEDED",
  },

  gradesDropdown: {
    position: "absolute",
    width: 144,
    height: 37,
    top: 168,
    left: 216,
    fontSize: 24,
    borderRadius: 7,
    textAlign: "center",
    backgroundColor: "#EDEDED",
  },

  moreButton: {
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    position: "relative",
    width: width / 1.55,
    height: height/28,
    top: 50,
    borderRadius: 40,
    backgroundColor: "#79c4f2",
    marginTop: 75,
  },

  moreText: {
    // position: "absolute",
    fontFamily: 'Outfit',
    fontSize: 13,
    lineHeight: 24,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },

  gpaBox: {
    position: "relative",
    alignSelf: "center",
    width: width/2.59,
    height: height/21,
    top: height/12.2,
    borderRadius: 7,
    backgroundColor: "#BEBEBE",
  },
  
  gpaText: {
    textAlign: "center",
    alignSelf: "center",
    fontWeight: "bold",
    fontFamily: 'Outfit',
    fontSize: 14,
    lineHeight: 17.64,
    top: 3,
  },
});
