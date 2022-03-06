import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {
  Select,
  VStack,
  CheckIcon,
  Center,
  NativeBaseProvider,
} from 'native-base';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
 import Contactus from './Contactus';
import Termsandpolicy from './Termsandpolicy';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors, Fonts} from '../contants';
import Help from './Help';
import SellerAccount from './SellerAccount';
import Businessinfo from './Businessinfo';
import Address from './Address';
import Returnaddress from './Returnaddress';
const Profile = () => {
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
  function Nestedifelse(service){
    if(service === "Seller Account"){
      return(
        <SellerAccount/>
      )
    }
    else if(service === "Business Info"){
      return(<Businessinfo/>)
    }
    else if(service === "Address"){
      return(<Address/>)
    }
    else{
      return(
        <Returnaddress/>
      )
    }
  }
  let [service, setService] = React.useState('');
  return (
    <NativeBaseProvider>
      <ScrollView style = {{height:heightPercentageToDP("20%")}}>
        <VStack alignItems="center" space={4}>
          <Select
            selectedValue={service}
            minWidth="375"
            accessibilityLabel="Select Information Type"
            placeholder="Select Information Type"
            _selectedItem={{
              bg: '#c89956',
              endIcon: <CheckIcon size="5" />,
            }}
            mt={5}
            onValueChange={itemValue => setService(itemValue)}>
            <Select.Item label="Seller Account" value="Seller Account" />
            <Select.Item label="Business Info" value="Business Info" />
            <Select.Item label="Address" value="Address" />
            <Select.Item label="Return Address" value="Return Address" />
          </Select>
        </VStack>
        {Nestedifelse(service) }
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
    width: widthPercentageToDP('15%'),
  },
});
export default Profile;
