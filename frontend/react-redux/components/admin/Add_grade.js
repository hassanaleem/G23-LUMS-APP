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

export const Add_grade = ({navigation}) => {

  const [studentRollNumber, setstudentRollNumber] = useState("");
  const [courseCode, setcourseCode] = useState("");
  const [grade, setgrade] = useState("");
  const [courseUnit, setcourseUnit] = useState("");
  
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/background.png')}
        resizeMode="cover"
        style={{ width: '100%', height: '100%' }}>
          <Logout_button onpress="" />
          
          <Text
          style={{
            position: 'absolute',
            top: 35,
            marginLeft: 25,
            fontSize: 27,
            fontWeight: 'bold',
          }}>
          Add Grade
        </Text>

        <Text style={styles.id_text0}>All fields are required</Text>

        <Text style={styles.id_text1}>Student Roll Number</Text>

        <TextInput
          style={styles.input_fields1}
          placeholder="Enter student roll number"
        />

        <Text style={styles.id_text2}>Course Code</Text>

        <TextInput
          style={styles.input_fields2}
          placeholder="Enter course code"
        />

        <Text style={styles.id_text3}>Grade</Text>

        <TextInput
          style={styles.input_fields3}
          placeholder="Enter grade (i.e., A+, A, B) "
        />

        <Text style={styles.id_text4}>Course Unit</Text>

        <TextInput
          style={styles.input_fields4}
          placeholder="Enter course unit (i.e., 1, 2, 3, 4)"
        />

        <Main_button
          text="Add Grade"
          onpress=""
          horizontal_padding={0}
          margintop={50}
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
    marginTop: 20,
    marginLeft: 35,
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'sans-serif-thin',
  },

  id_text1: {
    marginTop: 10,
    marginLeft: 35,
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-thin',
  },

  id_text2: {
    marginTop: 10,
    marginLeft: 35,
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-thin',
  },

  id_text3: {
    marginTop: 10,
    marginLeft: 35,
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-thin',
  },

  id_text4: {
    marginTop: 10,
    marginLeft: 35,
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-thin',
  },

  input_fields1: {
    marginLeft: 30,
    height: 40,
    width: 300,
    marginTop: 5,
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
    marginTop: 5,
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
    marginTop: 5,
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
    marginTop: 5,
    borderColor: 'gray',
    borderWidth: 0,
    borderRadius: 20,
    backgroundColor: '#eceded',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },

});