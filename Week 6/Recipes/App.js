import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainScreen from './screens/MainScreen';
import RecipesScreen from './screens/RecipesScreen';
import AddRecipeScreen from './screens/AddRecipeScreen'
import { useFonts } from "expo-font";
import { useState } from 'react';
import colors from './constants/colors'

export default function App() {
  const [fontsLoaded] = useFonts({
    blackadder: require("./assets/fonts/blackadder.ttf"),
    doom: require("./assets/fonts/AmazDooMRight.ttf"),
  });

  const [currentScreen, setCurrentScreen] = useState("main");
  const [currentID, setCurrentID] = useState(3);
  const [currentRecipes, setCurrentRecipes] = useState([
    {
      id: 1,
      title: "Chocolate",
      text: "1. Get $20\n2. Walk to store\n3. Ask for chocolate\n4. Buy chocolate\n5. Enjoy",
    },
    {
      id: 2,
      title: "Boiled Eggs",
      text: "1. Boil eggs\n2. Wait for them to cool down\n3. Peel\n4. Yummy",
    },
  ]);

  function mainScreenHandler() {
    setCurrentScreen("main");
  }

  function recipesScreenHandler() {
    setCurrentScreen("recipes");
  }

  function addRecipeScreenHandler() {
    setCurrentScreen("add");
  }

  function addRecipeHandler(itemTitle, itemText) {
    setCurrentRecipes((currentRecipes) => {
      return [
        ...currentRecipes,
        { id: currentID, title: itemTitle, text: itemText },
      ];
    });
    setCurrentID(currentID + 1);

    recipesScreenHandler();
  }

  function deleteRecipeHandler(id) {
    setCurrentRecipes((currentRecipes) => {
      return currentRecipes.filter((item) => item.id !== id);
    })
  }

  let screen = <MainScreen onNext={recipesScreenHandler} />

  if (currentScreen === "add") {
    screen = <AddRecipeScreen onAdd={addRecipeHandler} onCancel={recipesScreenHandler} />
  }

  if (currentScreen === "recipes") {
    screen = <RecipesScreen 
                onAdd={addRecipeScreenHandler} 
                onHome={mainScreenHandler}
                onDelete={deleteRecipeHandler}
                currentRecipes={currentRecipes}
              />
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
    backgroundColor: colors.primary800,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
