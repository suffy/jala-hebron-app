import { View, Text, Image, FlatList } from "react-native";
import React from "react";
import { ListSlider } from "../../constants/Options";

export default function Slider() {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Image
        source={require("../../assets/images/banner-go-green.jpg")}
        style={{
          width: "100%",
          height: 200,
          borderRadius: 30,
          marginTop: 20,
          resizeMode: "contain",
        }}
      />
    </View>
  );
}
