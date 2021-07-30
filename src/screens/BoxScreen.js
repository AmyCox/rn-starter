import React from "react";
import { Text, StyleSheet, View } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={[styles.box, { backgroundColor: "deepskyblue" }]}></View>
      <View
        style={[
          styles.box,
          styles.viewStyleTwo,
          { backgroundColor: "mediumslateblue" },
        ]}
      ></View>

      <View style={[styles.box, { backgroundColor: "yellow" }]}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 500,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  box: {
    height: 100,
    width: 100,
  },
  viewStyleTwo: {
    top: 100,
  },
});

export default BoxScreen;
