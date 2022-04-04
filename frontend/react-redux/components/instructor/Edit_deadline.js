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

import { Logout_button } from "../buttons/Logout_button";
import { Main_button } from "../buttons/Main_button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateDeadline } from "../../actions/deadlineactions";


export const Edit_deadline = ({ navigation }) => {

  const dispatch = useDispatch()
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  function onPress() {
    // dispatch(updateDeadline({time, date, course_id, instructor_id, title}))
    setDate("")
    setTime("")
  }

 
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background.png")}
        resizeMode="cover"
        style={{ width: "100%", height: "99%" }}
      >
      <Logout_button nav = {navigation} />
      <Text style = {styles.topHeading}>Edit Deadline</Text>

      <Text style={styles.topline}>All fields are required</Text>

      <Text style={styles.text}>Deadline Time</Text>
      <TextInput 
      style = {styles.box}
      placeholder="Enter time in format: hour/minute"
      value = {time}
      onChangeText={(text) => {setTime(text)}}
      />

      <Text style={styles.text}>Deadline Date</Text>
      <TextInput 
      style = {styles.box} 
      placeholder="Enter date in format: dd/mm/yyyy" 
      value = {date}
      onChangeText={(text) => {setDate(text)}}
      />

      <Main_button
          text="Edit Deadline"
          onPress={onPress}
          horizontal_padding={30}
          margintop={200}
          marginleft={47}
          marginright={47}
        />

        <Main_button
          text="Go Back"
          onPress={() => {navigation.navigate("instructor")}}
          horizontal_padding={50}
          margintop={15}
          marginleft={47}
          marginright={47}
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

  topHeading: {
    position: "absolute",
    marginTop: 35,
    marginLeft: 20,
    fontSize: 30,
    fontWeight: 'bold',
  },

  text: {
    marginTop: 10,
    marginLeft: 50,
    fontSize: 18,
    fontWeight: "bold"
  },

  box: {
    height: 40,
    width: 300,
    marginTop: 5,
    marginLeft: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "#eceded",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },

  topline: {
    marginTop: 50,
    marginLeft: 45,
    fontSize: 12,
    fontFamily: 'sans-serif-thin',
    fontWeight: 'bold',
  }

});
