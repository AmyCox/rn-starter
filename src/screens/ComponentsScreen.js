import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const name = "Amy";
  return (
    <View>
      <Text style={styles.textStyle}>Getting Started with react native</Text>
      <Text style={styles.subHeadingStyle}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  subHeadingStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
