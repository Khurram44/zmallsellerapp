import React from 'react';
import {View, Text,StyleSheet,Image} from 'react-native'; 
import { Fonts } from '../contants';

import Iconsetting from 'react-native-vector-icons/AntDesign';
import Orderstooltip from './Orderstooltip';
import {heightPercentageToDP, widthPercentageToDP} from 'react-native-responsive-screen';
import { justifyContent } from 'styled-system';
const CancelledBybuyer = () => {
    return (
<View>
    <View style = {{height:heightPercentageToDP("7%"),backgroundColor:"white"}}>
       <Orderstooltip name = "Cancelled By Buyer"/></View>
       
       </View>
    )
}

 
export default CancelledBybuyer
