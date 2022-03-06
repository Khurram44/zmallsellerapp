import React from 'react';
import {NavigationContainer,View,Text} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';  
import Messagesmain from '../Messagesmain';
 
   



const Stack = createStackNavigator();
const Messagesstack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
       
        <>
          
        
          <Stack.Screen name="Messages" component={Messagesmain} />
          
           
        </>
      
    </Stack.Navigator>
    )
}

export default Messagesstack;
