import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, StyleSheet, Text } from "react-native";
import Title from '../components/Title'
import Header from "../components/Header";
import NavButton from '../components/NavButton'
import colors from '../constants/colors'
import { LinearGradient } from "expo-linear-gradient";


function GameOverScreen(props) {
  const inset = useSafeAreaInsets();

  const playerScore = props.user;
  const computerScore = props.computer;

  let titleText = <Title>It's a Tie</Title>

  if ((playerScore <= 21 && playerScore > computerScore) ||
     (playerScore <= 21 && computerScore > 21)) {
    titleText = <Title>Player Wins!</Title>
  }

  if ((computerScore <= 21 && computerScore > playerScore) ||
     (computerScore <= 21 && playerScore > 21)) {
    titleText = <Title>Computer Wins!</Title>
  }

  return (
    <LinearGradient
      colors={[colors.accent200, colors.accent800, colors.accent200]}
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
          
          <View>
              {titleText}
          </View>

          <View style={styles.scoreContainer}>
              <Header>Computer Score:</Header>
              <Text style={styles.scoreText}>{computerScore}</Text>
          </View>

          <View style={styles.scoreContainer}>
              <Header>Player Score:</Header>
              <Text style={styles.scoreText}>{playerScore}</Text>
          </View>

          <View style={styles.buttonContainer}>
              <NavButton onPress={props.onNext}>Play Now</NavButton>
          </View>
      </View>
    </LinearGradient>
    
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scoreContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center"
  },
  scoreText: {
    fontSize: 50,
    color: colors.primary500,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
