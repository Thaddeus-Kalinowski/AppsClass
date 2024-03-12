import { View, Text, ImageBackground, StyleSheet, FlatList } from "react-native"
import { GENRES } from '../data/dummy-data'
import GenreGridTile from "../components/GenreGridTile";

function GenresScreen(props) {

    function renderGenreItem(itemData) {
        function pressHandler() {
            props.navigation.navigate('SongsOverview', {
                genreId: itemData.item.id
            });
        }

        return (
            <GenresScreen 
                title={itemData.item.title}
                color={itemData.item.color}
                onPress={pressHandler}
            />
        )
    }

    return (
        <ImageBackground
            source={require('../assets/images/music_back.jpg')}
            resizeMode="cover"
            style={styles.container}
            imageStyle={styles.backgroundImage}
        >
            <View style={styles.container}>
                <FlatList 
                    data={GENRES}
                    keyExtractor={(item) => item.id}
                    renderItem={renderGenreItem}
                    numColumns={2}
                />
            </View>
        </ImageBackground>
    )
}

export default GenresScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        opacity: 0.1,
    }
})