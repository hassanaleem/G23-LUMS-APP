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
  Dimensions,
} from 'react-native';

import { Logout_button } from "../buttons/Logout_button";
import { Main_button } from "../buttons/Main_button";
import { Search_bar } from '../searchBar/Search_bar';

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const {width, height} = Dimensions.get("screen");

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
          
          <Logout_button nav = {navigation}/>
          
          <Text
          style={{
            position: 'absolute',
            fontSize: 27,
            fontWeight: 'bold',
            marginTop: height/24,
            marginLeft: width/12,
          }}>
          Update Course
        </Text>

        <Text
          style={{
            position: 'absolute',
            fontSize: 27,
            fontWeight: 'bold',
            marginTop: height/13,
            marginLeft: width/12,
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
          onChangeText={(text) => {
            setcourseTimings(text);
          }}
          value={courseTimings}
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
          onChangeText={(text) => {
            setcourseDay(text);
          }}
          value={courseDay}
        />

        <Main_button
          text="Update Timings"
          onPress=""
          horizontal_padding={0}
          margintop={height/4.2}
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

  id_text1: {
    marginTop: height/6,
    marginLeft: width/10,
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-thin',
  },

  id_text2: {
    marginTop: height/50,
    marginLeft: width/10,
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-thin',
  },

  input_fields1: {
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

  input_fields2: {
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
