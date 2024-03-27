import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import { BookmarksContext } from "../store/context/bookmarks-context";
import { LISTINGS } from "../data/dummy_data";
import List from "../components/List/List";
import colors from "../constants/colors";

function BookmarksScreen (){
    const bookmarkedArticlesCtx = useContext(BookmarksContext);
    const bookmarkedArticles = LISTINGS.filter((listingItem) => {
        return bookmarkedArticlesCtx.ids.includes(listingItem.id)
    })

    if (bookmarkedArticles.length === 0) {
        return <View style={styles.rootContainer}>
            <Text style={styles.text}>You have no saved articles yet!</Text>
        </View>
    } else return <List items={bookmarkedArticles}/>
}

export default BookmarksScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black"
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        color: colors.primary300
    }
})