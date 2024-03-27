import { View, StyleSheet, FlatList } from "react-native";
import ListingItem from "./ListingItem";

function List(props) {
  function renderListingItem(itemData) {
    const listingItemProps = {
      id: itemData.item.id,
      headline: itemData.item.headline,
      yearPublished: itemData.item.yearPublished,
      agency: itemData.item.agency,
      desc: itemData.item.desc,
      imageUrl: itemData.item.imageUrl,
      contents: itemData.item.contents,
      listIndex: itemData.index,
    };
    return <ListingItem {...listingItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={props.items}
        keyExtractor={(item) => item.id}
        renderItem={renderListingItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "black"
  },
  backgroundImage: {
    opacity: 0.1,
  },
});
