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
import { Search_bar } from '../searchBar/Search_bar';
import { SearchDeadlines } from '../../actions/deadlineactions';
import { useSelector } from 'react-redux';
import { Deadlines } from '../student/Deadlines';




export const Search_Deadlines = ({ navigation }) => {
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
    for (let i = 0; i < deadlines.length; i++) {
      console.log(deadlines)
      items.push(deadlines[i]["Deadline_Title"])
    }
  }

  let itemList = items.map((item, index) => {
    return <li key={index}>
      <Pressable style={{ left: 5 }} onPress={() => navigation.navigate("EditDeadline")}>
        <Text style={{ left: 5 }}> {item} </Text>
      </Pressable>
      
    </li>
  })


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
            placeholder={' Enter Course ID'}
            onChangeText={(text) => setCourseID(text)}
            value={courseID}
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
            onPress={call}>
            <Text style={styles.text}>Search</Text>
          </Pressable>
        </View>



        <Text style={styles.id_text2}>Deadlines:</Text>


        <ScrollView style={styles.rectange}>
          {/* {renderElement()} */}

          <ol>
            {itemList}
          </ol>





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
