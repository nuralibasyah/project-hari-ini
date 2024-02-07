// components/ListItem.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ListItem = ({ item, onDelete, onEdit }) => {
  return (
    <View style={styles.listItemContainer}>
      <Text style={styles.listItemText}>{item.name}</Text>
      <TouchableOpacity onPress={() => onEdit(item.id)} style={styles.button}>
        <Text style={styles.buttonText}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onDelete(item.id)} style={styles.button}>
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  listItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    margin: 5,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
  },
  listItemText: {
    fontSize: 16,
  },
  button: {
    backgroundColor: "#3498db",
    padding: 5,
    marginHorizontal: 5,
    borderRadius: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
  },
});

export default ListItem;
