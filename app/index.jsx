import { Redirect, router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { TemaContext, UserContext } from "../context/GlobalState";
import { useContext, useEffect } from "react";
import Colors from "@/constants/Colors";

export default function Index() {
  const [background, setBackground] = useContext(TemaContext);
  const [userGoogle, setUserGoogle] = useContext(UserContext);

  useEffect(() => {
    setBackground("red");
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: background,
      }}
    >
      {userGoogle.name ? (
        <View>
          <Text>Halo</Text>
          <Text style={{ color: "white" }}>{userGoogle.name}</Text>
          <TouchableOpacity
            onPress={() => router.push("/home")}
            style={{
              marginTop: 10,
              padding: 10,
              backgroundColor: Colors.PRIMARY,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontFamily: "Poppins-Bold" }}>
              Klik disini untuk masuk ke Home
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          {/* <Text style={{ color: "white" }}>Login</Text> */}
          <Redirect href="/login" />
        </View>
      )}
    </View>
  );
}
