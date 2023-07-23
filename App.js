import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MathThree from "./components/MathTree";
import React, { useState } from "react";
export default function App() {
  const [onVisibleMathTree, setOnVisibleMathTree] = useState(false);
  return (
    <View style={styles.container}>
      <MathThree
        visible={onVisibleMathTree}
        changeVisible={() => setOnVisibleMathTree(false)}
      />
      <Text
        onPress={() => {
          setOnVisibleMathTree(true);
        }}
      >
        Learning App
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
