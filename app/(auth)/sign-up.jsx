import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../constants/Colors";
import { router } from "expo-router";

export default function SignUp() {
  return (
    <SafeAreaView
      style={{ padding: 20, backgroundColor: Colors.WHITE, height: "100%" }}
    >
      <View>
        <Image
          source={{
            uri: "https://muliaputramandiri.com/assets/images/hebron/logo-transparant.png",
          }}
          style={{ width: 100, height: 100 }}
        />
        <Text
          style={{
            fontSize: 25,
            color: Colors.PRIMARY,
            fontFamily: "Poppins-Bold",
            marginTop: 20,
          }}
        >
          Sign Up to Jala Hebron
        </Text>

        <View style={{ marginTop: 20 }}>
          <Text
            style={{
              color: Colors.PRIMARY,
              fontSize: 16,
              fontFamily: "Poppins-Medium",
            }}
          >
            Username
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
              placeholder="Username"
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
            Email
          </Text>
          {/* <View className="border-2 border-black-500 w-full h-16 px-4 bg-white-100 rounded-2xl focus:border-secondary items-center flex-row"></View> */}
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
              placeholder="Email"
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
            Password
          </Text>
          {/* <View className="border-2 border-black-500 w-full h-16 px-4 bg-white-100 rounded-2xl focus:border-secondary items-center flex-row"></View> */}
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
              placeholder="Password"
              placeholderTextColor="#7b7b8b"
              onChangeText={(text) => console.log(text)}
              secureTextEntry
            />
          </View>
          <TouchableOpacity
            style={{
              marginTop: 20,
              padding: 15,
              backgroundColor: Colors.PRIMARY,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => console.log("Sign In")}
          >
            <Text
              style={{
                color: Colors.WHITE,
                fontFamily: "Poppins-Medium",
                fontSize: 16,
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
          <View
            style={{ marginTop: 10, display: "flex", flexDirection: "row" }}
          >
            <Text
              style={{
                color: Colors.PRIMARY,
                marginLeft: 5,
                fontFamily: "Poppins-Medium",
                fontSize: 16,
              }}
            >
              Already have an account ?
            </Text>
            <TouchableOpacity onPress={() => router.push("/sign-in")}>
              <Text
                style={{
                  color: Colors.PRIMARY,
                  marginLeft: 5,
                  fontFamily: "Poppins-Medium",
                  fontSize: 16,
                }}
              >
                Sign In here
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
