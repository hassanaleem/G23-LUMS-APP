import { Provider } from "react-redux";
import store from "./store";
import { Dashboard } from "./react-redux/components/Dashboard";
import { Adduser } from "./react-redux/components/admin/Adduser";
import { Login_screen } from "./react-redux/components/login_screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Student_home_screen } from "./react-redux/components/student/Student_home_screen";
import { Instructor_home_screen } from "./react-redux/components/instructor/Instructor_home_screen";
import { Admin_home_screen } from "./react-redux/components/admin/Admin_home_screen";
import { Addfooditem } from "./react-redux/components/admin/Addfooditem";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
<<<<<<< HEAD
      <Stack.Navigator initialRouteName="Home"  screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Login_screen}/>
        <Stack.Screen name="student" component={Student_home_screen}/>
        <Stack.Screen name="instructor" component={Instructor_home_screen}/>
        <Stack.Screen name="admin" component={Admin_home_screen}/>
      </Stack.Navigator>
    </NavigationContainer>
=======
        <Stack.Navigator
          initialRouteName="addfooditem"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={Login_screen} />
          <Stack.Screen name="student" component={Student_home_screen} />
          <Stack.Screen name="instructor" component={Instructor_home_screen} />
          <Stack.Screen name="admin" component={Admin_home_screen} />
          <Stack.Screen name="adduser" component={Adduser} />
          <Stack.Screen name="addfooditem" component={Addfooditem} />
        </Stack.Navigator>
      </NavigationContainer>

      {/* <Dashboard /> */}
      {/* <Adduser /> */}
>>>>>>> Jawad
    </Provider>
  );
}
