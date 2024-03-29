import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView, Pressable, Modal, TextInput } from 'react-native';
import { useState } from 'react'
export default function App() {
  // Set max and min dice value
  const maxVal = 6;
  const minVal = 1;
  // Create state management variables
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(2);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [userGuess, setUserGuess] = useState("");
  const [userWager, setUserWager] = useState("");
  const [diceSum, setDiceSum] = useState(0);

  function startDiceRollHandler() {
    setModalIsVisible(true);
    setUserGuess("");
    setUserWager("");
  }

  function endDiceRollHandler() {
    setModalIsVisible(false);
  }

  function onDiceRoll() {
    const rndNum1 = Math.floor(Math.random() * (maxVal - minVal)) + minVal;
    const rndNum2 = Math.floor(Math.random() * (maxVal - minVal)) + minVal;
    setDice1(rndNum1);
    setDice2(rndNum2);

    let result = rndNum1 + rndNum2;
    setDiceSum(result);

    endDiceRollHandler();
  }

  // Determine what type of result text to display
  let resultText = (
    <Text style={styles.resultText}>Roll the dice and make a wager</Text>
  )
  const userGuessNum = parseInt(userGuess);
  const userWagerInt = parseInt(userWager)
  const diceSumNum = parseInt(diceSum);
  if (userGuess !== "" && userGuessNum === diceSum) {
    resultText = <Text style={styles.resultText}>
      You Won ${(userWagerInt*5).toFixed(2)}
    </Text>
  }
  if (userGuess !== "" && userGuessNum !== diceSumNum) {
    resultText = <Text style={styles.resultText}>
      You Lost ${(userWagerInt).toFixed(2)}
    </Text>
  }

  return (
    <>
    <StatusBar style="auto" />
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.titleBackground}>
          <Text style={styles.title}>Dice Roller</Text>
        </View>
      </View>

      <View style={styles.rollButtonContainer}>
        <Pressable
        // Add the android ripple
        android_ripple={{color: "#ff6f6f"}}
        // Style button when pressed
        style={({pressed}) => pressed && styles.pressedButton}
        // When pressed, open modal screen
        onPress={startDiceRollHandler}
        >
          <View style={styles.rollButton}>
            <Text style={styles.rollButtonText}>Roll Dice</Text> 
          </View>
        </Pressable>
        {/* <Button title="Roll Dice" style={styles.rollButton}></Button> */}
      </View>

      <View style={styles.diceContainer}>
        <View style={styles.dice}>
          <Text style={styles.diceNumber}>{dice1}</Text>
        </View>
        <View style={styles.dice}>
          <Text style={styles.diceNumber}>{dice2}</Text>
        </View>
      </View>

      <View style={styles.resultsContainer}>
        <Text style={styles.resultText}>The resulting dice roll is {diceSum}</Text>
      </View>

      <View style={styles.resultsContainer}>
        <Text style={styles.resultText}>{resultText}</Text>
      </View>




      <Modal visible={modalIsVisible}>
        <SafeAreaView style={styles.modalRoot}>
          <Text style={styles.inputLabel}>Guess the Roll Value:</Text>
          <TextInput style={styles.textInput}
          // Placeholder for when it's empty
          placeholder='Enter a guess between 2 and 12' 
          keyboardType='number-pad'
          // When text changed, update user guess
          onChangeText={setUserGuess}
          // Tie the entered value to the userGuess so when it
          // is reset to blank the input field will also reset
          value={userGuess}
          />
          <Text style={styles.inputLabel}>What's your wager:</Text>
          <TextInput style={styles.textInput}
          // Placeholder for when it's empty
          placeholder='Enter your wager here' 
          keyboardType='number-pad'
          // When text changed, update user guess
          onChangeText={setUserWager}
          // Tie the entered value to the userGuess so when it
          // is reset to blank the input field will also reset
          value={userWager}
          />

          <View style={styles.modalButtonContainer}>
            <View style={styles.modalButton}>
              <Button title="Roll Dice" onPress={onDiceRoll}/>
            </View>

            <View style={styles.modalButton}>
              <Button title="Cancel" color="black" onPress={endDiceRollHandler}/>
            </View>
          </View>
        </SafeAreaView>
      </Modal>

    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8849b3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    marginTop: 50
  },
  titleBackground: {
    backgroundColor: "white",
    padding: 10,
    paddingHorizontal: 20,
    borderWidth: 3,
    borderRadius: 7
  },
  title: {
    fontSize: 60,
    fontWeight: "bold"
  },
  rollButtonContainer: {
    flex: 2,
    justifyContent: "center"
  },
  pressedButton: {
    opacity: 0.8,
  },
  rollButton: {
    backgroundColor: "white",
    padding: 10,
    paddingHorizontal: 20,
    borderWidth: 3,
    borderRadius: 7
  },
  rollButtonText: {
    fontSize: 25
  },
  diceContainer: {
    flex: 3,
    flexDirection: "row",
    alignContent: "space-between",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
  },
  dice: {
    backgroundColor: "white",
    borderWidth: 3,
    margin: 20,
    width: 100,
    height: 100,
    justifyContent: "center",
    borderWidth: 3,
    borderRadius: 15
  },
  diceNumber: {
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold"
  },
  resultsContainer: {
    flex: 1
  },
  resultText: {
    fontSize: 24
  },
  modalRoot: {
    flex: 1,
    backgroundColor: '#8849b3',
    alignItems: 'center'
  },
  inputLabel: {
    fontSize: 25,
    color: "white",
    marginTop: 20
  },
  textInput: {
    backgroundColor: "#e0d4ff",
    padding: 10,
    borderWidth: 1,
    borderRadius: 6,
    marginBottom: 30
  },
  modalButtonContainer: {
    flexDirection: "row",
    marginTop: 16
  },
  modalButton: {
    width: "30%",
    marginHorizontal: 8
  }

});
