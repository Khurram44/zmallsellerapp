import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet,ScrollView} from 'react-native';
import axios from 'axios';
import Priceholder from './Priceholder';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {Colors, Fonts, Images} from '../contants';
const Maincryptostats = () => {
  const [coinlist, setcoinlist] = useState([]);

  const Data = [
    {
      id: 1,
      name: 'Gzlt',
      price: '$0.00',
      holdings: '0',
      change: '0.13%',
    },
    {
      id: 2,
      name: 'Etherum',
      price: '$4343',
      holdings: '0',
      change: '0.23%',
    },
  ];
  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false',
      )
      .then(response => {
        setcoinlist(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <View style={styles.Yourtokensholder}>
            <View style = {{marginTop:500}}>
              <Text>Your Tokens</Text>
            </View>
</View>
  );
};
const styles = StyleSheet.create({
  Yourtokensholder: {
    padding: 20,
  },
  Yourtokensholdertext: {
    fontSize: 20,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    color:"black"
  },
   
  Yourtokenscard: {
    width: wp('35%'),
    height: hp('17%'),
    borderRadius: 20,
    elevation: 10,
    backgroundColor: 'white',
    marginLeft:wp("1.5%"),
    marginRight:wp("1.5%")
  },
  Yourtokenscardholder:{
    flexDirection:'row', 
    marginTop:hp("2.5%")
  }
});

export default Maincryptostats;
