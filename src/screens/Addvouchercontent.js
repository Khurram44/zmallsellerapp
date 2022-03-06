import React from 'react'
import { View, Text,StatusBar,StyleSheet,TextInput} from 'react-native'
import {heightPercentageToDP, widthPercentageToDP} from 'react-native-responsive-screen';
import { Hoshi } from 'react-native-textinput-effects';

import {Separator} from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Fonts} from '../contants';
const hoshiInput = (
  <Hoshi
    label={'Town'}
    // this is used as active border color
    borderColor={'#b76c94'}
    // active border height
    borderHeight={3}
    inputPadding={16}
    // this is used to set backgroundColor of label mask.
    // please pass the backgroundColor of your TextInput container.
    backgroundColor={'#F9F7F6'}
  />
);

const HomeScreen = () => {
  return (
    <View style = {styles.MainHeader}>
      <StatusBar barStyle="dark-content" backgroundColor="grey" translucent />
      <Separator height={StatusBar.currentHeight} />
      <View style={styles.headerContainer}>
        <Ionicons
          name="chevron-back-outline"
          size={25}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTitle}>Create New Voucher</Text>
      </View> 
 <View style = {styles.Cardholders}>
   <View style = {styles.Card1}> 
     <Text style = {styles.Basic}>Basic Information</Text>
     <Hoshi
    label={'Voucher Name '}
    // this is used as active border color
    borderColor={'#cfcfcf'}
    // active border height
    borderHeight={1}
    inputPadding={20}
    // this is used to set backgroundColor of label mask.
    // please pass the backgroundColor of your TextInput container.
    backgroundColor={'white'}
  />
   
         

   </View>
   <View style = {styles.Card2}>

   </View>
 </View>
    </View>
  )
}

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
    fontFamily: Fonts.POPPINS_REGULAR,
    lineHeight: 20 * 1.4,
    marginLeft: widthPercentageToDP('20%'),
    textAlign: 'center',
  },
  Cardholders: {
     flexDirection:'column',
     justifyContent:'center',
     alignItems:'center'

  },
  Card1:{
backgroundColor:"white",
width:widthPercentageToDP("95%"),
height:heightPercentageToDP("40%"),
marginBottom:20,
marginTop:20,
borderRadius:10,

  },
  Card2:{
    backgroundColor:"white",
    width:widthPercentageToDP("95%"),
    height:heightPercentageToDP("40%"),
    borderRadius:10

  }
  ,
  Basic:{
    borderBottomWidth:1,
    borderColor:"#cfcfcf",
    paddingBottom:20,
    paddingTop:20,
    color:"#161616",
    fontSize:18,
    fontFamily:Fonts.POPPINS_SEMI_BOLD,
    
paddingHorizontal:20

  },
  VoucherName:{ 
    borderBottomWidth:1,
    borderColor:"#cfcfcf",
    paddingBottom:20,
    paddingTop:20,
    color:"#161616",
  }
});
export default HomeScreen

