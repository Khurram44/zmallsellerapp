import React from 'react';
import {View, Text,StyleSheet} from 'react-native'; 
import { Fonts } from '../contants';
import {heightPercentageToDP, widthPercentageToDP} from 'react-native-responsive-screen';
import Iconsetting from 'react-native-vector-icons/AntDesign';
import Orderstooltip from './Orderstooltip';

const AwaitingPickuprequest = () => {
    return (
        <View>
        <View style = {{height:heightPercentageToDP("7%"),backgroundColor:"white"}}>
           <Orderstooltip name = "Awaiting Pickup Request"/></View>
           
        </View>
    )
}


export default AwaitingPickuprequest
