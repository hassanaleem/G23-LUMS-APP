import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View,Alert,Dimensions } from 'react-native';
const { width, height } = Dimensions.get("screen");


const App = () => {
  const [buttonPressed , setButtonPress] = useState(0);
  if(buttonPressed == 3){
    Alert.alert("hello")
    setButtonPress(0)
  }

  return (
    <View style={styles.container}>
      <Text> {buttonPressed} </Text>
      <Pressable style = {styles.likeButton} onPress = {() => setButtonPress(buttonPressed+1)}>
        <Text> Press Me </Text>
      </Pressable>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  likeButton : {
        position : "absolute",
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 30,
        backgroundColor: "#79c4f2",
        marginTop: height / 24,
        marginLeft: width / 1.5,
        marginRight: width / 12,
  }

});

export default App;