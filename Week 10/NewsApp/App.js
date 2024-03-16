import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookmarksScreen from './screens/BookmarksScreen';
import WorldNewsListingsScreen from './screens/WorldNewsListingsScreen';
import USNewsListingsScreen from './screens/USNewsListingsScreen';
import ListingDetailScreen from './screens/ListingDetailScreen'
import TechNewsListingsScreen from './screens/TechNewsListingsScreen';
import colors from './constants/colors'
import { Entypo, MaterialIcons, MaterialCommunityIcons, FontAwesome5, Fontisto, Ionicons } from '@expo/vector-icons'
import { useCallback } from 'react';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName='Listings'
      screenOptions={{
        headerStyle: {backgroundColor: colors.primary500},
        headerTintColor: "white",
        headerTitleStyle: {
          fontFamily: "papyrus",
          fontSize: 40,
          color: colors.accent800
        },
        sceneContainerStyle: {backgroundColor: colors.primary300},
        drawerContentStyle: {backgroundColor: colors.primary500},
        drawerInactiveTintColor: colors.primary300,
        drawerActiveTintColor: colors.accent500,
        drawerActiveBackgroundColor: colors.primary800
      }}
    >
      <Drawer.Screen 
        name="Listings"
        component={TabsNavigator}
        options={{
          title: "All Articles",
          drawerLabel: "All Articles",
          drawerIcon: ({color, size}) => (
            <Entypo name="list" size={size} color={color} />
          )
        }}
      />
      <Drawer.Screen 
        name="Bookmarked Listings"
        component={BookmarksScreen}
        options={{
          title: "Bookmarks",
          drawerLabel: "Bookmarked News",
          drawerIcon: ({color, size}) => {
            <Entypo name="bookmarks" size={size} color={color} />
          }
        }}
      />
    </Drawer.Navigator>
  )
}

function TabsNavigator() {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveBackgroundColor: colors.primary800,
        tabBarActiveTintColor: colors.accent500,
        tabBarInactiveBackgroundColor: colors.primary500,
        tabBarInactiveTintColor: colors.primary300,
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "playfairBold"
        },
        tabBarStyle: {
          backgroundColor: colors.primary500
        }
      }}
    >
      <Tabs.Screen 
        name="USNewsListings"
        component={USNewsListingsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => {
            <FontAwesome5 name="globe-americas" size={size} color={color} />
          },
          tabBarLabel: "US News"
        }}
      />
      <Tabs.Screen 
        name="WorldNewsListings"
        component={WorldNewsListingsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => {
            <Fontisto name="world" size={size} color={color} />
          },
          tabBarLabel: "World News"
        }}
      />
      <Tabs.Screen 
        name="TechNewsListings"
        component={TechNewsListingsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => {
            <MaterialIcons name="computer" size={size} color={color} />
          },
          tabBarLabel: "Technology News"
        }}
      />
    </Tabs.Navigator>
  )
}

export default function App() {
  const [fontsLoaded, fontsError] = useFonts({
    playfair: require('./assets/fonts/Playfair.ttf'),
    playfairBold: require('./assets/fonts/PlayfairBold.ttf'),
    playfairItalic: require('./assets/fonts/PlayfairBoldItalic.ttf'),
    nolluqa: require('./assets/fonts/NolluqaRegular.otf'),
    papyrus: require('./assets/fonts/papyrus.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontsError) {
      await SplashScreen.hideAsync();
    }
  })

  if (!fontsLoaded && !fontsError) {
    return null
  } else
  {
    return (
      <>
        <StatusBar style="light" />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="DrawerScreen"
            screenOptions={{
              headerTintColor: colors.primary300,
              headerStyle: {backgroundColor: colors.primary500},
              contentStyle: {backgroundColor: 'black'},
            }}
          >
            <Stack.Screen
              name="DrawerScreen"
              component={DrawerNavigator}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen
              name="ListingDetail"
              component={ListingDetailScreen}
              options={{
                headerBackTitleVisible: false
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
