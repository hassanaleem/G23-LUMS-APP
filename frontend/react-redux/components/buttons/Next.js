import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View,Alert,Dimensions } from 'react-native';
const { width, height } = Dimensions.get("screen");


export const Next = () => {
  const [buttonPressed , setButtonPress] = useState(0);
  if(buttonPressed == 3){
    Alert.alert("hello")
    setButtonPress(0)
  }

  return (
      <Pressable style = {styles.likeButton} onPress = {() => setButtonPress(buttonPressed+1)}>
        <Text style = {styles.likeText}> Next </Text>
      </Pressable>
      );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
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

