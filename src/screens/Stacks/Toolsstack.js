import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';  
import ToolsStack from '../ToolsStack';
import Tools from '../Tools';
import ManageReviews from '../ManageReviews';
import Voucherscomp from '../../components/Voucherscomp';
 
   



const Stack = createStackNavigator();



const ToolsStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
       
        <>
          
        <Stack.Screen name="ManageReview" component={Voucherscomp} />
          <Stack.Screen name="Tools" component={Tools} />
          </>
      
    </Stack.Navigator>
    )
}

export default ToolsStack;
