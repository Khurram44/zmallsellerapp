import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'; 
import ManageReviews from './ManageReviews';
import Tools from './Tools';
import Newbankaccount from '../components/Newbankaccount';
import MarketingCard from '../components/MarketingCard';
import DiscountPromotions from '../components/DiscountPromotions';
import {
    View,
    Text,
    StyleSheet,
    Image,
    FlatList,
    ScrollView,
    TouchableOpacity,
  } from 'react-native';
import Orderstooltip from '../components/Orderstooltip';
import OrdersButton from '../components/Voucherbutton';
import OrdersMain from '../components/OrdersMain'; 
import DiscountPromotionsmain from '../components/DiscountPromotionsmain';
import Vouchermain from '../components/Vouchermain';
import Voucheramain from '../components/Voucheramain';
import Addvoucher from '../components/Addvoucher';
import Bundledeals from '../components/Bundledeals';
import Addbundledeal from '../components/Addbundledeal';
import Addondeal from '../components/Addondeal';
import Discountamain from '../components/Discountamain';
import Adddiscount from '../components/Adddiscount';
import Addonamain from '../components/Addonamain';
import Homelive from './Homelive';
import Live from './Live';
   



const Stack = createStackNavigator();



const Livestack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
         
         <Stack.Screen name="HomeLive" component={Homelive} />
       
        <Stack.Screen name="Live" component={Live} />
  
    </Stack.Navigator>
    )
}

export default Livestack
