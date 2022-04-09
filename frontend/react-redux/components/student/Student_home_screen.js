import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  ScrollView,
  TextInput,
  StyleSheet,
  ImageBackground,
  Alert,
  Pressable,
  Touchable,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import { Main_button } from "../buttons/Main_button";
import { logout } from "../../actions/loginAction";

import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";

const { width, height } = Dimensions.get("screen");

export const Student_home_screen = ({ navigation }) => {
  const [loggedOut, setLoggedOut] = useState(false);
  let name = useSelector((state) => state.loginReducer).user.Name;

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/whiteBackground.png")}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      >
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 5,
            paddingHorizontal: 20,
            borderRadius: 30,
            backgroundColor: "#79c4f2",
            marginLeft: 270,
            marginTop: 40,
            marginRight: 20,
          }}
          onPress={() => {
            dispatch(logout());
            Alert.alert("Logout Successful");
            setLoggedOut(true);
          }}
        >
          {loggedOut ? navigation.navigate("Home") : null}

          <Text style={styles.logout_text}>Log out</Text>
        </TouchableOpacity>

        <Text style={styles.topheading1}>Welcome</Text>

        <Text style={styles.topheading2}>{name}</Text>

        <Main_button
          text="View Deadlines"
          onPress={() => navigation.navigate("Student_deadlines")}
          horizontal_padding={0}
          margintop={height / 30}
          marginleft={width / 7}
          marginright={width / 7}
        />
        <Main_button
          text="Academic Progress"
          onPress={() => navigation.navigate("Academic_progress")}
          horizontal_padding={0}
          margintop={height / 50}
          marginleft={width / 7}
          marginright={width / 7}
        />
        <Main_button
          text="Discussion Forum"
          onPress=""
          horizontal_padding={0}
          margintop={height / 50}
          marginleft={width / 7}
          marginright={width / 7}
        />
        <Main_button
          text="GPA Calculator"
          onPress={() => navigation.navigate("GpaCalculator")}
          horizontal_padding={0}
          margintop={height / 50}
          marginleft={width / 7}
          marginright={width / 7}
        />
        <Main_button
          text="View Events"
          onPress={() => navigation.navigate("ViewEvent")}
          horizontal_padding={0}
          margintop={height / 50}
          marginleft={width / 7}
          marginright={width / 7}
        />
        <Main_button
          text="All Resturents Menu"
          onPress=""
          horizontal_padding={0}
          margintop={height / 50}
          marginleft={width / 7}
          marginright={width / 7}
        />
        <Main_button
          text="Enroll Course"
          onPress={() => navigation.navigate("EnrollCourse")}
          horizontal_padding={0}
          margintop={height / 50}
          marginleft={width / 7}
          marginright={width / 7}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },

  topheading1: {
    marginTop: 30,
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
  },

  topheading2: {
    marginTop: 0,
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
  },

  logout_text: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
