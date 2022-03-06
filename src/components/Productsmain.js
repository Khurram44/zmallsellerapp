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
import Allproducts from './Allproducts';

const Tab = createMaterialTopTabNavigator();
const Productsmain = () => {
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
        <Text style={styles.headerTitle}>Products</Text>
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
        <Tab.Screen name="Live" component={Allproducts} />
        <Tab.Screen name="Rejected" component={Allproducts} />

        <Tab.Screen name="Deleted" component={Allproducts} />
        <Tab.Screen
          name="Pending Approval"
          component={Allproducts}
          options={{tabBarLabel: 'Pending approval'}}
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
export default Productsmain;
