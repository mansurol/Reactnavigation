import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MyStack from "./src/Navigations/MyStack";
import { NavigationContainer } from "@react-navigation/native";
import Attendance from "./src/Screen/Attendance";
import SurveyForm from "./src/Screen/SurveyForm";

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
