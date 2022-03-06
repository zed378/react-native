import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFA0A0",
    alignItems: "center",
    justifyContent: "center",
  },

  welcome: {
    fontSize: 30,
    color: "white",
    marginBottom: 30,
  },

  btnWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },

  simple: {
    height: 75,
    width: 75,
  },

  complex: {
    height: 75,
    width: 75,
  },

  task: {
    height: 75,
    width: 75,
  },
});

export default styles;
