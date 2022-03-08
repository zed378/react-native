// import package
import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import axios from "axios";

// import assets
import styles from "../assets/css/todo";

function EditModal({ id, data, closeModal, renderTask }) {
  const [edit, setEdit] = useState(null);

  // edit data
  const editTodo = (id) => {
    if (edit !== null) {
      axios
        .patch(`https://tasktodo378.herokuapp.com/api/v1.0/task/${id}/${edit}`)
        .then(() => {
          renderTask();
          setEdit(null);
          closeModal();
        })
        .catch(() => {
          Alert.alert("Error", "Can't Edit Data", [
            { text: "OK", onPress: () => console.log("OK Pressed") },
          ]);
        });
    }
  };

  return (
    <View
      style={styles.modalContainer}
      onPress={() => {
        closeModal();
        setEdit(null);
      }}
    >
      <View style={styles.modalCard}>
        <View>
          <TextInput
            style={styles.editInput}
            onChangeText={setEdit}
            placeholder={data}
          />
        </View>
        <View style={styles.editBtnGroup}>
          <TouchableOpacity style={styles.saveBtn} onPress={() => editTodo(id)}>
            <Text style={styles.saveText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cancelBtn}
            onPress={() => closeModal()}
          >
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default EditModal;
