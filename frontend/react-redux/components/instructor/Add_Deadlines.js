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
} from "react-native";
import { useState } from "react";
import { Logout_button } from "../buttons/Logout_button";
import { Main_button } from "../buttons/Main_button";
import { useDispatch } from "react-redux";
import { addDeadline } from "../../actions/deadlineactions";
import { useSelector } from "react-redux";
import { getDeadline } from "../../actions/deadlineactions";
export const Add_Deadlines = ({ navigation }) => {
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
    if (
      courseCode === "" ||
      deadlineTitle === "" ||
      deadlineDate === "" ||
      deadlineTime === ""
    ) {
      Alert.alert("Please fill all the fields");
    } else {
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
        Alert.alert("Deadline added successfully");
      }
    }
  };
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
            top: 32,
            left: 10,
            marginLeft: 25,
            fontSize: 35,
            fontWeight: "bold",
            fontFamily: "sans-serif-thin",
          }}
        >
          Add Deadline
        </Text>

        <Text style={styles.topline}>All fields are required</Text>

        <Text style={styles.id_text}>Course Code</Text>

        <TextInput
          style={styles.userid}
          placeholder="Enter Course Code"
          value={courseCode}
          onChangeText={(text) => setCourseCode(text)}
        />

        <Text style={styles.id_text}>Deadline Title</Text>

        <TextInput
          style={styles.userid}
          placeholder="Enter Deadline Title"
          value={deadlineTitle}
          onChangeText={(text) => setDeadlineTitle(text)}
        />

        <Text style={styles.id_text}>Deadline Time</Text>

        <TextInput
          style={styles.userid}
          placeholder="Enter Deadline Time hh:mm"
          value={deadlineTime}
          onChangeText={(text) => setDeadlineTime(text)}
        />

        <Text style={styles.id_text}>Deadline Date</Text>

        <TextInput
          style={styles.userid}
          placeholder="Enter Deadline Date dd:mm:yy"
          value={deadlineDate}
          onChangeText={(text) => setDeadlineDate(text)}
        />

        <Main_button
          text="Add Event"
          onPress={add}
          horizontal_padding={30}
          margintop={90}
          marginleft={65}
          marginright={65}
        />
        <Main_button
          text="Go Back"
          onPress={() => navigation.navigate("instructor")}
          horizontal_padding={50}
          margintop={15}
          marginleft={65}
          marginright={65}
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
    fontFamily: "sans-serif-thin",
  },
  topline: {
    marginTop: 15,
    marginLeft: 35,
    fontSize: 15,
    fontFamily: "sans-serif-thin",
  },
  userid: {
    marginLeft: 30,
    height: 40,
    width: 300,
    marginTop: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "#eceded",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
});
