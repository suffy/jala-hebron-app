import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useContext, useEffect } from "react";
import { router } from "expo-router";
import LoginWithGoogle from "../../components/LoginWithGoogle";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../constants/Colors";
import Services from "../../constants/Services";
import { UserDetailContext } from "../../context/UserDetailContext";

export default function LoginScreen() {
  const { userGoogle, setUserGoogle } = useContext(UserDetailContext);

  useEffect(() => {
    console.log("useEffect login");
    checkUserAuth();
  }, []);

  const checkUserAuth = async () => {
    try {
      let jsonvalue = await Services.getData("dataLogin");
      jsonvalueParse = JSON.parse(jsonvalue);
      let isLogin = jsonvalueParse.isLogin;
      if (isLogin == true) {
        router.replace("/(tabs)/home");
      }
    } catch (error) {
      alert("Error : ", error.message);
    }
  };

  return (
    <ScrollView style={{ backgroundColor: Colors.WHITE, height: "100%" }}>
      <Image
        source={require("./../../assets/images/login.png")}
        style={{ width: "100%", height: 500, marginTop: 10 }}
      />
      <View
        style={{
          backgroundColor: Colors.WHITE,
          marginTop: 20,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          height: "100%",
          padding: 25,
        }}
      >
        <Text
          style={{
            fontFamily: "Poppins-Bold",
            fontSize: 24,
            textAlign: "center",
          }}
        >
          Yayasan Jala Hebron
        </Text>
        <Text
          style={{
            fontFamily: "Poppins-Medium",
            fontSize: 17,
            textAlign: "center",
            color: Colors.GRAY,
            marginTop: 20,
          }}
        >
          Konseling, Kemanusiaan, Beasiswa, Pelayanan, Kesehatan, Others
        </Text>
        <TouchableOpacity
          onPress={() => router.push("/(auth)/sign-in")}
          style={{
            marginTop: 20,
            borderWidth: 1,
            borderColor: Colors.PRIMARY,
            borderRadius: 14,
            padding: 10,
            backgroundColor: Colors.WHITE,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins-Medium",
              fontSize: 20,
              textAlign: "center",
              color: Colors.PRIMARY,
            }}
          >
            {" "}
            Sign In
          </Text>
        </TouchableOpacity>
        <LoginWithGoogle />
      </View>
    </ScrollView>
  );
}
