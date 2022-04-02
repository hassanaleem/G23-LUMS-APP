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
  ImageBackground,
  Pressable,
} from "react-native";

import { Logout_button } from "../buttons/Logout_button";
import { Main_button } from "../buttons/Main_button";
import { useState } from "react";
import { addUser } from "../../actions/useractions";
import { useDispatch } from "react-redux";
import * as Crypto from "expo-crypto";

export const Adduser = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState("");
  const [type, setType] = useState("");

  const digest = async (data) => {
    const hash = await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA256,
      data
    );
    setPassword(hash);
  };

  const add = () => {
    if (username === "" || password === "" || userId === "" || type === "") {
      Alert.alert("Please fill all the fields");
    } else {
      digest(password);
      console.log(password);
      let data = {
        Name: username,
        Password: password,
        id: userId,
        Type: type,
      };
      dispatch(addUser(data));
      setUsername("");
      setPassword("");
      setUserId("");
      setType("");
    }
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background.png")}
        resizeMode="cover"
        style={{ width: "100%", height: "99%" }}
      >
        <Logout_button onpress="" />

        <Text style={styles.add_user}>Add User</Text>

        <Text style={styles.topline}>All fields are required</Text>

        <Text style={styles.id_text}>User Name</Text>

        <TextInput
          style={styles.userid}
          placeholder="Enter User Name"
          onChangeText={(text) => {
            setUsername(text);
          }}
          value={username}
        />

        <Text style={styles.id_text}>User ID</Text>

        <TextInput
          style={styles.userid}
          placeholder="Enter User ID"
          onChangeText={(text) => {
            setUserId(text);
          }}
          value={userId}
        />

        <Text style={styles.id_text}>Create Password</Text>

        <TextInput
          style={styles.userid}
          placeholder="Enter Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
        />

        <Text style={styles.id_text}>User Type</Text>

        <TextInput
          style={styles.userid}
          placeholder="Student/Instructor"
          onChangeText={(text) => setType(text)}
          value={type}
        />

        <Main_button
          text="Add User"
          onPress={add}
          horizontal_padding={30}
          margintop={90}
          marginleft={47}
          marginright={47}
        />

        <Main_button
          text="Edit User"
          onPress={() => {
            console.log("Edit");
          }}
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
    justifyContent: "center",
    alignItems: "center",
  },
  add_user: {
    position: "absolute",
    top: 30,
    left: 10,
    marginLeft: 25,
    fontSize: 35,
    fontWeight: "bold",
    fontFamily: "sans-serif-thin",
  },
  id_text: {
    marginTop: 10,
    marginLeft: 35,
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "sans-serif-thin",
  },
  topline: {
    marginTop: 15,
    marginLeft: 35,
    fontSize: 15,
    fontFamily: "sans-serif-thin",
  },
  userid: {
    marginLeft: 30,
    height: 40,
    width: 300,
    marginTop: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "#eceded",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
});
