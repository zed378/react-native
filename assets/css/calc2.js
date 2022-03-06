import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFA0A0",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },

  calc: {
    width: "95%",
    paddingTop: 20,
  },

  display: {
    backgroundColor: "white",
    height: 150,
    borderRadius: 10,
    padding: 10,
  },

  preview: {
    textAlign: "right",
    fontFamily: "chakra",
    fontSize: 30,
    height: 30,
  },

  result: {
    textAlign: "right",
    fontFamily: "chakra",
    fontSize: 75,
  },

  groupBtn: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 15,
  },

  btnNumber: {
    width: "22.5%",
    height: 75,
    backgroundColor: "#FF5757",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 15,
  },

  btnOperator: {
    width: "22.5%",
    height: 75,
    backgroundColor: "#930707",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 15,
  },

  btnText: {
    color: "white",
    fontSize: 50,
    fontFamily: "robotobold",
  },

  btnClear: {
    marginTop: 10,
    backgroundColor: "red",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },

  btnClr: {
    color: "white",
    textAlign: "center",
    fontSize: 30,
    fontFamily: "robotobold",
  },
});

export default styles;
