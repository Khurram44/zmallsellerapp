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

const Tab = createMaterialTopTabNavigator();
const Myaccount = () => {
  return (
    <View style={styles.MainHeader}>
      
      <StatusBar barStyle="dark-content" backgroundColor="grey" translucent />
      <Separator height={StatusBar.currentHeight} />
      <View style={styles.headerContainer}>
        <Ionicons
          name="chevron-back-outline"
          size={25}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTitle}>My Account</Text>
      </View>

      <Tab.Navigator
        screenOptions={{tabBarScrollEnabled: true,
          tabBarIndicatorStyle: {
            backgroundColor: '#4f73df',
          },
          tabBarActiveTintColor: '#4f73df',
          tabBarInactiveTintColor: '#8d8d8d',
        }}
        sceneContainerStyle={{backgroundColor: 'white'}}>
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Seller Logo" component={Sellerlogo} />

        <Tab.Screen name="Subscription" component={Subscription} />
        <Tab.Screen
          name="Delivery Option"
          component={Deliveryoption}
          options={{tabBarLabel: 'Delivery Option'}}
        />
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
    marginLeft: widthPercentageToDP('35%'),
    textAlign: 'center',
  },
  Buttonholder: {
     
  },
});
export default Myaccount;
