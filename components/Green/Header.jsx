import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { useNavigation } from "expo-router";

export default function Header() {
  return <View style={{ marginTop: 40 }}></View>;
}

const styles = StyleSheet.create({
  userProfile: {
    width: 50,
    height: 50,
    borderRadius: 99,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
