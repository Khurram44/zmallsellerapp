import React from 'react'
import { View, Text,StatusBar } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ManageOrders from './ManageOrders';
import ProcessedOrders from './ProcessedOrders';
import AwaitingConfirmation from './AwaitingConfirmation';
import AwaitingPickuprequest from './AwaitingPickuprequest';
import CancelledBybuyer from './CancelledBybuyer';
import Cancelledbyseller from './Cancelledbyseller';import {Separator} from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {Colors, Fonts} from '../contants';
import {Display} from '../utils';
import Intransit from './Intransit';
import { transparentize } from 'native-base/lib/typescript/theme/tools';

import { widthPercentageToDP } from 'react-native-responsive-screen';
const Tab = createMaterialTopTabNavigator();

const OrdersMain = (name,{navigation}) => {
    return (
      <View style = {{flex:1}}>
      <StatusBar
      barStyle="dark-content"
      backgroundColor={Colors.DEFAULT_WHITE}
      translucent
    />
    <Separator height={StatusBar.currentHeight} />
    <View style = {{flexDirection:'row', padding:7.5}}>
      <Ionicons
        name="chevron-back-outline"
        size={30}
        onPress={() => navigation.goBack()}
        style = {{marginLeft:10, }}
      />
      <Text style = {{marginLeft:widthPercentageToDP("30%"),fontSize:20}}>Orders</Text>
      

    </View>
        <Tab.Navigator const tabBarOptions = {{
          activeTintColor: 'orange', scrollEnabled: true,
          inactiveTintColor: 'black',
          indicatorStyle: { backgroundColor:"transparent"  },
          style: {
            elevation: 0,    
            shadowOffset: {
                width: 0, height: 0  
            },
        }
          }}
          >
      <Tab.Screen name= 'Awaiting Confirmation' component={AwaitingConfirmation} />
      <Tab.Screen name= " Pick-Up Request" component={AwaitingPickuprequest} /> 
      <Tab.Screen name= "Cancelled By Seller" component={Cancelledbyseller} />
      <Tab.Screen name= "Cancelled By Buyer" component={CancelledBybuyer} />  
      <Tab.Screen name= "In-Transit" component={Intransit} /> 
     
    </Tab.Navigator></View>
    )
}

export default OrdersMain
