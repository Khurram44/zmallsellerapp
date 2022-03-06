import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Fonts} from '../contants';
import MarketingCard from './MarketingCard';
import Basicfunctioncard from './Basicfunctioncard';
import Financecard from './Financecard';
const ToolsItem = () => {
  return (
    <View>
      
        <Basicfunctioncard />
        <MarketingCard />
        <Financecard />
     
    </View>
  );
};

export default ToolsItem;
