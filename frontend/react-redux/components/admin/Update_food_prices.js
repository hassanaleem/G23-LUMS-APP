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
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useFonts } from "expo-font";
import {
  clearState,
  getAllFoodItems,
  updateFoodItem,
} from "../../actions/foodactions";
import { Picker } from "@react-native-picker/picker";

const { width, height } = Dimensions.get("screen");

export const Update_food_prices = ({ navigation }) => {
  const [loaded] = useFonts({
    Outfit: require("../assets/fonts/static/Outfit-Bold.ttf"),
  });
  const dispatch = useDispatch();

  const [isEditable, setisEditable] = useState(false);
  const [restaurantName, setrestaurantName] = useState("");
  const [foodItemName, setfoodItemName] = useState("");
  const [price, setprice] = useState("");
  const [get, setGet] = useState(true);
  const [foodItems, setfoodItems] = useState([]);
  const [restaurants, setrestaurants] = useState([]);
  const [mergedData, setmergedData] = useState([]);
  const [selectedRestaurant, setselectedRestaurant] = useState("-");
  const [selectedFoodItem, setselectedFoodItem] = useState("-");
  const [selectedId, setselectedId] = useState(0);
  const [selectedPrice, setselectedPrice] = useState("-");
  const [selectedRestaurantIndex, setselectedRestaurantIndex] = useState(0);
  const [change, setchange] = useState(false);

  if (get == true) {
    dispatch(getAllFoodItems());
    setGet(false);
  }
  let dataFetched = useSelector((state) => state.foodItemReducer);
  let find = dataFetched.find;
  let queryRun = dataFetched.queryRun;
  let rest = dataFetched.restaurant;
  if (rest.length != 0 && mergedData.length == 0) {
    rest = rest.filter((item) => item != null);
    setmergedData(rest);
  }
  if (find == true && queryRun == true) {
    dispatch(clearState());
  }

  if (mergedData.length != 0 && restaurants.length == 0) {
    for (let i = 0; i < mergedData.length; i++) {
      let temp = mergedData[i].restaurant;
      if (!restaurants.includes(temp)) {
        restaurants.push(temp);
      }
    }
    for (let i = 0; i < restaurants.length; i++) {
      let temp = {
        restaurant: restaurants[i],
        foodItems: [],
        prices: {},
        id: {},
      };
      for (let j = 0; j < mergedData.length; j++) {
        if (mergedData[j].restaurant == restaurants[i]) {
          temp.foodItems.push(mergedData[j].foodItem);
          temp.prices[mergedData[j].foodItem] = mergedData[j].price;
          temp.id[mergedData[j].foodItem] = j;
        }
      }
      foodItems.push(temp);
    }
  }
  if (
    (isEditable == false &&
      selectedFoodItem != "" &&
      selectedRestaurant != "") ||
    (change == true && selectedFoodItem != "")
  ) {
    setisEditable(true);
    setrestaurantName(selectedRestaurant);
    setfoodItemName(selectedFoodItem);
    setprice(selectedPrice);
    setchange(false);
  }

  const update = () => {

    if (isNaN(parseInt(price)) == true || restaurantName == "" || foodItemName == "" || price <= 0 || price == "")
    {
      if (isNaN(parseInt(price)) == true)
      {
        Alert.alert("Please enter a valid price");
      }
      else
      {
        Alert.alert("Please fill all the fields");
      }
    }
    else
    {
      let data = {
        restaurant: restaurantName,
        foodItem: foodItemName,
        price: price,
        id: selectedId,
      };
      dispatch(updateFoodItem(data));
      setrestaurantName("");
      setfoodItemName("");
      setprice("");
      // restore all use states to default
      dispatch(getAllFoodItems());
      Alert.alert("Successfully Updated");
      setisEditable(false);
      setselectedRestaurant("");
      setselectedFoodItem("");
      setselectedPrice("");
      setselectedRestaurantIndex(0);
      setrestaurants([]);
      setfoodItems([]);
      setmergedData([]);
      setselectedId(0);
      restaurants.splice(0, restaurants.length);
      foodItems.splice(0, foodItems.length);
      mergedData.splice(0, mergedData.length);
      setprice("");
      setGet(true);
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
          Update Food
        </Text>

        <Text
          style={{
            position: "absolute",
            fontSize: 27,
            fontWeight: "bold",
            marginTop: height / 13,
            marginLeft: width / 12,
          }}
        >
          Prices
        </Text>
        <Picker
          selectedValue={selectedRestaurant}
          style={styles.restuarantDropdown}
          onValueChange={(itemValue, itemIndex) => {
            setselectedRestaurant(itemValue);
            setselectedRestaurantIndex(itemIndex);
            setchange(true);
            setisEditable(false);
            // set selectedfooitem to first food item in selected restaurant
            setselectedFoodItem(foodItems[itemIndex].foodItems[0]);
            // set selected price to first price in selected food item
            setselectedPrice(
              foodItems[itemIndex].prices[foodItems[itemIndex].foodItems[0]]
            );
          }}
        >
          {restaurants.map((item, index) => (
            <Picker.Item label={item} value={item} key={index} />
          ))}
        </Picker>

        <Picker
          selectedValue={selectedFoodItem}
          style={styles.foodDropdown}
          onValueChange={(itemValue, itemIndex) => {
            setisEditable(false);
            setselectedFoodItem(itemValue);
            setselectedPrice(
              foodItems[selectedRestaurantIndex].prices[itemValue]
            );
            setprice(foodItems[selectedRestaurantIndex].prices[itemValue]);
            setselectedId(foodItems[selectedRestaurantIndex].id[itemValue]);
            setselectedId(foodItems[selectedRestaurantIndex].id[itemValue]);
            setchange(true);
          }}
        >
          {foodItems.map((item, index) => {
            if (item.restaurant === selectedRestaurant) {
              return item.foodItems.map((item, index) => (
                <Picker.Item label={item} value={item} key={index} />
              ));
            }
          })}
        </Picker>

        <Text style={styles.id_text1}>Restaurant Name</Text>

        <TextInput
          style={[
            styles.input_fields1,
            {
              backgroundColor: isEditable ? "#eceded" : "#C8C8C8",
            },
          ]}
          placeholder={
            isEditable ? restaurantName : "Input Disabled [search for food]"
          }
          editable={isEditable}
          onChangeText={(text) => {
            setrestaurantName(text);
          }}
          value={restaurantName}
        />

        <Text style={styles.id_text2}>Food Item Name</Text>

        <TextInput
          style={[
            styles.input_fields2,
            {
              backgroundColor: isEditable ? "#eceded" : "#C8C8C8",
            },
          ]}
          placeholder={
            isEditable ? foodItemName : "Input Disabled [search for food]"
          }
          editable={isEditable}
          onChangeText={(text) => {
            setfoodItemName(text);
          }}
          value={foodItemName}
        />

        <Text style={styles.id_text3}>New Price</Text>

        <TextInput
          style={[
            styles.input_fields3,
            {
              backgroundColor: isEditable ? "#eceded" : "#C8C8C8",
            },
          ]}
          placeholder={isEditable ? price : "Input Disabled [search for food]"}
          editable={isEditable}
          onChangeText={(text) => {
            setprice(text);
          }}
          value={price}
        />

        <Main_button
          text="Update Price"
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

  restuarantDropdown: {
    position: "absolute",
    width: width / 2.6,
    height: 37,
    marginTop: height / 6,
    marginLeft: width / 11,
    fontSize: 24,
    borderRadius: 7,
    textAlign: "center",
    backgroundColor: "#EDEDED",
  },

  foodDropdown: {
    position: "absolute",
    width: width / 2.6,
    height: 37,
    marginTop: height / 6,
    marginLeft: width / 1.9,
    fontSize: 24,
    borderRadius: 7,
    textAlign: "center",
    backgroundColor: "#EDEDED",
  },
});
