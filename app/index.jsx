import { Redirect, router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import Colors from "@/constants/Colors";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 20 }}>
        checking data ... Please wait ...
      </Text>
      <Redirect href="/login" />
    </View>
  );
}
