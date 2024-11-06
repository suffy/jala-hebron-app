import { View, Text, Alert, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import Services from "../constants/Services";
import { Redirect, router } from "expo-router";

export default function Oauthredirect() {
  useEffect(() => {
    getDataLogin();
  }, []);

  const getDataLogin = async () => {
    try {
      let jsonvalue = await Services.getData("dataLogin");
      console.log("jsonvalue : ", jsonvalue);
      jsonvalueParse = JSON.parse(jsonvalue);
      console.log("jsonvalueParse : ", jsonvalueParse);

      let isLogin = jsonvalueParse.isLogin;
      console.log("isLogin : ", isLogin);

      if (isLogin == true) {
        router.replace("/(tabs)/home");
      } else {
        router.replace("/login");
      }
    } catch (error) {
      alert("Error : ", error.message);
    }
  };

  return (
    <View>
      {/* <Redirect href="/(tabs)/home" /> */}
      <Text>Test</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
