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
import { Search_bar } from "../searchBar/Search_bar";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { findUser } from "../../actions/useractions";
import { clearState } from "../../actions/useractions";
import { updateUser } from "../../actions/useractions";
export const Update_user_info = ({ navigation }) => {
  const dispatch = useDispatch();
  const [isEditable, setisEditable] = useState(false);
  const [userName, setuserName] = useState("");
  const [userID, setuserID] = useState("");
  const [password, setpassword] = useState("");
  const [type, setType] = useState("");
  const [searchQuery, setsearchQuery] = useState("");

  const makeSearch = () => {
    if (searchQuery === "") {
      Alert.alert("Please enter a search query");
    } else {
      dispatch(findUser(searchQuery));
    }
  };
  let userState = useSelector((state) => state.usersReducer);
  let find = userState.find;
  let query = userState.queryRun;

  const validate = (find, query) => {
    if (query == true && find == true) {
      setuserName(userState.user.Name);
      setuserID(searchQuery);
      setType(userState.user.Type);
      setsearchQuery("");
      setisEditable(true);

      dispatch(clearState());
    }
  };
  validate(find, query);
  const update = () => {
    if (userName === "" || userID === "" || password === "") {
      Alert.alert("Please fill all the fields");
    } else {
      if (isEditable === true) {
        let data = {
          Name: userName,
          id: userID,
          Password: password,
          Type: type,
        };
        dispatch(updateUser(data));
        setType("");
        setuserName("");
        setuserID("");
        setpassword("");
        setsearchQuery("");
        setisEditable(false);
      }
    }
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background.png")}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      >
        <Logout_button onpress="" />

        <Text
          style={{
            position: "absolute",
            top: 35,
            marginLeft: 25,
            fontSize: 27,
            fontWeight: "bold",
          }}
        >
          Update User info
        </Text>

        <Search_bar
          bar_text="Enter User ID"
          font_size={15}
          onChangeText={(text) => {
            setsearchQuery(text);
          }}
          onPress={() => {
            console.log(searchQuery);
            makeSearch();
          }}
        />

        <Text style={styles.id_text1}>User Name</Text>

        <TextInput
          style={[
            styles.input_fields1,
            {
              backgroundColor: isEditable ? "#eceded" : "#C8C8C8",
            },
          ]}
          placeholder={
            isEditable ? userName : "Input Disabled [search for user]"
          }
          onChangeText={(text) => {
            setuserName(text);
          }}
          editable={isEditable}
          value={userName}
        />

        <Text style={styles.id_text2}>User ID</Text>

        <TextInput
          style={[
            styles.input_fields2,
            {
              backgroundColor: isEditable ? "#eceded" : "#C8C8C8",
            },
          ]}
          placeholder={isEditable ? userID : "Input Disabled [search for user]"}
          editable={isEditable}
          onChangeText={(text) => {
            setuserID(text);
          }}
          value={userID}
        />

        <Text style={styles.id_text3}>New Password</Text>

        <TextInput
          style={[
            styles.input_fields3,
            {
              backgroundColor: isEditable ? "#eceded" : "#C8C8C8",
            },
          ]}
          placeholder={
            isEditable
              ? "Enter new password"
              : "Input Disabled [search for user]"
          }
          editable={isEditable}
          onChangeText={(text) => {
            setpassword(text);
          }}
          value={password}
        />

        <Main_button
          text="Update info"
          onPress={update}
          horizontal_padding={0}
          margintop={40}
          marginleft={65}
          marginright={65}
        />

        <Main_button
          text="Go Back"
          onPress={() => navigation.navigate("admin")}
          horizontal_padding={0}
          margintop={15}
          marginleft={65}
          marginright={65}
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

  id_text1: {
    marginTop: 130,
    marginLeft: 35,
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "sans-serif-thin",
  },

  id_text2: {
    marginTop: 10,
    marginLeft: 35,
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "sans-serif-thin",
  },

  id_text3: {
    marginTop: 10,
    marginLeft: 35,
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "sans-serif-thin",
  },

  input_fields1: {
    marginLeft: 30,
    height: 40,
    width: 300,
    marginTop: 5,
    borderColor: "gray",
    borderWidth: 0,
    borderRadius: 20,
    backgroundColor: "#eceded",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },

  input_fields2: {
    marginLeft: 30,
    height: 40,
    width: 300,
    marginTop: 5,
    borderColor: "gray",
    borderWidth: 0,
    borderRadius: 20,
    backgroundColor: "#eceded",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },

  input_fields3: {
    marginLeft: 30,
    height: 40,
    width: 300,
    marginTop: 5,
    borderColor: "gray",
    borderWidth: 0,
    borderRadius: 20,
    backgroundColor: "#eceded",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
});
