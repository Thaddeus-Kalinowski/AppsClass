import { Modal, View, Button, Image, StyleSheet, Text } from "react-native";

function ImageViewModal(props) {
  return (
    <View style={styles.container}>
      <Modal
        visible={props.isVisible}
        animationType="slide"
        transparent={false}
      >
        <View style={styles.modalContainer}>
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
          <Text style={styles.description}>{props.description}</Text>
          <View style={styles.buttonContainer}>
            <Button title="Return to Destinations" onPress={props.onClose} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default ImageViewModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8B4513",
    //backgroundColor: 'blue'
  },
  image: {
    width: "100%",
    height: "60%",
    resizeMode: "contain",
  },
  description: {
    flex: 1,
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: "impact"
    //backgroundColor: 'red',
  },
  buttonContainer: {
    flex: 1,
    //backgroundColor: '#00ff00'
  }
});
