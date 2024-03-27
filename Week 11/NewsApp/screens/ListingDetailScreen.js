import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useState, useLayoutEffect, useContext } from "react";
import { LISTINGS } from "../data/dummy_data";
import BookmarkButton from "../components/BookmarkButton";
import Colors from "../constants/colors";
import { BookmarksContext } from "../store/context/bookmarks-context";

function ListingDetailScreen(props) {
  const bookmarkedArticlesCtx = useContext(BookmarksContext);

  const listingId = props.route.params.listingId;
  const selectedListing = LISTINGS.find((listing) => listing.id === listingId);

  const articleIsBookmarked = bookmarkedArticlesCtx.ids.includes(listingId);

  function changeBookmarkStatusHandler() {
    if (articleIsBookmarked) {
      bookmarkedArticlesCtx.removeFavorite(listingId)
    } else {
      bookmarkedArticlesCtx.addFavorite(listingId);
    }
  }

  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: "",
      headerRight: () => {
        return (
          <BookmarkButton
            pressed={articleIsBookmarked}
            onPress={changeBookmarkStatusHandler}
          />
        );
      },
    });
  }, [props.navigation, changeBookmarkStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: selectedListing.imageUrl }}
        />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.headline}>
          {selectedListing.headline.toLocaleString()}
        </Text>

        <Text style={styles.address}>
          {selectedListing.desc}
        </Text>

        <Text style={styles.year}>
          Article Published: {selectedListing.yearPublished}
        </Text>
        <Text style={styles.agency}>
          By: {selectedListing.author}
        </Text>

        <Text style={styles.contents}>
            {selectedListing.contents}
        </Text>
      </View>
    </ScrollView>
  );
}
export default ListingDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  imageContainer: {
    marginVertical: 10,
    height: 300,
  },
  image: {
    height: "100%",
    resizeMode: "cover",
    borderRadius: 7,
  },
  infoContainer: {
    borderRadius: 7,
    backgroundColor: Colors.primary500o8,
    flex: 1,
    alignItems: "center",
  },
  headline: {
    color: Colors.primary300,
    fontSize: 35,
    fontFamily: "playfairBold",
    paddingBottom: 5,
    textAlign: 'center'
  },
  space: {
    color: Colors.primary300,
    fontSize: 25,
    fontFamily: "playfair",
    paddingBottom: 5,
  },
  address: {
    color: Colors.primary300,
    textAlign: "center",
    width: "100%",
    fontSize: 15,
    fontFamily: "playfair",
    paddingBottom: 5,
  },
  year: {
    color: Colors.primary300,
    fontSize: 25,
    fontFamily: "playfair",
  },
  agency: {
    color: Colors.primary300,
    fontSize: 25,
    fontFamily: "playfair",
    marginBottom: 30,
  },
  contents: {
    color: Colors.primary300,
    width: "90%",
    textAlign: "justify",
    fontSize: 15,
    fontFamily: "playfair",
  }
});
