import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, Linking } from 'react-native';

export default function App() {
  return (
    <>
    <StatusBar style="auto" />
    <SafeAreaView style={styles.container}>
      {/* My picture container */}
      <View style={styles.picContainer}>
        <Image style={styles.picture} source={require("./docs/me.png")}></Image>
      </View>
      {/* Text container */}
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Thaddeus Kalinowski
        </Text>
        <Text style={[styles.link, styles.text]}
          onPress={() => Linking.openURL("mailto:tkalinow@hgtc.edu")}>
          tkalinow@hgtc.edu
        </Text>
        <Text style={[styles.link, styles.text]}
        onPress={() => Linking.openURL("tel:+1-843-000-000")}>
          +1-843-000-000
        </Text>
        <Text style={[styles.link, styles.text]}
          onPress={() => Linking.openURL("https://github.com/Thaddeus-Kalinowski")}>
          My Github
        </Text>
      </View>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'top'
  },
  picContainer: {
    flex: 0.4,
    borderColor: "black",
    justifyContent: "center",
    alignContent: "center",
    width: "100%",
    borderWidth: 5,
    marginTop: 30
  },
  picture: {
    height: "100%",
    width: "100%"
  },
  textContainer: {
    flex: 0.5,
    justifyContent: "center",
    
  },
  text: {
    fontSize: 24,
    textAlign: "center"
  },
  link: {
    textDecorationLine: "underline"
  }
});
