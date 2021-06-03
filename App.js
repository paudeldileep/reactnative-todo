import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TodoInputField from "./components/TodoInputField";
import TodoListItem from "./components/TodoListItem";

export default function App() {
  //array to store todo list as object array
  const [todoList, settodoList] = useState([]);

  //for modal view
  const [modalVisible, setModalVisible] = useState(false);

  //adding new todo to existing todo list
  const todoHandler = (todoValue) => {
    if (todoValue) {
      settodoList([
        ...todoList,
        { id: Math.random().toString(), value: todoValue },
      ]);
      setModalVisible(false);
    }
  };

  //deleting a todo item based on id
  const deleteItem = (todoId) => {
    settodoList((todoList) => {
      return todoList.filter((todo) => todo.id != todoId);
    });
  };

  const toggleVisibility = () => {
    modalVisible ? setModalVisible(false) :setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>TODO-APP</Text>

      {/*button to toggle modal visibility */}
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.addButton} onPress={toggleVisibility}>
          <Text style={styles.buttonText}>New Todo</Text>
        </TouchableOpacity>
      </View>
      {/* input field component which need function to add new todo to list */}
      <TodoInputField todoHandler={todoHandler} modalVisible={modalVisible} toggleVisibility={toggleVisibility}/>
      <View style={styles.listContainer}>
        {/* component rendering list items,need list array and delete function*/}
        <TodoListItem todoList={todoList} deleteItem={deleteItem} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: "#a9a9a9",
    flexDirection: "column",
    height: "100%",
  },
  headerText: {
    fontSize: 26,
    textAlign: "center",
  },
  buttonView:{
    alignItems:"center"
  },
  addButton: {
    alignItems: "center",
    marginTop: 30,
    backgroundColor: "teal",
    width: "50%",
    height: 40,
    paddingVertical: 5,
    borderRadius: 15,
    marginHorizontal: "auto",
  },
  buttonText: {
    fontSize: 20,
  },

  listContainer: {
    marginTop: 20,
    marginLeft: 10,
  },
});
