import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartGameScreen from './screens/StartScreen'
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import colors from './constants/colors'
import { useFonts } from 'expo-font';
import { useCallback, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  // Set up fonts
  const [fontsLoaded, fontError] = useFonts({
    'poker': require("./assets/fonts/Poker.ttf"),
    'pokerGeneral': require("./assets/fonts/PokerKings-Regular.ttf")
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError])

  const [currentScreen, setCurrentScreen] = useState("start");
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  function newGameHandler() {
    setCurrentScreen("game");
  }

  function gameOverHandler() {
    setCurrentScreen("gameover");
  }

  function restartHandler() {
    setCurrentScreen("start")
  }

  // Why would we just add the word handler
  // function setUserScoreHandler(score) {
  //   setUserScore(score);
  // }

  // function setComputerScoreHandler(score) {
  //   setComputerScore(score);
  // }

  let screen = <StartGameScreen onNext={newGameHandler} />

  if (currentScreen === "game") {
    screen = <GameScreen 
              onNext={gameOverHandler}
              onSetUserScore={setUserScore}
              onSetComputerScore={setComputerScore}
             />
  }

  if (currentScreen === "gameover") {
    screen = <GameOverScreen
              onNext={restartHandler} 
              user={userScore}
              computer={computerScore}
             />
  }

  if (!fontsLoaded && !fontError) {
    return null;
  } else {
    return (
      <>
        <StatusBar style="auto" />
        <SafeAreaProvider style={styles.container}>
          {screen}
        </SafeAreaProvider>
      </>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.accent500
  },
});
