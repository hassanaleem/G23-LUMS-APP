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
  ActivityIndicator,
} from "react-native";
import { useState } from "react";
import axios from "axios";
import { Main_button } from "./buttons/Main_button";
import { login, logout, clearState } from "../actions/loginAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import * as Crypto from "expo-crypto";
import { useFonts } from "expo-font";

export const Login_screen = ({ navigation }) => {
  const [loaded] = useFonts({
    Outfit: require("./assets/fonts/static/Outfit-Regular.ttf"),
  });

  const dispatch = useDispatch();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordText, setPasswordText] = useState("");
  const [loading, setLoading] = useState(false);

  let allowed = useSelector((state) => state.loginReducer).allowed;
  let queryRun = useSelector((state) => state.loginReducer).queryRun;
  const hash = async (data) => {
    const hash = await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA256,
      data
    );
    setPassword(hash);
  };

  const validate = () => {
    let data = useSelector((state) => state.loginReducer);
    let type = data.user.Type;
    if (type != undefined) {
      if (allowed == true) {
        type = type.toUpperCase();
        if (type == "STUDENT") {
          navigation.navigate("student");
        } else if (type == "INSTRUCTOR") {
          navigation.navigate("instructor");
        } else if (type == "ADMIN") {
          navigation.navigate("admin");
        }
      }
    }
    
  };
  
  if (allowed == false && queryRun == true) {
    Alert.alert("Login Failed", "Invalid Username or Password");
    dispatch(clearState());
  }
  if (queryRun == true && loading == true) {
    setLoading(false);
  }
  const onPress = () => {
    dispatch(login(userName, password));
    setUserName("");
    setPassword("");
    setPasswordText("");
    setLoading(true);
  };
  validate();

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/* <Text style={styles.topheading}>Login Account</Text> */}

      <Image
        style={{ height: 180, width: 180, marginTop: -45, marginBottom: 40 }}
        source={require("./assets/LOGO.png")}
      />

      <Text style={styles.id_text}>User ID</Text>

      <TextInput
        onChangeText={(text) => {
          setUserName(text);
        }}
        value={userName}
        style={styles.userid}
        placeholder="Enter User ID"
      />

      <Text style={styles.password_text}>Password</Text>

      <TextInput
        onChangeText={(text) => {
          hash(text);
          setPasswordText(text);
        }}
        value={passwordText}
        style={styles.userpassword}
        secureTextEntry={true}
        placeholder="Enter Password"
      />
      {loading ? (
        <ActivityIndicator
          size="large"
          color="#609cc1"
          style={{
            position: "relative",
            marginTop: 20,
          }}
        />
      ) : null}

      <Main_button
        text="Log in"
        onPress={onPress}
        horizontal_padding={127}
        margintop={40}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    fontFamily: "Outfit",
  },

  // topheading: {
  //   marginTop: -50,
  //   marginRight: 200,
  //   fontSize: 20,
  //   fontWeight: "bold",
  // },

  id_text: {
    marginTop: 20,
    marginRight: 226,
    fontSize: 18,
    fontFamily: "Outfit",
  },

  userid: {
    height: 40,
    width: 300,
    marginTop: 5,
    borderColor: "gray",
    borderWidth: 0,
    borderRadius: 20,
    backgroundColor: "#eceded",
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignSelf: "center",
  },

  password_text: {
    marginTop: 7,
    marginRight: 200,
    fontSize: 18,
    fontFamily: "Outfit",
  },

  userpassword: {
    height: 40,
    width: 300,
    marginTop: 5,
    borderColor: "gray",
    borderWidth: 0,
    borderRadius: 20,
    backgroundColor: "#eceded",
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignSelf: "center",
  },
});
