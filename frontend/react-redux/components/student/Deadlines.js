import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Pressable,
  ScrollView,
} from "react-native";

import { Logout_button } from "../buttons/Logout_button";
import { Main_button } from "../buttons/Main_button";

export const Deadlines = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../assets/background.png")}
      resizeMode="contain"
      style={{ width: "100%", height: "99%" }}
    >
      <Logout_button nav={navigation} />
      <View style={{ position: "absolute", top: 35, flexDirection: "row" }}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}> Deadlines</Text>
      </View>

      <View style={{ position: "absolute", top: 90, left: 10 }}>
        <ScrollView style={styles.rectange2}>
          <Text style={{ left: 5, top: 5 }}>
            {" "}
            Course Code : Title : Grade {"\n"}{" "}
          </Text>
          <Text style={{ left: 5 }}> Course Code : Title : Grade{"\n"} </Text>
          <Text style={{ left: 5 }}> Course Code : Title : Grade{"\n"} </Text>
          <Text style={{ left: 5 }}> Course Code : Title : Grade{"\n"} </Text>
          <Text style={{ left: 5 }}> Course Code : Title : Grade{"\n"} </Text>
          <Text style={{ left: 5 }}> Course Code : Title : Grade{"\n"} </Text>
          <Text style={{ left: 5 }}> Course Code : Title : Grade{"\n"} </Text>
          <Text style={{ left: 5 }}> Course Code : Title : Grade{"\n"} </Text>
          <Text style={{ left: 5 }}> Course Code : Title : Grade{"\n"} </Text>
          <Text style={{ left: 5 }}> Course Code : Title : Grade{"\n"} </Text>
          <Text style={{ left: 5 }}> Course Code : Title : Grade{"\n"} </Text>
          <Text style={{ left: 5 }}> Course Code : Title : Grade{"\n"} </Text>
          <Text style={{ left: 5 }}> Course Code : Title : Grade{"\n"} </Text>
          <Text style={{ left: 5 }}> Course Code : Title : Grade{"\n"} </Text>
          <Text style={{ left: 5 }}> Course Code : Title : Grade{"\n"} </Text>
          <Text style={{ left: 5 }}> Course Code : Title : Grade{"\n"} </Text>
          <Text style={{ left: 5 }}> Course Code : Title : Grade{"\n"} </Text>
          <Text style={{ left: 5 }}> Course Code : Title : Grade{"\n"} </Text>
          <Text style={{ left: 5 }}> Course Code : Title : Grade{"\n"} </Text>
          <Text style={{ left: 5 }}> Course Code : Title : Grade{"\n"} </Text>
          <Text style={{ left: 5 }}> Course Code : Title : Grade{"\n"} </Text>
          <Text style={{ left: 5 }}> Course Code : Title : Grade{"\n"} </Text>
          <Text style={{ left: 5 }}> Course Code : Title : Grade{"\n"} </Text>
          <Text style={{ left: 5 }}> Course Code : Title : Grade{"\n"} </Text>
        </ScrollView>
      </View>

      <Main_button
        text="Go Back"
        onpress=""
        horizontal_padding={50}
        margintop={400}
        marginleft={47}
        marginright={47}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    top: 120,
    paddingTop: 40,
    paddingHorizontal: 20,
  },

  image: {
    flex: 1,
    justifyContent: "center",
  },
  logoutbuttonview: {
    position: "absolute",
    top: 50,
    right: 10,
  },
  rectange: {
    height: 100,
    width: 340,
    backgroundColor: "#D3D3D3",
    position: "absolute",
    zIndex: 99,
    borderRadius: 5,
  },
  rectange2: {
    height: 350,
    width: 340,
    backgroundColor: "#D3D3D3",
    position: "absolute",
    zIndex: 99,
    borderRadius: 5,
  },
  logoutbutton: {
    backgroundColor: "#87CEFA",
    padding: 5,
    borderRadius: 180,
  },
  event: {
    color: "black",
    position: "absolute",
    left: 10,
    top: 50,
    fontSize: 15,
    fontWeight: "bold",
  },
});
