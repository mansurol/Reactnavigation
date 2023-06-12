import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyStack from './src/Navigations/MyStack';
import { NavigationContainer } from "@react-navigation/native";
import MyTab from "./src/Navigations//MyTab"
import MyDrawer from "./src/Navigations/MyDrawer"
export default function App() {
  return (
    
    <NavigationContainer>
    <MyDrawer />
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
