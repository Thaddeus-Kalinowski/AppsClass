import { Pressable, StyleSheet, View, Text } from 'react-native';
import colors from '../constants/colors'

function NavButton(props) {
    return (
        <Pressable
    android_ripple={{color: colors.accent500}}
    onPress={props.onPress}
    >
        <View style={styles.buttonContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{props.children}</Text>
            </View>
        </View>
    </Pressable>
    )
}

export default NavButton

const styles = StyleSheet.create({
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 3,
        width: 300,
        borderColor: colors.primary800,
    },
    textContainer: {

    },
    text: {
        padding: 8,
        fontSize: 25,
        textAlign: 'center',
        color: colors.primary800,
        fontFamily: "arial"
    },
});