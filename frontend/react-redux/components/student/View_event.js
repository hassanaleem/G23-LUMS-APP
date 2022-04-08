import React from "react";
import { ImageBackground, StyleSheet, Text, View ,Button,Alert,Pressable,ScrollView,} from "react-native";


import { Logout_button } from '../buttons/Logout_button';
import { Main_button } from '../buttons/Main_button';
import { getEvents } from "../../actions/eventsAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const ViewEvent = () => {
  const dispatch = useDispatch(); // this call the action and the action send the GET or POST request on the backend
  const get = () =>{
    dispatch(getEvents)

  }
  get()
  let data = useSelector((state) => state.eventsReducer);
  // console.log(data,"Called")

  return (
    
    <ImageBackground source={require('../assets/background.png')} resizeMode="contain" 
    style={{ width: '100%', height: '99%' }}>
    <Logout_button/>
    <Text style = {styles.event}> Events </Text>

      <View style = {{position : 'absolute', marginTop : 80, left : 7}}> 
      <Text> Enrollment </Text>
      </View>
      <View style = {{position : 'absolute',top : 125 , left : 10}}>

        <ScrollView style = {styles.rectange}>
        <Text style = {{left : 5}}> Date : Time {"\n"} </Text>
        <Text style = {{left : 5}}> Date : Time {"\n"}  </Text>
        <Text style = {{left : 5}}> Date : Time {"\n"}  </Text>
        <Text style = {{left : 5}}> Date : Time {"\n"}  </Text>
        <Text style = {{left : 5}}> Date : Time {"\n"}  </Text>
        <Text style = {{left : 5}}> Date : Time {"\n"}  </Text>
        <Text style = {{left : 5}}> Date : Time {"\n"}  </Text>
        <Text style = {{left : 5}}> Date : Time {"\n"}  </Text>
        <Text style = {{left : 5}}> Date : Time {"\n"}  </Text>
        <Text style = {{left : 5}}> Date : Time {"\n"}  </Text>
        <Text style = {{left : 5}}> Date : Time {"\n"}  </Text>
        <Text style = {{left : 5}}> Date : Time {"\n"}  </Text>
        <Text style = {{left : 5}}> Date : Time {"\n"}  </Text>
        <Text style = {{left : 5}}> Date : Time {"\n"}  </Text>
        <Text style = {{left : 5}}> Date : Time {"\n"}  </Text>
        <Text style = {{left : 5}}> Date : Time {"\n"}  </Text>
        <Text style = {{left : 5}}> Date : Time {"\n"}  </Text>
        <Text style = {{left : 5}}> Date : Time {"\n"}  </Text>
        <Text style = {{left : 5}}> Date : Time {"\n"}  </Text>
        <Text style = {{left : 5}}> Date : Time {"\n"}  </Text>
        <Text style = {{left : 5}}> Date : Time {"\n"}  </Text>
        <Text style = {{left : 5}}> Date : Time {"\n"}  </Text>
        <Text style = {{left : 5}}> Date : Time {"\n"}  </Text>
        <Text style = {{left : 5}}> Date : Time {"\n"}  </Text>
        </ScrollView>
      </View>
      <View style =  {{position : "absolute", left: 10,top : 220}}>
        <Text > Events </Text>
      </View>
      <View style = {{position : 'absolute',top : 250 , left : 10}}>
        <ScrollView style = {styles.rectange2}>
        <Text style = {{left : 5}}> Event Name / Date / Type {"\n"}   </Text>
        <Text style = {{left : 5}}> Event Name / Date / Type {"\n"}   </Text>
        <Text style = {{left : 5}}> Event Name / Date / Type {"\n"}   </Text>
        <Text style = {{left : 5}}> Event Name / Date / Type {"\n"}   </Text>
        <Text style = {{left : 5}}> Event Name / Date / Type {"\n"}   </Text>
        <Text style = {{left : 5}}> Event Name / Date / Type {"\n"}   </Text>
        <Text style = {{left : 5}}> Event Name / Date / Type {"\n"}   </Text>
        <Text style = {{left : 5}}> Event Name / Date / Type {"\n"}   </Text>
        <Text style = {{left : 5}}> Event Name / Date / Type {"\n"}   </Text>
        <Text style = {{left : 5}}> Event Name / Date / Type {"\n"}  </Text>
        <Text style = {{left : 5}}> Event Name / Date / Type {"\n"}  </Text>
        <Text style = {{left : 5}}> Event Name / Date / Type {"\n"}  </Text>
        <Text style = {{left : 5}}> Event Name / Date / Type {"\n"}  </Text>
        <Text style = {{left : 5}}> Event Name / Date / Type {"\n"}  </Text>
        <Text style = {{left : 5}}> Event Name / Date / Type {"\n"}  </Text>
        <Text style = {{left : 5}}> Event Name / Date / Type {"\n"}  </Text>
        <Text style = {{left : 5}}> Event Name / Date / Type {"\n"}  </Text>
        <Text style = {{left : 5}}> Event Name / Date / Type {"\n"}  </Text>
        <Text style = {{left : 5}}> Event Name / Date / Type {"\n"}  </Text>
        <Text style = {{left : 5}}> Event Name / Date / Type {"\n"}  </Text>
        <Text style = {{left : 5}}> Event Name / Date / Type {"\n"}  </Text>
        <Text style = {{left : 5}}> Event Name / Date / Type {"\n"}  </Text>
        <Text style = {{left : 5}}> Event Name / Date / Type {"\n"}  </Text>
        <Text style = {{left : 5}}> Event Name / Date / Type {"\n"}  </Text>
        </ScrollView>
                  <Main_button
          text="Go Back"
          onpress=""
          horizontal_padding={50}
          margintop={260}
          marginleft={85}
          marginright={47}
        />
      </View>


    </ImageBackground>


    )};

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : '#fff',
    top : 120,
    paddingTop : 40,
    paddingHorizontal:20
  },


  logoutbuttonview : {
    position : "absolute",
    top : 50,
    right : 10
  },
  rectange :{

    height: 70,
    width: 340,
    backgroundColor: '#D3D3D3',
    position: 'absolute', 
    zIndex: 99,
    borderRadius : 5
  },
    rectange2 :{

    height: 250,
    width: 340,
    backgroundColor: '#D3D3D3',
    position: 'absolute', 
    zIndex: 99,
    borderRadius : 5
  },
  logoutbutton: {
    backgroundColor : '#87CEFA',
    padding : 5,
    borderRadius : 180
  },
  event: {
    color: "black",
    position : "absolute",
    left : 2,
    marginTop : 33,
    fontSize: 30,
    fontWeight: "bold",
  }
});

