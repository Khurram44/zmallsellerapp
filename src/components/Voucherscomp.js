import React from 'react'
import { View, Text,Image,TouchableOpacity } from 'react-native'
import OrdersButton from './Voucherbutton'

import { heightPercentageToDP } from 'react-native-responsive-screen' 
import {Fonts} from '../contants';
const Voucherscomp = ({navigation}) => {
    return (
        <View style = {{flex:1,marginTop:heightPercentageToDP("25%")}} >
            
       <OrdersButton/>
       </View>
    )
}

export default Voucherscomp
