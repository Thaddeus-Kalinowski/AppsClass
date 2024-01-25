import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, TextInput, Button, Modal, Pressable } from 'react-native';
import { useState } from 'react';

export default function App() {
  const responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
  ];

  function modalShow() {
    setModalIsVisible(true);
  }

  function modalHide() {
    setModalIsVisible(false);
  }

  function ask8Ball() {
    modalShow();

    let randResponse = responses[Math.floor(Math.random()*responses.length)];
    setResponse(randResponse);
  }

  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  

  return (
    <>
    <StatusBar style="auto" />
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.textinput}
        placeholder="Ask 8-ball a Question"
        onChangeText={text => setQuestion(text)}
      ></TextInput>
      <View style={styles.pressContainer}>
        {/* Submit button */}
        <Pressable style={styles.pressable}
        android_ripple={{color: "white"}}
        onPress={ask8Ball}> 
          <Text style={styles.text}>Submit</Text>
        </Pressable>
      </View>
    </SafeAreaView>

    <Modal visible={modalIsVisible}>
      <View style={styles.container}>
        <Text style={styles.questionText}>Question: {question}</Text>

        <Text style={styles.responseText}>Answer: {response}</Text>

        {/* Return button */}
        <Pressable style={styles.pressable}
        android_ripple={{color: "white"}}
        onPress={modalHide}>
          <Text style={styles.text}>Return</Text>
        </Pressable>
      </View>
    </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinput: {
    borderWidth: 1,
    padding: 10,
    //paddingHorizontal: 50
  },  
  pressContainer: {
    flexDirection: 'row'
  },
  pressable: {
    backgroundColor: "lightblue",
    marginHorizontal: 20,
    marginTop: 50,
    padding: 15,
    borderRadius: 25,
  },
  text: {
    fontSize: 26,
    color: "white"
  },
  questionText: {
    flex: 0.15,
    fontSize: 20,
    textAlign: 'center',
  },
  responseText: {
    fontSize: 20,
    marginTop: 50,
    textAlign: 'center',
  }
});
