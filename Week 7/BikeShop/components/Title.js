import { Text, StyleSheet } from "react-native";
import colors from '../constants/colors'

function Title(props) {
    return (
        <Text style={styles.title}>
            {props.children}
        </Text>
    )
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 45,
        color: colors.primary500,
        textShadowRadius: 25,
        fontFamily: "honk",
        textAlign: "center"
    }
});