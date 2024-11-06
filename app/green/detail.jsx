import {
  View,
  Text,
  ActivityIndicator,
  Image,
  TextInput,
  Pressable,
  ScrollView,
  ToastAndroid,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useLocalSearchParams } from "expo-router";
import axios from "axios";
import Colors from "../../constants/Colors";
import * as ImagePicker from "expo-image-picker";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../FirebaseConfig";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import * as FileSystem from "expo-file-system";
import { UserDetailContext } from "../../context/UserDetailContext";
import { Ionicons } from "@expo/vector-icons";

export default function Detail() {
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState();
  const { itemId } = useLocalSearchParams();
  const [image, setImage] = useState();
  const [formData, setFormData] = useState({});
  const { userGoogle, setUserGoogle } = useContext(UserDetailContext);

  useEffect(() => {
    console.log({ itemId });
    getData(itemId);
  }, []);

  const url = process.env.EXPO_PUBLIC_HEBRON_URL;

  const getData = async (itemId) => {
    setLoader(true);
    try {
      const response = await axios.get(url + "/transaksi", {
        params: {
          "X-API-KEY": process.env.EXPO_PUBLIC_HEBRON_API_KEY,
          token: process.env.EXPO_PUBLIC_HEBRONTOKEN_API_KEY,
          id: itemId,
        },
      });
      console.log(response.data.data[0]);

      setData(response.data.data[0]);
      setLoader(false);
    } catch (error) {
      console.log("Error : ", error.message);
      setLoader(false);
      setData([]);
    }
  };

  const handleInputChange = (fieldName, fieldValue) => {
    console.log(fieldName, fieldValue);
    setFormData((prev) => ({
      ...prev,
      [fieldName]: fieldValue,
    }));
  };

  const submit = () => {
    console.log(formData);
    if (Object.keys(formData).length != 2) {
      ToastAndroid.show("Mohon lengkapi semua data", ToastAndroid.BOTTOM);
      return;
    }

    uploadGambar(image);
  };

  const uploadGambar = async (imageUri) => {
    setLoader(true);
    const response = await FileSystem.uploadAsync(`${url}/file`, imageUri, {
      fieldName: "file",
      httpMethod: "POST",
      uploadType: FileSystem.FileSystemUploadType.MULTIPART,
      headers: {
        "Content-Type": "multipart/form-data",
        "X-API-KEY": `${process.env.EXPO_PUBLIC_HEBRON_API_KEY}`,
      },
    });

    console.log(response);
    console.log(response.status);

    if (response.status == 200) {
      const imageUrl = JSON.parse(response.body)?.filename;

      console.log(imageUrl);
      SaveFormData(imageUrl);
    }
  };

  const SaveFormData = async (imageUrl) => {
    console.log("image_url : ", imageUrl);
    console.log("formData : ", formData);
    console.log(userGoogle?.email);

    try {
      const data = {
        "X-API-KEY": process.env.EXPO_PUBLIC_HEBRON_API_KEY,
        secret: process.env.EXPO_PUBLIC_HEBRON_SECRET,
        id_ref: itemId,
        total_berat: formData.total_berat,
        harga: formData.harga,
        image: imageUrl,
        created_by: userGoogle.email,
      };

      const response = await axios.post(url + "/verifikasi", data);
      console.log(response.data);

      if (response && response.data) {
        setLoader(false);
        ToastAndroid.show("Verifikasi Transaksi Berhasil", ToastAndroid.LONG);
        router.push("/green/riwayat");
      }
    } catch (error) {
      console.log("Error : ", error.message);
      ToastAndroid.show("Data Gagal Masuk", ToastAndroid.LONG);
    }

    setLoader(false);
  };

  const imagePicker = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: Colors.WHITE, height: "100%" }}>
      <View style={{ padding: 10 }}>
        <TouchableOpacity onPress={() => router.push("/green/riwayat")}>
          <Ionicons name="arrow-back-circle-sharp" size={34} color="black" />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={{ paddingHorizontal: 20 }}>
          <Text style={{ fontFamily: "Poppins-Bold", fontSize: 20 }}>
            Detail Transaksi
          </Text>

          <View style={{ flexDirection: "row", gap: 10, marginTop: 10 }}>
            <View style={{ gap: 10 }}>
              <Text style={styles.label}>Tanggal</Text>
              <Text style={styles.label}>Nama</Text>
              <Text style={styles.label}>NoHp</Text>
              <Text style={styles.label}>Qty</Text>
              <Text style={styles.label}>Status</Text>
              <Text style={styles.label}>Lokasi</Text>
            </View>

            {loader ? (
              <ActivityIndicator />
            ) : (
              data && (
                <View style={{ gap: 10 }}>
                  <Text style={styles.valueLabel}>: {data?.created_at}</Text>
                  <Text style={styles.valueLabel}>
                    : {data?.nama} ({data?.email})
                  </Text>
                  <Text style={styles.valueLabel}>: {data?.nohp}</Text>
                  <Text style={styles.valueLabel}>: {data?.qty}</Text>
                  <Text
                    style={{
                      color: data.status == "Lunas" ? "green" : "red",
                      fontFamily: "Poppins-Medium",
                    }}
                  >
                    : {data.status}
                  </Text>
                  <Text
                    style={[
                      styles.valueLabel,
                      {
                        flexWrap: "wrap",
                        maxWidth: 300,
                      },
                    ]}
                  >
                    : {data?.alamat}
                  </Text>
                </View>
              )
            )}
          </View>

          {loader ? (
            <ActivityIndicator />
          ) : (
            data && (
              <View style={{ marginTop: 10 }}>
                <Image
                  source={{
                    uri: process.env.EXPO_PUBLIC_HEBRON_ASSET + "/" + data?.url,
                  }}
                  style={{
                    width: "100%",
                    height: 300,
                    borderRadius: 40,
                    resizeMode: "cover",
                  }}
                />
              </View>
            )
          )}
        </View>

        <View style={styles.containerInput}>
          <View style={{ padding: 10, alignItems: "center" }}>
            <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 18 }}>
              Verifikasi Transaksi
            </Text>
          </View>
          <View style={styles.rowInput}>
            <View style={styles.labelView}>
              <Text style={styles.label}>Total Berat</Text>
              <Text style={styles.label}>Harga per Kg (Rp)</Text>
            </View>
            <View style={{ width: "60%", padding: 10, gap: 10 }}>
              <TextInput
                style={styles.input}
                placeholder=" Total Berat"
                keyboardType="numeric"
                onChangeText={(value) =>
                  handleInputChange("total_berat", value)
                }
              />
              <TextInput
                style={styles.input}
                placeholder=" Rp"
                keyboardType="numeric"
                onChangeText={(value) => handleInputChange("harga", value)}
              />
            </View>
          </View>
          <View
            style={{ padding: 10, alignItems: "flex-end", marginRight: 10 }}
          >
            <Pressable onPress={imagePicker}>
              {!image ? (
                <Image
                  source={require("./../../assets/images/placeholder.png")}
                  style={styles.placeholder}
                />
              ) : (
                <Image source={{ uri: image }} style={styles.placeholder} />
              )}
            </Pressable>
          </View>

          <TouchableOpacity
            disabled={loader}
            onPress={submit}
            style={styles.button}
          >
            {loader ? (
              <ActivityIndicator color={Colors.WHITE} />
            ) : (
              <Text style={styles.btnText}>Submit</Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  label: {
    fontFamily: "Poppins-Medium",
    fontSize: 13,
  },
  valueLabel: {
    fontFamily: "Poppins-Medium",
    fontSize: 13,
  },
  button: {
    padding: 10,
    alignItems: "center",
    backgroundColor: Colors.SECONDARY,
    borderRadius: 20,
    width: "90%",
    alignSelf: "center",
    marginBottom: 20,
  },
  btnText: {
    fontFamily: "Poppins-Medium",
    fontSize: 20,
    color: Colors.WHITE,
  },
  placeholder: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
  input: {
    borderWidth: 1,
    padding: 3,
    paddingLeft: 10,
    borderRadius: 10,
    width: "90%",
    borderColor: Colors.GRAY,
  },
  rowInput: {
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
    alignItems: "center",
  },
  labelView: { width: "40%", padding: 10, gap: 10 },
  label: { fontFamily: "Poppins-Regular", fontSize: 14 },
  containerInput: {
    backgroundColor: Colors.LIGHT_GRAY,
    borderRadius: 10,

    width: "90%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    borderWidth: 1,
    borderColor: Colors.GRAY,
    alignSelf: "center",
    marginTop: 20,
    // padding: 10,
    // gap: 10,
    marginBottom: 20,
  },
});
