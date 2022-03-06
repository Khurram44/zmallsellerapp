import {createNavigatorFactory} from '@react-navigation/core';
import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import CategoryList from '../components/CategoryList';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {heightPercentageToDP, widthPercentageToDP} from 'react-native-responsive-screen';
import {Separator} from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Fonts} from '../contants';
import All from '../components/All';
import Ongoing from '../components/Ongoing';
import Upcoming from '../components/Upcoming';
import Expired from '../components/Expired';
import Profile from './Profile';
import Sellerlogo from './Sellerlogo';
import Subscription from './Subscription';
import Deliveryoption from './Deliveryoption';
import Customercare from './Customercare'; 
import Generalorder from './Generalfaq';
import Generalfaq from './Generalfaq';
import OrderFAQ from './OrderFAQ'
import ReturnFAQ from './ReturnFAQ'
import VoucherFAQ from './VoucherFAQ'
import CashbackFAQ from './CashbackFAQ'
import PaymentFAQ from './PaymentFAQ'
import ShippingFAQ from './ShippingFAQ'
import axios from 'axios'
import { useState,useEffect } from 'react';

const Tab = createMaterialTopTabNavigator();

const Faq = () => {
  const [faq , setFaq] = useState([])

  useEffect(()=>{
    const url ='https://zmallapi.herokuapp.com/api/v1/faqs'
    const api = async () =>{
      const result = await axios.get(url)
      console.log("result",result.data)
      setFaq(result.data)
    }
    api()
  },[])
  return (
    <View style={styles.MainHeader}>
       <Tab.Navigator
        screenOptions={{tabBarScrollEnabled: true,
          tabBarIndicatorStyle: {
            backgroundColor: '#4f73df',
          },
          tabBarActiveTintColor: '#4f73df',
          tabBarInactiveTintColor: '#8d8d8d',
        }}
        sceneContainerStyle={{backgroundColor: 'white'}}>
        <Tab.Screen name="Order" component={OrderFAQ} />
        <Tab.Screen name="Return" component={ReturnFAQ} />
        <Tab.Screen name="Refund" component={ReturnFAQ} />
        <Tab.Screen name="Voucher" component={VoucherFAQ} />

        <Tab.Screen name="Cashback" component={CashbackFAQ} />
        <Tab.Screen name="Payment" component={PaymentFAQ} />
        <Tab.Screen name="Shipping" component={ShippingFAQ} />
        <Tab.Screen name="Delivery" component={ShippingFAQ} />
       
      </Tab.Navigator>
      <View style={styles.Buttonholder}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  MainHeader: {
    flex: 1,
    backgroundColor: '#eff0f4',
  },
  headerContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: Fonts.POPPINS_BOLD,
    lineHeight: 20 * 1.4,
    marginLeft: widthPercentageToDP('40%'),
    textAlign: 'center',
  },
  Buttonholder: {
     
  },
});
export default Faq;
