import { View, Text, Image, StyleSheet, ActivityIndicator } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { UserDetailContext } from "../../context/UserDetailContext";
import Colors from "../../constants/Colors";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function Header() {
  const { userGoogle } = useContext(UserDetailContext);
  const [loading, setLoading] = useState(true);

  const [image, setImage] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);

    const imageGoogle = userGoogle?.picture;
    setImage(imageGoogle);
    console.log("imageGoogle : ", imageGoogle);
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
        <Image
          source={{ uri: userGoogle?.picture }}
          style={styles.imgProfile}
        />

        <View style={{ display: "flex", flexDirection: "column" }}>
          <Text style={{ fontFamily: "Poppins-Regular", fontSize: 15 }}>
            Welcome back,
          </Text>
          <Text
            style={{ fontFamily: "Poppins-Bold", fontSize: 16, marginTop: -5 }}
          >
            {userGoogle?.name}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => router.push("/green/riwayat")}
        style={styles.btnSaldo}
      >
        <Image
          source={require("../../assets/images/coin.png")}
          style={styles.imgCoin}
        />
        <Text style={styles.txtCoin}>Saldo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btnSaldo: {
    borderWidth: 1,
    borderRadius: 50,
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 3,
    borderColor: Colors.SECONDARY,
    backgroundColor: Colors.SECONDARY,
  },
  imgCoin: {
    width: 30,
    height: 30,
    borderRadius: 99,
    borderColor: Colors.WHITE,
    borderWidth: 1,
  },
  txtCoin: {
    fontSize: 12,
    fontFamily: "Poppins-Medium",
    color: Colors.WHITE,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imgProfile: { width: 40, height: 40, borderRadius: 25 },
});
