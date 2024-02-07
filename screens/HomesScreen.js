// screens/HomeScreen.js
import React, { useState, useEffect } from "react";
import { View, FlatList, Button, Alert, StyleSheet } from "react-native";
import axios from "axios";
import ListItem from "../components/ListItem";
import AddEditForm from "../components/AddEditForm";

const HomeScreen = () => {
  const [data, setData] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAdd = async (formData) => {
    console.log(formData);
    try {
      await axios.post("https://jsonplaceholder.typicode.com/users", formData);

      setIsAdding(false);
      await fetchData();
      console.log("data: ", data);
      setData([
        ...data,
        {
          name: formData.name,
          id: data[data.length - 1].id,
          userId: data[data.length - 1].userId,
        },
      ]);
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  const handleEdit = async (id, formData) => {
    try {
      await axios.put(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        formData
      );
      fetchData();
      setIsEditing(false);
      setSelectedItem(null);
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  const handleDelete = (id) => {
    Alert.alert("Delete Item", "Are you sure you want to delete this item?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        onPress: async () => {
          try {
            await axios.delete(
              `https://jsonplaceholder.typicode.com/users/${id}`
            );
            const newData = data.filter((item) => item.id != id);
            setData(newData);
          } catch (error) {
            console.error("Error deleting data:", error);
          }
        },
      },
    ]);
  };

  const renderItem = ({ item }) => (
    <ListItem
      item={item}
      onDelete={handleDelete}
      onEdit={(id) => {
        setSelectedItem(id);
        setIsEditing(true);
      }}
    />
  );

  return (
    <View style={styles.container}>
      <Button
        title="Add Item"
        onPress={() => {
          setIsAdding(true);
          setSelectedItem(null);
        }}
      />

      {isAdding && <AddEditForm onSubmit={handleAdd} initialValues={{}} />}

      {isEditing && selectedItem && (
        <AddEditForm
          onSubmit={(formData) => handleEdit(selectedItem, formData)}
          initialValues={data.find((item) => item.id === selectedItem)}
        />
      )}

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    padding: 10,
  },
});

export default HomeScreen;
