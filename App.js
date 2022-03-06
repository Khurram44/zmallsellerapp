import React from 'react';
import Navigators from './src/navigators';
import Store from './src/Store';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
export default () => (
   <NavigationContainer>
     <Navigators/>
   </NavigationContainer>
);
