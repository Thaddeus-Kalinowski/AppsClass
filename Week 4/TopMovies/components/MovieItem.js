import { StyleSheet, Text, View, Image } from 'react-native'

function MovieItem(props) {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.text}>{props.title}</Text>
            <View style={styles.imageContainer}><Image source={props.image} style={styles.image}/></View>
            <Text style={styles.text}>{props.rating} / 10</Text>
        </View>
    );
}

export default MovieItem;

const styles = StyleSheet.create({
    itemContainer: {
        marginBottom: 20,
    },
    text: {
        textAlign: "center",
        fontSize: 20,
        borderWidth: 4,
        borderRadius: 5,
        paddingVertical: 15,
    },
    imageContainer: {
    },
    image: {
        width: "100%",
        resizeMode: 'contain',
    }
});