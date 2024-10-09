import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useContext, useEffect } from "react";
import { TemaContext, UserContext } from "../../context/GlobalState";
import Header from "../../components/Home/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";
import Slider from "../../components/Home/Slider";
import Category from "../../components/Home/Category";
import Colors from "../../constants/Colors";

export default function Home() {
  const [background, setBackground] = useContext(TemaContext);
  const [userGoogle, setUserGoogle] = useContext(UserContext);

  return (
    <SafeAreaView
      style={{ padding: 20, backgroundColor: Colors.WHITE, height: "100%" }}
    >
      <ScrollView>
        <Header user={userGoogle} />
        <Slider user={userGoogle} />
        <Category user={userGoogle} />
      </ScrollView>
    </SafeAreaView>
  );
}
