import { View, Text, SafeAreaView, TextInput, Pressable } from "react-native";
import { useState } from "react";

// import styles
import styles from "../assets/css/calc1";

function Calculator() {
  const [valA, setValA] = useState(null);
  const [valB, setValB] = useState(null);
  const [result, setResult] = useState(0);

  const plus = () => {
    const a = parseInt(valA);
    const b = parseInt(valB);
    setResult(a + b);
  };

  const minus = () => {
    const a = parseInt(valA);
    const b = parseInt(valB);
    setResult(a - b);
  };

  const multiply = () => {
    const a = parseInt(valA);
    const b = parseInt(valB);
    setResult(a * b);
  };

  const divide = () => {
    const a = parseInt(valA);
    const b = parseInt(valB);
    setResult(a / b);
  };

  const modulus = () => {
    const a = parseInt(valA);
    const b = parseInt(valB);
    setResult(a % b);
  };

  return (
    <View style={styles.calc}>
      <SafeAreaView>
        <Text style={styles.calcResult}>{result}</Text>
        <Text style={styles.calcText}>Value A</Text>
        <TextInput
          style={styles.calcInput}
          onChangeText={setValA}
          value={valA}
        />
        <Text style={styles.calcText}>Value B</Text>
        <TextInput
          style={styles.calcInput}
          onChangeText={setValB}
          value={valB}
        />
      </SafeAreaView>

      <View style={styles.btnGroup}>
        <Pressable style={styles.calcButton} onPress={plus}>
          <Text style={styles.calcBtn}>+</Text>
        </Pressable>
        <Pressable style={styles.calcButton} onPress={minus}>
          <Text style={styles.calcBtn}>-</Text>
        </Pressable>
        <Pressable style={styles.calcButton} onPress={multiply}>
          <Text style={styles.calcBtn}>*</Text>
        </Pressable>
        <Pressable style={styles.calcButton} onPress={divide}>
          <Text style={styles.calcBtn}>/</Text>
        </Pressable>
        <Pressable style={styles.calcButton} onPress={modulus}>
          <Text style={styles.calcBtn}>%</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Calculator;
