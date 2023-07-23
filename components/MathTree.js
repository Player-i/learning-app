import { Text, View, StyleSheet, Modal, Button } from "react-native";
import React, { useState } from "react";
import SimpleSequences from "./Math/SimpleSequences";
import AddingNumber from "./Math/AddingNumber";
const MathThree = (props) => {
  const [simpleSequencesVisible, setSimpleSequencesVisible] = useState(false);
  const [mathPoints, setMathPoints] = useState(0);
  const [addingNumberVisible, setAddingNumberVisible] = useState(false);
  return (
    <Modal visible={props.visible} animationType="fade">
      <SimpleSequences
        visible={simpleSequencesVisible}
        changeVisible={() => setSimpleSequencesVisible(false)}
        goodAnswer={(good) => {
          if (good == true) {
            setMathPoints(mathPoints + 1);
          }
        }}
      />
      <AddingNumber
        visible={addingNumberVisible}
        changeVisible={() => setAddingNumberVisible(false)}
      />
      <View style={styles.backButton}>
        <Button title="Back" color="red" onPress={props.changeVisible} />
      </View>
      <View style={styles.container}>
        <Text>Math</Text>
        <View style={styles.mathList}>
          <Text onPress={() => setSimpleSequencesVisible(true)}>
            Simple Sequences
          </Text>
          <View style={styles.mathAddingNumbers}>
            <Text
              onPress={() => {
                if (mathPoints >= 3) {
                  setAddingNumberVisible(true);
                }
              }}
            >
              Adding Numbers
            </Text>
          </View>
        </View>
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
  backButton: {
    marginRight: 15,
    marginTop: 30,
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  mathList: {
    alignContent: "space-between",
  },
  mathAddingNumbers: {
    marginTop: 20,
  },
});

export default MathThree;
