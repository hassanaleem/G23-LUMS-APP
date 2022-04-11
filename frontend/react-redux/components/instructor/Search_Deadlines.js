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
  Dimensions,
} from 'react-native';
import { useState } from "react";
import { Logout_button } from "../buttons/Logout_button";
import { Main_button } from "../buttons/Main_button";
import { useDispatch } from "react-redux";
import { Search_bar } from '../searchBar/Search_bar';
import { SearchDeadlines } from '../../actions/deadlineactions';
import { useSelector } from 'react-redux';
import { Deadlines } from '../student/Deadlines';
import { useFonts } from "expo-font";

const { width, height } = Dimensions.get("screen");

export const Search_Deadlines = ({ navigation }) => {
  const [loaded] = useFonts({
    Outfit: require("../assets/fonts/static/Outfit-Bold.ttf"),
  });
  const dispatch = useDispatch();
  const [courseID, setCourseID] = useState('');
  let instructorID = useSelector((state) => state.loginReducer).user.Id
  function call() {
    if (courseID.length > 0) {
      dispatch(SearchDeadlines(courseID, instructorID));
     
      setCourseID("")
    }
  }

  let message = useSelector((state) => state.deadlineReducer).message
  let deadlines = useSelector((state) => state.deadlineReducer).data


  let items = []

  if (message == "Fetched" && deadlines.length != 0) {
    items = []
    for (let i = 0; i < deadlines.length; i++) {
      items.push(deadlines[i]["Deadline_Title"])
    }
  }

  if (message == "Failure Search") {
    Alert.alert("Search Failed", "Instructor Does not teach this course")
  }

  if (message == "Fetched" && deadlines.length == 0) {
    Alert.alert("Search Failed", "No deadlines found")
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background.png")}
        resizeMode="cover"
        style={{ width: '100%', height: '100%' }}>
        <Logout_button nav={navigation} />

        <Text
          style={{
            position: "absolute",
            fontSize: 27,
            fontWeight: "bold",
            fontFamily: 'Outfit',
            marginTop: height / 24,
            marginLeft: width / 12,
          }}>
          Search Deadline
        </Text>

        <Text style={styles.id_text1}>Search:</Text>

        <View
          style={[
            styles.containerrrr,
            {

              flexDirection: 'row',
            },
          ]}>
          <TextInput
            style={{
              flex: 3,
              // /position: 'absolute',
              fontSize: 15,
              //marginLeft: 0,
              height: 40,
              width: 300,
              borderColor: 'gray',
              borderWidth: 0,
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
              backgroundColor: '#eceded',
              paddingVertical: 10,
              paddingHorizontal: 15,
              fontFamily: 'Outfit',
            }}
            placeholder={' Enter Course ID'}
            onChangeText={(text) => setCourseID(text)}
            value={courseID}
          />

          <Pressable
            style={{
              flex: 1,
              alignItems: 'center',
              paddingVertical: 10,
              paddingHorizontal: 15,
              height: 40,
              borderBottomRightRadius: 5,
              borderTopRightRadius: 5,
              backgroundColor: '#79c4f2',
              fontFamily: 'Outfit',
            }}
            onPress={call}>
            <Text style={styles.text}>Search</Text>
          </Pressable>

        </View>




        <Text style={styles.id_text2}>Deadlines:</Text>



        <ScrollView style={styles.rectange}>
          {items.map((item, index) => (
            <View key={index}>
              <Pressable style={{ left: 5 }} onPress={() => {
                let obj = JSON.stringify(deadlines[index])
                console.log("obj", obj)
                navigation.navigate("EditDeadline", { data: obj })
              }}>
                <Text style={{ left: 5, fontSize: 18, marginTop: 13, fontFamily: 'Outfit', }}> {item} </Text>
              </Pressable>
            </View>
          ))}
        </ScrollView>

        <Main_button
          text="Go Back"
          onPress={() => navigation.navigate("instructor")}
          horizontal_padding={0}
          margintop={height / 4.35}
          marginleft={width / 6}
          marginright={width / 6}
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
    marginTop: height / 8,
    position: 'absolute',
    flex: 1,
    padding: 20,

    width: width / 1.1,
    marginLeft: width / 18,
  },
  text: {

    color: "white",
    fontFamily: 'Outfit',
  },

  id_text2: {

    marginTop: height / 13,
    marginLeft: width / 10,
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: 'Outfit',


  },
  rectange: {
    width: width / 1.219,
    maxHeight: height / 4.05,
    marginLeft: width / 10,
    marginTop: height / 110,
    backgroundColor: '#eceded',
    zIndex: 99,
    borderRadius: 5,
  },

  id_text1: {
    marginTop: height / 28,
    marginLeft: width / 10,
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: 'Outfit',
  },

});
