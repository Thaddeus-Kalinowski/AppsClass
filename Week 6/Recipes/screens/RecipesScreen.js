import { StyleSheet, Image, View, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import NavButton from "../components/NavButton";
import colors from "../constants/colors";
import Title from "../components/Title";
import RecipeItem from "../components/RecipeItem";
import { useState } from "react";
import RecipeView from "../modals/RecipeView";

// Props: currentRecipes, onAdd, onDelete, onHome
function RecipesScreen(props) {
  // Set safe area screen boundaries
  const insets = useSafeAreaInsets();

  const [modalIsVisible, setModalIsVibile] = useState(false);
  const [modalRecipeTitle, setModalRecipeTitle] = useState("");
  const [modalRecipeText, setModalRecipeText] = useState("");

  function recipeViewHandler(title, text) {
    setModalRecipeTitle(title);
    setModalRecipeText(text);
    setModalIsVibile(true);
  }

  function closeRecipeViewHandler() {
    setModalIsVibile(false);
  }

  return (
    <View
      style={[
        styles.rootContainer,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <View style={styles.titleContainer}>
        <Title>Your Recipe Book</Title>
      </View>

      <View style={styles.itemContainer}>
        <FlatList 
            data={props.currentRecipes}

            keyExtractor={(item, index) => {
                return item.id;
            }}
            alwaysBounceVertical={false}
            renderItem={(itemData) => {
                return (
                    <RecipeItem
                        id={itemData.item.id}
                        title={itemData.item.title}
                        onView={recipeViewHandler.bind(this, itemData.item.title, itemData.item.text)}
                        onDelete={props.onDelete.bind(this, itemData.item.id)}
                    />
                )
            }}
        />
      </View>

      <RecipeView 
        visible={modalIsVisible}
        title={modalRecipeTitle}
        text={modalRecipeText}
        onClose={closeRecipeViewHandler}
      />

      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <NavButton onNext={props.onAdd}>Write New Recipe</NavButton>
        </View>
        <View style={styles.button}>
          <NavButton onNext={props.onHome}>Back</NavButton>
        </View>
      </View>
    </View>
  );
}

export default RecipesScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        width: '90%'
    },
    titleContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20
    },
    itemContainer: {
        flex: 6
    },
    buttonContainer: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        marginHorizontal: 10
    }
});
