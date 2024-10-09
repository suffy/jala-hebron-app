import { View, Text, Pressable, Image, ScrollView } from "react-native";
import React from "react";

import { router } from "expo-router";
// import { LinearGradient } from "expo-linear-gradient";

export default function RecipesCard({ item, index }) {
  //   let isEven = index % 2 == 0;

  //   console.log(item.strMealThumb);
  //   const navigation = useNavigation();

  return (
    <View style={{ padding: 10 }}>
      <Pressable onPress={() => router.push("RecipeDetails", { ...item })}>
        <View style={{ marginTop: 10 }}>
          <Image
            source={{ uri: item.strMealThumb }}
            style={{
              width: 170,
              height: 150,
              borderRadius: 10,
            }}
            //   className="bg-black/5 relative"
          />
        </View>
      </Pressable>

      {/* <LinearGradient
        colors={["transparent", "rgba(0, 0, 0, 0.4)"]}
        style={{
          position: "absolute",
          bottom: 10,
          left: 10,
          width: 170,
          height: 150,
          borderRadius: 10,
        }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      /> */}

      <Text
        style={{ fontSize: 20 }}
        className="font-semibold ml-2 text-white absolute bottom-7 left-2 max-w-[80%]"
      >
        {item.strMeal.length > 20
          ? item.strMeal.slice(0, 20) + "..."
          : item.strMeal}
      </Text>
    </View>
  );
}
