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
} from "react-native";
import { logout } from "../../actions/loginAction";
import { useDispatch } from "react-redux";
import { useState } from "react";

export function Logout_button(props) {
  const [loggedOut, setLoggedOut] = useState(false);
  const dispatch = useDispatch();
  const navigation = props.nav;
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 5,
        paddingHorizontal: 10,
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
  },
});
