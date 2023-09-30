import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { StatusBar } from "expo-status-bar";
import Routes from "../Utility/Routes";

const OrderSuccessScreen = ({ navigation }) => {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Icon name="check-circle" size={150} color="red" />

          <Text style={styles.SuccessText}>Submitted</Text>

          <TouchableOpacity
            style={styles.DoneBtn}
            onPress={() => navigation.navigate(Routes.ACTIVITY)}
          >
            <Text>
              <Icon name="check-circle" size={13} color="red" />
              <Text style={styles.DoneText}>Back to activity</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Vertically center the content
    alignItems: "center", // Horizontally center the content
  },
  content: {
    alignItems: "center",
  },
  SuccessText: {
    fontSize: 28,
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textAlign: "center",
    color: "red",
    marginTop: 28,
  },
  DoneBtn: {
    width: "40%",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "row",
    padding: 12,
    borderRadius: 5,
    backgroundColor: "red",
    marginVertical: 40,
  },
  DoneText: {
    fontSize: 14,
    fontWeight: "800",
    fontStyle: "normal",
    color: "#fff",
  },
});

export default OrderSuccessScreen;
