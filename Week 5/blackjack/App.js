import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartGameScreen from './screens/StartScreen'
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import colors from './constants/colors'
import { useFonts } from 'expo-font';
import { useState } from 'react';

export default function App() {
  // Set up fonts
  const [fontsLoaded] = useFonts({
    'poker': require("./assets/fonts/Poker.ttf"),
    'pokerGeneral': require("./assets/fonts/PokerKings-Regular.ttf")
  })

  const [currentScreen, setCurrentScreen] = useState("start");

  function newGameHandler() {
    setCurrentScreen("game");
  }

  function gameOverHandler() {
    setCurrentScreen("gameover");
  }

  function restartHandler() {
    setCurrentScreen("start")
  }

  let screen = <StartGameScreen onNext={newGameHandler} />

  if (currentScreen === "game") {
    screen = <GameScreen onNext={gameOverHandler} />
  }

  if (currentScreen === "gameover") {
    screen = <GameOverScreen onNext={restartHandler} />
  }

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaProvider style={styles.container}>
        {screen}
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.accent500
  },
});
