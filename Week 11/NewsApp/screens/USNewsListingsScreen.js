import List from "../components/List/List";
import { LISTINGS } from "../data/dummy_data";

function USNewsListingsScreen() {
  const type = "US News";
  const displayedListings = LISTINGS.filter((listingItem) => {
    return listingItem.type === type;
  });

  return <List items={displayedListings} />;
}

export default USNewsListingsScreen;
