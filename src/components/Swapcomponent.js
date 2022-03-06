import React from 'react'
import { View, Text,StatusBar,StyleSheet} from 'react-native'

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'; 
import {Separator} from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {Colors, Fonts} from '../contants';
import {Display} from '../utils';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Swapfunc from './Swapfunc';
import Info from './Info';
const Tab = createMaterialTopTabNavigator();

const Swapcomponent = () => {
    return ( 
        <View style = {styles.container}>

            
            <Tab.Navigator tabBarOptions = {{
  style: {
  shadowOpacity: 0,
  width:wp("90%"), 
  elevation: 0, 
  shadowOffset: {
      width: 0, height: 0, 
    
    },
  },
  indicatorStyle: { 
    backgroundColor: '#b37e00',
    width:wp("18%"),
    left:"15%"
  },
 activeTintColor: '#b37e00',
 inactiveTintColor: 'black',
}}
 
>
      <Tab.Screen name="Swap" component={Swapfunc} />
      <Tab.Screen name="Info" component={Info} />
    </Tab.Navigator></View>
      
    )
}

const styles = StyleSheet.create({
    container:{ 
        backgroundColor:"white",
        width:wp("90%"),
        height:hp("80%"),
        borderRadius:20,
        elevation:10,  
        padding:10
    },
   
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginBottom:50
    },
    headerTitle: {
      fontSize: 20,
      fontFamily: Fonts.POPPINS_MEDIUM,
      lineHeight: 20 * 1.4,
      width: Display.setWidth(80),
      textAlign: 'center', 
      color:Colors.LIGHTCOLOR
    },
  });
export default Swapcomponent;
