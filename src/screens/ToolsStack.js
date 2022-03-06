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
import Bankaccount from '../components/Bankaccount';
import Addbank from '../components/Addbank';
import Transaction from '../components/Transaction';
import Accounts from '../components/Helpaccounts';
import Accountstatement from '../components/Accountstatement';
import Addproducts from '../components/Addproducts';
import Men from '../components/Men';
import Beauty from '../components/Beauty';
import Kids from '../components/Kids';
import Lifestyle from '../components/Lifestyle';
import Electronics from '../components/Electronics';
import Women from '../components/Women';
import Sports from '../components/Sports';
import Productsmain from '../components/Productsmain';
   



const Stack = createStackNavigator();



const ToolsStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
       
        <>
        
        
        
        
        <Stack.Screen name="ToolsStack" component={Tools} />
       
        <Stack.Screen name="ManageReview" component={ManageReviews} />
 
    <Stack.Screen name="OrderMain" component={OrdersMain} />
    <Stack.Screen name="Discount" component={DiscountPromotions} />         
    <Stack.Screen name="Discountmain" component={DiscountPromotionsmain} />      
    <Stack.Screen name="Vouchers" component={Voucheramain} /> 
    <Stack.Screen name="Addvoucher" component={Addvoucher} /> 
    <Stack.Screen name="Bundledeals" component={Bundledeals} /> 
    <Stack.Screen name="Addbundledeal" component={Addbundledeal} /> 
    
    <Stack.Screen name="Addondeal" component={Addondeal} /> 
    <Stack.Screen name="Discountamain" component={Discountamain} /> 

    
    <Stack.Screen name="Adddiscount" component={Adddiscount} /> 

    
    <Stack.Screen name="Addamain" component={Addonamain} />
    

    <Stack.Screen name="BankAccount" component={Bankaccount} />
    <Stack.Screen name="AddBank" component={Addbank} />
    
    <Stack.Screen name="Transaction" component={Transaction} />
    <Stack.Screen name="AccountStatement" component={Accountstatement} />
    <Stack.Screen name="Add Products" component={Addproducts} />
    <Stack.Screen name="Men" component={Men} />
    <Stack.Screen name="Beauty" component={Beauty} />
    <Stack.Screen name="Kids" component={Kids} />
    <Stack.Screen name="Lifestyle" component={Lifestyle} />
    <Stack.Screen name="Electronics" component={Electronics} />
    <Stack.Screen name="Women" component={Women} />
    <Stack.Screen name="Sports" component={Sports} />
    <Stack.Screen name="Products" component={Productsmain} />

        </>
      
    </Stack.Navigator>
    )
}

export default ToolsStack
