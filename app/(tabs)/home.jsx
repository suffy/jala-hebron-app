import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext, useEffect } from "react";
import { TemaContext, UserContext } from "../../context/GlobalState";
import Header from "../../components/Home/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";
import Slider from "../../components/Home/Slider";

export default function Home() {
  const [background, setBackground] = useContext(TemaContext);
  const [userGoogle, setUserGoogle] = useContext(UserContext);

  return (
    <SafeAreaView style={{ padding: 20 }}>
      <Header user={userGoogle} />
      <Slider user={userGoogle} />
    </SafeAreaView>
  );
}
