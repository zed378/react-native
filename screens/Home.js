// import package
import { Text, View, TouchableOpacity, Image } from "react-native";

// import assets
import calcu1 from "../assets/img/calcu1.png";
import calcu2 from "../assets/img/calcu2.png";
import todo from "../assets/img/todo.png";
import styles from "../assets/css/home";

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Let's Find Out Our Apps!</Text>
      <View style={styles.btnWrapper}>
        <TouchableOpacity onPress={() => navigation.navigate("Calculator")}>
          <Image style={styles.simple} source={calcu1} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Calculator1")}>
          <Image style={styles.complex} source={calcu2} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Todos")}>
          <Image style={styles.task} source={todo} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Home;
