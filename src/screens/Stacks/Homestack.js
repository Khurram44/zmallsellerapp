import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';  
 
   
import { View, Text,StatusBar,StyleSheet,TextInput} from 'react-native'
import { HomeScreen } from '..';
import Home from '../Home';

  
const Stack = createStackNavigator();



const Homestack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
       
        <>
          
        
          <Stack.Screen name="Homestack" component={Home} />
          
           
        </>
      
    </Stack.Navigator>
    )
}


export default Homestack;
