import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useContext, useEffect } from "react";
// import { TemaContext, UserContext } from "../../context/GlobalState";
import Header from "../../components/Home/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useNavigation } from "expo-router";
import Slider from "../../components/Home/Slider";
import Category from "../../components/Home/Category";
import Colors from "../../constants/Colors";
import Services from "../../constants/Services";
import Information from "../../components/Home/Information";

export default function Home() {
  return (
    <SafeAreaView
      style={{ padding: 20, backgroundColor: Colors.WHITE, height: "100%" }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <Slider />
        <Category />
        <Information />
      </ScrollView>
    </SafeAreaView>
  );
}
