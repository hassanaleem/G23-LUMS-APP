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
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { clearState, logout } from "../../actions/loginAction";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useFonts } from "expo-font";

const { width, height } = Dimensions.get("screen");

export function Logout_button(props) {
  const [loaded] = useFonts({
    Outfit: require("../assets/fonts/static/Outfit-Regular.ttf"),
  });

  const [loggedOut, setLoggedOut] = useState(false);
  const dispatch = useDispatch();
  const navigation = props.nav;
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 30,
        backgroundColor: "#79c4f2",
        marginTop: height / 24,
        marginLeft: width / 1.5,
        marginRight: width / 12,
      }}
      onPress={() => {
        dispatch(logout());
        Alert.alert("Logout Successful");
        setLoggedOut(true);
      }}
    >
      <Text style={styles.text}>Log out</Text>
      {loggedOut ? navigation.navigate("Home") : null}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    // fontFamily: "Outfit",
  },
});
