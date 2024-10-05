import { Redirect } from "expo-router";
import { Text, View } from "react-native";
import { TemaContext } from "../context/GlobalState";
import { useContext, useEffect } from "react";

export default function Index() {
  const [background, setBackground] = useContext(TemaContext);

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
      <Redirect href="/login" />
    </View>
  );
}
