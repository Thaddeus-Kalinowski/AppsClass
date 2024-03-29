import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./screens/HomeScreen"
import colors from "./constants/colors"
import AddNoteScreen from "./screens/AddNoteScreen";
import NotesScreen from "./screens/NotesScreen";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    noteFont: require("./assets/fonts/Note.ttf"),
    paperNote: require("./assets/fonts/Papernotes.ttf"),
    paperNoteSketch: require("./assets/fonts/Papernotes Sketch.ttf"),
    paperNoteBold: require("./assets/fonts/Papernotes Bold.ttf"),
  });

  const [currentScreen, setCurrentScreen] = useState("home");
  const [currentID, setCurrentID] = useState(3);
  const [currentNotes, setCurrentNotes] = useState([
    {
      id: 1,
      title: "To Do List",
      text: "1. Do Homework\n2. Clean Car\n3. Pay Bills\n4. Make Dinner",
    },
    {
      id: 2,
      title: "Swag List",
      text: "Swag swag swag swag swag swag swag swag.",
    },
  ]);

  function homeScreenHandler() {
    setCurrentScreen("home");
  }

  function notesScreenHandler() {
    setCurrentScreen("notes");
  }

  function addNoteScreenHandler() {
    setCurrentScreen("add");
  }

  function addNoteHandler(noteTitle, noteText) {
    setCurrentNotes((currentNotes) => {
      return [
        ...currentNotes,
        { id: currentID, title: noteTitle, text: noteText },
      ];
    });
    setCurrentID(currentID + 1);

    notesScreenHandler();
  }

  function deleteNoteHandler(id) {
    setCurrentNotes((currentNotes) => {
      return currentNotes.filter((item) => item.id !== id);
    })
  }

  let screen = <HomeScreen onNext={notesScreenHandler} />

  if (currentScreen === "add") {
    screen = <AddNoteScreen onAdd={addNoteHandler} onCancel={homeScreenHandler} />
  }

  if (currentScreen === "notes") {
    screen = <NotesScreen 
                onAdd={addNoteScreenHandler} 
                onHome={homeScreenHandler}
                onDelete={deleteNoteHandler}
                currentNotes={currentNotes}
              />
  }

  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </>
  );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary800,
    alignItems: "center",
    justifyContent: "center",
  },
});
