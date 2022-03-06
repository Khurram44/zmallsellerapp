import React from 'react'
import { View, Text } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
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
import Allpromotionsd from './Allpromotionsd';
import Ongoingpromotionsd from './Ongoingpromotionsd';
import Upcomingpromotionsd from './Upcomingpromotionsd';
import Expiredpromotionsd from './Expiredpromotionsd';
const Tab = createMaterialTopTabNavigator();

const DiscountPromotionsmain = (name) => {
    return (
        <Tab.Navigator const tabBarOptions = {{
          activeTintColor: 'orange',  
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
      <Tab.Screen name= 'All' component={Allpromotionsd} />
      <Tab.Screen name= " On Going" component={Ongoingpromotionsd} /> 
      <Tab.Screen name= "Up Coming" component={Upcomingpromotionsd} />
      <Tab.Screen name= "Expired" component={Expiredpromotionsd} />  
    
    </Tab.Navigator>
    )
}

export default DiscountPromotionsmain
