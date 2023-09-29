import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../Screen/LoginScreen";
import Notifications from "../Screen/ActivityScreen";
import Routes from "../Utility/Routes";
import ActivityScreen from "../Screen/ActivityScreen";
import Attendance from "../Screen/Attendance";
import AttendanceSubmit from "../Screen/AttendanceSubmit";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.LOGIN}
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.ACTIVITY}
        component={ActivityScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={Routes.ATTENDANCE}
        component={Attendance}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.ATTENDANCE_SUBMIT}
        component={AttendanceSubmit}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
