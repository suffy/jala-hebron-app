import { Stack } from "expo-router";
import { TemaContext } from "../context/GlobalState";
import { useContext, useState } from "react";

export default function RootLayout() {
  const [tema, setTema] = useState("#212121");

  return (
    <TemaContext.Provider value={[tema, setTema]}>
      <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen name="(tabs)" />
      </Stack>
    </TemaContext.Provider>
  );
}
