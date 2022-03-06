import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';  

import { View, Text,StatusBar,StyleSheet,TextInput} from 'react-native'
import Me from '../../components/Me';
import Myaccount from '../../components/Myaccount';
import Changepassword from '../../components/Changepassword';
import Mystore from '../../components/Mystore';
import Contactus from '../../components/Contactus';
import Termsandpolicy from '../../components/Termsandpolicy';
import Help from '../../components/Help';
import Zmallstore from '../../components/Zmallstore';
 
   



const Stack = createStackNavigator();



const Mestack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
       
        <>
          
        
          <Stack.Screen name="Me" component={Me} />
          
          <Stack.Screen name="My Account" component={Myaccount} />
          <Stack.Screen name="My Store" component={Mystore} />
          <Stack.Screen name="Change Password" component={Changepassword} />
          <Stack.Screen name="Contact us" component={Contactus} />
          <Stack.Screen name="Terms and policy" component={Termsandpolicy} />
          
          <Stack.Screen name="Help" component={Help} />
          <Stack.Screen name="Storecomp" component={Zmallstore} />
           
        </>
      
    </Stack.Navigator>
    )
}

export default Mestack;
