import React, { useEffect, useState } from "react";
import MapView, { Callout, Circle, Marker } from "react-native-maps";
import { StyleSheet, View, Text } from "react-native";
import * as Location from "expo-location";

export default function GeoLocation() {
  const [pin, setPin] = useState();
  const handleMarkerDragStart = (e) => {
    console.log("Marker drag started", e.nativeEvent.coordinate);
  };

  const handleMarkerDrag = (e) => {
    setMarkerCoords(e.nativeEvent.coordinate);
  };

  const handleMarkerDragEnd = (e) => {
    console.log("Marker drag ended", e.nativeEvent.coordinate);

    setPin({
      latitude: e.nativeEvent.coordinate.latitude,
      longitude: e.nativeEvent.coordinate.longitude,
    });
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location);

      setPin({
        latitude: e.nativeEvent.coordinate.latitude,
        longitude: e.nativeEvent.coordinate.longitude,
      });
    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 23.8103, // The latitude of Dhaka, Bangladesh
          longitude: 90.4125, // The longitude of Dhaka, Bangladesh
          latitudeDelta: 0.0922, // Adjust this value to control the zoom level
          longitudeDelta: 0.0421, // Adjust this value to control the zoom level
        }}
        showsUserLocation={true}
        onUserLocationChange={(e) => {
          console.log("userChangeLocation", e.nativeEvent.coordinate);
        }}
      >
        <Marker
          coordinate={pin}
          title="Store"
          description="11 no road"
          pinColor="gold"
          draggable
          onDragStart={handleMarkerDragStart}
          onDrag={handleMarkerDrag}
          onDragEnd={handleMarkerDragEnd}
        >
          <Callout>
            <Text>callOut</Text>
          </Callout>
        </Marker>

        <Circle center={pin} radius={100}></Circle>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
