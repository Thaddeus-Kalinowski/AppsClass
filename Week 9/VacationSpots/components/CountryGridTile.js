import { Pressable, View, Text, StyleSheet, ImageBackground } from "react-native";
import colors from '../constants/colors';
import { Platform } from "react-native";

function CountryGridTile(props) {
    return (
        <View style={styles.gridItem}>
            <Pressable 
             style={({ pressed }) => [
                styles.button,
                pressed ? styles.buttonPressed : null
             ]}
             android_ripple={{ color: colors.primary300 }}
             onPress={props.onPress}
            >
                <ImageBackground
                    style={styles.innerContainer}
                    source={{uri: props.imageUrl}}
                    imageStyle="contain"
                >
                    <Text style={styles.name}>{props.name}</Text>
                </ImageBackground>
            </Pressable>
        </View>
    )
}

export default CountryGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: "white",
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visbile" // Hides android ripple overflow on android only
    },
    button: {
        flex: 1
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        textAlign: 'center',
        fontSize: 30,
        fontFamily: 'mountain',
        color: 'white',
        textShadowColor: 'black',
        textShadowRadius: 10,
    }
})