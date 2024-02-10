import { Text, StyleSheet } from "react-native";
import colors from '../constants/colors'

function Header(props) {
    return <Text style={styles.header}>{props.children}</Text>
}

export default Header

const styles = StyleSheet.create({
    header: {
        fontSize: 40,
        fontFamily: "pokerGeneral",
        color: colors.primary500,
        textAlign: "center"
    }
})