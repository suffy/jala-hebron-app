import { View, Text, ScrollView, Image, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from "react-native-heroicons/outline";
import Categories from "../../components/Categories";
import axios from "axios";
import Recipes from "../../components/Recipes";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("Beef");
  const [categories, setCategories] = useState([]);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getCategories();
    getRecipes();
  }, []);

  const handleChangeCategory = (category) => {
    console.log(category);
    getRecipes(category);
    setActiveCategory(category);
    setMeals([]);
  };

  const getRecipes = async (category = "Beef") => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );

      if (response && response.data) {
        setMeals(response.data.meals);
        // console.log(response.data.meals);
        // console.log(response.data.meals);
        // console.log(categories);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const getCategories = async () => {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );

      if (response && response.data) {
        setCategories(response.data.categories);
        console.log(response.data.categories);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <SafeAreaView>
        <View
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 1 }}
          className="space-y-1 pt-1"
        >
          {/* avatar and bell icon */}
          <View className="mx-4 flex-row justify-between items-center">
            <AdjustmentsHorizontalIcon size={hp(4)} color="black" />
            <Image
              source={require("../../assets/images/avatar.png")}
              style={{ width: wp(10), height: hp(5), resizeMode: "contain" }}
              className="rounded-full"
            />
          </View>

          <View className="mx-4 space-y-1 mb-2">
            <View>
              <Text
                style={{ fontSize: hp(3.5) }}
                className="font-bold text-neutral-800"
              >
                Fast & Delicious
              </Text>
            </View>
            <Text
              style={{ fontSize: hp(3.5) }}
              className="font-extrabold text-neutral-800"
            >
              Food You <Text className="text-[#f64e32]">Love</Text>
            </Text>
          </View>

          <View className="mx-4 flex-row items-center border rounded-xl border-black p-[6px]">
            <View className="bg-white rounded-full p-2">
              <MagnifyingGlassIcon
                size={hp(2.5)}
                color={"gray"}
                strokeWidth={3}
              />
            </View>
            <TextInput
              placeholder="Search your favorite food"
              placeholderTextColor={"gray"}
              style={{ fontSize: hp(1.7) }}
              className="flex-1 text-base mb-1 pl-1 tracking-widest"
            />
          </View>

          {/* Categories */}
          <View style={{ paddingTop: 20 }}>
            <Categories
              categories={categories}
              activeCategory={activeCategory}
              handleChangeCategory={handleChangeCategory}
            />
          </View>
        </View>
        {/* Recipes */}
        <View style={{ marginTop: 20 }}>
          <Recipes meals={meals} categories={categories} />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
