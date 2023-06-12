import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screen/HomeScreen';
import Notifications from '../Screen/Notifications';
import Routes from '../Utility/Routes';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.HOME} component={HomeScreen}  options={{ headerShown: false }} />
      <Stack.Screen name={Routes.NOTIFICATION} component={Notifications} options={{ headerTitle: '' }} />
   
    </Stack.Navigator>
  );
}

export default MyStack;