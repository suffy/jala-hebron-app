import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { router } from "expo-router";
import { TemaContext } from "../../context/GlobalState";

export default function LoginScreen() {
  const [background, setBackground] = useContext(TemaContext);

  return (
    <View style={{ backgroundColor: background }}>
      <Text style={{ color: "white" }}>LoginScreen</Text>
      <TouchableOpacity onPress={() => router.push("/home")}>
        <Text style={{ color: "white" }}>Home</Text>
      </TouchableOpacity>
    </View>
  );
}
