// import package
import { Text, View, TouchableOpacity } from "react-native";

// import styles
import styles from "../assets/css/home";

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Hi! This is our first page.</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Calculator")}>
        <Text>Simple Calculator</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Calculator1")}>
        <Text>Calculator</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Todo")}>
        <Text>Todo App</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home;
