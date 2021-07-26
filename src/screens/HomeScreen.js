import React from "react";
import { Text, StyleSheet, Button, View } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Amy's Screen</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to components demo"
      ></Button>
      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate("List")}
      ></Button>
      <Button
        onPress={() => navigation.navigate("Image")}
        title="Go to Image Demo"
      ></Button>
      <Button
        onPress={() => navigation.navigate("Counter")}
        title="Go to Counter"
      ></Button>
      <Button
        onPress={() => navigation.navigate("Color")}
        title="Go to Color Demo"
      ></Button>
      <Button
        onPress={() => navigation.navigate("Square")}
        title="Go to Square Demo"
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
