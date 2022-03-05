import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

// import component / screens
import Calculator from "./screens/Calculator";

// import styles
import styles from "./assets/css";

export default function App() {
  let [fontsLoaded] = useFonts({
    roboto: require("./assets/fonts/Roboto.ttf"),
    archi: require("./assets/fonts/Architext.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Calculator />
      </View>
    );
  }
}
