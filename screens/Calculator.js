import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

// import styles
import styles from "../assets/css/calc1";

function Calculator() {
  const [valA, setValA] = useState(null);
  const [valB, setValB] = useState(null);
  const [result, setResult] = useState(0);

  const a = parseInt(valA);
  const b = parseInt(valB);

  const plus = () => {
    if (valA || valB !== null) {
      setResult(a + b);
    }
  };

  const minus = () => {
    if (valA || valB !== null) {
      setResult(a - b);
    }
  };

  const multiply = () => {
    if (valA || valB !== null) {
      setResult(a * b);
    }
  };

  const divide = () => {
    if (valA || valB !== null) {
      setResult(a / b);
    }
  };

  const modulus = () => {
    if (valA || valB !== null) {
      setResult(a % b);
    }
  };

  const clear = () => {
    setResult(0);
    setValA(null);
    setValB(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.calc}>
        <SafeAreaView>
          <Text style={styles.calcResult}>{result}</Text>
          <Text style={styles.calcText}>Value A</Text>
          <TextInput
            style={styles.calcInput}
            onChangeText={setValA}
            value={valA}
            keyboardType="numeric"
          />
          <Text style={styles.calcText}>Value B</Text>
          <TextInput
            style={styles.calcInput}
            onChangeText={setValB}
            value={valB}
            keyboardType="numeric"
          />
        </SafeAreaView>

        <View style={styles.btnGroup}>
          <TouchableOpacity style={styles.calcButton} onPress={plus}>
            <Text style={styles.calcBtn}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.calcButton} onPress={minus}>
            <Text style={styles.calcBtn}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.calcButton} onPress={multiply}>
            <Text style={styles.calcBtn}>*</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.calcButton} onPress={divide}>
            <Text style={styles.calcBtn}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.calcButton} onPress={modulus}>
            <Text style={styles.calcBtn}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.calcButton} onPress={clear}>
            <Text style={styles.calcBtn}>AC</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Calculator;
