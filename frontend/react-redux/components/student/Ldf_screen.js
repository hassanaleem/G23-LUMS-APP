import React from "react";
import { ImageBackground, StyleSheet, Text, View ,Button,Alert,Pressable,ScrollView,Dimensions} from "react-native";


import { Logout_button } from '../buttons/Logout_button';
import { Main_button } from '../buttons/Main_button';
import { Post_bar } from "../Post_bar/Post_bar";
import { Comment_bar } from "../CommentBar/Commentbar";
const { width, height } = Dimensions.get("screen");

export const Ldf = ({navigation}) => {

  var comm = [
    {c : "To the 2 boys having shakes who left student lounge around 10 min ago, it's a shame that you left without paying your bill (token 7). Understand that bills are punched  at waiter's names and they have to pay all the bill amounts anyway even if you don't. I have paid your bill but if it was not intentional and you forgot or smth then do go and apologize to mudassar bhai and pay him the amount in tip or  something. He looked for you guys all over zakir, student lounge, and rec"},
    {c : "To the 2 boys having shakes who left student lounge around 10 min ago, it's a shame that you left without paying your bill (token 7). Understand that bills are punched  at waiter's names and they have to pay all the bill amounts anyway even if you don't. I have paid your bill but if it was not intentional and you forgot or smth then do go and apologize to mudassar bhai and pay him the amount in tip or  something. He looked for you guys all over zakir, student lounge, and rec"},
    {c : "Comment 3"},
    {c : "Comment 4"},
    {c : "Comment 5"},
    {c : "Comment 6"},
  ]
 
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

              <ScrollView style = {styles.PostTextRec}>
                <Text> To the 2 boys having shakes who left student lounge around 10 min ago, it's a shame that you left without paying your bill (token 7). Understand that bills are punched  at waiter's names and they have to pay all the bill amounts anyway even if you don't. I have paid your bill but if it was not intentional and you forgot or smth then do go and apologize to mudassar bhai and pay him the amount in tip or  something. He looked for you guys all over zakir, student lounge, and rec </Text>
              </ScrollView>

              <View style = {styles.CommentBar}>
              <Comment_bar bar_text= "Follow up discussion"/>
              </View>

              <ScrollView style = {styles.CommentBox}>
                {comm.map((data, index) => (
                <View key={index}>
                  <Text style={styles.CommentText}>
                    {data.c}
                  </Text>
                </View>
                ))}
              </ScrollView>


            

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
        width: width / 1.3,
        height: height / 10,
        top: ( height / 3.2)/30,
        left: (width/11)/3,
        borderRadius: 7,
        backgroundColor: "#bebebe",
      },
      CommentBar : {
        top : height / 25
      },
      CommentText : {
        lineHeight : 20,
        fontSize : 15,
        left : (width /width)+2,
        marginTop : 4,
        marginRight : 4
      },

      CommentBox : {
        position: "absolute",
        width: width / 1.3,
        height: height / 7.4,
        top: ( height / 3.2)/1.7,
        left: (width/11)/3,
        borderRadius: 7,
        backgroundColor: "#bebebe",

      }


    });
    