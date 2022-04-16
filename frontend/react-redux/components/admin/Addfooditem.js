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
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Addfood, GetRestaurant, clearMessage } from "../../actions/foodactions";
import {useFonts} from 'expo-font';

const { width, height } = Dimensions.get("screen");

export const Addfooditem = ({ navigation }) => {

  const [loaded] = useFonts({
    Outfit: require('../assets/fonts/static/Outfit-Bold.ttf'),
  }); 
  const [restaurant, setRestaurant] = useState("");
  const [foodItem, setFooditem] = useState("");
  const [price, setPrice] = useState("");
  const [restaurantList, setRestaurantList] = useState([]);
  const [getFirstRestaurant, setGetFirstRestaurant] = useState(false);
  const dispatch = useDispatch();
  // make a function to get state

  // if (getFirstRestaurant == false) {
  //   dispatch(GetRestaurant());
  //   setGetFirstRestaurant(true);
  // }

  let getState = useSelector((state) => state.foodItemReducer.restaurant);
  const add = () => {
    if (isNaN(parseInt(price)) == true || restaurant == "" || foodItem == "" || price == "") {
      if (isNaN(parseInt(price)) == true)
      {
        Alert.alert("Please enter a valid price");
      }
      else
      {
        Alert.alert("Please fill all the fields");
      }
    } 
    else {

      let data = {
        restaurant: restaurant,
        foodItem: foodItem,
        price: price,
      };

      dispatch(Addfood(data));
      setRestaurant("");
      setFooditem("");
      setPrice("");

    }
  };

  let message = useSelector((state) => state.foodItemReducer).message;
  if (message == "Success") {
    Alert.alert("Food Item Added Successfully");
    dispatch(clearMessage())
  }

  if (message == "Failure") {
    Alert.alert("Food Item Addition Failed. Please try again");
    dispatch(clearMessage())
  }
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
          Add Food Item
        </Text>

        <Text style={styles.id_text0}>All fields are required</Text>

        <Text style={styles.id_text1}>Restaurant Name</Text>

        <TextInput
          style={styles.input_fields1}
          placeholder="Enter Restaurant Name"
          value={restaurant}
          onChangeText={(text) => {
            setRestaurant(text);
          }}
        />

        <Text style={styles.id_text2}>Food Item Name</Text>

        <TextInput
          style={styles.input_fields2}
          placeholder="Enter Food Item Name"
          value={foodItem}
          onChangeText={(text) => {
            setFooditem(text);
          }}
        />

        <Text style={styles.id_text3}>Price</Text>

        <TextInput
          style={styles.input_fields3}
          placeholder="Enter Price in Rupees (ie.,450,390)"
          value={price}
          onChangeText={(text) => {
            setPrice(text);
          }}
        />

        <Main_button
          text="Add Food Item"
          onPress={add}
          horizontal_padding={0}
          margintop={height/3.9}
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

  id_text0: {
    marginTop: height / 40,
    marginLeft: width / 11,
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'Outfit',
  },

  id_text1: {
    marginTop: height / 110,
    marginLeft: width / 10,
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Outfit',
  },

  id_text2: {
    marginTop: height / 50,
    marginLeft: width / 10,
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Outfit',
  },

  id_text3: {
    marginTop: height / 50,
    marginLeft: width / 10,
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Outfit',
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

  input_fields4: {
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
