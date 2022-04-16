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

const {width, height} = Dimensions.get("screen");

import { Logout_button } from "../buttons/Logout_button";
import { Main_button } from "../buttons/Main_button";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { addUser, findUser, clearState, clearUserMessage } from "../../actions/useractions";
import { useDispatch, useSelector } from "react-redux";
import * as Crypto from "expo-crypto";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}
export const Adduser = ({navigation}) => {

  const [loaded] = useFonts({
    Outfit: require('../assets/fonts/static/Outfit-Bold.ttf'),
  }); 

  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState("");
  const [type, setType] = useState("");
  const [pwdHash, setPwdHash] = useState("");
  const [data, setData] = useState({});
  const digest = async (data) => {
    const hash = await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA256,
      data
    );
    setPwdHash(hash);
  };
  const validate = (find, query, data) => {
    if (query == true && find == true) {
      Alert.alert("User already exists");
      dispatch(clearState());
      // check if data is empty
    } else if (query == true && find == false && isEmpty(data) != true) {
      dispatch(addUser(data));
      setData({});
      dispatch(clearState());
    }
  };
  let userState = useSelector((state) => state.usersReducer);
  let find = userState.find;
  let query = userState.queryRun;
  
  const add = () => {
    
    if (username === "" || password === "" || userId === "" || type === "") {
      Alert.alert("Please fill all the fields");
    } else {
      dispatch(findUser(userId));
    }



    let data = {
      Name: username,
      Password: pwdHash,
      id: userId,
      Type: type,
    };
    setData(data);
    setUsername("");
    setPassword("");
    setUserId("");
    setType("");
    setPwdHash("");
  };

  validate(find, query, data);

  let message = useSelector((state) => state.usersReducer).message;
  if (message == "Success") {
    Alert.alert("User added");
    dispatch(clearUserMessage());
  } else if (message == "Failure") {
    Alert.alert("User Addition Failed");
    dispatch(clearUserMessage());
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background.png")}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      >
        <Logout_button nav = {navigation}/>

        <Text style={styles.add_user}>Add User</Text>

        <Text style={styles.topline}>All fields are required</Text>

        <Text style={styles.id_text}>User Name</Text>

        <TextInput
          style={styles.input_fields}
          placeholder="Enter User Name"
          onChangeText={(text) => {
            setUsername(text);
          }}
          value={username}
        />

        <Text style={styles.id_text0}>User ID</Text>

        <TextInput
          style={styles.input_fields}
          placeholder="Enter User ID"
          onChangeText={(text) => {
            setUserId(text);
          }}
          value={userId}
        />

        <Text style={styles.id_text}>Create Password</Text>

        <TextInput
          style={styles.input_fields}
          placeholder="Enter Password"
          onChangeText={(text) => {
            digest(text);
            setPassword(text);
          }}
          value={password}
        />

        <Text style={styles.id_text}>User Type</Text>

        {/* <TextInput
          style={styles.input_fields}
          placeholder="Student/Instructor"
          onChangeText={(text) => setType(text)}
          value={type}
        /> */}

        <View style={styles.typeContainer}>
          <Picker
            selectedValue={type}
            style={styles.gradesDropdown}
            onValueChange={(itemValue, itemIndex) => {
              setType(itemValue);
          }}>
            
            <Picker.Item label="-" value="-"/>
            <Picker.Item label="Instructor" value="Instructor"/>
            <Picker.Item label="Student" value="Student"/>

          </Picker>
        </View>

        <Main_button
          text="Add User"
          onPress={add}
          horizontal_padding={0}
          margintop={height/6.2}
          marginleft={width/6}
          marginright={width/6}
        />

        <Main_button
          text="Go Back"
          onPress={() => navigation.navigate("admin")}
          horizontal_padding={0}
          margintop={height/50}
          marginleft={width/6}
          marginright={width/6}
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
    position: 'absolute',
    fontSize: 27,
    fontWeight: 'bold',
    marginTop: height/24,
    marginLeft: width/12,
  },

  topline: {
    marginTop: height/40,
    marginLeft: width/11,
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'Outfit',
  },

  id_text0: {
    marginTop: height/110,
    marginLeft: width/10,
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Outfit',
  },

  id_text: {
    marginTop: height/50,
    marginLeft: width/10,
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Outfit',
  },
  
  input_fields: {
    height: 40,
    width: width / 1.2,
    marginTop: 3,
    borderColor: 'gray',
    borderWidth: 0,
    borderRadius: 20,
    backgroundColor: '#eceded',
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignSelf: "center"
  },

  typeContainer: {
    height: 40,
    width: width / 1.2,
    marginTop: height / 50,
    borderRadius: 20,
    backgroundColor: "#eceded",
    alignSelf: "center",
    justifyContent: "center",
  },
});
