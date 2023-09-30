import React, { useState, useRef, useEffect } from "react";
import { Camera } from "expo-camera";

import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function SurveyForm() {
  const [shopName, setShopName] = useState("");
  const [shopAddress, setShopAddress] = useState("");
  const [shopOwnerName, setShopOwnerName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [shopOwnerMobile, setShopOwnerMobile] = useState("");
  const [sellingEngineOil, setSellingEngineOil] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedVehicleCategory, setSelectedVehicleCategory] = useState("");
  const [DistributorName, setDistributorName] = useState("");
  const [SellingInterested, setSellingInterested] = useState("");
  const [SellingSpareParts, setSellingSpareParts] = useState("");

  //camera
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [cameraVisible, setCameraVisible] = useState(false);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const cameraRef = useRef(null);

  //camera-Two
  const handleSubmit = () => {
    if (
      shopName.trim() === "" ||
      shopAddress.trim() === "" ||
      selectedCategory.trim() === "" ||
      shopOwnerName.trim() === "" ||
      shopOwnerMobile.trim() === "" ||
      selectedVehicleCategory.trim() === "" ||
      sellingEngineOil.trim() === "" ||
      selectedOption.trim() === "" ||
      // DistributorName.trim() === "" ||
      // SellingInterested.trim() === "" ||
      SellingSpareParts.trim() === "" ||
      capturedPhoto.trim() === ""
    ) {
      Alert.alert("Validation Error", "Please fill in all fields");
    } else {
      console.log("Shop Name:", shopName);
      console.log("Shop Address:", shopAddress);
      console.log("Shop Category:", selectedCategory);
      console.log("Shop Owner's Name:", shopOwnerName);
      console.log("Shop Owner's Mobile No:", shopOwnerMobile);
      console.log("Selling Engine Oil from Shop:", sellingEngineOil);
      console.log("Sells Motul Oil:", selectedOption);
      console.log("Vehicle:", selectedVehicleCategory);
      console.log("DistributorName:", DistributorName);
      console.log("SellingInterested:", SellingInterested);
      console.log("SellingSpareParts:", SellingSpareParts);
      console.log("capturedPhoto:", capturedPhoto);
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(status === "granted");
    })();
  }, []);

  const toggleCamera = () => {
    setType(
      type === Camera.Constants.Type.front
        ? Camera.Constants.Type.back
        : Camera.Constants.Type.front
    );
  };

  const capturePhoto = async () => {
    if (cameraRef.current) {
      const photoData = await cameraRef.current.takePictureAsync({
        width: 1024, // Specify the desired width
        height: 768, // Specify the desired height
      });
      console.log("Captured photo data:", photoData);
      setCapturedPhoto(photoData.uri);
      setCameraVisible(false);
    }
  };

  if (hasCameraPermission === null) {
    return <View style={styles.container} />;
  }
  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={{ marginTop: 15 }}>
          <Text style={styles.header}>SurveyForm</Text>
        </View>
        <ScrollView>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Shop Name:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter shop name"
              onChangeText={(text) => setShopName(text)}
              value={shopName}
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Shop Address:</Text>
            <TextInput
              style={styles.input} // Increase the height for address input
              placeholder="Enter shop address"
              multiline
              onChangeText={(text) => setShopAddress(text)}
              value={shopAddress}
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Shop Category:</Text>

            <View style={styles.Box}>
              <TouchableOpacity
                style={{
                  backgroundColor:
                    selectedCategory === "Workshop" ? "green" : "red",
                  padding: 3,
                  borderRadius: 5,
                  // Add other styles as needed
                }}
                onPress={() => setSelectedCategory("Workshop")}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 16,
                    fontWeight: "700",
                  }}
                >
                  Workshop
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor:
                    selectedCategory === "Retailer" ? "green" : "red",
                  padding: 3,
                  borderRadius: 5,
                }}
                onPress={() => setSelectedCategory("Retailer")}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 16,
                    fontWeight: "700",
                  }}
                >
                  Retailer
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor:
                    selectedCategory === "Wholesaler" ? "green" : "red",
                  padding: 3,
                  borderRadius: 5,
                }}
                onPress={() => setSelectedCategory("Wholesaler")}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 16,
                    fontWeight: "700",
                  }}
                >
                  Wholesaler
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Shop Owner's Name:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter shop owner's name"
              onChangeText={(text) => setShopOwnerName(text)}
              value={shopOwnerName}
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Shop Owner's Mobile No:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter shop owner's mobile number"
              onChangeText={(text) => setShopOwnerMobile(text)}
              value={shopOwnerMobile}
              keyboardType="phone-pad" // This sets the keyboard type to a phone number pad
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Vehicle Category :</Text>

            <View style={styles.Box}>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
                onPress={() => setSelectedVehicleCategory("Bike")}
              >
                <View
                  style={{
                    width: 15,
                    height: 15,
                    backgroundColor:
                      selectedVehicleCategory === "Bike" ? "green" : "white",
                    marginRight: 10,
                  }}
                />
                <Text
                  style={{
                    color: "white",
                    fontSize: 16,
                    fontWeight: "700",
                  }}
                >
                  Bike
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
                onPress={() => setSelectedVehicleCategory("Passenger Vehicle")}
              >
                <View
                  style={{
                    width: 15,
                    height: 15,
                    backgroundColor:
                      selectedVehicleCategory === "Passenger Vehicle"
                        ? "green"
                        : "white",
                    marginRight: 10,
                  }}
                />
                <Text
                  style={{
                    color: "white",
                    fontSize: 16,
                    fontWeight: "700",
                  }}
                >
                  Passenger Vehicle
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
                onPress={() => setSelectedVehicleCategory("Track/Bus")}
              >
                <View
                  style={{
                    width: 15,
                    height: 15,
                    backgroundColor:
                      selectedVehicleCategory === "Track/Bus"
                        ? "green"
                        : "white",
                    marginRight: 10,
                  }}
                />
                <Text
                  style={{
                    color: "white",
                    fontSize: 16,
                    fontWeight: "700",
                  }}
                >
                  Track/Bus
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Selling Engine Oil from Shop:</Text>
            <TextInput
              style={styles.input}
              placeholder="Selling Engine Oil from Shop"
              onChangeText={(text) => setSellingEngineOil(text)}
              value={sellingEngineOil}
            />
          </View>

          <View>
            <View style={styles.formGroup}>
              <Text style={styles.label}>Does he sell Motul Oil:</Text>
              <View style={styles.FlexStyle}>
                <TouchableOpacity
                  style={{
                    backgroundColor: selectedOption === "Yes" ? "green" : "red",
                    width: "20%",
                    borderWidth: 1,
                    borderColor: "black",
                    borderRadius: 10,
                    padding: 7,
                  }}
                  onPress={() => setSelectedOption("Yes")}
                >
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      fontSize: 17,
                      fontWeight: "700",
                    }}
                  >
                    Yes
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    backgroundColor: selectedOption === "No" ? "green" : "red",
                    width: "20%",
                    borderWidth: 1,
                    borderColor: "black",
                    borderRadius: 10,
                    padding: 7,
                    marginLeft: 40,
                  }}
                  onPress={() => setSelectedOption("No")}
                >
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      fontSize: 17,
                      fontWeight: "700",
                    }}
                  >
                    No
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Distributor Name (if Yes):</Text>
            <TextInput
              style={styles.input}
              placeholder="Distributor Name"
              onChangeText={(text) => setDistributorName(text)}
              value={DistributorName}
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Is he Interested (if No):</Text>
            <TextInput
              style={styles.input}
              placeholder="Is he Interested"
              onChangeText={(text) => setSellingInterested(text)}
              value={SellingInterested}
            />
          </View>

          <View>
            <View style={styles.formGroup}>
              <Text style={styles.label}>Does he sell Spare Parts:</Text>
              <View style={styles.FlexStyle}>
                <TouchableOpacity
                  style={{
                    backgroundColor:
                      SellingSpareParts === "Yes" ? "green" : "red",
                    width: "20%",
                    borderWidth: 1,
                    borderColor: "black",
                    borderRadius: 10,
                    padding: 7,
                  }}
                  onPress={() => setSellingSpareParts("Yes")}
                >
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      fontSize: 17,
                      fontWeight: "700",
                    }}
                  >
                    Yes
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    backgroundColor:
                      SellingSpareParts === "No" ? "green" : "red",
                    width: "20%",
                    borderWidth: 1,
                    borderColor: "black",
                    borderRadius: 10,
                    padding: 7,
                    marginLeft: 40,
                  }}
                  onPress={() => setSellingSpareParts("No")}
                >
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      fontSize: 17,
                      fontWeight: "700",
                    }}
                  >
                    No
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={[styles.formGroup, { paddingBottom: 100 }]}>
            <Text style={styles.label}>Take shop Picture:</Text>

            <View>
              {cameraVisible ? (
                <Camera
                  style={styles.camera}
                  type={type}
                  ref={cameraRef}
                  ratio="4:3"
                >
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity
                      style={styles.captureButton}
                      onPress={capturePhoto}
                    >
                      <FontAwesome name="camera" size={18} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.toggleButton}
                      onPress={toggleCamera}
                    >
                      <FontAwesome name="refresh" size={18} color="white" />
                    </TouchableOpacity>
                  </View>
                </Camera>
              ) : capturedPhoto ? (
                <View style={styles.imageContainer}>
                  <Image
                    source={{ uri: capturedPhoto }}
                    style={styles.capturedImage}
                  />
                  <TouchableOpacity
                    style={styles.submitButton}
                    onPress={handleSubmit}
                  >
                    <Text style={styles.submitButtonText}>Submit</Text>
                  </TouchableOpacity>
                </View>
              ) : null}
              {!cameraVisible && !capturedPhoto && (
                <TouchableOpacity
                  style={styles.buttonTwo}
                  onPress={() => setCameraVisible(true)}
                >
                  <Text style={styles.text}>shop Picture </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B4C7E7",
  },
  header: {
    textAlign: "center",
    color: "red",
    fontSize: 35,
    fontWeight: "800",
  },
  formGroup: {
    marginVertical: 5,
    paddingHorizontal: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "red",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white",
    paddingHorizontal: 10,
    marginTop: 5,
  },
  camera: {
    flex: 0,
    width: "100%",
    height: 300,
  },
  buttonContainer: {
    flex: 0,
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20,
  },
  toggleButton: {
    flex: 0.1,
    alignSelf: "flex-end",
    alignItems: "center",
    backgroundColor: "transparent",
    padding: 5,
  },
  captureButton: {
    flex: 0.1,
    alignSelf: "flex-end",
    alignItems: "center",
    backgroundColor: "red",
    padding: 5,
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    flexDirection: "row",
  },
  imageContainer: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  capturedImage: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  buttonTwo: {
    backgroundColor: "gray",
    padding: 5,
    borderRadius: 5,
    width: 120,
  },
  submitButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 10,
    width: 100,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#000",
  },
  submitButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 10,
    width: 100,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 30,
  },
  Box: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    padding: 10,
    width: "55%",
    marginTop: 10,
    backgroundColor: "red",
  },
  FlexStyle: {
    flexDirection: "row",
    marginTop: 10,
  },
  submitButtonText: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    fontWeight: "700",
  },
});
