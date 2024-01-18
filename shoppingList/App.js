import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
    {/* Set status bar styling */}
    <StatusBar style="auto"/>

    {/* Set safe area view screen container */}
    <SafeAreaView style={styles.appContainer}>
        {/* Shopping list title container */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Shopping List</Text>
        </View>
        {/* Button container */}
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Add Item</Text>
        </View>
        {/* Items to get title container */}
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitles}>Items</Text>
        </View>
          {/* Set list of items container */}
        <View style={styles.listContainer}>
          <Text style={styles.text}>List of Items Goes Here</Text>
        </View>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20
  },
  titleContainer: {
    flex: 1,
    margin: 20,
    paddingHorizontal: 20,
    justifyContent: "center",
    backgroundColor: "white"
  },
  title: {
    fontSize: 48,
    color: "#000",
    fontWeight: "bold"
  },
  buttonContainer: {
    flex: 0.7,
    marginVertical: 30,
    paddingHorizontal: 60,
    backgroundColor: "orange",
    justifyContent: "center"
  },
  buttonText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white"
  },
  subtitleContainer: {
    flex: 1,
    margin: 10,
    paddingHorizontal: 130,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    justifyContent: "center",
    backgroundColor: "white",
  },
  subtitles: {
    fontSize: 24
  },
  listContainer: {
    flex: 5,
    paddingHorizontal: 80,
    backgroundColor: "white",
    justifyContent: "center"
  }
});
