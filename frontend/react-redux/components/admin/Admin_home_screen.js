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
  Dimensions,
  BackHandler,
} from "react-native";

import { Logout_button } from "../buttons/Logout_button";
import { Main_button } from "../buttons/Main_button";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { logout } from "../../actions/loginAction";
import { Adduser } from "./Adduser";
import { useFonts} from 'expo-font';
import { useEffect } from "react";

const {width, height} = Dimensions.get("screen");

export const Admin_home_screen = ({ navigation }) => {

  let name = useSelector((state) => state.loginReducer).user.Name;
  if (name === undefined)
  {
    navigation.navigate("Home");
  }
  
  const dispatch = useDispatch();

  useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to quit the app?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => {
          dispatch(logout())
          BackHandler.exitApp() 
        }}
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  const [loaded] = useFonts({
    Outfit: require('../assets/fonts/static/Outfit-ExtraBold.ttf'),
  }); 
  const [loggedOut, setLoggedOut] = useState(false);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/whiteBackground.png')}
        resizeMode="cover"
        style={{ width: '100%', height: '100%' }}>

      <Logout_button nav = {navigation}/>

      <Text style={styles.topheading1}>Welcome</Text>

      <Text style={styles.topheading2}>Admin</Text>

      <Main_button
        text="Add User"
        onPress={() => navigation.navigate("adduser")}
        horizontal_padding={0}
        margintop={height/30}
        marginleft={width/7}
        marginright={width/7}
      />
      <Main_button
        text="Update User Info"
        onPress={() => navigation.navigate("UpdateUserInfo")}
        horizontal_padding={0}
        margintop={height/50}
        marginleft={width/7}
        marginright={width/7}
      />
      <Main_button
        text="Add Grades"
        onPress={() => navigation.navigate("AddGrade")}
        horizontal_padding={0}
        margintop={height/50}
        marginleft={width/7}
        marginright={width/7}
      />
      <Main_button
        text="Add Enrolment Date"
        onPress={() => navigation.navigate("Addenrolment")}
        horizontal_padding={0}
        margintop={height/50}
        marginleft={width/7}
        marginright={width/7}
      />
      <Main_button
        text="Add Event"
        onPress={() => navigation.navigate("Addevent")}
        horizontal_padding={0}
        margintop={height/50}
        marginleft={width/7}
        marginright={width/7}
      />
      <Main_button
        text="Add Food Item"
        onPress={() => navigation.navigate("addfooditem")}
        horizontal_padding={0}
        margintop={height/50}
        marginleft={width/7}
        marginright={width/7}
      />
      <Main_button
        text="Update Food Price"
        onPress={() => navigation.navigate("UpdateFoodPrice")}
        horizontal_padding={0}
        margintop={height/50}
        marginleft={width/7}
        marginright={width/7}
      />
      <Main_button
        text="Add Course"
        onPress={() => navigation.navigate("AddCourse")}
        horizontal_padding={0}
        margintop={height/50}
        marginleft={width/7}
        marginright={width/7}
      />
      <Main_button
        text="Update Course Timing"
        onPress={() => navigation.navigate("UpdateCourseTimings")}
        horizontal_padding={0}
        margintop={height/50}
        marginleft={width/7}
        marginright={width/7}
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
    marginTop: 10,
    fontSize: 30,
    // fontWeight: "bold",
    alignSelf: "center",
    fontFamily: "Outfit"
  },

  topheading2: {
    marginTop: 0,
    fontSize: 30,
    // fontWeight: "bold",
    alignSelf: "center",
    fontFamily: "Outfit"
  },

  logout_text: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
