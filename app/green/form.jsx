import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../constants/Colors";

export default function Form() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "",
      headerTransparent: true,
    });
  }, []);

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
              onChangeText={(text) => console.log(text)}
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
              onChangeText={(text) => console.log(text)}
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
              onChangeText={(text) => console.log(text)}
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
              onChangeText={(text) => console.log(text)}
              keyboardType="number-pad"
            />
          </View>
        </View>

        <TouchableOpacity
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
          onPress={() => console.log("Kirim data anda")}
        >
          <Text
            style={{
              color: Colors.PRIMARY,
              fontFamily: "Poppins-Bold",
              fontSize: 20,
            }}
          >
            Kirim data anda
          </Text>
        </TouchableOpacity>

        <View style={{ height: 50 }}></View>
      </ScrollView>
    </SafeAreaView>
  );
}
