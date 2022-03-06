import React,{useEffect,useState} from 'react'
import { View, Text,StyleSheet,Image} from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen'; 
import axios from 'axios';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Settinggs from 'react-native-vector-icons/Feather';

const Data = [{
    name:"Gzlt",
    Price:"$0.012",
    holdings:"2500",
    image:require("../assets/images/Gzltlogoorig.png"),
    Tfhchange:"+0.12%"
},
{
    name:"Etherum",
    Price:"$4300",
    holdings:"0.12",
    image:require("../assets/images/model.png"),
    Tfhchange:"+0.12%"
}]
import Icon01 from 'react-native-vector-icons/Fontisto';
import {Colors, Fonts, Images} from '../contants'; 
import { flex } from 'styled-system';
import { ScrollView } from 'react-native-gesture-handler';


const Coingekocard = ({images,
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
    atl,}) => {
         
    return (
         
        
           <View style = {styles.Yourcoinscard}>
                            <Image   source={{uri: images}}
            style={{width: 40, height: 40, marginTop: 5}} style = {styles.Imagestyle}/>
            <Text style = {styles.price}>Price: {price}</Text>
            <Text style = {styles.marketcap}>M.cap: {marketcap}</Text>
            {pricechange<0 ? (
                    <Text style = {styles.pricechangered}>24h:{pricechange}</Text>
                    
                ) :(
                    <Text style = {styles.pricechangegreen}>24h:{pricechange}</Text>
                )
                }
                            
                         </View>
         
     
    )
}
const styles = StyleSheet.create({
    container: {
        
        padding:20, 
        height:hp("55%")
    } ,
    YourTokens:{
      fontSize:20,
      fontFamily:Fonts.POPPINS_REGULAR ,
      paddingVertical:hp("1%"),

    },
    Yourcoinholder:{
        flexDirection:'row'
    },
    Yourcoinscard:{
        width:wp("45%"),
        height:hp("20%"),
        marginLeft:wp("2%"),
        marginRight:wp("2%"),
        backgroundColor:"white",
        borderRadius:10,
        alignItems:'flex-start',
        marginTop:hp("1%"),
        padding:10
        
    },
    Imagestyle:{
        width:40,height:40,marginLeft:20
    },
    holdings:{
        color:'grey',
        fontSize:12,
        fontFamily:Fonts.POPPINS_REGULAR,
        marginTop:10,
        marginLeft:20
    },
    Namestyle:{
fontSize:17,
fontFamily:Fonts.POPPINS_REGULAR,
color:"brown",

marginTop:1,
marginLeft:20
    },
    change:{
        fontSize:12,
fontFamily:Fonts.POPPINS_REGULAR,
color:"green",

marginTop:1,
marginLeft:20
    },
    pricechangered:{
    fontFamily:Fonts.POPPINS_REGULAR,
    marginTop:5,
    fontSize:15,
    color:"red"
    },
    pricechangegreen:{
        fontFamily:Fonts.POPPINS_REGULAR,
        marginTop:5,
        fontSize:15,
        color:"green"
        },
    marketcap:{
        fontFamily:Fonts.POPPINS_REGULAR,
        marginTop:2,
        fontSize:10
    },
    change:{

    }
  });
export default Coingekocard
