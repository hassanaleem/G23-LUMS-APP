import React from 'react';
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
  Dimensions
} from 'react-native';

const {width, height} = Dimensions.get("screen");

import { useState } from "react";
import { Logout_button } from  "../buttons/Logout_button";
import { Main_button } from "../buttons/Main_button";
import { useDispatch, useSelector } from "react-redux";
import { clearMessage, postEvents } from "../../actions/eventsAction";
import { useFonts } from 'expo-font';
//import { useSelector } from "react-redux";

export const Addenrolmentdate = ({ navigation }) => {

  const [loaded] = useFonts({
    Outfit: require('../assets/fonts/static/Outfit-Bold.ttf'),
  }); 
  const dispatch = useDispatch();
  const [enrolmentdate, setenrolmentdate] = useState("");
  const [enrolmenttime, setenrolmenttime] = useState("");

  const onPress = () => {

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    var entered_date = parseInt(enrolmentdate.substring(0,2));
    var entered_month = parseInt(enrolmentdate.substring(3,5));
    var entered_year = parseInt(enrolmentdate.substring(6,10));

    var h1 = parseInt(enrolmenttime.substring(0,2));
    var m1 = parseInt(enrolmenttime.substring(3,5));

    if (enrolmentdate == "" || enrolmenttime == "") {
      Alert.alert("Please fill all the fields");
    }
    else if(enrolmentdate[2] != '/' || enrolmentdate[5] != '/' || enrolmentdate.substring(6,10).length != 4) {
      Alert.alert("Incorrect Date Format","Format: dd/mm/yyyy\n\ni.e. 26/09/2022");
    }
    else if(entered_date < 0 || entered_date > 31) {
      Alert.alert("Incorrect Date Entered");
    }
    else if(entered_month < 0 || entered_month > 12) {
      Alert.alert("Incorrect Month Entered");
    }
    else if(parseInt(enrolmentdate.substring(6,10)) < yyyy) {
      Alert.alert("Entered Date Has Already Passed");
    }
    else if (entered_month <= mm && entered_date < dd) {
      Alert.alert("Entered Date Has Already Passed");
    }
    else if(h1 > 24 || h1 < 0 || m1 > 59 || m1 < 0) {
      Alert.alert("Incorrect Time Format","Format: hh:mm\n\ni.e.11:00, 23:00");
    }
    else if(enrolmenttime[2] != ':') {
      Alert.alert("Incorrect Time Format","Format: hh:mm\n\ni.e.11:00, 23:00");
    }
    else
    {
      dispatch(postEvents("Enrolment", enrolmentdate, enrolmenttime, "Enrolment"));
      setenrolmentdate("");
      setenrolmenttime("");
    }
  
  };

  let message = useSelector((state) => state.eventsReducer).message;
  if (message == "Success") {
    Alert.alert("Enrollment Date Added Successfully");
    dispatch(clearMessage())
  }

  if(message == "Failure")
  {
    Alert.alert("Enrollment Date Addition Failed. Please try again");
    dispatch(clearMessage())
  }
  
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background.png")}
        resizeMode="cover"
        style={{ width: '100%', height: '100%' }}>
        <Logout_button nav = {navigation}/>

        <Text
          style={{
            position: 'absolute',
            fontSize: 27,
            fontWeight: 'bold',
            marginTop: height/24,
            marginLeft: width/12,
          }}>
          Add Enrolment
        </Text>

        <Text
          style={{
            position: 'absolute',
            fontSize: 27,
            fontWeight: 'bold',
            marginTop: height/13,
            marginLeft: width/12,
          }}>
          Date
        </Text>

        {/* /* <Text
          style={{
            position: 'absolute',
            top: 65,
            left: 10,
            marginLeft: 25,
            fontSize: 40,
            fontWeight: 'bold',
            fontFamily: 'Outfit',
          }}>
          Enrolment
        </Text> */} 

        {/* <Text
          style={{
            position: 'absolute',
            top: 105,
            left: 10,
            marginLeft: 25,
            fontSize: 40,
            fontWeight: 'bold',
            fontFamily: 'Outfit',
          }}>
          Date
        </Text> */}

        <Text style={styles.topline}>All fields are required</Text>

        <Text style={styles.id_text0}>Enrolment Date</Text>

        <TextInput onChangeText={(text) => {
          setenrolmentdate(text);
        }}
          value={enrolmentdate}
          style={styles.input_fields}
          placeholder="Enter date in format: dd/mm/yyyy"
        />

        <Text style={styles.id_text}>Enrolment Time</Text>

        <TextInput onChangeText={(text) => {
          setenrolmenttime(text);
        }}
          value={enrolmenttime}
          style={styles.input_fields}
          placeholder="Enter time in format: hh:mm"
        />

        <Main_button

          text="Add Enrolment Date"
          onPress={onPress}
          horizontal_padding={0}
          margintop={height/3.2}
          marginleft={width/6}
          marginright={width/6}
        />

        <Main_button
          text="Go Back"
          onPress={() => navigation.navigate("admin")}
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  topline: {
    marginTop: height/15,
    marginLeft: width/11,
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'Outfit',
  },
  
  id_text0: {
    marginTop: height/110,
    marginLeft: width/10,
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Outfit',
  },

  id_text: {
    marginTop: height/50,
    marginLeft: width/10,
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Outfit',
  },
  
  input_fields: {
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
});


