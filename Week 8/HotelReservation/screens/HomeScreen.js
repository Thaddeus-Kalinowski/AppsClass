import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Modal, Button, Platform, Text, ImageBackground, Pressable, ScrollView, StyleSheet, View, useWindowDimensions } from "react-native";
import Title from "../components/Title";
import colors from "../constants/colors";
import { useState } from "react";
import DateTimePicker from '@react-native-community/datetimepicker'
import WheelPicker from "react-native-wheely";
import NavButton from '../components/NavButton'

function HomeScreen() {
  const insets = useSafeAreaInsets();

  const [checkIn, setCheckIn] = useState(new Date());
  const [showCheckIn, setShowCheckIn] = useState(false);

  function showCheckInPicker() {
    setShowCheckIn(true);
  }

  function hideCheckInPicker() {
    setShowCheckIn(false);
  }

  function onChangeCheckIn(event, selectedDate) {
    const currentDate = selectedDate;
    if (Platform.OS === "android") {
        hideCheckInPicker(true);
    }
    setCheckIn(currentDate);
  }

  // Check out date and show modal handlers
  const [checkOut, setCheckOut] = useState(new Date());
  const [showCheckOut, setShowCheckOut] = useState(false);

  function showCheckOutPicker() {
    setShowCheckOut(true);
  }

  function hideCheckOutPicker() {
    setShowCheckOut(false);
  }

  // Set date from date picker
  function onChangeCheckOut(event, selectedDate) {
    const currentDate = selectedDate;
    if (Platform.OS === "android") {
        hideCheckOutPicker(true);
    }
    setCheckOut(currentDate);
  }

  // Set guest count wheel picker
  const guestCounts = [1, 2, 3, 4, 5, 6, 7, 8];
  const [numGuests, setNumGuests] = useState(0);
  const [showNumGuests, setShowNumGuests] = useState(false);

  function showNumGuestsPicker() {
    setShowNumGuests(true);
  }

  function hideNumGuestsPicker() {
    setShowNumGuests(false);
  }

  function onChangeNumGuests(index) {
    setNumGuests(index);
  }

  // Set bed count wheel picker logic
  const bedCounts = [1, 2, 3, 4];
  const [numBeds, setNumBeds] = useState(0);
  const [showNumBeds, setShowNumBeds] = useState(false);

  function showNumBedsPicker() {
    setShowNumBeds(true);
  }

  function hideNumBedsPicker() {
    setShowNumBeds(false);
  }

  function onChangeNumBeds(index) {
    setNumBeds(index);
  }

  const [results, setResults] = useState("");

  function onReserveHandler() {
    let res = `Check In:\t\t${checkIn.toDateString()}\n`
    res = res + `Check Out:\t\t${checkOut.toDateString()}\n`
    res = res + `Number of Guests:\t\t${guestCounts[numGuests]}\n`
    res = res + `Number of Beds:\t\t${bedCounts[numBeds]}\n`

    setResults(res);
  }

  // Dynamic styling code
  const {width, height} = useWindowDimensions();

  const dateLabelFlex = {
    fontSize: width * 0.1
  }

  const dateTextFlex = {
    fontSize: width * 0.05
  }

  return (
    <ImageBackground
      source={require("../assets/images/italy.jpg")}
      resizeMode="cover"
      style={styles.rootContainer}
      imageStyle={styles.backgroundImage}
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
        <ScrollView style={styles.scrollContainer}>
          {/* Title of Resort */}
          <View style={styles.titleContainer}>
            <Title>Riviera Retreat</Title>
          </View>

          <View style={styles.rowContainer}>
            <View style={styles.dateContainer}>
                <Text style={[styles.dateLabel, dateLabelFlex]}>Check In:</Text>
                <Pressable onPress={showCheckInPicker}>
                    <Text style={[styles.dateText, dateTextFlex]}>{checkIn.toDateString()}</Text>
                </Pressable>
            </View>
            <View style={styles.dateContainer}>
                <Text style={[styles.dateLabel, dateLabelFlex]}>Check Out:</Text>
                <Pressable onPress={showCheckOutPicker}>
                    <Text style={[styles.dateText, dateTextFlex]}>{checkOut.toDateString()}</Text>
                </Pressable>
            </View>
          </View>

          <View>
            {/* Android Date picker */}
            {showCheckIn && Platform.OS === "android" && (
                <DateTimePicker
                    testID="dateTimePickerCheckInAndroid"
                    value={checkIn}
                    mode="date"
                    display="spinner"
                    onChange={onChangeCheckIn}
                />
            )}
            {/* IOS Date picker */}
            {showCheckIn && Platform.OS === "ios" && (
                <Modal
                    animationType="slide"
                    transparent={true}
                    supportedOrientations={['portrait','landscape']}
                >
                    <View style={styles.centerModalView}>
                        <View style={styles.modalView}>
                            <DateTimePicker 
                                testID="dateTimePickerCheckInIOS"
                                value={checkIn}
                                mode="date"
                                display="spinner"
                                onChange={onChangeCheckIn}
                            />
                            <Button title="Confirm" onPress={hideCheckInPicker} />
                        </View>
                    </View>
                </Modal>
            )}

            {/* Modals for CheckOut date picker */}
            {/* Android Date picker */}
            {showCheckOut && Platform.OS === "android" && (
                <DateTimePicker
                    testID="dateTimePickerCheckOutAndroid"
                    value={checkOut}
                    mode="date"
                    display="spinner"
                    onChange={onChangeCheckOut}
                />
            )}
            {/* IOS Date picker */}
            {showCheckOut && Platform.OS === "ios" && (
                <Modal
                    animationType="slide"
                    transparent={true}
                    supportedOrientations={['portrait','landscape']}
                >
                    <View style={styles.centerModalView}>
                        <View style={styles.modalView}>
                            <DateTimePicker 
                                testID="dateTimePickerCheckOutIOS"
                                value={checkOut}
                                mode="date"
                                display="spinner"
                                onChange={onChangeCheckOut}
                            />
                            <Button title="Confirm" onPress={hideCheckOutPicker} />
                        </View>
                    </View>
                </Modal>
            )}

            {/* Number of Guests area */}
            <View style={styles.rowContainer}>
                <Text style={[styles.dateLabel, dateLabelFlex]}>Number of Guests:</Text>
                <Pressable onPress={showNumGuestsPicker}>
                    <View style={styles.dateContainer}>
                        <Text style={[styles.dateText, dateTextFlex]}>{guestCounts[numGuests]}</Text>
                    </View>
                </Pressable>
                
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={showNumGuests}
                    supportedOrientations={['portrait', 'landscape']}
                >
                    <View style={styles.centerModalView}>
                        <View style={styles.modalView}>
                            <Text style={[styles.dateText, dateTextFlex]}>
                                Enter Number of Guests
                            </Text>
                            <WheelPicker 
                                selectedIndex={numGuests}
                                options={guestCounts}
                                onChange={onChangeNumGuests}
                                containerStyle={{width: 200}}
                            />
                            <Button title="Confirm" onPress={hideNumGuestsPicker} />
                        </View>
                    </View>
                </Modal>
            </View>

            {/* Number of Beds area */}
            <View style={styles.rowContainer}>
            <Text style={[styles.dateLabel, dateLabelFlex]}>Number of Beds:</Text>
                <Pressable onPress={showNumBedsPicker}>
                    <View style={styles.dateContainer}>
                        <Text style={[styles.dateText, dateTextFlex]}>{bedCounts[numBeds]}</Text>
                    </View>
                </Pressable>
                
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={showNumBeds}
                    supportedOrientations={['portrait', 'landscape']}
                >
                    <View style={styles.centerModalView}>
                        <View style={styles.modalView}>
                            <Text style={[styles.dateText, dateTextFlex]}>
                                Enter Number of Beds
                            </Text>
                            <WheelPicker 
                                selectedIndex={numBeds}
                                options={bedCounts}
                                onChange={onChangeNumBeds}
                                containerStyle={{width: 200}}
                            />
                            <Button title="Confirm" onPress={hideNumBedsPicker} />
                        </View>
                    </View>
                </Modal>
            </View>

            <View style={styles.buttonContainer}>
                <NavButton onPress={onReserveHandler}>Reserve Now</NavButton>
            </View>

            <View style={styles.resultsContainer}>
                <Text style={[styles.results, dateLabelFlex]}>{results}</Text>
            </View>

          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  backgroundImage: {
    opacity: 0.3,
  },
  titleContainer: {
    padding: 7,
    marginVertical: 20,
    marginHorizontal: 20,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: colors.primary500,
    backgroundColor: colors.primary300,
  },
  scrollContainer: {
    flex: 1,
    width: 3000,
    maxWidth: '100%',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 20,
    marginBottom: 20,
  },
  dateContainer: {
    backgroundColor: colors.primary300o5,
    padding: 10,
  },
  dateLabel: {
    fontSize: 80,
    color: colors.primary500,
    fontFamily: 'hotel',
    textShadowColor: 'black',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 2,
  },
  dateText: {
    color: colors.primary800,
    fontSize: 20,
    fontWeight: 'bold'
  },
  centerModalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: colors.primary300,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonContainer: {
    alignItems: 'center'
  },
  results: {
    textAlign: 'center',
    color: colors.primary500,
    fontFamily: 'hotel',
    textShadowColor: 'black',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 2,
  }
});
