import React from 'react';
import {
  StyleSheet,
  View,Text,StatusBar,ScrollView
} from 'react-native';
import DynamicForm from '@coffeebeanslabs/react-native-form-builder';import {heightPercentageToDP, widthPercentageToDP} from 'react-native-responsive-screen';
import {Separator} from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Fonts} from '../contants'; 



const Productsform = (props) => {
    
  return ( 
      <View><DynamicForm formTemplate={props.data} onSubmit={onSubmit}/>
      <Text>qwerty</Text>
      </View>

    
  );
};

export default Productsform;
