import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { TemaContext } from "../../context/GlobalState";

export default function Home() {
  const [background, setBackground] = useContext(TemaContext);

  return (
    <View style={{ backgroundColor: background }}>
      <Text>Home</Text>
      <TouchableOpacity onPress={() => setBackground("blue")}>
        <Text style={{ color: "white" }}>Blue</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setBackground("red")}>
        <Text style={{ color: "white" }}>Red</Text>
      </TouchableOpacity>
    </View>
  );
}
