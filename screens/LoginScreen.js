import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { DeviceEventEmitter } from "react-native";
import Beacons from "react-native-beacons-manager";

const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>LoginScreen</Text>
      <Pressable onPress={() => navigation.navigate("BottomTab")}>
        <Text>Click Me!!!</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
