import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, StyleSheet, Image } from "react-native";
import Header from "../components/Header";
import NavButton from "../components/NavButton";
import Cards from "../constants/cards";
import { useEffect, useState } from "react";

function generateRandomBetween(min, max, exclude) {
  const cardKeys = Object.keys(Cards);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  const cardName = cardKeys[rndNum];

  if (exclude.includes(cardName)) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return cardName;
  }
}

function GameScreen(props) {
  const inset = useSafeAreaInsets();

  // State tracking of cards
  const [drawnCards, setDrawnCards] = useState([]);
  const [userHand, setUserHand] = useState([]);
  const [userScore, setUserScore] = useState(0);
  const [numUserHand, setNumUserHand] = useState(0);
  const [computerHand, setComputerHand] = useState([]);
  const [computerScore, setComputerScore] = useState(0);
  const [userFinished, setUserFinished] = useState(false);

  function drawUserCardHandler() {
    // Get random card name
    let userCard = generateRandomBetween(0, 52, drawnCards);

    // Add card to drawn cards
    setDrawnCards((prevDrawnCards) => {
      return [userCard, ...prevDrawnCards];
    });

    // Put card in user's hand
    setUserHand((prevUserCards) => {
      return [userCard, ...prevUserCards];
    });

    // Track number of cards in user's hand
    setNumUserHand(userHand.length);

    // Calculate new score and check for loss
    if (Cards[userCard].value + userScore > 21) {
      // Check if we can use a low-ace score
      if (userHand.includes("aceClubs")) {
        // Set to low ace
        setUserHand((prevUserCards) => {
          let newUserCards = prevUserCards;
          newUserCards[newUserCards.indexOf("aceClubs")] = "lowAceClubs";
          return newUserCards;
        });
        // After changing card, change score (be)
        setUserScore((prevUserScore) => {
          return prevUserScore - 10 + Cards[userCard].value;
        });
      } else if (userHand.includes("aceDiamonds")) {
        // Set to low ace
        setUserHand((prevUserCards) => {
          let newUserCards = prevUserCards;
          newUserCards[newUserCards.indexOf("aceDiamonds")] = "lowAceDiamonds";
          return newUserCards;
        });
        // After changing card, change score (be)
        setUserScore((prevUserScore) => {
          return prevUserScore - 10 + Cards[userCard].value;
        });
      } else if (userHand.includes("aceSpades")) {
        // Set to low ace
        setUserHand((prevUserCards) => {
          let newUserCards = prevUserCards;
          newUserCards[newUserCards.indexOf("aceSpades")] = "lowAceSpades";
          return newUserCards;
        });
        // After changing card, change score (be)
        setUserScore((prevUserScore) => {
          return prevUserScore - 10 + Cards[userCard].value;
        });
      } else if (userHand.includes("aceHearts")) {
        // Set to low ace
        setUserHand((prevUserCards) => {
          let newUserCards = prevUserCards;
          newUserCards[newUserCards.indexOf("aceHearts")] = "lowAceHearts";
          return newUserCards;
        });
        // After changing card, change score (be)
        setUserScore((prevUserScore) => {
          return prevUserScore - 10 + Cards[userCard].value;
        });
      } else {
        // If the player has no aces add score and they LOSE
        setUserScore((prevUserScore) => {
          return prevUserScore + Cards[userCard].value;
        });
      }
    } else {
      // If they're not gonna lose, add the score normally
      setUserScore((prevUserScore) => {
        return prevUserScore + Cards[userCard].value;
      });
    }
  }

  function drawComputerCardHandler() {
    // Get random card name
    let computerCard = generateRandomBetween(0, 52, drawnCards);

    // Add card to drawn cards
    setDrawnCards((prevDrawnCards) => {
      return [computerCard, ...prevDrawnCards];
    });

    // Put card in computer's hand
    setComputerHand((prevComputerCards) => {
      return [computerCard, ...prevComputerCards];
    });

    // Calculate new score and check for loss
    if (Cards[computerCard].value + computerScore > 21) {
      // Check if we can use a low-ace score
      if (computerHand.includes("aceClubs")) {
        // Set to low ace
        setComputerHand((prevComputerCards) => {
          let newComputerCards = prevComputerCards;
          newComputerCards[newComputerCards.indexOf("aceClubs")] =
            "lowAceClubs";
          return newComputerCards;
        });
        // After changing card, change score (be)
        setComputerScore((prevComputerScore) => {
          return prevComputerScore - 10 + Cards[computerCard].value;
        });
      } else if (computerHand.includes("aceDiamonds")) {
        // Set to low ace
        setComputerHand((prevComputerCards) => {
          let newComputerCards = prevComputerCards;
          newComputerCards[newComputerCards.indexOf("aceDiamonds")] =
            "lowAceDiamonds";
          return newComputerCards;
        });
        // After changing card, change score (be)
        setComputerScore((prevComputerScore) => {
          return prevComputerScore - 10 + Cards[computerCard].value;
        });
      } else if (computerHand.includes("aceSpades")) {
        // Set to low ace
        setComputerHand((prevComputerCards) => {
          let newComputerCards = prevComputerCards;
          newComputerCards[newComputerCards.indexOf("aceSpades")] =
            "lowAceSpades";
          return newComputerCards;
        });
        // After changing card, change score (be)
        setComputerScore((prevComputerScore) => {
          return prevComputerScore - 10 + Cards[computerCard].value;
        });
      } else if (computerHand.includes("aceHearts")) {
        // Set to low ace
        setComputerHand((prevComputerCards) => {
          let newComputerCards = prevComputerCards;
          newComputerCards[newComputerCards.indexOf("aceHearts")] =
            "lowAceHearts";
          return newComputerCards;
        });
        // After changing card, change score (be)
        setComputerScore((prevComputerScore) => {
          return prevComputerScore - 10 + Cards[computerCard].value;
        });
      } else {
        // If the player has no aces add score and they LOSE
        setComputerScore((prevComputerScore) => {
          return prevComputerScore + Cards[computerCard].value;
        });
      }
    } else {
      // If they're not gonna lose, add the score normally
      setComputerScore((prevComputerScore) => {
        return prevComputerScore + Cards[computerCard].value;
      });
    }
  }

  // Function that handles the user finishing the game
  function stayHandler() {
    setUserFinished(true);

    // Attempt to add more cards
    if (computerScore <= 16) {
      drawComputerCardHandler();
    }
  }

  // Hook that should run only when this screen is added to the UI
  useEffect(() => {
    setUserHand([]);
    setComputerHand([]);
    setDrawnCards([]);
    setNumUserHand(0);
    setUserScore(0);
    setComputerScore(0);

    // Draw initial two cards for user and computer
    drawComputerCardHandler();
    drawComputerCardHandler();
    drawUserCardHandler();
    drawUserCardHandler();
  }, []);

  // Hook that triggers when user score changes
  useEffect(() => {
    if (userScore > 21) {
      props.onSetUserScore(userScore);
      props.onSetComputerScore(computerScore);
      props.onNext();
    }
  }, [userScore]);

  useEffect(() => {
    if (userFinished === true && computerScore > 16) {
      props.onSetUserScore(userScore);
      props.onSetComputerScore(computerScore);
      props.onNext();
    }
  }, [userFinished, computerScore]);

  return (
    <View
      style={[
        styles.rootContainer,
        {
          paddingTop: inset.top,
          paddingBottom: inset.bottom,
          paddingLeft: inset.left,
          paddingRight: inset.right,
        },
      ]}
    >
      <View style={styles.titleContainer}>
        <Header>Computer's Hand</Header>
      </View>

      <View style={styles.computerImageContainer}>
        <Image
          style={styles.computerImage}
          source={require("../assets/images/cardback1.png")}
        />
        <Image
          style={styles.computerImage}
          source={
            computerHand.length === 0
              ? require("../assets/images/cardback1.png")
              : Cards[computerHand[1]].picture
          }
        />
      </View>

      <View style={styles.titleContainer}>
        <Header>Player's Hand</Header>
      </View>

      <View style={styles.playerImageContainer}>
        {userHand.map((index) => {
          return (
            <Image
              style={[styles.playerImage, { width: 100 - numUserHand * 10 }]}
              key={index}
              source={
                userHand.length === 0
                ? require("../assets/images/cardback1.png")
                : Cards[index].picture
              }
            />
          )
        })}
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <NavButton onPress={drawUserCardHandler}>Hit Me!</NavButton>
        </View>
        <View style={styles.buttonContainer}>
          <NavButton onPress={stayHandler}>Stay!</NavButton>
        </View>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  computerImageContainer: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  computerImage: {
    height: 150,
    width: 100,
    resizeMode: "contain",
  },
  playerImageContainer: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  playerImage: {
    height: 150,
    width: 100,
    resizeMode: "contain",
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 10,
    marginBottom: 25,
  },
});
