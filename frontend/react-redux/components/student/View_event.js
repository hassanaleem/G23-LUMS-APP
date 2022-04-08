import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Pressable,
  ScrollView,
} from "react-native";

import { Logout_button } from "../buttons/Logout_button";
import { Main_button } from "../buttons/Main_button";
import { getEvents } from "../../actions/eventsAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { GetRestaurant } from "../../actions/foodactions";
export const View_event = ({ navigation }) => {
  const dispatch = useDispatch();
  dispatch(getEvents);
  // let data = useSelector((state) => state.eventsReducer);
  // console.log(data, "Called");

  return (
    <ImageBackground
      source={require("../assets/background.png")}
      resizeMode="cover"
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Logout_button nav={navigation} />
        <Text style={styles.topheading}> Events </Text>

        <View style={styles.subheading1}>
          <Text> Enrollment </Text>
        </View>
        <ScrollView style={styles.rectangle}>
          <Text style={{ left: 5 }}> Date : Time {"\n"} </Text>
          <Text style={{ left: 5 }}> Date : Time {"\n"} </Text>
          <Text style={{ left: 5 }}> Date : Time {"\n"} </Text>
          <Text style={{ left: 5 }}> Date : Time {"\n"} </Text>
          <Text style={{ left: 5 }}> Date : Time {"\n"} </Text>
          <Text style={{ left: 5 }}> Date : Time {"\n"} </Text>
          <Text style={{ left: 5 }}> Date : Time {"\n"} </Text>
          <Text style={{ left: 5 }}> Date : Time {"\n"} </Text>
          <Text style={{ left: 5 }}> Date : Time {"\n"} </Text>
          <Text style={{ left: 5 }}> Date : Time {"\n"} </Text>
          <Text style={{ left: 5 }}> Date : Time {"\n"} </Text>
          <Text style={{ left: 5 }}> Date : Time {"\n"} </Text>
          <Text style={{ left: 5 }}> Date : Time {"\n"} </Text>
          <Text style={{ left: 5 }}> Date : Time {"\n"} </Text>
          <Text style={{ left: 5 }}> Date : Time {"\n"} </Text>
          <Text style={{ left: 5 }}> Date : Time {"\n"} </Text>
          <Text style={{ left: 5 }}> Date : Time {"\n"} </Text>
          <Text style={{ left: 5 }}> Date : Time {"\n"} </Text>
          <Text style={{ left: 5 }}> Date : Time {"\n"} </Text>
          <Text style={{ left: 5 }}> Date : Time {"\n"} </Text>
          <Text style={{ left: 5 }}> Date : Time {"\n"} </Text>
          <Text style={{ left: 5 }}> Date : Time {"\n"} </Text>
          <Text style={{ left: 5 }}> Date : Time {"\n"} </Text>
          <Text style={{ left: 5 }}> Date : Time {"\n"} </Text>
        </ScrollView>
        <View style={styles.subheading2}>
          <Text> Events </Text>
        </View>
        <ScrollView style={styles.rectangle2}>
          <Text style={{ left: 5 }}> Event Name / Date / Type {"\n"} </Text>
          <Text style={{ left: 5 }}> Event Name / Date / Type {"\n"} </Text>
          <Text style={{ left: 5 }}> Event Name / Date / Type {"\n"} </Text>
          <Text style={{ left: 5 }}> Event Name / Date / Type {"\n"} </Text>
          <Text style={{ left: 5 }}> Event Name / Date / Type {"\n"} </Text>
          <Text style={{ left: 5 }}> Event Name / Date / Type {"\n"} </Text>
          <Text style={{ left: 5 }}> Event Name / Date / Type {"\n"} </Text>
          <Text style={{ left: 5 }}> Event Name / Date / Type {"\n"} </Text>
          <Text style={{ left: 5 }}> Event Name / Date / Type {"\n"} </Text>
          <Text style={{ left: 5 }}> Event Name / Date / Type {"\n"} </Text>
          <Text style={{ left: 5 }}> Event Name / Date / Type {"\n"} </Text>
          <Text style={{ left: 5 }}> Event Name / Date / Type {"\n"} </Text>
          <Text style={{ left: 5 }}> Event Name / Date / Type {"\n"} </Text>
          <Text style={{ left: 5 }}> Event Name / Date / Type {"\n"} </Text>
          <Text style={{ left: 5 }}> Event Name / Date / Type {"\n"} </Text>
          <Text style={{ left: 5 }}> Event Name / Date / Type {"\n"} </Text>
          <Text style={{ left: 5 }}> Event Name / Date / Type {"\n"} </Text>
          <Text style={{ left: 5 }}> Event Name / Date / Type {"\n"} </Text>
          <Text style={{ left: 5 }}> Event Name / Date / Type {"\n"} </Text>
          <Text style={{ left: 5 }}> Event Name / Date / Type {"\n"} </Text>
          <Text style={{ left: 5 }}> Event Name / Date / Type {"\n"} </Text>
          <Text style={{ left: 5 }}> Event Name / Date / Type {"\n"} </Text>
          <Text style={{ left: 5 }}> Event Name / Date / Type {"\n"} </Text>
          <Text style={{ left: 5 }}> Event Name / Date / Type {"\n"} </Text>
        </ScrollView>
        <Main_button
          text="Go Back"
          onPress={() => navigation.navigate("student")}
          horizontal_padding={50}
          margintop={606}
          marginleft={50}
          marginright={47}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  container: {
    flex: 1,
    height: "100%",
  },

  topheading: {
    position: "absolute",
    top: 40,
    left: 33,
    fontSize: 30,
    lineHeight: 37.8,
    fontWeight: "bold",
  },
  subheading1: {
    width: 118,
    height: 30,
    position: "absolute",
    top: 146,
    left: 38,
    fontSize: 24,
    lineHeight: 30.24,
  },
  subheading2: {
    width: 118,
    height: 30,
    position: "absolute",
    top: 310,
    left: 38,
    fontSize: 24,
    lineHeight: 30.24,
  },
  logoutbuttonview: {
    position: "absolute",
    top: 50,
    right: 10,
  },
  rectangle: {
    position: "absolute",
    width: 328,
    height: 110,
    top: 184,
    left: 38,
    borderRadius: 7,
    backgroundColor: "#EDEDED",
  },
  rectangle2: {
    position: "absolute",
    width: 328,
    height: 240,
    top: 347,
    left: 38,
    borderRadius: 7,
    backgroundColor: "#EDEDED",
  },
  logoutbutton: {
    backgroundColor: "#87CEFA",
    padding: 5,
    borderRadius: 180,
  },
  event: {
    color: "black",
    position: "absolute",
    left: 2,
    marginTop: 33,
    fontSize: 30,
    fontWeight: "bold",
  },
});
