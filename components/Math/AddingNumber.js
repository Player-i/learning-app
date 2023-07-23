import { Text, View, StyleSheet, Modal, Button } from "react-native";
import React, { useState } from "react";

const AddingNumber = (props) => {
  return (
    <Modal visible={props.visible}>
      <View style={styles.container}>
        <Text>Adding Number</Text>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AddingNumber;
