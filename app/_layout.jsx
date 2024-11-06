import { Stack, SplashScreen } from "expo-router";
import { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import { UserDetailContext } from "../context/UserDetailContext";

export default function RootLayout() {
  const [userGoogle, setUserGoogle] = useState();

  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <UserDetailContext.Provider value={{ userGoogle, setUserGoogle }}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="login/index" />
        <Stack.Screen name="(tabs)" />
        {/* <Stack.Screen name="(auth)" />
      <Stack.Screen name="konseling/index" />
      <Stack.Screen name="beasiswa/index" />
      <Stack.Screen name="pelayanan/index" />
      <Stack.Screen name="kemanusiaan/index" /> */}
      </Stack>
    </UserDetailContext.Provider>
  );
}
