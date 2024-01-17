import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
    {/* Set status bar styling */}
    <StatusBar style="light"/>

    {/* Set safe area view screen container */}
    <SafeAreaView style={styles.appContainer}>
        {/* Shopping list title container */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Shopping List.</Text>
        </View>
        {/* Button container */}
        <View style={styles.buttonContainer}>
          <Text style={styles.text}>Add Item Button goes here</Text>
        </View>
        {/* Items to get title container */}
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitles}>Items To Get</Text>
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
    backgroundColor: '#1e085a',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40
  },
  titleContainer: {
    flex: 1,
    margin: 10,
    paddingHorizontal: 20,
    justifyContent: "center",
    backgroundColor: "white",
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20
  },
  title: {
    fontSize: 40,
    color: "#5e08cc"
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white"
  },
  subtitleContainer: {
    flex: 1,
    margin: 10,
    paddingHorizontal: 20,
    justifyContent: "center",
    backgroundColor: "white",
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20
  },
  subtitle: {
    fontSize: 30,
    color: "#5e08cc"
  },
  listContainer: {
    flex: 5,
    backgroundColor: "#123456",
    justifyContent: "center"
  }
});
