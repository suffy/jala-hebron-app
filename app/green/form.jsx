import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Pressable,
  ActivityIndicator,
  ToastAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../constants/Colors";
import * as ImagePicker from "expo-image-picker";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { storage } from "../../FirebaseConfig";
import axios from "axios";

export default function Form() {
  const navigation = useNavigation();
  const [image, setImage] = useState();
  const [loader, setLoader] = useState(false);
  const [formData, setFormData] = useState();

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

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "",
      headerTransparent: true,
    });
  }, []);

  const handleInputChange = (fieldName, fieldValue) => {
    console.log(fieldName, fieldValue);
    setFormData((prev) => ({
      ...prev,
      [fieldName]: fieldValue,
    }));
  };

  const submit = () => {
    console.log(formData);
    if (Object.keys(formData).length != 4) {
      ToastAndroid.show("Mohon lengkapi semua data", ToastAndroid.BOTTOM);
      return;
    }
    UploadImage();
  };

  const UploadImage = async () => {
    setLoader(true);
    const resp = await fetch(image);
    const blob = await resp.blob();
    const storageRef = ref(storage, "/jala/" + Date.now() + ".jpg");

    uploadBytes(storageRef, blob)
      .then((snapshot) => {
        console.log("File uploaded");
      })
      .then((resp) => {
        getDownloadURL(storageRef).then(async (downloadUrl) => {
          console.log(downloadUrl);
          SaveFormData(downloadUrl);
        });
      });
  };

  const url =
    "https://ee32-27-123-221-81.ngrok-free.app/restapi/api/hebron/green";

  const SaveFormData = async (imageUrl) => {
    console.log("image_url : ", imageUrl);
    console.log("formData : ", formData);

    try {
      const data = {
        "X-API-KEY": 123,
        secret: "96b962bcd044a37f481450b16e0cba1a_93428906.gyadkjuiaz",
        nama: formData.nama,
        nohp: formData.nohp,
        alamat: formData.alamat,
        qty: formData.qty,
        url: imageUrl,
        filename: imageUrl,
        email: "HjTtK@example.com",
      };

      const response = await axios.post(url, data);
      console.log(response.data);
    } catch (error) {
      console.log("Error : ", error.message);
    }

    setLoader(false);
  };

  return (
    <SafeAreaView
      style={{
        padding: 20,
        marginTop: 20,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <ScrollView>
        <View>
          <Text
            style={{
              fontSize: 25,
              color: Colors.PRIMARY,
              fontFamily: "Poppins-Bold",
            }}
          >
            Petunjuk Penjualan Sampah Plastik
          </Text>

          <Text
            style={{
              fontSize: 20,
              color: Colors.PRIMARY,
              fontFamily: "Poppins-Medium",
              marginTop: 20,
            }}
          >
            Persiapan
          </Text>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
            }}
          >
            <Text>1.</Text>
            <Text
              style={{ fontFamily: "Poppins-Medium", fontSize: 15, flex: 1 }}
            >
              Pastikan sampah anda merupakan sampah bernilai ekonomis
            </Text>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
            }}
          >
            <Text>2.</Text>
            <Text
              style={{ fontFamily: "Poppins-Medium", fontSize: 15, flex: 1 }}
            >
              Pisahkan semua sampah sesuai dengan klarifikasi jenisnya (bedakan
              antara kardus, plastik, dan lainnya)
            </Text>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
            }}
          >
            <Text>3.</Text>
            <Text
              style={{ fontFamily: "Poppins-Medium", fontSize: 15, flex: 1 }}
            >
              Bersihkan sampah dan lepas striker yang menempel
            </Text>
          </View>

          <Text
            style={{
              fontSize: 20,
              color: Colors.PRIMARY,
              fontFamily: "Poppins-Medium",
              marginTop: 20,
            }}
          >
            Pengisian Formulir
          </Text>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
            }}
          >
            <Text>1.</Text>
            <Text
              style={{ fontFamily: "Poppins-Medium", fontSize: 15, flex: 1 }}
            >
              Setelah melakukan persiapan, Isi data anda di Formulir Pengisian
              Data di bawah ini
            </Text>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
            }}
          >
            <Text>2.</Text>
            <Text
              style={{ fontFamily: "Poppins-Medium", fontSize: 15, flex: 1 }}
            >
              Jangan sungkan hubungi admin kami di nomor 08123-456-789 bila anda
              mengalami kendala
            </Text>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
            }}
          >
            <Text>3.</Text>
            <Text
              style={{ fontFamily: "Poppins-Medium", fontSize: 15, flex: 1 }}
            >
              Setelah mengisi data, admin akan menghubungi untuk konfirmasikan
              data. Maksimal 1x24 jam. Kunjungi terus aplikasi untuk mengetahui
              update data penjualan anda
            </Text>
          </View>

          <Text
            style={{
              fontSize: 20,
              color: Colors.PRIMARY,
              fontFamily: "Poppins-Medium",
              marginTop: 20,
            }}
          >
            Pengambilan Sampah
          </Text>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
            }}
          >
            <Text>1.</Text>
            <Text
              style={{ fontFamily: "Poppins-Medium", fontSize: 15, flex: 1 }}
            >
              Petugas akan menghubungi dan mengkonfirmasi data anda terlebih
              dahulu sebelum menuju ke lokasi anda
            </Text>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
            }}
          >
            <Text>2.</Text>
            <Text
              style={{ fontFamily: "Poppins-Medium", fontSize: 15, flex: 1 }}
            >
              Jika semua data valid dan lokasi masuk ke jangkauana kami, maka
              petugas akan datang ke lokasi anda
            </Text>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
            }}
          >
            <Text>3.</Text>
            <Text
              style={{ fontFamily: "Poppins-Medium", fontSize: 15, flex: 1 }}
            >
              Petugas akan mengambil sampah anda, dan memasukkan data anda ke
              dalam aplikasi
            </Text>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
            }}
          >
            <Text>4.</Text>
            <Text
              style={{ fontFamily: "Poppins-Medium", fontSize: 15, flex: 1 }}
            >
              Secara otomatis, saldo anda akan berubah sesuai dengan jumlah dari
              sampah anda
            </Text>
          </View>
        </View>

        <Text
          style={{
            fontSize: 25,
            color: Colors.PRIMARY,
            fontFamily: "Poppins-Bold",
            marginTop: 20,
          }}
        >
          Formulir Pengisian Data :
        </Text>

        <View style={{ marginTop: 20 }}>
          <Text
            style={{
              color: Colors.PRIMARY,
              fontSize: 16,
              fontFamily: "Poppins-Medium",
            }}
          >
            Nama
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderRadius: 10,
              paddingHorizontal: 20,
              marginTop: 10,
              width: "100%",
              height: 50,
              backgroundColor: Colors.WHITE,
            }}
          >
            <TextInput
              style={{
                flex: 1,
                color: Colors.PRIMARY,
                fontFamily: "Poppins-Medium",
                fontSize: 16,
              }}
              placeholder="nama"
              placeholderTextColor="#7b7b8b"
              onChangeText={(value) => handleInputChange("nama", value)}
            />
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text
            style={{
              color: Colors.PRIMARY,
              fontSize: 16,
              fontFamily: "Poppins-Medium",
            }}
          >
            Nomor yang bisa dihubungi / Whatsapp
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderRadius: 10,
              paddingHorizontal: 20,
              marginTop: 10,
              width: "100%",
              height: 50,
              backgroundColor: Colors.WHITE,
            }}
          >
            <TextInput
              style={{
                flex: 1,
                color: Colors.PRIMARY,
                fontFamily: "Poppins-Medium",
                fontSize: 16,
              }}
              placeholder="nomor aktif"
              placeholderTextColor="#7b7b8b"
              onChangeText={(value) => handleInputChange("nohp", value)}
              keyboardType="number-pad"
            />
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text
            style={{
              color: Colors.PRIMARY,
              fontSize: 16,
              fontFamily: "Poppins-Medium",
            }}
          >
            Alamat lengkap
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderRadius: 10,
              paddingHorizontal: 20,
              marginTop: 10,
              width: "100%",
              height: 50,
              backgroundColor: Colors.WHITE,
              height: 100,
            }}
          >
            <TextInput
              style={{
                flex: 1,
                color: Colors.PRIMARY,
                fontFamily: "Poppins-Medium",
                fontSize: 16,
                marginTop: 10,
              }}
              placeholder="alamat lengkap"
              placeholderTextColor="#7b7b8b"
              onChangeText={(value) => handleInputChange("alamat", value)}
              multiline
              numberOfLines={5}
              textAlignVertical="top"
            />
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text
            style={{
              color: Colors.PRIMARY,
              fontSize: 16,
              fontFamily: "Poppins-Medium",
            }}
          >
            Jumlah botol plastik
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderRadius: 10,
              paddingHorizontal: 20,
              marginTop: 10,
              width: "100%",
              height: 50,
              backgroundColor: Colors.WHITE,
            }}
          >
            <TextInput
              style={{
                flex: 1,
                color: Colors.PRIMARY,
                fontFamily: "Poppins-Medium",
                fontSize: 16,
              }}
              placeholder="jumlah botol plastik"
              placeholderTextColor="#7b7b8b"
              onChangeText={(value) => handleInputChange("qty", value)}
              keyboardType="number-pad"
            />
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text
            style={{
              color: Colors.PRIMARY,
              fontSize: 16,
              fontFamily: "Poppins-Medium",
            }}
          >
            Masukkan Gambar
          </Text>
          <Pressable onPress={imagePicker}>
            {!image ? (
              <Image
                source={require("./../../assets/images/placeholder.png")}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 15,
                  borderWidth: 1,
                  borderColor: Colors.GRAY,
                }}
              />
            ) : (
              <Image
                source={{ uri: image }}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 15,
                }}
              />
            )}
          </Pressable>
        </View>

        <TouchableOpacity
          disabled={loader}
          onPress={submit}
          style={{
            marginTop: 20,
            padding: 15,
            backgroundColor: Colors.SECONDARY,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            borderColor: Colors.PRIMARY,
          }}
        >
          {loader ? (
            <ActivityIndicator size={"large"} color={Colors.WHITE} />
          ) : (
            <Text
              style={{
                color: Colors.PRIMARY,
                fontFamily: "Poppins-Bold",
                fontSize: 20,
              }}
            >
              Kirim data anda
            </Text>
          )}
        </TouchableOpacity>

        <View style={{ height: 50 }}></View>
      </ScrollView>
    </SafeAreaView>
  );
}
