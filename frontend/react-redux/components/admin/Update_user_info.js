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
  Dimensions,
} from "react-native";

import { Logout_button } from "../buttons/Logout_button";
import { Main_button } from "../buttons/Main_button";
import { Search_bar } from "../searchBar/Search_bar";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const { width, height } = Dimensions.get("screen");

import { findUser } from "../../actions/useractions";
import { clearState } from "../../actions/useractions";
import { updateUser } from "../../actions/useractions";

import { useFonts } from "expo-font";
export const Update_user_info = ({ navigation }) => {
  const [loaded] = useFonts({
    Outfit: require("../assets/fonts/static/Outfit-Bold.ttf"),
  });

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
        <Logout_button nav={navigation} />

        <Text
          style={{
            position: "absolute",
            fontSize: 27,
            fontWeight: "bold",
            marginTop: height / 24,
            marginLeft: width / 12,
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
          margintop={height / 7}
          marginleft={width / 6}
          marginright={width / 6}
        />

        <Main_button
          text="Go Back"
          onPress={() => navigation.navigate("admin")}
          horizontal_padding={0}
          margintop={height / 50}
          marginleft={width / 6}
          marginright={width / 6}
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
    marginTop: height / 6,
    marginLeft: width / 10,
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "Outfit",
  },

  id_text2: {
    marginTop: height / 50,
    marginLeft: width / 10,
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "Outfit",
  },

  id_text3: {
    marginTop: height / 50,
    marginLeft: width / 10,
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "Outfit",
  },

  input_fields1: {
    height: 40,
    width: width / 1.2,
    marginTop: 3,
    borderColor: "gray",
    borderWidth: 0,
    borderRadius: 20,
    backgroundColor: "#eceded",
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignSelf: "center",
  },

  input_fields2: {
    height: 40,
    width: width / 1.2,
    marginTop: 3,
    borderColor: "gray",
    borderWidth: 0,
    borderRadius: 20,
    backgroundColor: "#eceded",
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignSelf: "center",
  },

  input_fields3: {
    height: 40,
    width: width / 1.2,
    marginTop: 3,
    borderColor: "gray",
    borderWidth: 0,
    borderRadius: 20,
    backgroundColor: "#eceded",
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignSelf: "center",
  },
});
