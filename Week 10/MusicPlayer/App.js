import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import GenresScreen from './screens/GenresScreen';
import SongsOverviewScreen from './screens/SongsOverviewScreen'
import colors from './constants/colors'

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    house: require('./assets/fonts/House Music.ttf'),
    jazz: require('./assets/fonts/Jazz Music-Italic.otf'),
    jazzBold: require('./assets/fonts/Jazz Music-Bold-Italic.otf'),
    jazzInverse: require('./assets/fonts/Jazz Music-Inverse.otf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError])

  // if (!fontsLoaded && !fontError) {
  //   return null;
  // } else {
  if (true) {
    return (
      
      <>
        <StatusBar style='light' />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName='SongGenres'

            screenOptions={{
              headerStyle: {backgroundColor: colors.primary500},
              headerTintColor: 'white',
              headerTitleStyle: {
                fontFamily: 'house',
                fontSize: 40,
                color: colors.accent800
              },
              contentStyle: { backgroundColor: colors.primary800 }
            }}
          >
            <Stack.Screen 
              name="SongGenres"
              component={GenresScreen}
              options={{
                title: "Music Genres"
              }}
            />
            <Stack.Screen 
              name="SongsOverview"
              component={SongsOverviewScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
