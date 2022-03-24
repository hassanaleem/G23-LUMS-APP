import React from 'react';
import { View, Text, Image, Button, ScrollView, TextInput, StyleSheet, Alert } from 'react-native';

import {Main_button} from  "./Main_button";

const login_screen = () => {
  return (
    
      <View style={styles.container}>
        <Text style={styles.topheading}>
          Login Account 
        </Text>
        
        <Image
          style={{height: 180, width: 180, marginTop:50, marginBottom:40}}
          source={require('./assets/LOGO.png')}
        />

        <Text style={styles.id_text}>
          User ID 
        </Text>

        <TextInput 
          style={styles.userid}
          placeholder="Enter User ID"
        />

        <Text style={styles.password_text}>
          Password 
        </Text>

        <TextInput 
          style={styles.userpassword}
          placeholder="Enter Password"
        />
        
        <Main_button text="Log in" onpress="" horizontal_padding={127} margintop={40}/>

      </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  topheading: {
    marginTop: 50,
    marginRight: 200,
    fontSize: 20,
    fontWeight: "bold"
  },

  id_text: {
    marginTop: 20,
    marginRight: 226,
    fontSize: 18,
    fontFamily: "sans-serif-thin",
  },
  
  userid: {
    height: 40,
    width: 300,
    marginTop: 5,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#eceded',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },

  password_text: {
    marginTop: 7,
    marginRight: 200,
    fontSize: 18,
    fontFamily: "sans-serif-thin",
  },

  userpassword: {
    height: 40,
    width: 300,
    marginTop: 5,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#eceded',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },

});

export default login_screen;