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

export const Update_course_timings = ({navigation}) => {

  const [isEditable, setisEditable] = useState(false);
  const [courseTimings, setcourseTimings] = useState("");
  const [courseDay, setcourseDay] = useState("");
  
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
          Update Course
        </Text>

        <Text
          style={{
            position: 'absolute',
            top: 70,
            marginLeft: 25,
            fontSize: 27,
            fontWeight: 'bold',
          }}>
          Timings
        </Text>

        <Search_bar bar_text = "Enter course code" font_size = {15} functionType = ""/>

        <Text style={styles.id_text1}>Course Timings</Text>

        <TextInput
          style={[
            styles.input_fields1,
            {
              backgroundColor: isEditable ? '#eceded' : '#C8C8C8'
            }
          ]}
          placeholder={isEditable ? "Course timing from DB" : "Input Disabled [search for course]"}
          editable = {isEditable}
        />

        <Text style={styles.id_text2}>Course Day</Text>

        <TextInput
          style={[
            styles.input_fields2,
            {
              backgroundColor: isEditable ? '#eceded' : '#C8C8C8'
            }
          ]}
          placeholder={isEditable ? "Course day from DB" : "Input Disabled [search for course]"}
          editable = {isEditable}
        />

        <Main_button
          text="Update Timings"
          onPress=""
          horizontal_padding={0}
          margintop={100}
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

  id_text1: {
    marginTop: 150,
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

});
