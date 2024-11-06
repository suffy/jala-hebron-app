import { View, Text } from "react-native";
import React, { useContext, useEffect } from "react";
import { router, Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "../../constants/Colors";
import { UserDetailContext } from "../../context/UserDetailContext";
import Services from "../../constants/Services";
import Foundation from "@expo/vector-icons/Foundation";

export default function TabLayout() {
  const { userGoogle, setUserGoogle } = useContext(UserDetailContext);

  useEffect(() => {
    getUserProfile();
  }, []);

  const getUserProfile = async () => {
    try {
      let jsonvalue = await Services.getData("dataLogin");
      jsonvalueParse = JSON.parse(jsonvalue);
      console.log("jsonvalueParse : ", jsonvalueParse);

      let isLogin = jsonvalueParse.isLogin;
      if (isLogin !== true) {
        router.push("/login");
      }

      let user = jsonvalueParse.user;
      // console.log("user : ", user);
      setUserGoogle(user);
    } catch (error) {
      alert("Error : ", error.message);
    }
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.PRIMARY,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          title: "Activity",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="pricetags-outline" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="transaksi"
        options={{
          title: "Transaksi",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Foundation name="clipboard-notes" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="people-circle" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
