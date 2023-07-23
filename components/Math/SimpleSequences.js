import { Text, View, StyleSheet, Modal, Button } from "react-native";
import React, { useState, useEffect } from "react";
const SimpleSequences = (props) => {
  const [question, setQuestion] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [correct, setCorrect] = useState("");

  const isAnswerCorrect = (choice) => {
    if (choice == correct) {
      loadData();
      return true;
    } else {
      loadData();
      return false;
    }
  };
  const loadData = () => {
    fetch("http://172.20.10.5:3000/get", {
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((article) => {
        var number = Math.round(Math.random() * (2 - 0) + 0);
        setQuestion(article[number].question);
        setAnswer1(article[number].answer1);
        setAnswer2(article[number].answer2);
        setAnswer3(article[number].answer3);
        setCorrect(article[number].correct);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <Modal visible={props.visible}>
      <View style={styles.backButton}>
        <Button title="Back" color="red" onPress={props.changeVisible} />
      </View>
      <View style={styles.container}>
        <Text>Simple Sequences</Text>
        <View>
          <Text>{question}</Text>
        </View>
        <View>
          <Button
            title={answer1}
            onPress={() => props.goodAnswer(isAnswerCorrect(answer1))}
          />
          <Button
            title={answer2}
            onPress={() => props.goodAnswer(isAnswerCorrect(answer2))}
          />
          <Button
            title={answer3}
            onPress={() => props.goodAnswer(isAnswerCorrect(answer3))}
          />
          <Button
            title={correct}
            onPress={() => props.goodAnswer(isAnswerCorrect(correct))}
          />
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
});

export default SimpleSequences;
