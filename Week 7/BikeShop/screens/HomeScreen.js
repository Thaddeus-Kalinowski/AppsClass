import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StyleSheet, View, Text } from "react-native";
import Title from '../components/Title'
import NavButton from '../components/NavButton'
import colors from '../constants/colors'
import { ScrollView } from "react-native";
import RadioGroup from 'react-native-radio-buttons-group'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Switch } from "react-native";

function HomeScreen(props) {
    // Set safe area insets
    const insets = useSafeAreaInsets();

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
            <Title>Bikes Galore</Title>
          </View>
    
          <ScrollView style={styles.scrollContainer}>
            <View style={styles.radioContainer}>
              <Text style={styles.radioHeader}>Repair Time</Text>
              <RadioGroup
                radioButtons={props.repairTimeRadioButtons}
                onPress={props.onSetRepairTimeId}
                selectedId={props.repairTimeId}
                layout="row"
                containerStyle={styles.radioGroup}
                labelStyle={styles.radioGroupLabels}
              />
            </View>
    
            <View style={styles.rowContainer}>
              <View style={styles.checkBoxContainer}>
                <Text style={styles.checkBoxHeader}>Services</Text>
                <View style={styles.checkBoxSubContainer}>
                  {props.services.map((item) => {
                    return (
                      <BouncyCheckbox
                        key={item.id}
                        text={item.name}
                        onPress={props.onSetServices.bind(this, item.id)}
                        textStyle={{
                          textDecorationLine: "none",
                          color: colors.primary500,
                        }}
                        innerIconStyle={{
                          borderRadius: 0,
                          borderColor: colors.primary500,
                        }}
                        iconStyle={{
                          borderRadius: 0,
                        }}
                        fillColor={colors.primary500}
                        style={{ padding: 2 }}
                      />
                    );
                  })}
                </View>
              </View>
            </View>
    
            <View style={styles.rowContainer}>
                <View style={styles.addOnsContainer}>
                    <View style={styles.addOnsSubContainer}>
                        <Text style={styles.addOnsLabel}>Newsletter</Text>
                        <Switch
                            onValueChange={props.onSetNewsletter}
                            value={props.newsletter}
                            thumbColor={
                                props.newsletter ? colors.primary500 : colors.primary500
                            }
                            trackColor={{false: colors.primary300, true: colors.primary500}}
                        />
                    </View>
    
                    <View style={styles.addOnsSubContainer}>
                        <Text style={styles.addOnsLabel}>Rental Membership ($100)</Text>
                        <Switch
                            onValueChange={props.onSetRentalMembership}
                            value={props.rentalMembership}
                            thumbColor={
                                props.rentalMembership ? colors.primary500 : colors.primary500
                            }
                            trackColor={{false: colors.primary300, true: colors.primary500}}
                        />
                    </View>
                </View>
            </View>
    
            <View style={styles.buttonContainer}>
                <NavButton onNext={props.onNext}>Submit Order</NavButton>
            </View>
    
          </ScrollView>
        </View>
      );
}

export default HomeScreen;

const styles = StyleSheet.create({
    rootContainer: {
      flex: 1,
    },
    titleContainer: {
      marginBottom: 10,
      borderWidth: 2,
      borderRadius: 5,
      borderColor: colors.primary500,
      paddingHorizontal: 10,
      paddingVertical: 5,
    },
    scrollContainer: {
      flex: 1,
    },
    radioContainer: {
      justifyContent: "center",
      alignItems: "center",
    },
    radioHeader: {
      fontSize: 30,
      color: colors.primary500,
    },
    radioGroup: {
      paddingBottom: 20,
    },
    radioGroupLabels: {
      fontSize: 15,
      color: colors.primary500,
    },
    rowContainer: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      paddingBottom: 20,
    },
    checkBoxContainer: {},
    checkBoxHeader: {
      fontSize: 20,
      color: colors.primary500,
    },
    checkBoxSubContainer: {
      padding: 2,
    },
    cheeseContainer: {
      alignItems: 'center'
    },
    addOnsContainer: {
      justifyContent: 'space-between'
    },
    addOnsSubContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    addOnsLabel: {
      color: colors.primary500,
      fontSize: 20
    },
    buttonContainer: {
      alignItems: 'center'
    },
  });
  