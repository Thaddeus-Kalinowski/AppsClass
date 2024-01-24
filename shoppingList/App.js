import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Button, Modal, Image, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
  // State management time
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [shoppingItems, setShoppingItems] = useState("");
  const [enteredItemText, setEnteredItemText] = useState("");

  function startAddItemHandler() {
    setModalIsVisible(true);
  }

  function endAddItemHandler() {
    setModalIsVisible(false);
  }

  function itemInputHandler(enteredText) {
    setEnteredItemText(enteredText);
  }

  function addItemHandler() {
    console.log(enteredItemText);
    if (shoppingItems === "") {
      setShoppingItems(enteredItemText);
    } else {
      setShoppingItems(shoppingItems + "\n" + enteredItemText);
    }
  }

  return (
    <>
    {/* Set status bar styling */}
    <StatusBar style="auto"/>

    {/* Set safe area view screen container */}
    <SafeAreaView style={styles.appContainer}>
        {/* Shopping list title container */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Shopping List</Text>
        </View>
        {/* Button container */}
        <View style={styles.buttonContainer}>
          <Button style={styles.button} title="Add Item"
          onPress={startAddItemHandler}
          color="orange"/>
        </View>
        {/* Items to get title container */}
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitles}>Items</Text>
        </View>
          {/* Set list of items container */}
        <View style={styles.listContainer}>
          <Text style={styles.text}>{shoppingItems}</Text>
        </View>


        <Modal style={styles.appContainer} visible={modalIsVisible} animationType='slide'>
          <SafeAreaView style={styles.inputContainer}>
            <View>
              <Image
              style={styles.image}
               source={require('./assets/ShoppingCart.png')}/>
            
            
              <TextInput 
                style={styles.textInput}

                placeholder="Enter Item Here"
              />

              <View style={styles.modalButtonContainer}>
                <Button style={styles.modalButton} title="Add Item"/>
                <Button style={styles.modalButton} title="Cancel" onPress={endAddItemHandler}/>
              </View>
            </View>
          </SafeAreaView>
        </Modal>

    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20
  },
  titleContainer: {
    flex: 1,
    margin: 20,
    paddingHorizontal: 20,
    justifyContent: "center",
    backgroundColor: "white"
  },
  title: {
    fontSize: 48,
    color: "#000",
    fontWeight: "bold"
  },
  buttonContainer: {
    flex: 0.7,
    marginVertical: 30,
    paddingHorizontal: 60,
    justifyContent: "center"
  },
  button: {
    marginVertical: 30,
    width: 60,
    fontSize: 30,
    fontWeight: "bold",
    color: "white"
  },
  subtitleContainer: {
    flex: 1,
    margin: 10,
    paddingHorizontal: 130,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    justifyContent: "center",
    backgroundColor: "white",
  },
  subtitles: {
    fontSize: 24
  },
  listContainer: {
    flex: 5,
    paddingHorizontal: 80,
    backgroundColor: "white",
    justifyContent: "center"
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  },
  textInput: {

  },
  modalButtonContainer: {
    backgroundColor: "green"
  },
  modalButton: {

  }
});
