import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { ListCategory } from "../../constants/Options";
import Colors from "../../constants/Colors";
import axios from "axios";
import Categories from "../Categories";
import Recipes from "../Recipes";
import { router } from "expo-router";
import services from "../../constants/Services";
import { StyleSheet } from "react-native";

export default function Category() {
  useEffect(() => {
    getCategoriesHebron();
  }, []);

  const logout = async () => {
    await services.storeData("dataLogin", "{}");
    router.push("/login");
  };

  const getCategoriesHebron = async () => {
    try {
      const response = await axios.get(
        "https://ee32-27-123-221-81.ngrok-free.app/restapi/api/hebron/category?X-API-KEY=123&token=11f3a8a682c1e8d097ae60d72ecf07c7"
      );

      if (response && response.data) {
        setCategories(response.data.data);
        // console.log(response.data.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontFamily: "Poppins-Bold", fontSize: 20 }}>Category</Text>
      {/* Static Category */}
      <View style={{ marginTop: 10 }}>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.icon}
            onPress={() => router.push("/konseling")}
          >
            <View style={styles.containerImage}>
              <Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/128/610/610413.png",
                }}
                style={styles.iconImage}
              />
            </View>
            <Text style={styles.textIcon}>Konseling</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.icon}
            onPress={() => router.push("/beasiswa")}
          >
            <View style={styles.containerImage}>
              <Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/128/1903/1903172.png",
                }}
                style={styles.iconImage}
              />
            </View>
            <Text style={styles.textIcon}>Beasiswa</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.icon}
            onPress={() => router.push("/pelayanan")}
          >
            <View style={styles.containerImage}>
              <Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/128/4807/4807598.png",
                }}
                style={styles.iconImage}
              />
            </View>
            <Text style={styles.textIcon}>Pelayanan</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.icon}
            onPress={() => router.push("/kemanusiaan")}
          >
            <View style={styles.containerImage}>
              <Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/128/2597/2597143.png",
                }}
                style={styles.iconImage}
              />
            </View>
            <Text style={styles.textIcon}>Kemanusiaan</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => router.push("/green/petunjuk")}
            style={styles.icon}
          >
            <View style={styles.containerImage}>
              <Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/128/3658/3658345.png",
                }}
                style={styles.iconImage}
              />
            </View>
            <Text style={styles.textIcon}>Penjualan Plastik Bekas</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/green/riwayat")}
            style={styles.icon}
          >
            <View style={styles.containerImage}>
              <Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/128/583/583985.png",
                }}
                style={styles.iconImage}
              />
            </View>
            <Text style={styles.textIcon}>History Transaksi</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={logout} style={styles.icon}>
            <View style={styles.containerImage}>
              <Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/128/4436/4436954.png",
                }}
                style={styles.iconImage}
              />
            </View>
            <Text style={styles.textIcon}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Categories */}

      {/* Recipes */}
      {/* <View style={{ marginTop: 20 }}>
        <Recipes meals={meals} categories={categories} />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  textIcon: {
    textAlign: "center",
    fontFamily: "Poppins-Medium",
    marginTop: 10,
    fontSize: 13,
    flex: 1,
    flexWrap: "wrap",
  },
  containerImage: {
    backgroundColor: Colors.LIGHT_GRAY,
    padding: 15,
    borderRadius: 99,
    elevation: 0.5,
  },
  iconImage: { width: 35, height: 35, alignSelf: "center" },
  icon: {
    width: "25%",
    textAlign: "center",
    alignItems: "center",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    // justifyContent: "space-around",
    // alignItems: "center",
    // alignContent: "center",
  },
});
