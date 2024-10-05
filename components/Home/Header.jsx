import { View, Text, Image } from "react-native";
import React from "react";

export default function Header({ user }) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View>
        <Text style={{ fontFamily: "outfit-regular", fontSize: 18 }}>
          Welcome,
        </Text>
        {/* cara panggil fullName dari user */}
        <Text style={{ fontFamily: "outfit-medium", fontSize: 23 }}>
          {user.name}
        </Text>
      </View>
      <Image
        source={{ uri: user.picture }}
        style={{ width: 40, height: 40, borderRadius: 99 }}
      />
    </View>
  );
}
