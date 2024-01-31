import { Pressable, StyleSheet, View, Text } from "react-native";


function Item(props) {
  return (
    <View style={styles.item}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        style={({ pressed }) => pressed && styles.pressedItem}
        // Todo: Add on press
      >
        {/* <Text style={styles.itemText}>{props.text}</Text> */}
        <Text style={styles.itemText}>sample text</Text>
      </Pressable>
    </View>
  );
}

export default Item;

const styles = StyleSheet.create({
  item: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e08cc"
  },
  pressedItem: {
    opacity: 0.5
  },
  itemText: {
    coloer: "#fff",
    padding: 8
  }
});
