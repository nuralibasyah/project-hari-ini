import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import axios from "axios";

const GetList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <View style={style.container}>
      <Text style={style.title}>List of Users</Text>
      <FlatList
        data={data}
        keyEXtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={style.userItem}>
            <Text>title: {item.title}</Text>
            <Text>body: {item.body}</Text>
          </View>
        )}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontsize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  userItem: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 8,
  },
  UserName: {
    fontSize: 16,
    FontWeight: "bold",
    marginBottom: 8,
  },
});

export default GetList;
