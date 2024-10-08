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
      <View style={{ width: "100%", marginTop: 20 }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={ListSlider}
          renderItem={({ item }) => (
            <View style={{ marginRight: 20 }}>
              <Image
                source={item.image}
                style={{
                  width: 300,
                  height: 170,
                  borderRadius: 20,
                  padding: 10,
                  resizeMode: "stretch",
                }}
              />
            </View>
          )}
        />
      </View>
    </View>
  );
}
