import { Pressable, StyleSheet, View, Text } from "react-native";
import colors from "../constants/colors";

function NavButton(props) {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressedItem}
      //android_ripple={{color: 'grey'}}
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
    width: 150,
    margin: 8,
    borderRadius: 6,
    backgroundColor: colors.accent500,
  },
  textContainer: {
    opacity: 0.8,
  },
  text: {
    padding: 8,
    fontSize: 25,
    textAlign: "center",
    fontFamily: "paperNoteBold",
    color: colors.primary300,
  },
});
