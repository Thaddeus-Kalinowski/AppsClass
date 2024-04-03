import { StyleSheet, View } from "react-native";
import Input from './Input'

function OrderForm(props) {
    return (
        <View>
            <Text>Order Details</Text>
            <Input />
            <View>
                <Input />
                <Input />
            </View>
        </View>
    )
}

export default OrderForm;

const styles = StyleSheet.create({

})