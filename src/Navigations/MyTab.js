import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Routes from '../Utility/Routes';
import HomeScreen from '../Screen/HomeScreen';
import ProfileScreen from '../Screen/ProfileScreen';
import MyStack from './MyStack';
import Icon from "react-native-vector-icons/Ionicons";
const Tab = createBottomTabNavigator();

function MyTab() {
  return (
    <Tab.Navigator 
    screenOptions={({ route }) => ({
        headerShown: false,
       tabBarIcon: ({ color, size, focused }) => {
         let IconName;
         if (route.name === Routes.HOME_TAB) {
           IconName = focused ? "ios-home-sharp" : "ios-home-outline";
         } else if (route.name === Routes.PROFILE) {
            IconName = focused ? 'ios-person' : 'ios-person-outline';
         } 
         return <Icon name={IconName} size={22} color={color} />;
       },
       tabBarActiveTintColor: "tomato",
       tabBarInactiveTintColor: "gray",
     })}>
      <Tab.Screen name={Routes.HOME_TAB} component={MyStack} />
      <Tab.Screen name={Routes.PROFILE} component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default MyTab;