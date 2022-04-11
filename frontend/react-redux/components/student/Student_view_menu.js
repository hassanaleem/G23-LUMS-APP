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
  Dimensions,
} from "react-native";
import { Logout_button } from "../buttons/Logout_button";
import { Main_button } from "../buttons/Main_button";
const { width, height } = Dimensions.get("screen");
import { getAllFoodItems } from "../../actions/foodactions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
export const Menu = ({ navigation }) => {
  const dispatch = useDispatch();
  const [get, setGet] = useState(true);
  const [menu, setMenu] = useState([]);
  if (get == true) {
    dispatch(getAllFoodItems());
    setGet(false);
  }
  let dataFetched = useSelector((state) => state.foodItemReducer);
  let rest = dataFetched.restaurant;
  if (rest.length != 0 && menu.length == 0) {
    setMenu(rest);
  }

  return (
    <ImageBackground
      source={require("../assets/background.png")}
      resizeMode="cover"
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Logout_button />
        <Text style={styles.topheading}> Menu </Text>
        <View style={styles.topheading2}>
          <Text style={styles.FoodItems}>Food Items</Text>
        </View>

        <ScrollView style={styles.rectangle2}>
          {menu.map((data, index) => (
            <View key={index}>
              <Text style={styles.textstyle}>
                {data.restaurant} : {data.foodItem} : Rs {data.price}
              </Text>
            </View>
          ))}
        </ScrollView>
        <Main_button
          text="Go Back"
          onPress={() => navigation.navigate("student")}
          horizontal_padding={50}
          margintop={height / 1.73}
          marginleft={50}
          marginright={47}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  container: {
    flex: 1,
    height: "100%",
  },

  topheading: {
    position: "absolute",
    top: height / 27,
    left: width / 30,
    fontSize: 30,
    lineHeight: 37.8,
    fontWeight: "bold",
  },
  topheading2: {
    position: "absolute",
    top: height / 9,
    left: width / 20,
  },
  FoodItems: {
    fontSize: 25,
    lineHeight: 37.8,
    fontWeight: "bold",
  },

  rectangle2: {
    position: "absolute",
    width: width / 1.2,
    height: height / 2.3,
    top: height / 6,
    left: width / 14,
    borderRadius: 7,
    backgroundColor: "#EDEDED",
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
