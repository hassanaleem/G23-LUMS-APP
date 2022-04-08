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

import { Logout_button } from '../buttons/Logout_button';
import { Main_button } from '../buttons/Main_button';
import { useSelector } from 'react-redux';

export const Instructor_home_screen = ({navigation}) => {
  let name = useSelector((state) => state.loginReducer).user.Name

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/background.png')}
        resizeMode="cover"
        style={{ width: '100%', height: '99%' }}>
        <Logout_button nav = {navigation}/>

        <Text style={styles.topheading1}>Welcome</Text>

        <Text style={styles.topheading2}>{name}</Text>

        <Main_button
          text="Add New Deadline"
          onPress={() => navigation.navigate("AddDeadlines")}
          horizontal_padding={30}
          margintop={75}
          marginleft={47}
          marginright={47}
        />

        <Main_button
          text="Edit Deadlines"
          onPress={() => navigation.navigate("SearchDeadlines")}
          horizontal_padding={50}
          margintop={30}
          marginleft={47}
          marginright={47}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  topheading1: {
    marginTop: 60,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  topheading2: {
    marginTop: 10,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

