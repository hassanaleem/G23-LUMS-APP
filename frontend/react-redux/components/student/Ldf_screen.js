import React from "react";
import { ImageBackground, StyleSheet, Text, View ,Button,Alert,Pressable,ScrollView,Dimensions} from "react-native";


import { Logout_button } from '../buttons/Logout_button';
import { Main_button } from '../buttons/Main_button';
import { Post_bar } from "../Post_bar/Post_bar";
import { useDispatch, } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getAllPosts } from "../../actions/postactions";
const { width, height } = Dimensions.get("screen");

export const Ldf = ({navigation}) => {
  const [get,setGet] = useState(true)
  const dispatch = useDispatch()
  if (get == false){
    dispatch(getAllPosts());
    setGet(false)
  }


 
    return(
      <ImageBackground source={require('../assets/background.png')} 
      resizeMode="cover" 
      style={styles.backgroundImage}>
        <View style={styles.container}>
          <Logout_button/>
          <Text style = {styles.topheading}> DISCUSSION FORM </Text>
        <View>
            <Post_bar bar_text="What's on your mind?" />
        </View>
        <View style = {styles.Postview}>
            <Text style = {styles.Posttext}>Post:</Text>
        </View>
        <View style = {styles.rectangle2}>
            
        {dict.map((data, index) => (
              <View key={index}>
                <Text style={styles.textstyle}>
                  {data.Course_code} : {data.Title} :  {data.Date} : {data.Time}
                </Text>
              </View>
            ))}
        </View>
        <Main_button
          text="Go Back"
          onPress={() => navigation.navigate("student")}
          horizontal_padding={50}
          margintop={height / 1.5}
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
        top: height / 24,
        left: width/30,
        fontSize: 27,
        lineHeight: 37.8,
        fontWeight: "bold",
      },
      Postview : {
        position: "absolute",
        top : height / 3.8,
        left: width/14,
      },
      Posttext : {
          fontSize : 28,

      },
      logoutbuttonview : {
        position : "absolute",
        top : 50,
        right : 10
      },
    
      rectangle2: {
        position: "absolute",
        width: width / 1.2,
        height: height / 3,
        top: height / 3.2,
        left: width/11,
        borderRadius: 7,
        backgroundColor: "#EDEDED",
      },
      PostTextRec: {
        position: "absolute",
        width: width / 1.2,
        height: height / 3,
        top: height / 3.2,
        left: width/11,
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
    