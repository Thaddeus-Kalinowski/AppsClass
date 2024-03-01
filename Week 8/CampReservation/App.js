import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import colors from './constants/colors'
import { useCallback } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  
  // Font loading
  const [fontsLoaded, fontError] = useFonts({
    mtcorsva: require('./assets/fonts/MTCORSVA.ttf'),
    kristen: require('./assets/fonts/kristen.ttf'),
    verdana: require('./assets/fonts/verdana.ttf'),
  });

  // App will wait on splash screen until fonts load
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  })

  let screen = <HomeScreen />

  // Screen won't render until the fonts load (or throw an error)
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
    backgroundColor: colors.accent300,
  },
});
