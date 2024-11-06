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
  StyleSheet,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { router, useNavigation } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../constants/Colors";
import * as ImagePicker from "expo-image-picker";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../FirebaseConfig";
import axios from "axios";
import { UserDetailContext } from "../../context/UserDetailContext";
import * as FileSystem from "expo-file-system";

export default function Form() {
  const navigation = useNavigation();
  const [image, setImage] = useState();
  const [loader, setLoader] = useState(false);
  const [formData, setFormData] = useState({});
  const { userGoogle, setUserGoogle } = useContext(UserDetailContext);

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
    // UploadImage();

    uploadGambar(image);
  };

  const url = process.env.EXPO_PUBLIC_HEBRON_URL;
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

    setLoader(false);
  };

  const SaveFormData = async (imageUrl) => {
    try {
      const data = {
        "X-API-KEY": process.env.EXPO_PUBLIC_HEBRON_API_KEY,
        secret: process.env.EXPO_PUBLIC_HEBRON_SECRET,
        nama: formData.nama,
        nohp: formData.nohp,
        alamat: formData.alamat,
        qty: formData.qty,
        url: imageUrl,
        filename: imageUrl,
        email: userGoogle.email,
      };

      const response = await axios.post(url + "/green", data);
      console.log(response.data);

      if (response && response.data) {
        setLoader(false);
        ToastAndroid.show("Data Berhasil Masuk", ToastAndroid.LONG);
        router.replace("/green/riwayat");
      }
    } catch (error) {
      console.log("Error : ", error.message);
      ToastAndroid.show("Data Gagal Masuk", ToastAndroid.LONG);
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Formulir Pengisian Data :</Text>

        <View style={{ marginTop: 10 }}>
          <Text style={styles.label}>Nama</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="nama"
              placeholderTextColor="#7b7b8b"
              onChangeText={(value) => handleInputChange("nama", value)}
            />
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={styles.label}>Nomor yang bisa dihubungi / Whatsapp</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="nomor aktif"
              placeholderTextColor="#7b7b8b"
              onChangeText={(value) => handleInputChange("nohp", value)}
              keyboardType="number-pad"
            />
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={styles.label}>Alamat lengkap</Text>
          <View style={styles.inputAlamatView}>
            <TextInput
              style={styles.inputAlamat}
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
          <Text style={styles.label}>Jumlah botol plastik</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="jumlah botol plastik"
              placeholderTextColor="#7b7b8b"
              onChangeText={(value) => handleInputChange("qty", value)}
              keyboardType="number-pad"
            />
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={styles.label}>Masukkan Gambar Barang</Text>
          <Pressable onPress={imagePicker}>
            {!image ? (
              <Image
                source={require("./../../assets/images/placeholder.png")}
                style={styles.image}
              />
            ) : (
              <Image source={{ uri: image }} style={styles.image} />
            )}
          </Pressable>
        </View>

        <TouchableOpacity
          disabled={loader}
          onPress={submit}
          style={styles.button}
        >
          {loader ? (
            <ActivityIndicator size={"large"} color={Colors.WHITE} />
          ) : (
            <Text
              style={{
                color: Colors.WHITE,
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

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: Colors.PRIMARY,
    fontFamily: "Poppins-Bold",
    marginTop: 10,
  },
  label: {
    color: Colors.PRIMARY,
    fontSize: 15,
    fontFamily: "Poppins-Regular",
  },
  inputView: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 10,
    width: "100%",
    height: 50,
    backgroundColor: Colors.WHITE,
  },
  input: {
    flex: 1,
    color: Colors.PRIMARY,
    fontFamily: "Poppins-Regular",
    fontSize: 16,
  },
  inputAlamatView: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 5,
    width: "100%",
    backgroundColor: Colors.WHITE,
    height: 90,
  },
  inputAlamat: {
    flex: 1,
    color: Colors.PRIMARY,
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    marginTop: 10,
  },
  button: {
    marginTop: 20,
    padding: 15,
    backgroundColor: Colors.SECONDARY,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    borderColor: Colors.PRIMARY,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});
