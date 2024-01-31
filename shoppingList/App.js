import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  FlatList,
} from "react-native";
import useState from "react";
import Item from "./components/item";
import ItemInputModal from "./modals/ItemInputModal";

export default function App() {
  // State management
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [shoppingItems, setShoppingItems] = useState([]);
  const [currentID, setCurrentID] = useState(0);

  function startAddItemHandler() {
    setModalIsVisible(true);
  }

  function endAddItemHandler() {
    setModalIsVisible(false);
  }

  function addItemHandler() {
    setShoppingItems((currentShoppingItems) => [
      ...currentShoppingItems,
      { text: enteredItemText, id: currentID },
    ]);
    setCurrentID(currentID + 1);
    endAddItemHandler();
  }

  return (
    <>
      {/* Set status bar styling */}
      <StatusBar style="auto" />

      <SafeAreaView style={styles.appContainer}>
        {/* Shopping list title container */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Shopping List</Text>
        </View>

        {/* Button */}
        <View style={styles.buttonContainer}>
          <Pressable onPress={startAddItemHandler}>
            <Text>Add Item</Text>
          </Pressable>
        </View>

        {/* Items to get title container */}
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitles}>Items</Text>
        </View>

        {/* Set list of items container */}
        <View style={styles.listContainer}>
          <FlatList
            data={shoppingItems}
            keyExtractor={(item, index) => item.id}
            renderItem={(itemData) => {
              return (
                <Item
                  text={itemData.item.text}
                  id={itemData.item.id}
                  // todo: add onDeleteItem prop
                />
              );
            }}
          />
        </View>

        <ItemInputModal
          modalIsVisible={modalIsVisible}
          onAddItem={addItemHandler}
          onCancel={endAddItemHandler}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
  titleContainer: {
    flex: 1,
    margin: 20,
    paddingHorizontal: 20,
    justifyContent: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: 48,
    color: "#000",
    fontWeight: "bold",
  },
  buttonContainer: {
    flex: 0.7,
    marginVertical: 30,
    paddingHorizontal: 60,
    justifyContent: "center",
    backgroundColor: "orange",
  },
  button: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
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
    fontSize: 24,
  },
  listContainer: {
    flex: 5,
    paddingHorizontal: 80,
    backgroundColor: "white",
    justifyContent: "center",
  }
});
