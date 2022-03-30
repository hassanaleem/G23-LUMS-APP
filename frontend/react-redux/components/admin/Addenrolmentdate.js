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

import { Logout_button } from './logout_button';
import { Main_button } from './Main_button';

export const Addenrolmentdate = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/background.png')}
        resizeMode="cover"
        style={{ width: '100%', height: '99%' }}>
        <Logout_button onpress="" />

        <Text
          style={{
            position: 'absolute',
            top: 25,
            left: 10,
            marginLeft: 25,
            fontSize: 40,
            fontWeight: 'bold',
            fontFamily: 'sans-serif-thin',
          }}>
          Add 
        </Text>
        <Text
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
        </Text>

        <Text
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
        </Text>

        <Text style={styles.topline}>All fields are required</Text>

        <Text style={styles.id_text}>Enrolment Date</Text>

        <TextInput
          style={styles.userid}
          placeholder="Enter date in format: dd/mm/yyyy"
        />

        <Text style={styles.id_text}>Enrolment Date</Text>

        <TextInput
          style={styles.userid}
          placeholder="Enter time in format: hour/minute"
        />

        <Main_button
          text="Add Enrolment Date"
          onpress=""
          horizontal_padding={30}
          margintop={180}
          marginleft={47}
          marginright={47}
        />

        <Main_button
          text="Go Back"
          onpress=""
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
    marginTop: 90,
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


