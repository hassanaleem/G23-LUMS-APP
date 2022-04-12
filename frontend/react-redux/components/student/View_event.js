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
  Dimensions,
} from "react-native";

import { Logout_button } from "../buttons/Logout_button";
import { Main_button } from "../buttons/Main_button";
import { getEvents } from "../../actions/eventsAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useFonts } from "expo-font";
const { width, height } = Dimensions.get("screen");

export const View_event = ({ navigation }) => {
  const [loaded] = useFonts({
    Outfit: require("../assets/fonts/static/Outfit-Bold.ttf"),
  });
  const dispatch = useDispatch();
  const [events, setEvents] = useState([]);
  const [fetched, setFetched] = useState(false);
  const [stored, setStored] = useState(false);
  const [Enrollment, setEnrollment] = useState([]);
  if (fetched === false) {
    dispatch(getEvents());
    setFetched(true);
  }
  let data = useSelector((state) => state.eventsReducer.data);
  if (data.length > 0 && stored === false) {
    let enrollment_list = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].name === "Enrolment") {
        enrollment_list.push(data[i]);
      }
    }
    let new_events = data.filter((event) => event.name !== "Enrolment");
    if (new_events.length > 0) {
      setEvents(new_events);
      setEnrollment(enrollment_list);
      setStored(true);
    }
  }

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
          {Enrollment.map((event, index) => (
            <View key={index}>
              {console.log(event.date)}
              <Text style={styles.textstyle}>
                {event.date} : {event.time}
              </Text>
            </View>
          ))}
        </ScrollView>
        <View style={styles.subheading2}>
          <Text> Events </Text>
        </View>
        <ScrollView style={styles.rectangle2}>
          {events.map((event, index) => (
            <View key={index}>
              <Text style={styles.textstyle}>
                {event.name} /{event.date} / {event.time} / {event.type}
              </Text>
            </View>
          ))}
        </ScrollView>
        <Main_button
          text="Go Back"
          onPress={() => navigation.navigate("student")}
          horizontal_padding={50}
          margintop={height / 1.59}
          marginleft={width / 6}
          marginright={width / 6}
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
    top: height / 30,
    left: width / 12.2,
    fontSize: 30,
    lineHeight: 37.8,
    fontWeight: "bold",
    fontFamily: 'Outfit',
  },
  subheading1: {
    width: width / 3.38,
    height: height / 13.33,
    position: "absolute",
    top: height / 8,
    left: 38,
    fontSize: 24,
    fontFamily: 'Outfit',
    lineHeight: 30.24,
  },
  subheading2: {
    width: width / 3.38,
    height: height / 13.33,
    position: "absolute",
    top: height / 2.7,
    left: 38,
    fontSize: 24,
    fontFamily: 'Outfit',
    lineHeight: 30.24,
  },

  rectangle: {
    position: "absolute",
    width: width / 1.219,
    height: height / 5.05,
    top: height / 6.3,
    left: 38,
    borderRadius: 7,
    backgroundColor: "#EDEDED",
  },
  rectangle2: {
    position: "absolute",
    width: width / 1.219,
    height: height / 3.8,
    top: height / 2.5,
    left: 38,
    borderRadius: 5,
    backgroundColor: "#EDEDED",
  },
  textstyle: {
    position: "relative",
    top: height / 150,
    left: width / 30,
    fontSize: 14,
    paddingBottom : 8,
    fontFamily: 'Outfit',
    lineHeight: 21,
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
