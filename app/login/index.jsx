import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { router } from "expo-router";
import { TemaContext, UserContext } from "../../context/GlobalState";
import LoginWithGoogle from "../../components/LoginWithGoogle";

export default function LoginScreen() {
  const [background, setBackground] = useContext(TemaContext);
  const [userGoogle, setUserGoogle] = useContext(UserContext);

  return (
    <View style={{ backgroundColor: background }}>
      <Text style={{ color: "white" }}>LoginScreen</Text>
      <TouchableOpacity onPress={() => router.push("/home")}>
        <Text style={{ color: "white" }}>Home</Text>
      </TouchableOpacity>
      {userGoogle ? (
        <View>
          <Text style={{ color: "white" }}>{userGoogle.name}</Text>
        </View>
      ) : (
        <LoginWithGoogle />
      )}
    </View>
  );
}
