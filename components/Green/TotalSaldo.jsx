import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
import Colors from "../../constants/Colors";
import axios from "axios";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function TotalSaldo({ userGoogle }) {
  const [totalSaldo, setTotalSaldo] = useState();

  useEffect(() => {
    console.log("userGoogle : ", userGoogle);
    getData();
  }, []);

  const url = process.env.EXPO_PUBLIC_HEBRON_URL + "/saldo";

  const getData = async () => {
    try {
      const response = await axios.get(url, {
        params: {
          "X-API-KEY": process.env.EXPO_PUBLIC_HEBRON_API_KEY,
          token: process.env.EXPO_PUBLIC_HEBRONTOKEN_API_KEY,
          email: userGoogle.email,
        },
      });
      console.log("response.data.data : ", response.data.data[0]?.total);

      setTotalSaldo(response.data.data[0]?.total);
    } catch (error) {
      console.log("Error : ", error.message);
      setTotalSaldo();
    }
  };

  return (
    <View style={{ marginTop: 0 }}>
      <TouchableOpacity onPress={() => router.push("/(tabs)/home")}>
        <Ionicons name="arrow-back-circle-sharp" size={34} color="black" />
      </TouchableOpacity>
      <View
        style={{
          marginBottom: 20,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontFamily: "Poppins-Bold", fontSize: 18 }}>
          Riwayat Transaksi
        </Text>
        <Image
          source={{
            uri: "https://muliaputramandiri.com/assets/images/hebron/logo-transparant.png",
          }}
          style={{ width: 50, height: 50 }}
        />
      </View>
      <View style={styles.container}>
        <Text style={{ fontFamily: "Poppins-Regular", fontSize: 18 }}>
          Saldo saat ini
        </Text>
        {totalSaldo ? (
          <Text style={{ fontFamily: "Poppins-Bold", fontSize: 15 }}>
            Rp. {totalSaldo}
          </Text>
        ) : (
          <Text
            style={{
              fontFamily: "Poppins-Regular",
              fontSize: 13,
              fontStyle: "italic",
            }}
          >
            belum tersedia
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    elevation: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
  },
});
