// import package
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import screens
import Calculator from "./screens/Calculator";
import Calculator1 from "./screens/Calculator1";
import Todos from "./screens/Todos";
import Home from "./screens/Home";

// create navigator
const Stack = createNativeStackNavigator();

function App() {
  let [fontsLoaded] = useFonts({
    roboto: require("./assets/fonts/Roboto.ttf"),
    robotobold: require("./assets/fonts/Roboto-Bold.ttf"),
    chakra: require("./assets/fonts/Chakra.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerMode: "screen",
            headerTintColor: "white",
            headerStyle: { backgroundColor: "#FFA0A0" },
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "Home",
            }}
          />

          <Stack.Screen
            name="Calculator"
            component={Calculator}
            options={{
              title: "Simple Calculator",
            }}
          />

          <Stack.Screen
            name="Calculator1"
            component={Calculator1}
            options={{
              title: "Calculator",
            }}
          />

          <Stack.Screen
            name="Todo"
            component={Todos}
            options={{
              title: "Todo App",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
