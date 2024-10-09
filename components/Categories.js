import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";

export default function Categories({
  categories,
  activeCategory,
  handleChangeCategory,
}) {
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="space-x-4"
        contentContainerStyle={{ paddingHorizontal: 1 }}
      >
        {categories.map((category, index) => {
          let isActive = category.nama == activeCategory;
          let activeButtonClass = isActive ? "bg-[#f64e32]" : "bg-black/10";

          return (
            <TouchableOpacity
              onPress={() => handleChangeCategory(category.nama)}
              key={index}
              className="flex items-center space-y-1"
            >
              <View className={"rounded-xl p-[6px] " + activeButtonClass}>
                <Image
                  source={{ uri: category.image }}
                  style={{ width: 50, height: 50 }}
                />
              </View>
              <Text className="text-neutral-800" style={{ fontSize: 16 }}>
                {category.nama}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
