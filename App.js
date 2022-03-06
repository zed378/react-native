import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

// import component / screens
import Calculator from "./screens/Calculator";
import Calculator1 from "./screens/Calculator1";
import Todo from "./screens/Todo";

// import styles
import styles from "./assets/css";

export default function App() {
  let [fontsLoaded] = useFonts({
    roboto: require("./assets/fonts/Roboto.ttf"),
    robotobold: require("./assets/fonts/Roboto-Bold.ttf"),
    chakra: require("./assets/fonts/Chakra.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Todo />
      </View>
    );
  }
}
