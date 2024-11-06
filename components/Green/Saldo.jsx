import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import Colors from "../../constants/Colors";
import axios from "axios";
import services from "../../constants/Services";
import { router } from "expo-router";
import TotalSaldo from "./TotalSaldo";
import { TouchableOpacity } from "react-native";

export default function Saldo({ userGoogle }) {
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const url = process.env.EXPO_PUBLIC_HEBRON_URL + "/green";

  const getData = async () => {
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

  const onTransaksiClick = (item) => {
    router.push({
      pathname: "/green/detail",
      params: {
        itemId: item.id,
      },
    });
  };

  return (
    <View>
      <TotalSaldo userGoogle={userGoogle} />
      <View>
        {loader ? (
          <ActivityIndicator
            size="large"
            color={Colors.PRIMARY}
            style={{ marginTop: 20, marginBottom: 20, alignSelf: "center" }}
          />
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            loader={loader}
            refreshing={loader}
            onRefresh={getData}
            data={data}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => onTransaksiClick(item)}
                key={index}
                style={styles.containerList}
              >
                <View
                  style={{
                    marginBottom: 10,
                    display: "flex",
                    flexDirection: "row",
                    gap: 10,
                    flex: 1,
                  }}
                >
                  <View style={{ gap: 5 }}>
                    <Text>Tanggal</Text>
                    <Text>Nama</Text>
                    <Text>Qty</Text>
                    <Text>Status</Text>
                  </View>

                  <View style={{ flex: 1, gap: 5 }}>
                    <Text>: {item.created_at}</Text>
                    <Text>: {item.nama}</Text>
                    <Text>: {item.qty} Pcs</Text>
                    <Text
                      style={{
                        backgroundColor:
                          item.status == "finish" ? "green" : "red",
                        fontFamily: "Poppins-Medium",
                        borderRadius: 10,
                        padding: 2,
                        paddingHorizontal: 10,
                        color: Colors.WHITE,
                      }}
                    >
                      {item.status}
                    </Text>
                  </View>

                  <View>
                    <Image
                      source={{
                        uri:
                          process.env.EXPO_PUBLIC_HEBRON_ASSET + "/" + item.url,
                      }}
                      style={{ width: 100, height: 100, borderRadius: 20 }}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    backgroundColor: Colors.WHITE,
    padding: 10,
    borderRadius: 15,
    elevation: 2,
    gap: 10,
  },
  subContainer: {
    marginTop: 20,
    backgroundColor: Colors.WHITE,
    borderRadius: 15,
  },
  containerList: {
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-between",
    marginTop: 10,
    borderWidth: 2,
    borderRadius: 15,
    padding: 10,
    borderColor: Colors.LIGHT_GRAY,
  },
  textName: {
    fontFamily: "Poppins-Medium",
    fontSize: 16,
  },
  textAlamat: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: Colors.GRAY,
  },
  textQty: {
    fontFamily: "Poppins-Bold",
    fontSize: 16,
  },
  textStatus: {
    fontFamily: "Poppins-Bold",
    fontSize: 15,
    backgroundColor: Colors.SECONDARY,
    color: Colors.WHITE,

    borderRadius: 5,
  },
});
