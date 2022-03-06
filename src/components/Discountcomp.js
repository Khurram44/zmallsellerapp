import React from 'react'
import { View, Text,Image,TouchableOpacity } from 'react-native'
import OrdersButton from './Voucherbutton'

import { heightPercentageToDP } from 'react-native-responsive-screen' 
import {Fonts} from '../contants';
import OrdersButtond from './OrdersButtond';
const Discountcomp = ({navigation}) => {
    return (
        <View style = {{flex:1,marginTop:heightPercentageToDP("25%")}} >
            
       <OrdersButtond/>
       </View>
    )
}

export default Discountcomp
