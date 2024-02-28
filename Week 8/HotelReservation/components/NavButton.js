import { Pressable, StyleSheet, View, Text, useWindowDimensions } from "react-native";
import colors from "../constants/colors";

// Props: onNext, children
function NavButton(props) {
  const { width, height } = useWindowDimensions();

  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressedItem}
      onPress={props.onPress}
    >
      <View style={styles.buttonContainer}>
        <View style={styles.textContainer}>
          {/* Using window dimensions to dynamically change font size from screen size */}
          <Text style={[styles.text, { fontSize: width * 0.07 }]}>
            {props.children}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

export default NavButton;

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 1000,
    maxWidth: "70%",
    margin: 8,
    borderRadius: 300,
    backgroundColor: colors.primary500,
  },
  pressedItem: {
    opacity: 0.5
  },
  textContainer: {
    opacity: 0.8,
  },
  text: {
    padding: 8,
    textAlign: "center",
    fontFamily: "hotel",
    color: colors.primary300,
  },
});
