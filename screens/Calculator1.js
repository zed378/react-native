import { View, Text, Pressable, Alert } from "react-native";
import { useState } from "react";

// import styles
import styles from "../assets/css/calc2";

function Calculator1() {
  const [preview, setPreview] = useState("");
  const [result, setResult] = useState(0);
  const [operator, setOperator] = useState();
  const [valA, setValA] = useState(0);
  const [valB, setValB] = useState(0);

  const clear = () => {
    setPreview("");
    setOperator();
    setValA(0);
    setValB(0);
    setResult(0);
  };

  const equal = () => {
    const a = parseInt(valA);
    const b = parseInt(valB);

    if (operator === "+") {
      setResult(a + b);
    } else if (operator === "-") {
      setResult(a - b);
    } else if (operator === "/") {
      setResult(a / b);
    } else if (operator === "*") {
      setResult(a * b);
    } else if (operator === "%") {
      setResult(a % b);
    }

    setPreview("");
    setOperator();
    setValA(0);
    setValB(0);
  };

  return (
    <View style={styles.calc}>
      <View style={styles.display}>
        <Text style={styles.preview}>{preview}</Text>
        <Text style={styles.result}>{result}</Text>
      </View>

      <View style={styles.groupBtn}>
        <Pressable
          style={styles.btnNumber}
          onPress={() => {
            setPreview(preview + "1");
            if (!operator) {
              setValA(valA + "1");
            } else {
              setValB(valB + "1");
            }
          }}
        >
          <Text style={styles.btnText}>1</Text>
        </Pressable>

        <Pressable
          style={styles.btnNumber}
          onPress={() => {
            setPreview(preview + "2");
            if (!operator) {
              setValA(valA + "2");
            } else {
              setValB(valB + "2");
            }
          }}
        >
          <Text style={styles.btnText}>2</Text>
        </Pressable>

        <Pressable
          style={styles.btnOperator}
          onPress={() => {
            if (result === 0 && valA !== 0 && valB === 0) {
              setOperator("-");
              setPreview(preview + " - ");
            } else if (result === 0 && valA && valB !== 0) {
              equal();
            } else if (result && valA && valB !== 0) {
              equal();
            } else if (result !== 0 && valA === 0 && valB === 0) {
              setValA(result);
              setOperator("-");
              setPreview(result + " - ");
            }
          }}
        >
          <Text style={styles.btnText}>-</Text>
        </Pressable>

        <Pressable
          style={styles.btnOperator}
          onPress={() => {
            if (result === 0 && valA !== 0 && valB === 0) {
              setOperator("+");
              setPreview(preview + " + ");
            } else if (result === 0 && valA && valB !== 0) {
              equal();
            } else if (result && valA && valB !== 0) {
              equal();
            } else if (result !== 0 && valA === 0 && valB === 0) {
              setValA(result);
              setOperator("+");
              setPreview(result + " + ");
            }
          }}
        >
          <Text style={styles.btnText}>+</Text>
        </Pressable>

        <Pressable
          style={styles.btnNumber}
          onPress={() => {
            setPreview(preview + "3");
            if (!operator) {
              setValA(valA + "3");
            } else {
              setValB(valB + "3");
            }
          }}
        >
          <Text style={styles.btnText}>3</Text>
        </Pressable>

        <Pressable
          style={styles.btnNumber}
          onPress={() => {
            setPreview(preview + "4");
            if (!operator) {
              setValA(valA + "4");
            } else {
              setValB(valB + "4");
            }
          }}
        >
          <Text style={styles.btnText}>4</Text>
        </Pressable>

        <Pressable
          style={styles.btnOperator}
          onPress={() => {
            if (result === 0 && valA !== 0 && valB === 0) {
              setOperator("/");
              setPreview(preview + " / ");
            } else if (result === 0 && valA && valB !== 0) {
              equal();
            } else if (result && valA && valB !== 0) {
              equal();
            } else if (result !== 0 && valA === 0 && valB === 0) {
              setValA(result);
              setOperator("/");
              setPreview(result + " / ");
            }
          }}
        >
          <Text style={styles.btnText}>/</Text>
        </Pressable>

        <Pressable
          style={styles.btnOperator}
          onPress={() => {
            if (result === 0 && valA !== 0 && valB === 0) {
              setOperator("*");
              setPreview(preview + " * ");
            } else if (result === 0 && valA && valB !== 0) {
              equal();
            } else if (result && valA && valB !== 0) {
              equal();
            } else if (result !== 0 && valA === 0 && valB === 0) {
              setValA(result);
              setOperator("*");
              setPreview(result + " * ");
            }
          }}
        >
          <Text style={styles.btnText}>*</Text>
        </Pressable>

        <Pressable
          style={styles.btnNumber}
          onPress={() => {
            setPreview(preview + "5");
            if (!operator) {
              setValA(valA + "5");
            } else {
              setValB(valB + "5");
            }
          }}
        >
          <Text style={styles.btnText}>5</Text>
        </Pressable>

        <Pressable
          style={styles.btnNumber}
          onPress={() => {
            setPreview(preview + "6");
            if (!operator) {
              setValA(valA + "6");
            } else {
              setValB(valB + "6");
            }
          }}
        >
          <Text style={styles.btnText}>6</Text>
        </Pressable>

        <Pressable
          style={styles.btnOperator}
          onPress={() => {
            if (result === 0 && valA !== 0 && valB === 0) {
              setOperator("%");
              setPreview(preview + " % ");
            } else if (result === 0 && valA && valB !== 0) {
              equal();
            } else if (result && valA && valB !== 0) {
              equal();
            } else if (result !== 0 && valA === 0 && valB === 0) {
              setValA(result);
              setOperator("%");
              setPreview(result + " % ");
            }
          }}
        >
          <Text style={styles.btnText}>%</Text>
        </Pressable>

        <Pressable style={styles.btnOperator} onPress={equal}>
          <Text style={styles.btnText}>=</Text>
        </Pressable>

        <Pressable
          style={styles.btnNumber}
          onPress={() => {
            setPreview(preview + "7");
            if (!operator) {
              setValA(valA + "7");
            } else {
              setValB(valB + "7");
            }
          }}
        >
          <Text style={styles.btnText}>7</Text>
        </Pressable>

        <Pressable
          style={styles.btnNumber}
          onPress={() => {
            setPreview(preview + "8");
            if (!operator) {
              setValA(valA + "8");
            } else {
              setValB(valB + "8");
            }
          }}
        >
          <Text style={styles.btnText}>8</Text>
        </Pressable>

        <Pressable
          style={styles.btnNumber}
          onPress={() => {
            setPreview(preview + "9");
            if (!operator) {
              setValA(valA + "9");
            } else {
              setValB(valB + "9");
            }
          }}
        >
          <Text style={styles.btnText}>9</Text>
        </Pressable>

        <Pressable
          style={styles.btnNumber}
          onPress={() => {
            setPreview(preview + "0");
            if (valA || valB !== null) {
              if (!operator) {
                setValA(valA + "0");
              } else {
                setValB(valB + "0");
              }
            }
          }}
        >
          <Text style={styles.btnText}>0</Text>
        </Pressable>
      </View>

      <Pressable style={styles.btnClear} onPress={clear}>
        <Text style={styles.btnClr}>Clear</Text>
      </Pressable>
    </View>
  );
}

export default Calculator1;
