import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { ListCategory } from "../../constants/Options";
import Colors from "../../constants/Colors";
import axios from "axios";
import Categories from "../Categories";
import Recipes from "../Recipes";
import { router } from "expo-router";

export default function Category() {
  const [activeCategory, setActiveCategory] = useState("Beef");
  const [categories, setCategories] = useState([]);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    // getCategories();
    // getRecipes();
    getCategoriesHebron();
    // console.log(getCategoriesHebron());
  }, []);

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

  const getCategoriesHebron = async () => {
    try {
      const response = await axios.get(
        "https://ee32-27-123-221-81.ngrok-free.app/restapi/api/hebron/category?X-API-KEY=123&token=11f3a8a682c1e8d097ae60d72ecf07c7"
      );

      if (response && response.data) {
        setCategories(response.data.data);
        console.log(response.data.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <View style={{ marginTop: 20 }}>
      <View>
        <Text style={{ fontFamily: "Poppins-Bold", fontSize: 20 }}>
          Category
        </Text>
      </View>

      {/* Categories from api */}
      {/* <View style={{}}>
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          handleChangeCategory={handleChangeCategory}
        />
      </View> */}

      {/* Static Category */}
      <View>
        <View style={{ marginTop: 20 }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              flex: 1,
              justifyContent: "space-around",
              gap: 1,
            }}
          >
            <View style={{}}>
              <Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/128/610/610413.png",
                }}
                style={{ width: 55, height: 55, alignSelf: "center" }}
              />
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: "Poppins-Medium",
                  marginTop: 10,
                }}
              >
                Konseling
              </Text>
            </View>

            <View style={{}}>
              <Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/128/1903/1903172.png",
                }}
                style={{ width: 55, height: 55, alignSelf: "center" }}
              />
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: "Poppins-Medium",
                  marginTop: 10,
                }}
              >
                Beasiswa
              </Text>
            </View>

            <View style={{}}>
              <Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/128/4807/4807598.png",
                }}
                style={{
                  width: 55,
                  height: 55,
                  alignSelf: "center",
                }}
              />
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: "Poppins-Medium",
                  marginTop: 10,
                  fontSize: 15,
                  flex: 1,
                }}
              >
                Pelayanan
              </Text>
            </View>

            <View style={{}}>
              <Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/128/2597/2597143.png",
                }}
                style={{ width: 55, height: 55 }}
              />
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    textAlign: "center",
                    fontFamily: "Poppins-Medium",
                    marginTop: 10,
                    fontSize: 15,
                    flex: 1,
                    flexWrap: "wrap",
                  }}
                >
                  Kemanusiaan
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              flex: 1,
              // justifyContent: "space-around",
              gap: 10,
            }}
          >
            <TouchableOpacity
              onPress={() => router.push("/green/form")}
              style={{
                marginTop: 1,
                width: "20%",
                marginLeft: 10,
              }}
            >
              <Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/128/3658/3658345.png",
                }}
                style={{ width: 55, height: 55, alignSelf: "center" }}
              />
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    textAlign: "center",
                    fontFamily: "Poppins-Medium",
                    marginTop: 10,
                    fontSize: 15,
                  }}
                >
                  Jual Sampah
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push("/green/form")}
              style={{
                marginTop: 1,
                width: "20%",
                marginLeft: 10,
              }}
            >
              <Image
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/128/583/583985.png",
                }}
                style={{ width: 55, height: 55, alignSelf: "center" }}
              />
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    textAlign: "center",
                    fontFamily: "Poppins-Medium",
                    marginTop: 10,
                    fontSize: 15,
                    marginLeft: 14,
                  }}
                >
                  Saldo Anda
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Categories */}

      {/* Recipes */}
      {/* <View style={{ marginTop: 20 }}>
        <Recipes meals={meals} categories={categories} />
      </View> */}
    </View>
  );
}
