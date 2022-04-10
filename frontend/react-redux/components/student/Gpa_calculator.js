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
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Logout_button } from "../buttons/Logout_button";
import { Main_button } from "../buttons/Main_button";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getEnrollments } from "../../actions/coursesactions";
import { getGrade } from "../../actions/courseGradeActions";

export const Gpa_calculator = ({ navigation }) => {
  const dispatch = useDispatch();
  const [countArray, setCountarray] = useState([0]);
  const [creditsList, setCreditsList] = useState([0]);
  const [gradesList, setGradesList] = useState(["A+"]);
  const [frontendGpa, setfrontendGpa] = useState(0);

  const [calculate, setCalculate] = useState(true);
  ////////////
  const [courses, setCourses] = useState([]);
  const [get, setGet] = useState(false);
  const [enrollments, setEnrollments] = useState([]);
  const [grades, setGrades] = useState([]);
  const [hmm, setHmm] = useState(false);
  const [tempPrev, setTempPrev] = useState(0);
  const [cgpa, setCgpa] = useState(0);

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
    // setFrontendGrades(totalGrades);
    // console.log(totalGrades, "UWU");
    // setFrontendCredits(totalCredits);
    gpa = gpa.toFixed(2);
    setfrontendGpa(gpa);
    // return gpa;
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
      totalCredits += parseFloat(grades[i].Credit_Hrs);
      let temp = grades[i].Grade;
      totalGrades +=
        parseFloat(gradeToValue[temp]) * parseFloat(grades[i].Credit_Hrs);
    }

    if (totalCredits != 0 && totalGrades != 0 && frontendCredits == 0) {
      let gpa = totalGrades / totalCredits;
      gpa = gpa.toFixed(2);
      setCgpa(gpa);
    } else if (frontendCredits != 0 && frontendGrades != 0) {
      let gpa =
        (totalGrades + frontendGrades) / (totalCredits + frontendCredits);
      gpa = gpa.toFixed(2);
      setCgpa(gpa);
    }
  };
  if (calculate == true) {
    calcaulateGpa();
    calculateCgpa();
    setCalculate(false);
  }
  ////////////////////////

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
    setCalculate(true);
  }

  ////////////////////////

  return (
    <ImageBackground
      source={require("../assets/background.png")}
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
                  setCalculate(true);
                }}
              >
                <Picker.Item label="-" value="0" />
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
                <Picker.Item label="3" value="3" />
                <Picker.Item label="4" value="4" />
              </Picker>

              <Picker
                selectedValue={gradesList[index]}
                style={styles.gradesDropdown}
                onValueChange={(itemValue, itemIndex) => {
                  let newArr = [...gradesList];
                  newArr[index] = itemValue;
                  setGradesList(newArr);
                  setCalculate(true);
                }}
              >
                <Picker.Item label="-" value="0" />
                <Picker.Item label="A+" value="4" />
                <Picker.Item label="A" value="4.0" />
                <Picker.Item label="A-" value="3.7" />
                <Picker.Item label="B+" value="3.3" />
                <Picker.Item label="B" value="3.0" />
                <Picker.Item label="B-" value="2.7" />
                <Picker.Item label="C+" value="2.3" />
                <Picker.Item label="C" value="2" />
                <Picker.Item label="C-" value="1.7" />
                <Picker.Item label="D+" value="1.3" />
                <Picker.Item label="D" value="1" />
                <Picker.Item label="F" value="0" />
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
            Predicted GPA: {frontendGpa} Predicted CGPA: {cgpa}
          </Text>
        </View>
        <Main_button
          text="Go Back"
          onPress={() => navigation.navigate("student")}
          horizontal_padding={50}
          margintop={400}
          marginleft={65}
          marginright={65}
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
    top: 35,
    marginLeft: 25,
    fontSize: 27,
    fontWeight: "bold",
  },
  unitsheading: {
    position: "absolute",
    width: 70,
    height: 30,
    top: 110,
    left: 75,
    fontSize: 24,
    // fontWeight: 400,
  },
  picker: {
    top: -75,
    left: 0,
    width: 200,
    height: 50,
    marginTop: 20,
  },

  gradeheading: {
    position: "absolute",
    width: 80,
    height: 30,
    top: 110,
    left: 253,
    fontSize: 24,
    // fontWeight: 400,
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
    // marginTop: 10,
    // fontWeight: 400,
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
    // marginTop: 10,
  },

  moreButton: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    width: 235,
    height: 31,
    top: 50,
    left: 81,
    borderRadius: 40,
    backgroundColor: "#79c4f2",
    marginTop: 75,
  },
  moreText: {
    // position: "absolute",

    fontSize: 14,
    lineHeight: 24,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  gpaBox: {
    position: "relative",
    width: 150,
    height: 40,
    top: 350,
    left: 120,
    borderRadius: 7,
    backgroundColor: "#BEBEBE",
  },
  gpaText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: 17.64,
  },
});
