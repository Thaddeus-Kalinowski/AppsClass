import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import { BookmarksContext } from "../store/context/bookmarks-context";
import { LISTINGS } from "../data/dummy_data";
import List from "../components/List/List";
import colors from "../constants/colors";

function BookmarksScreen (){
    const bookmarkedListingsCtx = useContext(BookmarksContext);
    const bookmarkedListings = LISTINGS.filter((listingItem) => {
        return bookmarkedListingsCtx.ids.includes(listingItem.id)
    })

    if (bookmarkedListings === 0) {
        return <View style={styles.rootContainer}>
            <Text style={styles.text}>You have no saved listings yet!</Text>
        </View>
    } else return <List items={bookmarkedListings}/>
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