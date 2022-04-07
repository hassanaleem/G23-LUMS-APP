import { View, Text, Image, Button, ScrollView, TextInput, StyleSheet, Alert, Pressable } from 'react-native';

import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export function Search_bar (props) {
  const [text, setText] = useState("");
  return (
    <View>
      <TextInput
        style={{
          position: 'absolute',
          fontSize: props.font_size,
          marginLeft: 30,
          height: 40,
          width: 300,
          marginTop: 65,
          borderColor: 'gray',
          borderWidth: 0,
          borderRadius: 5,
          backgroundColor: '#eceded',
          paddingVertical: 10,
          paddingHorizontal: 15,
        }}
        placeholder = {props.bar_text}
        onChangeText = {(text) => {setText(text)}}
        value = {text} 
      />

      <Pressable 
        style={{position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 8,
            paddingHorizontal: 15,
            borderBottomRightRadius: 5,
            borderTopRightRadius: 5,
            backgroundColor: '#79c4f2',
            marginLeft: 255,
            marginTop: 65,
            marginRight:15,}} 

            onPress={() => {
              console.log(text);
              setText("");
            }}>
        <Text style={styles.text}>Search</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({

  text: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },

})

