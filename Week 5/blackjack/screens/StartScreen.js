import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, StyleSheet, Image } from "react-native";
import Title from '../components/Title'
import NavButton from '../components/NavButton'
import colors from '../constants/colors'
import { LinearGradient } from "expo-linear-gradient";

function StartGameScreen(props) {
  const inset = useSafeAreaInsets();

  return (
    <LinearGradient
      colors={[colors.accent200, colors.accent800]}
      style = {styles.rootContainer}
    >
      <View
        style={[
          styles.rootContainer,
          {
            paddingTop: inset.top,
            paddingBottom: inset.bottom,
            paddingLeft: inset.left,
            paddingRight: inset.right,
          },
        ]}
      >
          <View style={styles.titleContainer}>
              <Title>BlackJack 21</Title>
          </View>

          <View style={styles.imageContainer}>
              <Image style={styles.image} 
              source={require("../assets/images/blackjackbg.png")} />
          </View>

          <View style={styles.buttonContainer}>
              <NavButton onPress={props.onNext}>Play Now</NavButton>
          </View>
      </View>
    </LinearGradient>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  imageContainer: {
    flex: 5,
    justifyContent: "center"
  },
  image: {
    width: "100%",
    resizeMode: "contain"
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
