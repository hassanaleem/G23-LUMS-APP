import React from "react";
import { ImageBackground, StyleSheet, Text, View ,Button,Alert,TouchableOpacity,ScrollView} from "react-native";

const image = { uri: "https://reactjs.org/logo-og.png" };


const App = () => {
  const gpa = 4.0
    return(
    <ImageBackground source={require('./assets/background.png')} resizeMode="contain" style={styles.image}>
    <View style = {{position : 'absolute', top : 40,flexDirection: 'row'}}>
      <Text style = {{fontSize : 20}}> Acamedic {"\n"} Progress</Text>
    </View>
    <View style = {{position : 'absolute', top : 100,flexDirection: 'row'}}>
      <Text style = {{fontSize : 20}}> CGPA : {gpa} </Text>
    </View>
    <View style = {{position : 'absolute', top : 135,flexDirection: 'row'}}>
      <Text style = {{fontSize : 20}}> Grades : </Text>
    </View>
      <View style = {styles.logoutbuttonview}>
        <TouchableOpacity title = "Log out" onPress = {() => {Alert.alert("You have been Loged out")}}
        style = {styles.logoutbutton}>
        <Text style = {{ color : "white",fontSize : 15}}> Log Out </Text>
        </TouchableOpacity>
      </View>

            <View style = {{position : 'absolute',top : 170 , left : 16}}>
        <ScrollView style = {styles.rectange2}>
        <Text style = {{left : 5}}> Course Code : Title : Grade  </Text>
        <Text style = {{left : 5}}> Course Code : Title : Grade  </Text>
        <Text style = {{left : 5}}> Course Code : Title : Grade  </Text>
        <Text style = {{left : 5}}> Course Code : Title : Grade  </Text>
        <Text style = {{left : 5}}> Course Code : Title : Grade  </Text>
        <Text style = {{left : 5}}> Course Code : Title : Grade  </Text>
        <Text style = {{left : 5}}> Course Code : Title : Grade  </Text>
        <Text style = {{left : 5}}> Course Code : Title : Grade  </Text>
        <Text style = {{left : 5}}> Course Code : Title : Grade  </Text>
        <Text style = {{left : 5}}> Course Code : Title : Grade  </Text>
        <Text style = {{left : 5}}> Course Code : Title : Grade  </Text>
        <Text style = {{left : 5}}> Course Code : Title : Grade  </Text>
        <Text style = {{left : 5}}> Course Code : Title : Grade  </Text>
        <Text style = {{left : 5}}> Course Code : Title : Grade  </Text>
        <Text style = {{left : 5}}> Course Code : Title : Grade  </Text>
        <Text style = {{left : 5}}> Course Code : Title : Grade  </Text>
        <Text style = {{left : 5}}> Course Code : Title : Grade  </Text>
        <Text style = {{left : 5}}> Course Code : Title : Grade  </Text>
        <Text style = {{left : 5}}> Course Code : Title : Grade  </Text>
        <Text style = {{left : 5}}> Course Code : Title : Grade  </Text>
        <Text style = {{left : 5}}> Course Code : Title : Grade  </Text>
        <Text style = {{left : 5}}> Course Code : Title : Grade  </Text>
        <Text style = {{left : 5}}> Course Code : Title : Grade  </Text>
        <Text style = {{left : 5}}> Course Code : Title : Grade  </Text>
        </ScrollView>
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

  image: {
    flex: 1,
    justifyContent: "center"
  },
  logoutbuttonview : {
    position : "absolute",
    top : 50,
    right : 10
  },
  rectange :{

    height: 100,
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
    left : 10,
    top : 50,
    fontSize: 15,
    fontWeight: "bold",
  }
});

export default App;