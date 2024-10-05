import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { TemaContext, UserContext } from "../../context/GlobalState";

export default function Home() {
  const [background, setBackground] = useContext(TemaContext);

  const [userGoogle, setUserGoogle] = useContext(UserContext);

  return (
    <View style={{ backgroundColor: background }}>
      <Text>Home</Text>
      <TouchableOpacity onPress={() => setBackground("blue")}>
        <Text style={{ color: "white" }}>Blue</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setBackground("red")}>
        <Text style={{ color: "white" }}>Red</Text>
      </TouchableOpacity>
      <View>
        <Text style={{ color: "white" }}>{userGoogle.name}</Text>
      </View>
    </View>
  );
}
