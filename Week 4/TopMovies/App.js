import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';
import { useState } from 'react';
import MovieItem from './components/MovieItem.js'

export default function App() {
  const [movieItems, setMovieItems] = useState([
    {
      title: "Gekijōban Dōbutsu no Mori",
      image: require("./assets/images/animal crossing.jpg"),
      rating: "8.0",
    },
    {
      title: "Death Stranding",
      image: require("./assets/images/death stranding movie.jpg"),
      rating: "9.0",
    },
    {
      title: "Five Nights at Freddy's Movie",
      image: require("./assets/images/five nights at freddy's.jpg"),
      rating: "7.5",
    },
    {
      title: "Interstellar",
      image: require("./assets/images/interstellar.jpg"),
      rating: "7.4",
    },
    {
      title: "Lego Movie",
      image: require("./assets/images/legomovie.png"),
      rating: "7.6",
    },
    {
      title: "Nos Feratu (1922)",
      image: require("./assets/images/nos feratu.jpg"),
      rating: "9.0",
    },
    {
      title: "One Piece: The Movie",
      image: require("./assets/images/one piece.jpg"),
      rating: "7.0",
    },
    {
      title: "Spider Man (2002)",
      image: require("./assets/images/spider man 2002.jpg"),
      rating: "9.0",
    },
    {
      title: "The Spongebob Squarepants Movie",
      image: require("./assets/images/spongebob movie.jpg"),
      rating: "9.5",
    },
    {
      title: "The Godfather",
      image: require("./assets/images/the godfather.jpg"),
      rating: "8.0",
    },
  ]);

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>My Top 10 Movies</Text>
        </View>

        <View style={styles.scrollContainer}>
          <FlatList 
            data={movieItems}
            renderItem={({item}) => <MovieItem title={item.title} image={item.image} rating={item.rating} />}
            showsVerticalScrollIndicator={false}
          />
        </View>
      
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    marginTop: 40,
    borderWidth: 3,
    borderRadius: 5,
    padding: 20,
  },
  scrollContainer: {
    flex: 1,
    width: "100%",
  },
});
