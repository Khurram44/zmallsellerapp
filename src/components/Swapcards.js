import React, {useState} from 'react';
import {View, Text, StyleSheet, Image,ScrollView} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {
    Select,
    VStack,
    CheckIcon,
    Center,
    NativeBaseProvider,
  } from "native-base";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors, Fonts} from '../contants';
import GzlttoBnb from './GzlttoBnb';
import BnbtoGzlt from './BnbtoGzlt';
const Swapcards = () => {
  const [Status, setStatus] = useState([]);
  const Filtertags = [
    {id: 1, name: '25%'},
    {id: 2, name: '50%'},
    {id: 3, name: '75%'},
    {id: 3, name: '100%'},
  ];

  function SetStatusfunc(ss) {
    setStatus(ss);
  }
  let [service, setService] = React.useState("")
  return (
      <NativeBaseProvider>
          <ScrollView>
          <VStack alignItems="center" space={4}>
      <Select
        selectedValue={service}
        minWidth="200"
        accessibilityLabel="Choose A Swap"
        placeholder="Choose A Swap"
        _selectedItem={{
          bg: "#c89956",
          endIcon: <CheckIcon size="5" />,
        }}
        mt={5}
        onValueChange={(itemValue) => setService(itemValue)}
      >
        <Select.Item label="Convert Gzlt to Bnb" value="Gzlt" />
        <Select.Item label="Convert Bnb to Gzlt" value="Bnb" />
         
      </Select>
    </VStack>
    {service === "Gzlt" ? (<GzlttoBnb/>) : (<BnbtoGzlt/>) }
    </ScrollView>
     </NativeBaseProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Tokenstyle: {
    fontSize: 20,
    color: '#cea247',
    fontFamily: Fonts.POPPINS_REGULAR,
  },
  cardmain: {
    flexDirection: 'row',
    borderWidth: 2,
    padding: 20,
    width: widthPercentageToDP('75%'),
    borderRadius: 20,
    borderColor: '#e9d496',
  },
  buttonmain: {
    marginTop: heightPercentageToDP('0.5%'),
    padding: 5,
    backgroundColor: '#c89956',
    borderRadius: 10,
    width: widthPercentageToDP('80%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textstyle: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: 15,
    color: 'white',
  },
  cont: {
    backgroundColor: '#c89956',
    padding: 1.5,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 5,
    width: widthPercentageToDP("15%"),
  },
});
export default Swapcards;
