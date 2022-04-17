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
import { useState } from "react";
import { Logout_button } from "../buttons/Logout_button";
import { Main_button } from "../buttons/Main_button";
import { useDispatch } from "react-redux";
import { addDeadline, clearMessage } from "../../actions/deadlineactions";
import { useSelector } from "react-redux";
import { getDeadline } from "../../actions/deadlineactions";
import { useFonts } from 'expo-font';
const { width, height } = Dimensions.get("screen");

export const Add_Deadlines = ({ navigation }) => {
  const [loaded] = useFonts({
    Outfit: require('../assets/fonts/static/Outfit-Bold.ttf'),
  });
  const dispatch = useDispatch();
  const [courseCode, setCourseCode] = useState("");
  const [deadlineTitle, setDeadlineTitle] = useState("");
  const [deadlineDate, setDeadlineDate] = useState("");
  const [deadlineTime, setDeadlineTime] = useState("");
  const [instructorId, setInstructorId] = useState("");
  const [deadlinesFetched, setDeadlinesFetched] = useState(false);

  let user = useSelector((state) => state.loginReducer.user.Name);
  if (instructorId == "") {
    setInstructorId(user);
  }
  if (deadlinesFetched == false) {
    dispatch(getDeadline("all"));
    setDeadlinesFetched(true);
  }
  let deadlines = useSelector((state) => state.deadlineReducer.data);

  const add = () => {

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    var entered_date = parseInt(deadlineDate.substring(0,2));
    var entered_month = parseInt(deadlineDate.substring(3,5));
    var entered_year = parseInt(deadlineDate.substring(6,10));

    var h1 = parseInt(deadlineTime.substring(0,2));
    var m1 = parseInt(deadlineTime.substring(3,5));

    if (courseCode === "" || deadlineTitle === "" || deadlineDate === "" || deadlineTime === "") {
      Alert.alert("Please fill all the fields");
    }
    else if(deadlineDate[2] != '/' || deadlineDate[5] != '/' || deadlineDate.substring(6,10).length != 4) {
      Alert.alert("Incorrect Date Format","Format: dd/mm/yyyy\n\ni.e. 26/09/2022");
    }
    else if(entered_date < 0 || entered_date > 31) {
      Alert.alert("Incorrect Date Entered");
    }
    else if(entered_month < 0 || entered_month > 12) {
      Alert.alert("Incorrect Month Entered");
    }
    else if(parseInt(deadlineDate.substring(6,10)) < yyyy) {
      Alert.alert("Entered Date Has Already Passed");
    }
    else if (entered_month <= mm && entered_date < dd) {
      Alert.alert("Entered Date Has Already Passed");
    }
    else if(h1 > 24 || h1 < 0 || m1 > 59 || m1 < 0) {
      Alert.alert("Incorrect Time Format","Format: hh:mm\n\ni.e.11:00, 23:00");
    }
    else if(deadlineTime[2] != ':') {
      Alert.alert("Incorrect Time Format","Format: hh:mm\n\ni.e.11:00, 23:00");
    } 
    else {
      let data = {
        Course_ID: courseCode.toUpperCase(),
        Deadline_Date: deadlineDate,
        Deadline_Time: deadlineTime,
        Deadline_Title: deadlineTitle.toUpperCase(),
        Instructor_Id: instructorId,
      };
      let found = false;
      for (let i = 0; i < deadlines.length; i++) {
        if (
          deadlines[i].Course_ID == data.Course_ID &&
          deadlines[i].Deadline_Title == data.Deadline_Title
        ) {
          found = true;
          Alert.alert("Deadline already exists");
          setCourseCode("");
          setDeadlineTitle("");
          setDeadlineDate("");
          setDeadlineTime("");
          break;
        }
      }
      if (found == false) {
        dispatch(addDeadline(data));
        setCourseCode("");
        setDeadlineTitle("");
        setDeadlineDate("");
        setDeadlineTime("");
        dispatch(getDeadline("all"));
      }
    }
  };

  let message = useSelector((state) => state.deadlineReducer).message;
  console.log("message", message)

  if (message == "Success Add Deadline")
  {
    Alert.alert("Successfully Added Deadline");
    dispatch(clearMessage());
  }
  if (message == "Failure Add Deadline") {
    Alert.alert("You do not have access to this course");
    dispatch(clearMessage());
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
            fontWeight: 'bold',
            marginTop: height / 24,
            marginLeft: width / 12,
            fontFamily: 'Outfit',
          }}
        >
          Add Deadline
        </Text>

        <Text style={styles.topline}>All fields are required</Text>

        <Text style={styles.id_text1}>Course Code</Text>

        <TextInput
          style={styles.input_fields1}
          placeholder="Enter Course Code"
          value={courseCode}
          onChangeText={(text) => setCourseCode(text)}
        />

        <Text style={styles.id_text2}>Deadline Title</Text>

        <TextInput
          style={styles.input_fields2}
          placeholder="Enter Deadline Title"
          value={deadlineTitle}
          onChangeText={(text) => setDeadlineTitle(text)}
        />

        <Text style={styles.id_text4}>Deadline Date</Text>

        <TextInput
          style={styles.input_fields4}
          placeholder="Enter Deadline Date dd/mm/yy"
          value={deadlineDate}
          onChangeText={(text) => setDeadlineDate(text)}
        />

        <Text style={styles.id_text3}>Deadline Time</Text>

        <TextInput
          style={styles.input_fields3}
          placeholder="Enter Deadline Time hh:mm"
          value={deadlineTime}
          onChangeText={(text) => setDeadlineTime(text)}
        />

        <Main_button
          text="Add Deadline"
          onPress={add}
          horizontal_padding={0}
          margintop={height/5.3}
          marginleft={width/6}
          marginright={width/6}
        />
        <Main_button
          text="Go Back"
          onPress={() => navigation.navigate("instructor")}
          horizontal_padding={50}
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
  id_text: {
    marginTop: 10,
    marginLeft: 35,
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: 'Outfit',
  },
  topline: {
    marginTop: height / 40,
    marginLeft: width / 11,
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'Outfit',
  },
 
  id_text1: {
    marginTop: height / 120,
    marginLeft: width / 10,
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: 'Outfit',
  },

  id_text2: {
    marginTop: height / 90,
    marginLeft: width / 10,
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: 'Outfit',
  },

  id_text3: {
    marginTop: height / 90,
    marginLeft: width / 10,
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: 'Outfit',
  },

  id_text4: {
    marginTop: height / 90,
    marginLeft: width / 10,
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: 'Outfit',
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
    fontFamily: 'Outfit',
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
    fontFamily: 'Outfit',
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
    fontFamily: 'Outfit',
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
    fontFamily: 'Outfit',
  },


});
