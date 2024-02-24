import { StyleSheet, View, Text } from "react-native";
import Title from "../components/Title";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import colors from "../constants/colors";
import NavButton from "../components/NavButton";
import { ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function OrderReviewScreen(props) {
    // Set safe area insets
    const insets = useSafeAreaInsets();

    return (
        <LinearGradient
            colors={[colors.primary700, colors.accent500]}
            style={styles.rootContainer}
        >

        
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
        <View>
            <View style={styles.titleContainer}>
                <Title>Order Summary</Title>
            </View>

            <ScrollView style={styles.scrollContainer}>
                <View style={styles.subTitleContainer}>
                    <Text style={styles.subTitle}>Your order has been placed with your order details below</Text>
                </View>

                <View style={styles.itemtypeContainer}>
                    <Text style={styles.itemtype}>Repair Time:</Text>
                    <Text style={styles.items}>{props.repairTime}</Text>

                    <Text style={styles.itemtype}>Services:</Text>
                    {props.services.map((item) => {
                        if (item.value) {
                            return (
                                <Text
                                key={item.id}
                                style={styles.items}>
                                    {item.name}
                                </Text>
                            )
                        }
                    })}

                    <Text style={styles.itemtype}>Memberships:</Text>
                    <Text style={styles.items}>{props.newsletter ? "Newsletter" : ""}</Text>
                    <Text style={styles.items}>{props.rentalMembership ? "Rental Membership" : ""}</Text>
                </View>

                <View style={styles.subTitleContainer}>
                    <Text style={styles.subTitle}>Subtotal: ${props.price.toFixed(2)}</Text>
                    <Text style={styles.subTitle}>Sales Tax: ${(props.price * 0.06).toFixed(2)}</Text>
                    <Text style={styles.subTitle}>Total: ${(props.price + props.price * 0.06).toFixed(2)} </Text>
                </View>

                <View style={styles.buttonContainer}>
                    <NavButton onNext={props.onNext}>Return</NavButton>
                </View>
            </ScrollView>
        </View>
    </View>
    </LinearGradient>
    )
}

export default OrderReviewScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
    },
    titleContainer: {
        marginBottom: 10,
        marginHorizontal: 10,
        paddingVertical: 3,
        paddingHorizontal: 10,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: colors.primary500,
    },
    scrollContainer: {
        height: '90%'
    },
    subTitleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    subTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.primary500
    },
    itemtypeContainer: {
        flex: 3,
    },
    itemtype: {
        fontSize: 20,
        color: colors.primary500
    },
    items: {
        textAlign: 'center',
        fontSize: 17,
        color: colors.primary300
    },
    buttonContainer: {
        alignItems: 'center'
    }
})