import React from 'react';
import { View, Text, Image, Button, ScrollView, TextInput, StyleSheet, Alert, Pressable } from 'react-native';

export function Main_button (props) {
  return (
    <Pressable 
      style={{alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: 10,
              paddingHorizontal: props.horizontal_padding,
              borderRadius: 20,
              backgroundColor: '#79c4f2',
              marginTop: props.margintop,
              marginLeft: props.marginleft,
              marginRight: props.marginright}} 

      onPress={props.onpress}>
      
      <Text style={styles.text}>{props.text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({

  text: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },

})
