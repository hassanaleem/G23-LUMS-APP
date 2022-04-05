import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  ScrollView,
  TextInput,
  StyleSheet,
  Alert,
  Pressable,
} from "react-native";

import { Logout_button } from "../buttons/Logout_button";
import { Main_button } from "../buttons/Main_button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/loginAction";
import { Adduser } from "./Adduser";
export const Admin_home_screen = ({ navigation }) => {
  const [loggedOut, setLoggedOut] = useState(false);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Pressable
        style={{
          alignItems: "center",
          justifyContent: "center",
          paddingVertical: 5,
          paddingHorizontal: 20,
          borderRadius: 30,
          backgroundColor: "#79c4f2",
          marginLeft: 250,
          marginTop: 40,
          marginRight: 15,
        }}
        onPress={() => {
          dispatch(logout());
          Alert.alert("Logout Successful");
          setLoggedOut(true);
        }}
      >
        {loggedOut ? navigation.navigate("Home") : null}

        <Text style={styles.logout_text}>Log out</Text>
      </Pressable>

      <Text style={styles.topheading1}>Welcome</Text>

      <Text style={styles.topheading2}>Admin</Text>

      <Main_button
        text="Add User"
        onPress={() => navigation.navigate("adduser")}
        horizontal_padding={90}
        margintop={20}
      />
      <Main_button
        text="Update User Info"
        onpress=""
        horizontal_padding={55}
        margintop={10}
      />
      <Main_button
        text="Add Grades"
        onpress=""
        horizontal_padding={80}
        margintop={10}
      />
      <Main_button
        text="Add Enrolment Date"
        onPress={() => navigation.navigate("Addenrolment")}
        horizontal_padding={41}
        margintop={10}
      />
      <Main_button
        text="Add Event"
        onPress={() => navigation.navigate("Addevent")}
        horizontal_padding={86}
        margintop={10}
      />
      <Main_button
        text="Add Food Item"
        onPress={() => navigation.navigate("addfooditem")}
        horizontal_padding={65}
        margintop={10}
      />
      <Main_button
        text="Update Food Price"
        onpress=""
        horizontal_padding={48}
        margintop={10}
      />
      <Main_button
        text="Add Course"
        onpress=""
        horizontal_padding={78}
        margintop={10}
      />
      <Main_button
        text="Update Course Timing"
        onpress=""
        horizontal_padding={29}
        margintop={10}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },

  topheading1: {
    marginTop: 10,
    fontSize: 30,
    fontWeight: "bold",
  },

  topheading2: {
    marginTop: 0,
    fontSize: 30,
    fontWeight: "bold",
  },

  logout_text: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
