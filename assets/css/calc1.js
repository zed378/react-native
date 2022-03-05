import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  calc: {
    width: "80%",
  },
  calcResult: {
    fontSize: 70,
    textAlign: "center",
    marginBottom: 10,
  },
  calcText: {
    fontFamily: "roboto",
    fontSize: 32,
    fontWeight: "900",
    color: "black",
    marginBottom: 10,
  },
  calcInput: {
    backgroundColor: "white",
    fontSize: 30,
    height: 40,
    borderRadius: 10,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 20,
  },
  btnGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  calcButton: {
    backgroundColor: "#FF5757",
    width: "25%",
    height: 75,
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    margin: 10,
    borderRadius: 5,
  },
  calcBtn: {
    fontFamily: "roboto",
    fontSize: 55,
    fontWeight: "900",
    color: "white",
  },
});

export default styles;
