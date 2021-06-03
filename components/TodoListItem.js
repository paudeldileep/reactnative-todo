import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";

//rendering todo lists as flatlist
const TodoListItem = ({ todoList,deleteItem }) => {
  

    {/*deleteitem need a argument to be passed to app.js so used arrow function */}
  const renderItem = (todoListItem) => (
      
    <TouchableOpacity onPress={()=>deleteItem(todoListItem.item.id)}>
      <Text style={styles.listItem}>
        {todoListItem.item.value}
      </Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={todoList}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default TodoListItem;

const styles = StyleSheet.create({
  listItem: {
    color: "white",
    padding: 3,
    marginVertical: 5,
    borderColor: "#808080",
    borderWidth: 1,
    borderRadius: 5,
    width: "80%",
    lineHeight: 30,
  },
});
