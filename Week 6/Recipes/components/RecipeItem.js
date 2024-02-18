import { StyleSheet, View, Text, Button } from "react-native";
import colors from "../constants/colors";

function RecipeItem(props) {
    return (
        <View style={styles.item}>
            <View style={styles.itemTitleContainer}>
                <Text style={styles.itemTitle}> {props.title}</Text>
            </View>

            <View style={styles.itemButton}>
                <View style={styles.button}>
                    <Button
                        title="View"
                        onPress={props.onView}
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        title="Delete"
                        onPress={props.onDelete}
                    />
                </View>
            </View>
        </View>
    )
}

export default RecipeItem

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 8,
        borderRadius: 6,
        backgroundColor: colors.accent500,
    },
    itemTitleContainer: {
        justifyContent: "center"
    },
    itemTitle: {
        fontFamily: "doom",
        fontSize: 30,
        color: colors.primary300
    },
    itemButton: {
        flexDirection: 'row'
    },
    button: {
        marginVertical: 5,
        marginHorizontal: 3
    }
});