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

export const Gpa_calculator = ({ navigation }) => {
  const [countArray, setCountarray] = useState([0]);
  const [creditsList, setCreditsList] = useState([0]);
  const [gradesList, setGradesList] = useState(["A+"]);

  const calcaulateGpa = () => {
    let totalCredits = 0;
    let totalGrades = 0;
    for (let i = 0; i < creditsList.length; i++) {
      totalCredits += parseFloat(creditsList[i]);
      totalGrades += parseFloat(gradesList[i]) * parseFloat(creditsList[i]);
    }
    let gpa = totalGrades / totalCredits;
    gpa = gpa.toFixed(2);
    console.log(gpa);
    return gpa;
  };
  const calculateCgpa = () => {
    let totalCredits = 0;
    let totalGrades = 0;
  };
  let gpa = calcaulateGpa();
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
                }}
              >
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
                }}
              >
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
            Predicted GPA: {gpa} Predicted CGPA: {gpa}
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
