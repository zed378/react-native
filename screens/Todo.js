// import package
import { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Modal,
  Alert,
  FlatList,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";

// import assets
import styles from "../assets/css/todo";

function Todo() {
  const [isLoading, setIsLoading] = useState(false);
  const [taskAdd, setTaskAdd] = useState(null);
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState(null);

  const [modalView, setModalView] = useState(null);

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

  // edit data
  const editTodo = (id, val) => {
    if (edit !== null) {
      axios
        .patch(`https://tasktodo378.herokuapp.com/api/v1.0/task/${id}/${val}`)
        .then(() => {
          getTask();
          setModalView(null);
          setEdit(null);
        })
        .catch(() => {
          Alert.alert("Error", "Can't Edit Data", [
            { text: "OK", onPress: () => console.log("OK Pressed") },
          ]);
        });
    }
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
              editModal(item.id, item.name);
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

  // edit modal
  const editModal = (id, name) => {
    const modal = (
      <Modal
        animationType="fade"
        transparent={true}
        onRequestClose={() => {
          setModalView(null);
          setEdit(null);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalCard}>
            <TextInput
              style={styles.editInput}
              onChangeText={setEdit}
              placeholder={name}
            />
            <View style={styles.editBtnGroup}>
              <TouchableOpacity
                style={styles.saveBtn}
                onPress={() => editTodo(id, edit)}
              >
                <Text style={styles.saveText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancelBtn}
                onPress={() => {
                  setEdit(null);
                  setModalView(null);
                }}
              >
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );

    setModalView(modal);
  };

  useEffect(() => {
    getTask();
  }, []);

  return (
    <View style={styles.todoContainer}>
      {modalView ? modalView : <></>}

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
  );
}

export default Todo;
