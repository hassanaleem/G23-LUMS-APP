import React from 'react';
import { View, Text, Image, Button, ScrollView, TextInput, StyleSheet, Alert } from 'react-native';
import { useState } from 'react';
import axios from 'axios'
import {Main_button} from  "./Main_button";
import { login, logout, loginFailed} from '../actions/loginAction';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export const Login_screen = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  const dispatch = useDispatch()

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    // const [data, setData] = useState({})
    const [fetched, setFetched] = useState(false)
    const [datum, setDatum] = useState([])

    const validate = () => {
    let data = useSelector((state) => state.loginReducer)
    console.log("data", data)
    // setData(data)
  
  }
  
  const  onPress = () => 
  {
        // if (fetched == false)
    
      // let data = await axios.get(`http://10.130.39.207:8000/login?id=${userName}&password=${password}`).then(res => res.data.replace(/&quot;/g, '"')).then(data => {
      // console.log(userName, password)
      // // setData(data) 
      // setFetched(true)
      // setUserName("")
      // setPassword("")
      // return data
      // }
      // )
      // .then((data)=>validate(data))
      if (fetched == false)
      {
      dispatch(login("23100199", "abc"))
      }
      // useDispatch(login())
      setFetched(true)
    

  }
  validate()

   

  return (
    
      <View style={styles.container}>
        <Text style={styles.topheading}>
          Login Account
          {/* {data} */}
        </Text>
        
        <Image
          style={{height: 180, width: 180, marginTop:50, marginBottom:40}}
          source={require('./assets/LOGO.png')}
        />

        <Text style={styles.id_text}>
          User ID
        </Text>

        <TextInput 
          onChangeText={(text) => {setUserName(text)}}
          value={userName}
          style={styles.userid}
          placeholder="Enter User ID"
        />

        <Text style={styles.password_text}>
          Password 
        </Text>

        <TextInput
          onChangeText={(text) => setPassword(text)}
          value = {password}
          style={styles.userpassword}
          placeholder="Enter Password"
        />
        

        <Main_button text="Log in" onpress= {onPress} horizontal_padding={127} margintop={40}/>

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

