import React from 'react'
import { View, Text,Image,TouchableOpacity } from 'react-native'
import OrdersButton from './Voucherbutton'

import { heightPercentageToDP } from 'react-native-responsive-screen' 
import {Fonts} from '../contants';
import OrdersButtonb from './OrdersButtonb';
const Bundledealscomp = ({navigation}) => {
    return (
        <View style = {{flex:1,marginTop:heightPercentageToDP("30%")}} >
            
       <OrdersButtonb/>
       </View>
    )
}

export default Bundledealscomp
