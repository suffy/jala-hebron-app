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
import { router, useNavigation } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../constants/Colors";
import * as ImagePicker from "expo-image-picker";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../FirebaseConfig";
import axios from "axios";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Petunjuk() {
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
        marginTop: 30,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <StatusBar style="dark" backgroundColor="#fff" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.title}>Petunjuk Penjualan Sampah Plastik</Text>

          <Text style={styles.subTitle}>Persiapan</Text>

          <View style={styles.containerContent}>
            <Text>1.</Text>
            <Text style={styles.contentText}>
              Pastikan sampah anda merupakan sampah bernilai ekonomis
            </Text>
          </View>

          <View style={styles.containerContent}>
            <Text>2.</Text>
            <Text style={styles.contentText}>
              Pisahkan semua sampah sesuai dengan klarifikasi jenisnya (bedakan
              antara kardus, plastik, dan lainnya)
            </Text>
          </View>

          <View style={styles.containerContent}>
            <Text>3.</Text>
            <Text style={styles.contentText}>
              Bersihkan sampah dan lepas striker yang menempel
            </Text>
          </View>

          <Text style={styles.subTitle}>Pengisian Formulir</Text>

          <View style={styles.containerContent}>
            <Text>1.</Text>
            <Text style={styles.contentText}>
              Setelah melakukan persiapan, Isi data anda di Formulir Pengisian
              Data di bawah ini
            </Text>
          </View>

          <View style={styles.containerContent}>
            <Text>2.</Text>
            <Text style={styles.contentText}>
              Jangan sungkan hubungi admin kami di nomor 08123-456-789 bila anda
              mengalami kendala
            </Text>
          </View>

          <View style={styles.containerContent}>
            <Text>3.</Text>
            <Text style={styles.contentText}>
              Setelah mengisi data, admin akan menghubungi untuk konfirmasikan
              data. Maksimal 1x24 jam. Kunjungi terus aplikasi untuk mengetahui
              update data penjualan anda
            </Text>
          </View>

          <Text style={styles.subTitle}>Pengambilan Sampah</Text>

          <View style={styles.containerContent}>
            <Text>1.</Text>
            <Text style={styles.contentText}>
              Petugas akan menghubungi dan mengkonfirmasi data anda terlebih
              dahulu sebelum menuju ke lokasi anda
            </Text>
          </View>

          <View style={styles.containerContent}>
            <Text>2.</Text>
            <Text style={styles.contentText}>
              Jika semua data valid dan lokasi masuk ke jangkauana kami, maka
              petugas akan datang ke lokasi anda
            </Text>
          </View>

          <View style={styles.containerContent}>
            <Text>3.</Text>
            <Text style={styles.contentText}>
              Petugas akan mengambil sampah anda, dan memasukkan data anda ke
              dalam aplikasi
            </Text>
          </View>

          <View style={styles.containerContent}>
            <Text>4.</Text>
            <Text style={styles.contentText}>
              Secara otomatis, saldo anda akan berubah sesuai dengan jumlah dari
              sampah anda
            </Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => router.push("/green/form")}
          style={styles.button}
        >
          <Text
            style={{
              color: Colors.WHITE,
              fontFamily: "Poppins-Bold",
              fontSize: 20,
            }}
          >
            Isi Formulir
          </Text>
        </TouchableOpacity>

        <View style={{ height: 50 }}></View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 19,
    color: Colors.PRIMARY,
    fontFamily: "Poppins-Bold",
  },
  subTitle: {
    fontSize: 18,
    color: Colors.PRIMARY,
    fontFamily: "Poppins-Medium",
    marginTop: 18,
  },
  containerContent: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
  contentText: { fontFamily: "Poppins-Medium", fontSize: 14, flex: 1 },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: Colors.SECONDARY,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.SECONDARY,
    flexDirection: "row",
    gap: 10,
  },
});
