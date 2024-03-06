import { View, Text, FlatList } from "react-native";
import StateGridTile from "../components/StateGridTile";
import { STATES } from '../data/dummy-data'

function HomeScreen(props) {
    
    function renderStateItem(itemData) {
        function pressHandler() {
            props.navigation.navigate("CampgroundsOverviewScreen", {
                stateId: itemData.item.id
            })
        }

        return (
            <StateGridTile
                name={itemData.item.name}
                color={itemData.item.color}
                onPress={pressHandler}
            />
        )
    }

    return (
        <View>
            <FlatList 
                data={STATES}
                keyExtractor={(item) => {
                    return item.id;
                }}
                renderItem={renderStateItem}
                numColumns={2}
            />
        </View>
    )
}

export default HomeScreen