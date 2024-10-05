import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";

export default function Filosofi({ item }) {
  const [readMore, setReadMore] = useState(false);
  return (
    <View
      style={{
        padding: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 20,
        marginVertical: 10,
        backgroundColor: item?.color,
        borderWidth: 1,
        width: "100%",
      }}
    >
      <View style={{ marginVertical: 5, gap: 10, width: "100%" }}>
        <Text style={{ fontFamily: "outfit-bold", fontSize: 25 }}>
          {item.title}
        </Text>
        <TouchableOpacity onPress={() => setReadMore(!readMore)}>
          {item.id == 1 ? (
            <Image
              source={{
                uri: "https://muliaputramandiri.com/assets/images/hebron/stuktur-hebron.jpeg",
              }}
              style={{
                width: "100%",
                height: 200,
                borderRadius: 20,
                borderWidth: 1,
                resizeMode: "cover",
              }}
            />
          ) : null}
          {item.id == 3 ? (
            <Image
              source={{
                uri: "https://muliaputramandiri.com/assets/images/hebron/logo-transparant.png",
              }}
              style={{ width: 100, height: 100 }}
            />
          ) : null}
          <Text
            numberOfLines={readMore ? null : 5}
            style={{
              fontFamily: "outfit-medium",
              fontSize: 17,
              color: Colors.PRIMARY,
              textAlign: "auto",
              lineHeight: 25,
            }}
          >
            {item?.desc}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
