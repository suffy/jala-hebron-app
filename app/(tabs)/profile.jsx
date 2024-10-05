import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ListProfile } from "../../constants/Options";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import Filosofi from "../../components/Profile/Filosofi";

export default function Profile() {
  const [readMore, setReadMore] = useState(false);
  return (
    <SafeAreaView
      style={{ padding: 20, backgroundColor: "white", height: "100%" }}
    >
      <Text style={{ fontFamily: "outfit-bold", fontSize: 35 }}>About Us</Text>

      <FlatList
        style={{ marginTop: 20 }}
        showsVerticalScrollIndicator={false}
        data={ListProfile}
        renderItem={({ item }) => <Filosofi item={item} />}
      />
    </SafeAreaView>
  );
}
