import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { UserDetailContext } from "../../context/UserDetailContext";
import axios from "axios";
import Colors from "../../constants/Colors";

export default function Information() {
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState([]);
  const { userGoogle } = useContext(UserDetailContext);

  const url = process.env.EXPO_PUBLIC_HEBRON_URL + "/activity";

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setData([]);
    setLoader(true);
    try {
      const response = await axios.get(url, {
        params: {
          "X-API-KEY": process.env.EXPO_PUBLIC_HEBRON_API_KEY,
          token: process.env.EXPO_PUBLIC_HEBRONTOKEN_API_KEY,
          email: userGoogle?.email,
        },
      });
      console.log(response.data.data);

      setData(response.data.data);
      setLoader(false);
    } catch (error) {
      console.log("Error : ", error.message);
      setLoader(false);
      setData([]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Latest Activity</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        horizontal={true}
        // numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              gap: 10,
              marginRight: 15,
            }}
          >
            <Image
              source={{ uri: item.image }}
              style={{ width: 200, height: 170, borderRadius: 20 }}
            />
            <View style={{ padding: 10 }}>
              <Text style={{ fontFamily: "Poppins-Bold", fontSize: 15 }}>
                {item?.name}
              </Text>
              <Text>{item?.keterangan}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  title: {
    fontFamily: "Poppins-Bold",
    fontSize: 20,
  },
});
