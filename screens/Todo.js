// import package
import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// import assets
import styles from "../assets/css/todo";

function Todo() {
  const [task, setTask] = useState([]);

  const [modalView, setModalView] = useState(false);

  const editModal = () => {
    const modal = (
      <Modal
        animationType="fade"
        transparent={true}
        // visible={modalView}
        onRequestClose={() => {
          setModalView(null);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalCard}>
            <TextInput style={styles.editInput} />
            <View style={styles.editBtnGroup}>
              <TouchableOpacity style={styles.saveBtn}>
                <Text style={styles.saveText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancelBtn}
                onPress={() => setModalView(null)}
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

  return (
    <View style={styles.todoContainer}>
      {modalView ? modalView : <></>}

      <Text style={styles.title}>What I Have To Do</Text>
      <View style={styles.listView}>
        {/* Begin task component */}
        <LinearGradient
          colors={["#F2789F", "#9145B6"]}
          start={{
            x: 0,
            y: 0,
          }}
          end={{
            x: 1,
            y: 1,
          }}
          style={styles.todoDetail}
        >
          <Text style={styles.taskText} onPress={editModal}>
            Test huhuh h iuhfr6 y gytug yu b tbrtt tfungg fg
          </Text>
          <View style={styles.btnGroup}>
            <TouchableOpacity style={styles.editTask}>
              <Text style={styles.editText}>&#10003;</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.delTask}>
              <Text style={styles.delText}>X</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
        {/* end of task component */}
        <LinearGradient
          colors={["#F2789F", "#9145B6"]}
          start={{
            x: 0,
            y: 0,
          }}
          end={{
            x: 1,
            y: 1,
          }}
          style={styles.todoDetail}
        >
          <Text style={styles.taskText} onPress={editModal}>
            Test
          </Text>
          <View style={styles.btnGroup}>
            <TouchableOpacity style={styles.editTask}>
              <Text style={styles.editText}>&#10003;</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.delTask}>
              <Text style={styles.delText}>X</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
      <View style={styles.addTodo}>
        <TextInput
          placeholder="I want to..."
          onChangeText={setTask}
          style={styles.inputTask}
        />
        <TouchableOpacity style={styles.btnAdd}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Todo;
