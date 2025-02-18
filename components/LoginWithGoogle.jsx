import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import Colors from "@/constants/Colors";
import { Redirect, router } from "expo-router";
import { UserDetailContext } from "../context/UserDetailContext";
import Services from "../constants/Services";

const webClientId =
  "1074629244887-5o1jue331d91mmc07fe0psvkt6m9damb.apps.googleusercontent.com";

const androidClientId =
  "1074629244887-2r0ku3nu7t0nfd34sn491ice4hqbcnhg.apps.googleusercontent.com";
const LoginWithGoogle = () => {
  const config = {
    webClientId,
    androidClientId: androidClientId,
  };

  const [request, response, promptAsync] = Google.useAuthRequest(config);

  const getUserProfile = async (token) => {
    if (!token) return;

    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const user = await response.json();

      // menyimpan data login google ke dalan local storage
      let dataLogin = {
        isLogin: true,
        token: token,
        user: user,
      };

      try {
        await Services.storeData("dataLogin", JSON.stringify(dataLogin));
      } catch (error) {
        alert("Error : ", error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleToken = () => {
    if (response?.type === "success") {
      const { authentication } = response;
      const token = authentication?.accessToken;
      return getUserProfile(token);
    }
  };

  useEffect(() => {
    console.log("response loginwithgoogle : ", response);
    handleToken();
  }, [response]);

  return (
    <View>
      <TouchableOpacity
        onPress={() => promptAsync()}
        style={{
          marginTop: 20,
          borderWidth: 1,
          borderColor: Colors.PRIMARY,
          borderRadius: 14,
          padding: 10,
          backgroundColor: Colors.PRIMARY,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "Poppins-Medium",
            fontSize: 20,
            textAlign: "center",
            color: Colors.WHITE,
          }}
        >
          Login With Google
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginWithGoogle;
