import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import colors from '../constants/colors';
import NavButton from '../components/NavButton';
import Title from "../components/Title"
import MenuItem from '../components/MenuItem';
import Items from '../constants/items'

function MenuScreen(props) {
    // Set Safe Area screen boundaries
    const insets = useSafeAreaInsets();

    // Insert menu item data
    let menuItems = Items

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
            <Title>Menu Items</Title>

            <FlatList style={styles.flatList}
            data={menuItems}

            keyExtractor={(item) => item.id}

            alwaysBounceVertical={false}
            showsVerticalScrollIndicator={false}
            renderItem={(itemData) => {
                return(
                    <MenuItem 
                        name={itemData.item.name}
                        image={itemData.item.image}
                        price={itemData.item.price}
                    />
                )
            }}
            />

            <View style={styles.buttonContainer}>
                <NavButton onPress={props.onNext}>Back</NavButton>
            </View>
            
        </View>
    )
}

export default MenuScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: "center",
        width: "100%"
    },
    buttonContainer: {
        marginVertical: 10
    },
    flatList: {
        flex: 1,
    }
  });