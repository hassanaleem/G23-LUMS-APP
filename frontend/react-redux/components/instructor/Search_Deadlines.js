import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  ScrollView,
  TextInput,
  StyleSheet,
  Alert,
  ImageBackground,
  Pressable,
} from 'react-native';
import { useState } from "react";
import { Logout_button } from "../buttons/Logout_button";
import { Main_button } from "../buttons/Main_button";
import { useDispatch } from "react-redux";
import { postEvents } from "../../actions/eventsAction";
import { Search_bar } from '../searchBar/Search_bar';

export const Search_Deadlines = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background.png")}
        resizeMode="cover"
        style={{ width: '100%', height: '99%' }}>
        <Logout_button nav={navigation} />

        <Text
          style={{
            position: 'absolute',
            top: 35,
            left: 7,
            marginLeft: 25,
            fontSize: 29,
            fontWeight: 'bold',
            fontFamily: 'sans-serif-thin',
          }}>
          Search Deadline
        </Text>

        <Text style={styles.id_text}>Search:</Text>

        <View
          style={[
            styles.containerrrr,
            {
              // Try setting `flexDirection` to `"row"`.
              flexDirection: 'row',
            },
          ]}>
          <TextInput
            style={{
              flex: 3,
              // /position: 'absolute',
              fontSize: 15,
              marginLeft: 10,
              height: 40,
              width: 300,
              // marginTop: 5,
              borderColor: 'gray',
              borderWidth: 0,
              borderRadius: 5,
              backgroundColor: '#eceded',
              // paddingVertical: 10,
              // paddingHorizontal: 15,
            }}
            placeholder={' Enter User ID'}
          />

          <Pressable
            style={{
              flex: 1,
              // position: 'absolute',
              alignItems: 'center',
              // justifyContent: 'center',
              paddingVertical: 10,
              paddingHorizontal: 15,
              height: 40,
              // borderBottomRightRadius: 5,
              // borderTopRightRadius: 5,
              backgroundColor: '#79c4f2',
              // marginLeft: 260,
              // marginTop: 115,
              // marginRight: 15,
            }}
            onPress={() => { }}>
            <Text style={styles.text}>Search</Text>
          </Pressable>
        </View>



        <Text style={styles.id_text2}>Deadlines:</Text>


        <ScrollView style={styles.rectange}>

          <Pressable style={{ left: 5 }} onPress={() => { }}>
            <Text style={{ left: 5 }}> Deadline 1 {'\n'} </Text>
          </Pressable>
          <Pressable style={{ left: 5 }} onPress={() => { }}>
            <Text style={{ left: 5 }}> Deadline 2 {'\n'} </Text>
          </Pressable>
          <Pressable style={{ left: 5 }} onPress={() => { }}>
            <Text style={{ left: 5 }}> Deadline 3 {'\n'} </Text>
          </Pressable>
          <Pressable style={{ left: 5 }} onPress={() => { }}>
            <Text style={{ left: 5 }}> Deadline 4 {'\n'} </Text>
          </Pressable>





        </ScrollView>

        <Main_button
          text="Go Back"
          onPress={() => navigation.navigate("instructor")}
          horizontal_padding={50}
          margintop={300}
          marginleft={47}
          marginright={47}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerrrr: {
    flex: 1,
    padding: 20,
    width: 350,
  },
  id_text: {
    marginTop: 10,
    marginLeft: 30,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-thin',
  },
  id_text2: {
    marginTop: 30,
    marginLeft: 30,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-thin',
  },
  rectange: {
    height: 150,
    width: 300,
    backgroundColor: '#eceded',
    // position: 'absolute',
    marginTop: 20,
    marginLeft: 30,
    zIndex: 99,
    borderRadius: 5,
  },

});
