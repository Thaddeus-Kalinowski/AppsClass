import { View, Text, FlatList } from "react-native";
import CountryGridTile from "../components/CountryGridTile";
import { COUNTRIES } from '../data/dummy-data'

function HomeScreen(props) {
    
    function renderCountryItem(itemData) {
        function pressHandler() {
            props.navigation.navigate("DestinationOverviewScreen", {
                countryId: itemData.item.id
            })
        }

        return (
            <CountryGridTile
                name={itemData.item.name}
                imageUrl={itemData.item.imageUrl}
                onPress={pressHandler}
            />
        )
    }

    return (
        <View>
            <FlatList 
                data={COUNTRIES}
                keyExtractor={(item) => {
                    return item.id;
                }}
                renderItem={renderCountryItem}
                numColumns={2}
            />
        </View>
    )
}

export default HomeScreen