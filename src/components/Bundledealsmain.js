import React from 'react'
import { View, Text } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {Separator} from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {Colors, Fonts} from '../contants';
import {Display} from '../utils';
import ManageOrders from './ManageOrders';
import ProcessedOrders from './ProcessedOrders';
import AwaitingConfirmation from './AwaitingConfirmation';
import AwaitingPickuprequest from './AwaitingPickuprequest';
import CancelledBybuyer from './CancelledBybuyer';
import Cancelledbyseller from './Cancelledbyseller';
import Intransit from './Intransit';
import { transparentize } from 'native-base/lib/typescript/theme/tools';
import Allpromotions from './Allpromotions';
import Ongoingpromotions from './Ongoingpromotions';
import Upcomingpromotions from './Upcomingpromotions';
import Expiredpromotions from './Expiredpromotions';
import Allpromotionsb from './Allpromotionsb';
const Tab = createMaterialTopTabNavigator();

const Bundledealsmain = (name) => {
    return (
        <Tab.Navigator const tabBarOptions = {{
          activeTintColor: 'blue',  
          inactiveTintColor: 'black',
          indicatorStyle: { backgroundColor:"blue",width:40,left:30  },
          style: {
            elevation: 0,    
            shadowOffset: {
                width: 0, height: 0  
            },
        }
          }}
          >
      <Tab.Screen name= 'All' component={Allpromotionsb} />
      <Tab.Screen name= " On Going" component={Allpromotionsb} /> 
      <Tab.Screen name= "Up Coming" component={Allpromotionsb} />
      <Tab.Screen name= "Expired" component={Allpromotionsb} />  
    
    </Tab.Navigator>
    )
}

export default Bundledealsmain
