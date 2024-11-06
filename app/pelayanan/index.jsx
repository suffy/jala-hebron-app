import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

export default function Pelayanan() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontFamily: "Poppins-Bold", fontSize: 35 }}>
        Pelayanan
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
