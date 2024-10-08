import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useContext } from "react";
import { router } from "expo-router";
import { TemaContext, UserContext } from "../../context/GlobalState";
import LoginWithGoogle from "../../components/LoginWithGoogle";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../constants/Colors";

export default function LoginScreen() {
  const [background, setBackground] = useContext(TemaContext);
  const [userGoogle, setUserGoogle] = useContext(UserContext);

  return (
    <View style={{ backgroundColor: Colors.WHITE, height: "100%" }}>
      <Image
        source={require("./../../assets/images/login.jpg")}
        style={{ width: "100%", height: 500 }}
      />
      <View
        style={{
          backgroundColor: Colors.WHITE,
          marginTop: -20,
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
    </View>
  );
}
