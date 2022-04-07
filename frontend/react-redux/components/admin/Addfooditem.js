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
import { useDispatch, useSelector } from "react-redux";
import { Addfood, GetRestaurant } from "../../actions/foodactions";

export const Addfooditem = () => {
  
  const [restaurant, setRestaurant] = useState("");
  const [foodItem, setFooditem] = useState("");
  const [price, setPrice] = useState("");
  const [restaurantList, setRestaurantList] = useState([]);
  const [getFirstRestaurant, setGetFirstRestaurant] = useState(false);
  const dispatch = useDispatch();
  // make a function to get state
  
  if (getFirstRestaurant == false) {
    dispatch(GetRestaurant());
    setGetFirstRestaurant(true);
  }
  
  let getState = useSelector((state) => state.foodItemReducer.restaurant);
  const add = () => {
    if (restaurant == "" || foodItem == "" || price == "") {
      Alert.alert("Please fill all the fields");
    } else {
      dispatch(GetRestaurant());
      setRestaurantList(getState.restaurants);
      // get the list of restaurants
      console.log(restaurantList);
      if (restaurantList.includes(restaurant)) {
        let data = {
          restaurant: restaurant,
          foodItem: foodItem,
          price: price,
        };
        dispatch(Addfood(data));
        setRestaurant("");
        setFooditem("");
        setPrice("");
      } else {
        Alert.alert("Please enter a valid restaurant");
        setRestaurant("");
        setFooditem("");
        setPrice("");
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
            top: 25,
            left: 10,
            marginLeft: 25,
            fontSize: 40,
            fontWeight: "bold",
            fontFamily: "sans-serif-thin",
          }}
        >
          Add Food
        </Text>
        <Text
          style={{
            position: "absolute",
            top: 65,
            left: 10,
            marginLeft: 25,
            fontSize: 40,
            fontWeight: "bold",
            fontFamily: "sans-serif-thin",
          }}
        >
          Item
        </Text>

        <Text style={styles.topline}>All fields are required</Text>

        <Text style={styles.id_text}>Restaurant Name</Text>

        <TextInput
          style={styles.userid}
          placeholder="Enter Restaurant Name"
          value={restaurant}
          onChangeText={(text) => {
            setRestaurant(text);
          }}
        />

        <Text style={styles.id_text}>Food Item Name</Text>

        <TextInput
          style={styles.userid}
          placeholder="Enter Food Item Name"
          value={foodItem}
          onChangeText={(text) => {
            setFooditem(text);
          }}
        />

        <Text style={styles.id_text}>Price</Text>

        <TextInput
          style={styles.userid}
          placeholder="Enter Price in Rupees (ie.,450,390)"
          value={price}
          onChangeText={(text) => {
            setPrice(text);
          }}
        />

        <Main_button
          text="Add Food Item"
          onPress={add}
          horizontal_padding={30}
          margintop={140}
          marginleft={47}
          marginright={47}
        />

        <Main_button
          text="Go Back"
          onPress={() => navigation.navigate("admin")}
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
  id_text: {
    marginTop: 10,
    marginLeft: 35,
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "sans-serif-thin",
  },
  topline: {
    marginTop: 50,
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
