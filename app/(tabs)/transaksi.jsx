import { ScrollView, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { router, useNavigation } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../constants/Colors";
import Saldo from "../../components/Green/Saldo";
import { UserDetailContext } from "../../context/UserDetailContext";

export default function Transaksi() {
  const navigation = useNavigation();
  const { userGoogle, setUserGoogle } = useContext(UserDetailContext);

  return (
    <View>
      <SafeAreaView
        style={{
          padding: 20,
          backgroundColor: Colors.WHITE,
          height: "100%",
        }}
      >
        <Saldo userGoogle={userGoogle} />
      </SafeAreaView>
    </View>
  );
}
