import { TextInput, Button, Modal, View, Image, SafeAreaView, StyleSheet } from "react-native";
import useState from "react";

function ItemInputModal(props) {
//   const [enteredItemText, setEnteredItemText] = useState("");

//   function itemInputHandler(enteredText) {
//     setEnteredItemText(enteredText);
//   }

//   function addItemHandler() {
//     props.onAddItem(enteredItemText);
//     setEnteredItemText("");
//   }

  return (
    <Modal
      style={styles.appContainer}
      visible={props.modalIsVisible}
      animationType="slide"
    >
      <SafeAreaView style={styles.inputContainer}>
        <View>
          <Image
            style={styles.image}
            source={require("../assets/ShoppingCart.png")}
          />

          <TextInput style={styles.textInput} placeholder="Enter Item Here" />

          <View style={styles.modalButtonContainer}>
            <Button
              style={styles.modalButton}
              title="Add Item"
            //   onPress={addItemHandler}
            />
            <Button
              style={styles.modalButton}
              title="Cancel"
            //   onPress={props.onCancel}
            />
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
}

export default ItemInputModal;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
  title: {
    fontSize: 48,
    color: "#000",
    fontWeight: "bold",
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  modalButtonContainer: {
    backgroundColor: "green",
  },
  modalButton: {
    
  }
});
