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
  Pressable,
} from 'react-native';

import { Logout_button } from '../buttons/Logout_button';
import { Main_button } from '../buttons/Main_button';

export const Student_home_screen = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* <Pressable
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 5,
          paddingHorizontal: 20,
          borderRadius: 30,
          backgroundColor: '#79c4f2',
          marginLeft: 250,
          marginTop: 40,
          marginRight: 15,
        }}
        >
        <Text style={styles.logout_text}>Log out</Text>
      </Pressable> */}
      <Logout_button nav = {navigation}/>

      <Text style={styles.topheading1}>Welcome</Text>

      <Text style={styles.topheading2}>Student_Name</Text>

      <Main_button text="View Deadlines" onpress="" horizontal_padding={62} margintop={30} />
      <Main_button text="Academic Progress" onpress="" horizontal_padding={42} margintop={15} />
      <Main_button text="Discussion Forum" onpress="" horizontal_padding={49} margintop={15} />
      <Main_button text="GPA Calculator" onpress="" horizontal_padding={62} margintop={15} />
      <Main_button text="View Events" onpress="" horizontal_padding={77} margintop={15} />
      <Main_button text="All Resturents Menu" onpress="" horizontal_padding={39} margintop={15} />
      <Main_button text="Enroll Course" onpress="" horizontal_padding={71} margintop={15}/>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  topheading1: {
    marginTop: 30,
    fontSize: 30,
    fontWeight: 'bold',
  },

  topheading2: {
    marginTop: 0,
    fontSize: 30,
    fontWeight: 'bold',
  },

  logout_text: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

