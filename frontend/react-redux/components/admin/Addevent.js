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
import { useState } from "react";
import { Logout_button } from "../buttons/Logout_button";
import { Main_button } from "../buttons/Main_button";
import { useDispatch, useSelector } from "react-redux";
import { postEvents, clearMessage } from "../../actions/eventsAction";
import {useFonts} from 'expo-font';

const {width, height} = Dimensions.get("screen");

export const Addevent = ({ navigation }) => {
  const [loaded] = useFonts({
    Outfit: require('../assets/fonts/static/Outfit-Bold.ttf'),
  }); 
  const dispatch = useDispatch();
  const [name, setname] = useState("");
  const [date, setdate] = useState("");
  const [time, settime] = useState("");
  const [type, settype] = useState("");

  const onPress = () => {
    if (name == "" || date == "" || time == "" || type == "") {
      Alert.alert("Oops, You missed a field");
    }
    else{
      dispatch(postEvents(name, date, time, type));
      setname("");
      setdate("");
      settime("");
      settype("");
    } 
  };

  let message = useSelector((state) => state.eventsReducer).message;
  if (message == "Success") {
    Alert.alert("Event Added Successfully");
    dispatch(clearMessage())
  }

  if (message == "Failure") {
    Alert.alert("Event Addition Failed. Please try again");
    dispatch(clearMessage())
  }

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
            fontSize: 27,
            fontWeight: 'bold',
            marginTop: height/24,
            marginLeft: width/12,
          }}>
          Add Event
        </Text>

        <Text style={styles.topline}>All fields are required</Text>

        <Text style={styles.id_text0}>Event Name</Text>

        <TextInput onChangeText={(text) => {
          setname(text);
        }}
          value={name}
          style={styles.input_fields} placeholder="Enter Event Name" />

        <Text style={styles.id_text}>Event Date</Text>

        <TextInput onChangeText={(text) => {
          setdate(text);
        }}
          value={date}
          style={styles.input_fields} placeholder="Enter date in format: dd/mm/yyyy" />

        <Text style={styles.id_text}>Event Timings</Text>

        <TextInput onChangeText={(text) => {
          settime(text);
        }}
          value={time}
          style={styles.input_fields} placeholder="Enter time in format: hh/mm-hh/mm" />

        <Text style={styles.id_text}>Event Type</Text>

        <TextInput onChangeText={(text) => {
          settype(text);
        }}
          value={type}
          style={styles.input_fields} placeholder="Enter type(ie..,talk,concert)" />

        <Main_button
          text="Add Event"
          onPress={onPress}
          horizontal_padding={0}
          margintop={height/6.2}
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
    marginTop: height/40,
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


