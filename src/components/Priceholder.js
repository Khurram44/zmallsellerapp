import React from 'react'
import { View, Text,FlatList,StyleSheet,ScrollView } from 'react-native' 
import { heightPercentageToDP } from 'react-native-responsive-screen'
import { marginLeft } from 'styled-system'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
const Priceholder = ({
    images,
      name,
      symbol, 
      price,
      pricechange,
      marketcap,
      rank,
      tfhigh,
      tflow,
      circsupply,
      totalsupply,
      max_supply,
      ath,
      atl}) => {
    return ( 
         
          <View>
             <View style = {styles.Pricemain}>
<Text>Hello World ! </Text>
             </View>
          </View>
           
        
    )
}

const styles = StyleSheet.create({
    Pricemain: {
        width: wp('35%'),
        height: hp('17%'),
        borderRadius: 20,
        elevation: 10,
        backgroundColor: 'white',
        marginLeft:wp("1.5%"),
        marginRight:wp("1.5%")
    } 
  });
  

export default Priceholder
