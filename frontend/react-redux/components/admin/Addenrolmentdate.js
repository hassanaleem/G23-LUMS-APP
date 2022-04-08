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
} from 'react-native';

import { useState } from "react";
import { Logout_button } from  "../buttons/Logout_button";
import { Main_button } from "../buttons/Main_button";
import { useDispatch } from "react-redux";
import { postEvents } from "../../actions/eventsAction";
//import { useSelector } from "react-redux";

export const Addenrolmentdate = ({ navigation }) => {


  const dispatch = useDispatch();
  const [enrolmentdate, setenrolmentdate] = useState("");
  const [enrolmenttime, setenrolmenttime] = useState("");

  const onPress = () => {
    dispatch(postEvents("Enrolment", enrolmentdate, enrolmenttime, "Enrolment"));
    setenrolmentdate("");
    setenrolmenttime("");
  };
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
            top: 45,
            left: 10,
            marginLeft: 25,
            fontSize: 23,
            fontWeight: 'bold',
            fontFamily: 'sans-serif-thin',
          }}>
          Add Enrolment Date
        </Text>
        {/* /* <Text
          style={{
            position: 'absolute',
            top: 65,
            left: 10,
            marginLeft: 25,
            fontSize: 40,
            fontWeight: 'bold',
            fontFamily: 'sans-serif-thin',
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
            fontFamily: 'sans-serif-thin',
          }}>
          Date
        </Text> */}

        <Text style={styles.topline}>All fields are required</Text>

        <Text style={styles.id_text}>Enrolment Date</Text>

        <TextInput onChangeText={(text) => {
          setenrolmentdate(text);
        }}
          value={enrolmentdate}
          style={styles.userid}
          placeholder="Enter date in format: dd/mm/yyyy"
        />

        <Text style={styles.id_text}>Enrolment Time</Text>

        <TextInput onChangeText={(text) => {
          setenrolmenttime(text);
        }}
          value={enrolmenttime}
          style={styles.userid}
          placeholder="Enter time in format: hour/minute"
        />

        <Main_button

          text="Add Enrolment Date"
          onPress={onPress}
          horizontal_padding={30}
          margintop={90}
          marginleft={47}
          marginright={47}
        />

        <Main_button
          text="Go Back"
          onPress={() => navigation.navigate("admin")}
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  id_text: {
    marginTop: 10,
    marginLeft: 35,
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-thin',
  },
  topline: {
    marginTop: 10,
    marginLeft: 35,
    fontSize: 15,
    fontFamily: 'sans-serif-thin',
  },
  userid: {
    marginLeft: 35,
    height: 40,
    width: 300,
    marginTop: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#eceded',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
});


