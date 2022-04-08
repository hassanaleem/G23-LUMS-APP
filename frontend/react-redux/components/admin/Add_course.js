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

import { Logout_button } from "../buttons/Logout_button";
import { Main_button } from "../buttons/Main_button";
import { Search_bar } from '../searchBar/Search_bar';

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const Add_course = ({navigation}) => {

  const [courseCode, setcourseCode] = useState("");
  const [courseName, setcourseName] = useState("");
  const [courseTimings, setcourseTimings] = useState("");
  const [courseDay, setcourseDay] = useState("");
  const [courseInstructorID, setcourseInstructorID] = useState("");
  
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/background.png')}
        resizeMode="cover"
        style={{ width: '100%', height: '100%' }}>
          <Logout_button nav = {navigation} />
          
          <Text
          style={{
            position: 'absolute',
            top: 35,
            marginLeft: 25,
            fontSize: 27,
            fontWeight: 'bold',
          }}>
          Add Course
        </Text>

        <Text style={styles.id_text0}>All fields are required</Text>

        <Text style={styles.id_text1}>Course Code</Text>

        <TextInput
          style={styles.input_fields1}
          placeholder="Enter course code"
        />

        <Text style={styles.id_text2}>Course Name</Text>

        <TextInput
          style={styles.input_fields2}
          placeholder="Enter course code"
        />

        <Text style={styles.id_text3}>Course Timings</Text>

        <TextInput
          style={styles.input_fields3}
          placeholder="Enter time in format: hh/mm - hh/mm"
        />

        <Text style={styles.id_text4}>Course Day</Text>

        <TextInput
          style={styles.input_fields4}
          placeholder="Enter course day in format day/day"
        />

        <Text style={styles.id_text5}>Course Instructor ID</Text>

        <TextInput
          style={styles.input_fields5}
          placeholder="Enter instructor ID"
        />

        <Main_button
          text="Add Course"
          onpress=""
          horizontal_padding={0}
          margintop={20}
          marginleft={65}
          marginright={65}
        />

        <Main_button
          text="Go Back"
          onPress={() => navigation.navigate("admin")}
          horizontal_padding={0}
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
    justifyContent: 'center',
    alignItems: 'center',
  },

id_text0: {
    marginTop: 2,
    marginLeft: 35,
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'sans-serif-thin',
  },

  id_text1: {
    marginTop: 7,
    marginLeft: 35,
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-thin',
  },

  id_text2: {
    marginTop: 7,
    marginLeft: 35,
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-thin',
  },

  id_text3: {
    marginTop: 7,
    marginLeft: 35,
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-thin',
  },

  id_text4: {
    marginTop: 7,
    marginLeft: 35,
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-thin',
  },

  id_text5: {
    marginTop: 7,
    marginLeft: 35,
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-thin',
  },

  input_fields1: {
    marginLeft: 30,
    height: 40,
    width: 300,
    marginTop: 3,
    borderColor: 'gray',
    borderWidth: 0,
    borderRadius: 20,
    backgroundColor: '#eceded',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },

  input_fields2: {
    marginLeft: 30,
    height: 40,
    width: 300,
    marginTop: 3,
    borderColor: 'gray',
    borderWidth: 0,
    borderRadius: 20,
    backgroundColor: '#eceded',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },

  input_fields3: {
    marginLeft: 30,
    height: 40,
    width: 300,
    marginTop: 3,
    borderColor: 'gray',
    borderWidth: 0,
    borderRadius: 20,
    backgroundColor: '#eceded',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },

  input_fields4: {
    marginLeft: 30,
    height: 40,
    width: 300,
    marginTop: 3,
    borderColor: 'gray',
    borderWidth: 0,
    borderRadius: 20,
    backgroundColor: '#eceded',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },

  input_fields5: {
    marginLeft: 30,
    height: 40,
    width: 300,
    marginTop: 3,
    borderColor: 'gray',
    borderWidth: 0,
    borderRadius: 20,
    backgroundColor: '#eceded',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },

});
