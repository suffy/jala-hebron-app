import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import { ListCategory } from "../../constants/Options";
import Colors from "../../constants/Colors";

export default function Category() {
  return (
    <View style={{ marginTop: 20 }}>
      <View>
        <Text style={{ fontFamily: "Poppins-Bold", fontSize: 20 }}>
          Category
        </Text>
      </View>
      <FlatList
        horizontal
        data={ListCategory}
        renderItem={({ item }) => (
          <View
            style={{
              display: "flex",
              flex: 1,
            }}
          >
            <View
              style={{
                marginRight: 30,
                marginTop: 10,
                // backgroundColor: Colors.WHITE,
                borderRadius: 10,
                padding: 20,
                justifyContent: "center",
                alignItems: "center",
                width: 80,
                height: 80,
                borderWidth: 2,
                // borderColor: Colors.SECONDARY,
              }}
            >
              <Image
                // source={{ uri: item.image }}
                source={item.image}
                style={{
                  width: 50,
                  height: 50,
                  //   backgroundColor: Colors.WHITE,
                }}
              />
            </View>
            <View
              style={{
                // display: "flex",
                // justifyContent: "center",
                alignItems: "center",
                backgroundColor: Colors.WHITE,
                marginTop: 10,
                width: 90,
                height: 90,
                borderColor: Colors.PRIMARY,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: "Poppins-Medium",
                  fontSize: 12,
                }}
              >
                {item.title}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}
