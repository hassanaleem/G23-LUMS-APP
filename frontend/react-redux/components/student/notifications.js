import React from "react";
import { ImageBackground, StyleSheet, Text, View ,Button,Alert,Pressable,ScrollView,Dimensions} from "react-native";


import { Logout_button } from '../buttons/Logout_button';
import { Main_button } from '../buttons/Main_button';
const { width, height } = Dimensions.get("screen");

export const Notifications = ({navigation}) => {
  var dict = [
    {notifications : "Notify" },
    {notifications : "Notify" },
    {notifications : "Notify" },
    {notifications : "Notify" },
    {notifications : "Notify" },
    {notifications : "Notify" },
    {notifications : "Notify" },
    {notifications : "Notify" },
    {notifications : "Notify" },
    {notifications : "Notify" },
    {notifications : "Notify" },
    {notifications : "Notify" },
    {notifications : "Notify" },
    {notifications : "Notify" },
    {notifications : "Notify" },
    {notifications : "Notify" },
    {notifications : "Notify" },
    {notifications : "Notify" },
    {notifications : "Notify" },
    {notifications : "Notify" },
    {notifications : "Notify" },
    {notifications : "Notify" },
    {notifications : "Notify" },
    {notifications : "Notify" },
    {notifications : "Notify" },
    {notifications : "Notify" },
    {notifications : "Notify" },
    {notifications : "Notify" },
    {notifications : "Notify" },
    {notifications : "Notify" },
    {notifications : "Notify" },
    {notifications : "Notify" },
    {notifications : "Notify" },
    {notifications : "Notify" },
    {notifications : "Notify" },
    {notifications : "Notify" },
    {notifications : "Notify" },
    {notifications : "Notify" },
    {notifications : "Notify" },
    {notifications : "Notify" },

 
  ]
    return(
      <ImageBackground source={require('../assets/background.png')} 
      resizeMode="cover" 
      style={styles.backgroundImage}>
        <View style={styles.container}>
          <Logout_button/>
          <Text style = {styles.topheading}> Notifications </Text>
        
        <ScrollView style = {styles.rectangle2}>
        {dict.map((data, index) => (
              <View key={index}>
                <Text style={styles.textstyle}>
                  {data.notifications}
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
      


    )};


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
        left: width/30,
        fontSize: 30,
        lineHeight: 37.8,
        fontWeight: "bold",
      },
      topheading2: {
        position: "absolute",
        top: height / 15,
        left: width/30,
        fontSize: 30,
        lineHeight: 37.8,
        fontWeight: "bold",
      },
      logoutbuttonview : {
        position : "absolute",
        top : 50,
        right : 10
      },
    
      rectangle2: {
        position: "absolute",
        width: width / 1.2,
        height: height / 2,
        top: height / 9.5,
        left: width/14,
        borderRadius: 7,
        backgroundColor: "#EDEDED",
      },
      logoutbutton: {
        backgroundColor : '#87CEFA',
        padding : 5,
        borderRadius : 180
      },
      event: {
        color: "black",
        position : "absolute",
        left : 10,
        top : 50,
        fontSize: 15,
        fontWeight: "bold",
      }
    });
    