import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View ,Alert,Pressable,ScrollView,Dimensions} from "react-native";
import { Logout_button } from '../buttons/Logout_button';
import { Main_button } from '../buttons/Main_button';
import { Post_bar } from "../Post_bar/Post_bar";
import { Comment_bar } from "../CommentBar/Commentbar";
const { width, height } = Dimensions.get("screen");

export const Ldf = ({navigation}) => {
  const temp = {
    0 : {comments: 'Comment 1,Comment 2 ,Comment 3 ,Comment 4,Comment 5,Comment 6,Comment 7',liker_id : "23100193,23100186,23100199",post : "Post 1"},
    1 : {comments: 'Hello 1,Hello 2 ,Hello 3 ,Hello 4,Hello 5,Hello 6,Hello 7',liker_id : "23100193,23100186,23100199",post : "Post 2"},
    2 : {comments: 'Hi 1,Hi 2 ,Hi 3 ,Hi 4,Hi 5,Hi 6,Hi 7',liker_id : "23100193,23100186,23100199",post : "Post 3"}
  }
  var CommentsArray = []
  var liker_id = []
  var post = []
    {Object.entries(temp).map(([key, value]) => (
      CommentsArray.push(value.comments.split(',')) , liker_id.push(value.liker_id.split(',')), post.push(value.post)
    ))}
  const [buttonPressed , setButtonPress] = useState(0);
  if(buttonPressed == CommentsArray.length){
    Alert.alert("hello")
    setButtonPress(0)
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

              <ScrollView style = {styles.PostTextRec}>
                <Text style = {{left :5, top : 4 , fontSize:15, lineHeight : 20}}> {post[buttonPressed]} </Text>
              </ScrollView>

              <View style = {styles.CommentBar}>
              <Comment_bar bar_text= "Follow up discussion"/>
              </View>

              <ScrollView style = {styles.CommentBox}>
                {CommentsArray[buttonPressed].map((data, index) => (
                <View key={index}>
                  <Text style={styles.CommentText}>
                    {data}
                  </Text>
                </View>
                ))}
              </ScrollView>
              
        </View>
        <Pressable style = {styles.likeButton} onPress = {() => setButtonPress(buttonPressed+1)}>
        <Text style = {styles.likeText}> Next </Text>
        </Pressable>
          
        
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

      },
      likeButton : {
        position : "absolute",
        paddingVertical: 8,
        paddingHorizontal: 80,
        borderRadius: 30,
        backgroundColor: "#79c4f2",
        marginTop: height/1.52,
        marginLeft: width/4.5,
        marginRight: width / 12,
  },
  likeText : {
      color : "white",
      fontSize : 20,
      fontWeight: "bold"
      
  }


    });
    