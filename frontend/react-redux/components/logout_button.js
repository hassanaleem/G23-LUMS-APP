import React from 'react';
import { View, Text, Image, Button, ScrollView, TextInput, StyleSheet, Alert, Pressable } from 'react-native';

export function Logout_button (props) {
  return (
    <Pressable 
      style={{alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: 5,
              paddingHorizontal: 10,
              borderRadius: 30,
              backgroundColor: '#79c4f2',
              marginLeft: 250,
              marginTop: 40,
              marginRight:15,}} 

      onPress={props.onpress}>
      
      <Text style={styles.text}>Log out</Text>
    </Pressable>
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