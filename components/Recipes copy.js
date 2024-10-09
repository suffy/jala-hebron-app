import { View, Text, ScrollView, FlatList } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
import RecipesCard from "./RecipesCard";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MasonryList from "@react-native-seoul/masonry-list";
import Loading from "./Loading";
import { MasonryFlashList } from "@shopify/flash-list";

export default function Recipes({ meals, categories }) {
  const navigation = useNavigation();
  return (
    <View style={{ paddingHorizontal: 15, flex: 1 }}>
      <Text style={{ fontSize: hp(2) }}>{meals.length} Recipes</Text>
      <View className="flex flex-row flex-wrap">
        {categories.length == 0 || meals.length == 0 ? (
          <View className="flex-1 justify-center items-center">
            <Loading size="large" className="mt-20" />
          </View>
        ) : (
          <FlatList
            data={meals}
            // horizontal={false}
            // keyExtractor={(item) => item.idMeal}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, i }) => <RecipesCard item={item} index={i} />}
            onEndReachedThreshold={0.5}
          />
        )}
      </View>
    </View>
  );
}
