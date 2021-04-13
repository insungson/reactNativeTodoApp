import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

const Task = ({ text, id, completeTask, updateTask }) => {
  const [edit, setEdit] = useState(false);
  const [todo, setTodo] = useState(text);

  const handleEditChange = (e) => {
    console.log("e: ", e);
    setTodo(e);
  };

  const handleEdit = () => {
    setTodo(text);
    setEdit(!edit);
  };

  const saveTask = (id, todo) => {
    updateTask(id, todo);
    setEdit(!edit);
  };

  return (
    <View style={styles.item}>
      {!edit ? (
        <>
          <View style={styles.itemLeft}>
            <View style={styles.square}></View>
            <Text style={styles.itemText}>{text}</Text>
          </View>
          <TouchableOpacity onPress={handleEdit}>
            <View style={styles.circular}>{/* <Text>수정</Text> */}</View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => completeTask(id)}>
            <View style={styles.circularDelete}>{/* <Text>삭제</Text> */}</View>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <View style={styles.itemLeft}>
            <View style={styles.square}></View>
            <TextInput
              style={styles.itemText}
              value={todo}
              onChangeText={handleEditChange}
            ></TextInput>
          </View>
          <TouchableOpacity onPress={() => saveTask(id, todo)}>
            <View style={styles.circularSave}>{/* <Text>저장</Text> */}</View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleEdit}>
            <View style={styles.circularDelete}>{/* <Text>취소</Text> */}</View>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: "80%",
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: "#55BCF6",
    borderWidth: 2,
    borderRadius: 5,
  },
  circularSave: {
    width: 12,
    height: 12,
    borderColor: "green",
    borderWidth: 2,
    borderRadius: 5,
  },
  circularDelete: {
    width: 12,
    height: 12,
    borderColor: "red",
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Task;
