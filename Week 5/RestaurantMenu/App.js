import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import colors from './constants/colors'
import { useFonts } from 'expo-font';
import { useState } from 'react';

export default function App() {
  // Use arial as our main font
  const [fontsLoaded] = useFonts({
    'arial': require("./assets/fonts/arial.ttf"),
  })

  const [currentScreen, setCurrentScreen] = useState("home");

  function toMenuHandler() {
    setCurrentScreen("menu");
  }

  function toHomeHandler() {
    setCurrentScreen("home");
  }

  let screen = <HomeScreen onNext={toMenuHandler} />

  if (currentScreen === "menu") {
    screen = <MenuScreen onNext={toHomeHandler} />
  }

  if (currentScreen === "home") {
    screen = <HomeScreen onNext={toMenuHandler} />
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
    backgroundColor: colors.accent300
  },
});
