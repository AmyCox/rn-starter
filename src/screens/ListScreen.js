import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Romy", age: 0 },
    { name: "Ruby", age: 13 },
    { name: "Lauren", age: 32 },
    { name: "George", age: 11 },
    { name: "Amy", age: 39 },
  ];
  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}{" "}
          </Text>
        );
      }}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
    fontSize: 50,
  },
});

export default ListScreen;
