// import package
import { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  FlatList,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";

// import assets
import styles from "../assets/css/todo";

// import component
import EditModal from "../components/EditModal";

function Todos() {
  const [isLoading, setIsLoading] = useState(false);
  const [taskAdd, setTaskAdd] = useState(null);
  const [list, setList] = useState([]);
  const [modalView, setModalView] = useState(null);

  // set modal
  const sendModalParams = (id, name) => {
    const modal = (
      <EditModal
        id={id}
        data={name}
        closeModal={() => setModalView(null)}
        renderTask={getTask}
      />
    );

    setModalView(modal);
  };

  // todo list component
  const TodoList = ({ item }) => {
    return (
      <LinearGradient
        colors={["#FFA0A0", "#E7305B"]}
        start={{
          x: 0,
          y: 0,
        }}
        end={{
          x: 1,
          y: 1,
        }}
        style={styles.todoDetail}
        key={item.id}
      >
        <Text
          style={item.isDone === 1 ? styles.taskTextDone : styles.taskText}
          onPress={() => {
            if (item.isDone !== 1) {
              sendModalParams(item.id, item.name);
            }
          }}
        >
          {item.name}
        </Text>
        <View style={styles.btnGroup}>
          {item.isDone !== 1 ? (
            <TouchableOpacity
              style={styles.editTask}
              onPress={() => setIsDone(item.id)}
            >
              <Text style={styles.editText}>&#10003;</Text>
            </TouchableOpacity>
          ) : (
            <></>
          )}

          <TouchableOpacity
            style={styles.delTask}
            onPress={() => delTodo(item.id)}
          >
            <Text style={styles.delText}>X</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  };

  // get data
  const getTask = () => {
    setIsLoading(true);
    axios
      .get("https://tasktodo378.herokuapp.com/api/v1.0/tasks")
      .then((res) => {
        setList(res.data.data);
        setIsLoading(false);
        setTaskAdd(null);
      })
      .catch(() => {
        Alert.alert("Error", "Can't Get Data", [
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]);

        setIsLoading(false);
      });
  };

  // add data
  const addTodo = (name) => {
    axios
      .post(`https://tasktodo378.herokuapp.com/api/v1.0/task/${name}`)
      .then(() => {
        getTask();
      })
      .catch(() => {
        Alert.alert("Error", "Can't Add Data", [
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]);
      });
  };

  // delete data
  const delTodo = (id) => {
    axios
      .delete(`https://tasktodo378.herokuapp.com/api/v1.0/task/${id}`)
      .then(() => getTask())
      .catch(() => {
        Alert.alert("Error", "Can't Delete Data", [
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]);
      });
  };

  // isDone
  const setIsDone = (id) => {
    axios
      .patch(`https://tasktodo378.herokuapp.com/api/v1.0/isdone/${id}`)
      .then(() => {
        getTask();
      })
      .catch(() => {
        Alert.alert("Error", "Can't Done Data", [
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]);
      });
  };

  useEffect(() => {
    getTask();
  }, []);

  return (
    <>
      {modalView ? modalView : <></>}
      <View style={styles.todoContainer}>
        <Text style={styles.title}>What I Have To Do</Text>
        <View style={styles.listView}>
          {/* Begin task component */}
          <FlatList
            data={list}
            renderItem={TodoList}
            keyExtractor={(item) => item.id}
            refreshing={isLoading}
            onRefresh={getTask}
          />
          {/* end of task component */}
        </View>
        <View style={styles.addTodo}>
          <TextInput
            placeholder="I want to..."
            onChangeText={setTaskAdd}
            style={styles.inputTask}
            value={taskAdd}
          />
          <TouchableOpacity
            style={styles.btnAdd}
            onPress={() => addTodo(taskAdd)}
          >
            <Text style={styles.btnText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default Todos;
