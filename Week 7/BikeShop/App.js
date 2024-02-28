import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';
import { useState } from 'react';
import { useMemo } from 'react';
import colors from './constants/colors'
import OrderReviewScreen from './screens/OrderReviewScreen';
import { useFonts } from 'expo-font'
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    honk: require("./assets/fonts/Honk.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError])

  const [currentScreen, setCurrentScreen] = useState("");
  const [currentPrice, setCurrentPrice] = useState(0);

  const repairTimeRadioButtons = useMemo(
    () => [
      {
        id: "0",
        label: "Standard",
        value: "Standard",
        price: 0,
        borderColor: colors.primary500,
        color: colors.primary500,
      },
      {
        id: "1",
        label: "Expedited",
        value: "Expedited",
        price: 50,
        borderColor: colors.primary500,
        color: colors.primary500,
      },
      {
        id: "2",
        label: "Next Day",
        value: "Next Day",
        price: 100,
        borderColor: colors.primary500,
        color: colors.primary500,
      },
    ],
    []
  );

  const [repairTimeId, setRepairTimeId] = useState(0);
  const [services, setServices] = useState([
    { id: 0, name: "Basic Tune-Up", value: false, price: 50 },
    { id: 1, name: "Comprehensive Tune-Up", value: false, price: 75 },
    { id: 2, name: "Flat Tire Repair", value: false, price: 20 },
    { id: 3, name: "Brake Servicing", value: false, price: 50 },
    { id: 4, name: "Gear Servicing", value: false, price: 40 },
    { id: 5, name: "Chain Servicing", value: false, price: 15 },
    { id: 6, name: "Frame Repair", value: false, price: 35 },
    { id: 7, name: "Safety Check", value: false, price: 25 },
    { id: 8, name: "Accessory Install", value: false, price: 10 },
  ]);

  const [newsletter, setNewsletter] = useState(false);
  const [rentalMembership, setRentalMembership] = useState(false);

  function setServicesHandler(id) {
    setServices((prevServices) =>
      prevServices.map((item) =>
        item.id === id ? { ...item, value: !item.value} : item
      )
    );
  }

  function resetServicesHandler() {
    setServices((prevServices) =>
      prevServices.map(function(item) {
          return {...item, value: false}
      })
    );
  }

  function setNewsletterHandler() {
    setNewsletter((previous) => !previous)
  }

  function setRentalMembershipHandler() {
    setRentalMembership((previous) => !previous)
  }

  function orderReviewHandler() {
    let price = 0;
    for (let i=0; i < services.length; i++) {
      if (services[i].value) {
        price = price + services[i].price;
      }
    }

    if (rentalMembership) {
      // $100
      price = price + 100;
    }

    price = price + repairTimeRadioButtons[repairTimeId].price

    setCurrentPrice(price);
    setCurrentScreen('review');
  }

  function homeScreenHandler() {
    setRepairTimeId(0);
    resetServicesHandler();
    setNewsletter(false);
    setRentalMembership(false);
    
    setCurrentPrice(0);
    setCurrentScreen("home");
  }  

  let screen = <HomeScreen 
                onNext={orderReviewHandler}
                repairTimeId={repairTimeId}
                services={services}
                newsletter={newsletter}
                rentalMembership={rentalMembership}
                
                repairTimeRadioButtons={repairTimeRadioButtons}
                
                onSetRepairTimeId={setRepairTimeId}
                onSetServices={setServicesHandler}
                onSetNewsletter={setNewsletterHandler}
                onSetRentalMembership={setRentalMembershipHandler}
              />

  if (currentScreen == "review") {
    screen = <OrderReviewScreen 
              repairTime={repairTimeRadioButtons[repairTimeId].value}
              services={services}
              price={currentPrice}
              newsletter={newsletter}
              rentalMembership={rentalMembership}
              onNext={homeScreenHandler}
            />
  }

  if (!fontsLoaded && !fontError) {
    return null
  } else {
    return (
      <>
        <StatusBar style="light" />
        <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.accent500,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
