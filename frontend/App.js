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
import { Addenrolmentdate } from "./react-redux/components/admin/Addenrolmentdate";
import { Addevent } from "./react-redux/components/admin/Addevent";
import { Edit_deadline } from "./react-redux/components/instructor/Edit_deadline";
import { Search_Deadlines } from "./react-redux/components/instructor/Search_Deadlines";
import { Add_Deadlines } from "./react-redux/components/instructor/Add_Deadlines";
import { Update_course_timings } from "./react-redux/components/admin/Update_course_timings";
import { Update_food_prices } from "./react-redux/components/admin/Update_food_prices";
import { Update_user_info } from "./react-redux/components/admin/Update_user_info";
import { Add_grade } from "./react-redux/components/admin/Add_grade";
import { Add_course } from "./react-redux/components/admin/Add_course";
import { Enroll_course } from "./react-redux/components/student/Enroll_course";
import { Gpa_calculator } from "./react-redux/components/student/Gpa_calculator";
import { Deadlines } from "././react-redux/components/student/Deadlines";
import { Academic_progress } from "./react-redux/components/student/Academic_progress";
import { View_event } from "./react-redux/components/student/View_event";
import { Menu } from "./react-redux/components/student/Student_view_menu";
import { Notifications } from "./react-redux/components/student/notifications";
import { Ldf } from "./react-redux/components/student/Ldf_screen";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={Login_screen} />
          <Stack.Screen name="student" component={Student_home_screen} />
          <Stack.Screen name="instructor" component={Instructor_home_screen} />
          <Stack.Screen name="admin" component={Admin_home_screen} />
          <Stack.Screen name="adduser" component={Adduser} />
          <Stack.Screen name="addfooditem" component={Addfooditem} />
          <Stack.Screen name="Addenrolment" component={Addenrolmentdate} />
          <Stack.Screen name="Addevent" component={Addevent} />
          <Stack.Screen name="EditDeadline" component={Edit_deadline} />
          <Stack.Screen name="AddCourse" component={Add_course} />
          <Stack.Screen name="AddGrade" component={Add_grade} />
          <Stack.Screen name="UpdateFoodPrice" component={Update_food_prices} />
          <Stack.Screen name="EnrollCourse" component={Enroll_course} />
          <Stack.Screen name="SearchDeadlines" component={Search_Deadlines} />
          <Stack.Screen name="AddDeadlines" component={Add_Deadlines} />
          <Stack.Screen name="Student_deadlines" component={Deadlines} />
          <Stack.Screen name="Student_view_menu" component={Menu} />
          <Stack.Screen
            name="UpdateCourseTimings"
            component={Update_course_timings}
          />
          <Stack.Screen name="UpdateUserInfo" component={Update_user_info} />
          <Stack.Screen name="GpaCalculator" component={Gpa_calculator} />
          <Stack.Screen name="Notifications_screen" component={Notifications} />

          <Stack.Screen
            name="Academic_progress"
            component={Academic_progress}
          />
          <Stack.Screen name="ViewEvent" component={View_event} />
          <Stack.Screen name="DiscussionForum" component={Ldf} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
