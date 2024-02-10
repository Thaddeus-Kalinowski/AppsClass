import { useSafeAreaInsets } from "react-native-safe-area-context";
import {Text, View, StyleSheet, Image, Linking} from 'react-native'
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import colors from '../constants/colors'

function HomeScreen(props) {
    // set Safe Area screen boundaries
    const insets = useSafeAreaInsets();

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
            <View>
                <Title>Thanos Family Restaurant</Title>
            </View>

            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/images/photo.png')} />
            </View>

            <View style={styles.infoContainer}>
                <Text
                    style={styles.infoText}
                    onPress={() => Linking.openURL("tel:+1-330-702-0300")}
                >
                    (330) 702-0300
                </Text>
                <Text
                    style={styles.infoText}
                    onPress={() => Linking.openURL("https://maps.app.goo.gl/kaR6bsbadkQUT5MJA")}
                >
                    6020 Tippecanoe Rd{"\n"}Canfield Ohio 44406
                </Text>
                <Text
                    style={styles.infoText}
                    onPress={() => Linking.openURL("https://www.thanosrestaurant.com/")}
                >
                    https://www.thanosrestaurant.com/
                </Text>
            </View>

            <View style={styles.buttonContainer}>
                <NavButton onPress={props.onNext}>Menu</NavButton>
            </View>
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: "center"
    },
    titleContainer: {
        flex: 1,
        justifyContent: "center"
    },
    imageContainer: {
        flex: 4
    },
    image: {
        resizeMode: "cover",
        height: "100%",
        width: 340
    },
    infoContainer: {
        flex: 3,
        justifyContent: "center",
    },  
    infoText: {
        fontSize: 20,
        textAlign: "center",
        marginVertical: 5,
        color: colors.primary800,
        fontFamily: "arial"
    },
    buttonContainer: {
        flex: 1
    }
})