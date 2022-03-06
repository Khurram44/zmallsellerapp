import React from 'react';
import {View, Text, StatusBar, StyleSheet, Image} from 'react-native';
import {
  Button,
  Modal,
  Stack,
  FormControl,
  Input,
  Center,
  NativeBaseProvider,
} from 'native-base';
import AwaitingConfirmation from '../components/AwaitingConfirmation';
import AwaitingPickuprequest from '../components/AwaitingPickuprequest';
import CancelledBybuyer from '../components/CancelledBybuyer';
import CancelledByseller from '../components/Cancelledbyseller';

import {Display} from '../utils';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';  
 
import {Separator} from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Fonts} from '../contants';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import Managereviewsbottom from '../components/Managereviewsbottom';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useState} from 'react';
import Intransit from '../components/Intransit';
const Tab = createMaterialTopTabNavigator();

const HomeScreen = () => {
  return (
    <NativeBaseProvider>
      <View style={{flex: 1, padding: 10, backgroundColor: 'white'}}>
        <StatusBar barStyle="dark-content" backgroundColor="grey" translucent />
        <Separator height={StatusBar.currentHeight} />
        <View style={styles.headerContainer}>
          <Ionicons
            name="chevron-back-outline"
            size={25}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.headerTitle}>Orders</Text>
        </View>

        <Tab.Navigator
          screenOptions={{
            tabBarScrollEnabled: true,
            tabBarIndicatorStyle: {
              backgroundColor: 'transparent',
            },
            tabBarActiveTintColor: 'orange',
            tabBarInactiveTintColor: 'grey',
          }}
          sceneContainerStyle={{backgroundColor: 'white'}}>
          <Tab.Screen
            name="Awaiting Confirmation "
            component={AwaitingConfirmation}
          />
          <Tab.Screen
            name="Awaiting Pickup Request"
            component={AwaitingPickuprequest}
          />
          <Tab.Screen name="Intransit" component={Intransit} />
          <Tab.Screen
            name="Cancelled By Seller "
            component={CancelledByseller}
          />
          <Tab.Screen
            name="Cancelled By Buyer"
            component={CancelledBybuyer}
            options={{tabBarLabel: 'cancelled BY buyer'}}
          />
        </Tab.Navigator>
      </View>
    </NativeBaseProvider>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 1,
    justifyContent: 'space-evenly',
  },

  headerTitle: {
    fontSize: 15,
    fontFamily: Fonts.POPPINS_BOLD,
    lineHeight: 20 * 1.4,

    width: widthPercentageToDP('80%'),
    textAlign: 'center',
  },
  bottom: {
    marginBottom: 0,
    marginTop: 'auto',
  },
});

export default HomeScreen;
