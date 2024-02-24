import { Pressable, StyleSheet, View, Text } from "react-native";
import colors from "../constants/colors";

// Props: onNext, children
function NavButton(props) {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressedItem}
      onPress={props.onNext}
    >
      <View style={styles.buttonContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{props.children}</Text>
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
    height: 75,
    width: '99%',
    margin: 8,
    borderRadius: 6,
    backgroundColor: colors.primary500,
  },
  textContainer: {
    opacity: 0.8,
  },
  text: {
    padding: 8,
    fontSize: 40,
    textAlign: "center",
    fontFamily: "honk",
    color: colors.primary800,
  },
});
