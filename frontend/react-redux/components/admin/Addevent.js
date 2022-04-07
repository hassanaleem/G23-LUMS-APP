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

export const Addevent = ({navigation}) => {
  const dispatch = useDispatch();
  const [name, setname] = useState("");
  const [date, setdate] = useState("");
  const [time, settime] = useState("");
  const [type, settype] = useState("");

  const onPress = () => {
    dispatch(postEvents(name, date, time, type));
    setname("");
    setdate("");
    settime("");
    settype("");

  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/background.png')}
        resizeMode="cover"
        style={{ width: '100%', height: '100%' }}>
        <Logout_button nav={navigation} />

        <Text
          style={{
            position: 'absolute',
            top: 30,
            left: 10,
            marginLeft: 25,
            fontSize: 35,
            fontWeight: 'bold',
            fontFamily: 'sans-serif-thin',
          }}>
          Add Event
        </Text>

        <Text style={styles.topline}>All fields are required</Text>

        <Text style={styles.id_text}>Event Name</Text>

        <TextInput onChangeText={(text) => {
          setname(text);
        }}
          value={name}
          style={styles.userid} placeholder="Enter Event Name" />

        <Text style={styles.id_text}>Event Date</Text>

        <TextInput onChangeText={(text) => {
          setdate(text);
        }}
          value={date}
          style={styles.userid} placeholder="Enter date in format: dd/mm/yyyy" />

        <Text style={styles.id_text}>Event Timings</Text>

        <TextInput onChangeText={(text) => {
          settime(text);
        }}
          value={time}
          style={styles.userid} placeholder="Enter time in format: hh/mm-hh/mm" />

        <Text style={styles.id_text}>Event Type</Text>

        <TextInput onChangeText={(text) => {
          settype(text);
        }}
          value={type}
          style={styles.userid} placeholder="Enter type(ie..,talk,concert)" />

        <Main_button
          text="Add Event"
          onPress={onPress}
          horizontal_padding={30}
          margintop={90}
          marginleft={65}
          marginright={65}
        />

        <Main_button
          text="Go Back"
          onPress={() => navigation.navigate("admin")}
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
    marginTop: 15,
    marginLeft: 35,
    fontSize: 15,
    fontFamily: 'sans-serif-thin',
  },
  userid: {
    marginLeft: 30,
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


