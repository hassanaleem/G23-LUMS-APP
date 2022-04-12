import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  ScrollView,
  TextInput,
  StyleSheet,
  ImageBackground,
  Alert,
  Pressable,
  Touchable,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import { Main_button } from "../buttons/Main_button";
import { Logout_button } from "../buttons/Logout_button";
import { logout } from "../../actions/loginAction";
import { useFonts } from "expo-font";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Icon } from "react-native-elements";
import { getNotifications } from "../../actions/notificationAction";
import { clearMsg } from "../../actions/notificationAction";

const { width, height } = Dimensions.get("screen");

export const Student_home_screen = ({ navigation }) => {
  const [loaded] = useFonts({
    Outfit: require("../assets/fonts/static/Outfit-Bold.ttf"),
  });
  const [loggedOut, setLoggedOut] = useState(false);
  const [noNotifications, setnoNotifications] = useState(false); // set this to true if no notifications
  // const [notificationsCount, setnotificationsCount] = useState(0);
  let name = useSelector((state) => state.loginReducer).user.Name;
  let notificationsCount = 0;
  const dispatch = useDispatch();

  let msg = useSelector((state) => state.notificationReducer).message;
  if (msg == "") {
    let id = useSelector((state) => state.loginReducer).user.Id;
    dispatch(getNotifications(id));
  }

  if (msg == "fetched") {
    notificationsCount = useSelector((state) => state.notificationReducer).data
      .length;
    clearMsg();
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/whiteBackground.png")}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      >
        <Icon
          name="bell"
          type="font-awesome"
          color="#79c4f2"
          containerStyle={{
            position: "absolute",
            top: height / 24,
            left: width / 15,
            marginRight: width / 12,
          }}
          size={width / 10}
          Component={TouchableOpacity}
          onPress={() => {
            navigation.navigate("Notifications_screen");
          }}
          disabled={notificationsCount == 0 ? true : false}
          disabledStyle={{
            backgroundColor: "transparent",
          }}
        />
        <Text
          style={{
            position: "absolute",
            top: height / 13.2,
            left: width / 6.2,
            marginRight: width / 12,
            fontSize: 14,
            lineHeight: 17.64,
            fontWeight: "medium",
            color: "#FC0101",
          }}
        >
          {notificationsCount > 0 ? notificationsCount : null}
        </Text>
        <Logout_button nav={navigation} />

        <Text style={styles.topheading1}>Welcome</Text>

        <Text style={styles.topheading2}>{name}</Text>

        <Main_button
          text="View Deadlines"
          onPress={() => navigation.navigate("Student_deadlines")}
          horizontal_padding={0}
          margintop={height / 30}
          marginleft={width / 7}
          marginright={width / 7}
        />
        <Main_button
          text="Academic Progress"
          onPress={() => navigation.navigate("Academic_progress")}
          horizontal_padding={0}
          margintop={height / 50}
          marginleft={width / 7}
          marginright={width / 7}
        />
        <Main_button
          text="Discussion Forum"
          onPress={() => navigation.navigate("DiscussionForum")}
          horizontal_padding={0}
          margintop={height / 50}
          marginleft={width / 7}
          marginright={width / 7}
        />
        <Main_button
          text="GPA Calculator"
          onPress={() => navigation.navigate("GpaCalculator")}
          horizontal_padding={0}
          margintop={height / 50}
          marginleft={width / 7}
          marginright={width / 7}
        />
        <Main_button
          text="View Events"
          onPress={() => navigation.navigate("ViewEvent")}
          horizontal_padding={0}
          margintop={height / 50}
          marginleft={width / 7}
          marginright={width / 7}
        />
        <Main_button
          text="All Resturents Menu"
          onPress={() => navigation.navigate("Student_view_menu")}
          horizontal_padding={0}
          margintop={height / 50}
          marginleft={width / 7}
          marginright={width / 7}
        />
        <Main_button
          text="Enroll Course"
          onPress={() => navigation.navigate("EnrollCourse")}
          horizontal_padding={0}
          margintop={height / 50}
          marginleft={width / 7}
          marginright={width / 7}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },

  topheading1: {
    marginTop: 30,
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
    fontFamily: "Outfit",
  },

  topheading2: {
    marginTop: 0,
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
    fontFamily: "Outfit",
  },

  logout_text: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  bell: {
    width: 40,
    height: 40,
    top: 150,
    left: 20,
    position: "absolute",
  },
});
