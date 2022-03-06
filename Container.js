// import package
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import screens
import Calculator from "./screens/Calculator";
import Calculator1 from "./screens/Calculator1";
import Todo from "./screens/Todo";
import Home from "./screens/Home";

// create navigator
const Stack = createNativeStackNavigator();

function Container() {
  return (
    <NavigationContainer>
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
            title: "Hello Screen",
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
          component={Todo}
          options={{
            title: "Todo App",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Container;
