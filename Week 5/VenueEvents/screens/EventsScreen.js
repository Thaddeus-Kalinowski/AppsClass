import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import colors from '../constants/colors';
import NavButton from '../components/NavButton';
import Title from "../components/Title"
import EventItem from '../components/EventItems';

function EventsScreen(props) {
    // set Safe Area screen boundaries
    const insets = useSafeAreaInsets();

    const [eventItems, setEventItems] = useState([
        {
            name: "American Floyd - THe Ultimate Pink Floyd Tribute Experience",
            image: require("../assets/images/americanfloyd.jpg"),
            date: "01/13/2024",
            id: 1,
        },
        {
            name: "Badfish - A Tribute To Sublime",
            image: require("../assets/images/badfish.jpg"),
            date: "01/14/2024",
            id: 2
        },
        {
            name: "Tell Me Lies - The Fleetwood Mac Experience",
            image: require("../assets/images/tellmelies.jpg"),
            date: "01/26/2024",
            id: 3
        },
        {
            name: "Blackberry Smoke: Be Right Here Tour",
            image: require("../assets/images/blackberry.jpg"),
            date: "02/17/2024",
            id: 4,
        },
        {
            name: "Electric Avenue - The 80's MTV Experience",
            image: require("../assets/images/electric.jpg"),
            date: "02/23/2024",
            id: 5,
        }
    ])

    return (
        <View style={[
            styles.rootContainer,
            {
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                paddingLeft: insets.left,
                paddingRight: insets.right,
            }
        ]}>
            <Title>Events</Title>

            <FlatList
            data={eventItems}

            keyExtractor={(item) => item.id}

            alwaysBounceVertical={false}
            showsVerticalScrollIndicator={false}
            renderItem={(itemData) => {
                return(
                    <EventItem 
                        name={itemData.item.name}
                        image={itemData.item.image}
                        date={itemData.item.date}
                    />
                )
            }}
            />

            <View>
                <NavButton onPress={props.onNext}>View Home</NavButton>
            </View>
        </View>
    )
}

export default EventsScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.accent500,
      alignItems: 'center',
      justifyContent: 'center',
    }
  });