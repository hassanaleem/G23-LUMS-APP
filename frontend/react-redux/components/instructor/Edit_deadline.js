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
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearMessage, updateDeadline } from "../../actions/deadlineactions";
import { useFonts } from 'expo-font';

const {width, height} = Dimensions.get("screen");


export const Edit_deadline = ({ route, navigation }) => {

  let data = JSON.parse(route.params.data)
  const [loaded] = useFonts({
    Outfit: require('../assets/fonts/static/Outfit-Bold.ttf'),
  }); 

  const dispatch = useDispatch()
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  function onPress() {
    dispatch(updateDeadline(time, date, data.Course_ID, data.Instructor_Id, data.Deadline_Title, data.Deadline_Time, data.Deadline_Date))
    setDate("")
    setTime("")
  }

  let message = useSelector((state) => state.deadlineReducer).message

  if (message == "Success Update")
  {
    Alert.alert("Successfully Updated")
    clearMessage()
  }

  if (message == "Failed Update")
  {
    Alert.alert("Failed to Update")
    clearMessage()
  }
  if (!loaded)
  {
    return null;
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background.png")}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      >
      <Logout_button nav = {navigation} />
      <Text style = {styles.topHeading}>Edit Deadline</Text>

      <Text style={styles.topline}>All fields are required</Text>

      <Text style={styles.textfirst}>Deadline Time</Text>
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
          horizontal_padding={0}
          margintop={height/2.98}
          marginleft={width/6}
          marginright={width/6}
        />

        <Main_button
          text="Go Back"
          onPress={() => {navigation.navigate("instructor")}}
          horizontal_padding={0}
          margintop={height/50}
          marginleft={width/6}
          marginright={width/6}
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
      position: 'absolute',
      fontSize: 27,
      fontWeight: 'bold',
      marginTop: height/24,
      marginLeft: width/12,
  },

  textfirst: 
  {
    marginTop: height/120,
    marginLeft: width/10,
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Outfit',
  },
  text: {
    marginTop: height/90,
    marginLeft: width/10,
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Outfit',
  },

  box: {
    height: 40,
    width: width / 1.2,
    marginTop: 3,
    borderColor: 'gray',
    borderWidth: 0,
    borderRadius: 20,
    backgroundColor: '#eceded',
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignSelf: "center"
  },

  topline: {
    marginTop: height/20,
    marginLeft: width/11,
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'Outfit',
  }

});
