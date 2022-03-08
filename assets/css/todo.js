import { StyleSheet } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const styles = StyleSheet.create({
  todoContainer: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },

  title: {
    fontFamily: "robotobold",
    fontSize: 35,
    marginTop: 10,
    marginBottom: 10,
    color: "#E7305B",
  },

  listView: {
    width: "100%",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },

  todoDetail: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 5,
    paddingLeft: 10,
    marginBottom: 5,
  },

  taskText: {
    width: "85%",
    fontSize: 20,
    alignItems: "center",
    fontFamily: "roboto",
    color: "white",
  },

  taskTextDone: {
    width: "85%",
    fontSize: 20,
    alignItems: "center",
    fontFamily: "roboto",
    color: "#4f4447",
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },

  btnGroup: {
    width: "15%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  editTask: {
    height: "100%",
    width: "50%",
    alignItems: "center",
  },

  editText: {
    fontSize: 22.5,
    color: "white",
    fontFamily: "chakra",
  },

  delTask: {
    height: "100%",
    width: "50%",
    alignItems: "center",
  },

  delText: {
    fontSize: 22.5,
    color: "white",
    fontFamily: "chakra",
  },

  addTodo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
  },

  inputTask: {
    width: "87.5%",
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "#FFC6C7",
    height: 45,
    fontSize: 25,
  },

  btnAdd: {
    width: "12.5%",
    height: 45,
    backgroundColor: "#E7305B",
    justifyContent: "center",
    alignItems: "center",
  },

  btnText: {
    color: "white",
    fontSize: 30,
  },

  modalContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: 9,
    elevation: 9,
  },

  modalCard: {
    width: "85%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#FFC6C7",
    backgroundColor: "white",
    borderRadius: 5,
  },

  editInput: {
    backgroundColor: "#FFC6C7",
    borderRadius: 5,
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    marginBottom: 10,
  },

  editBtnGroup: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  saveBtn: {
    width: "35%",
    backgroundColor: "#BAABDA",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 5,
  },

  saveText: {
    color: "white",
    fontSize: 20,
  },

  cancelBtn: {
    width: "35%",
    backgroundColor: "#E7305B",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 5,
  },

  cancelText: {
    color: "white",
    fontSize: 20,
  },
});

export default styles;
