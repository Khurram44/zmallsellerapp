import React from 'react';
import {View, Text,StyleSheet} from 'react-native'; 
import { Fonts } from '../contants';

import Iconsetting from 'react-native-vector-icons/AntDesign';
import Orderstooltip from './Orderstooltip';
import {heightPercentageToDP, widthPercentageToDP} from 'react-native-responsive-screen';
const Cancelledbyseller = () => {
  return (

    <View>
    <View style = {{height:heightPercentageToDP("7%"),backgroundColor:"white"}}>
       <Orderstooltip name = "Cancelled By Seller"/></View>
       
       </View>
  );
};

 

export default Cancelledbyseller;
