import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const TodoInputField = ({ todoHandler, modalVisible,toggleVisibility }) => {
  const [todoValue, settodoValue] = useState("");

  const assignTodoValue = (todoText) => {
    settodoValue(todoText);
  };

  const newtodoHandler = () => {
    todoHandler(todoValue);
    settodoValue("");
  };

  const closeModal=()=>{
    toggleVisibility();
    settodoValue("");
  }

  return (
    <Modal transparent={true} animationType="slide" visible={modalVisible}>
      <View style={styles.parentContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.todoTextInput}
            placeholder="to do.."
            value={todoValue}
            onChangeText={assignTodoValue}
          />
          {/*todohandler need a argument to be passed to app.js so used arrow function */}
          <TouchableOpacity style={styles.addButton} onPress={newtodoHandler}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
        {/*cancel button */}
        <View style={styles.cancelView}>
          <TouchableOpacity style={styles.cancelButton} onPress={closeModal}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default TodoInputField;

const styles = StyleSheet.create({
  parentContainer: {
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
  },
  inputContainer: {
    flexDirection: "row",
    color: "white",
    alignItems: "center",
  },
  todoTextInput: {
    borderBottomColor: "white",
    borderBottomWidth: 1,
    marginTop: 5,
    paddingTop: 5,
    flexWrap: "wrap",
    marginHorizontal: 10,
    width: "70%",
    color: "white",
    lineHeight: 30,
  },
  addButton: {
    paddingHorizontal: 15,
    paddingVertical: 3,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 20,
  },
  buttonText: {
    color: "white",
  },
  cancelButton: {
    marginTop: 20,
    backgroundColor: "#cc6600",
    width: "50%",
    borderRadius: 10,
    height: 30,
    alignItems: "center",
    paddingTop: 5,
  },
  cancelView:{
    alignItems:"center"
  }
});
