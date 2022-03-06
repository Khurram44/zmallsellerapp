import React from 'react'
import { View, Text,StyleSheet} from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  
import AntDesign from 'react-native-vector-icons/AntDesign';

import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Settinggs from 'react-native-vector-icons/Feather';
const Data = [{
    balance:"$220",
    Text:"Main Wallet"
}]
import Icon01 from 'react-native-vector-icons/Fontisto';
import {Colors, Fonts, Images} from '../contants';
const HomeUpperheader = () => {
    return (
        <View style={styles.container}>
        <View style = {styles.headerContainer}>
<View style = {styles.Upperrowholder}>
    <Icon2 name = "bell-ring" size={25} style = {{color:"white"}}/>
</View>
<View style = {styles.Balanceholder}>
    {Data.map((data)=>{
        return(
<Text style = {styles.Balanceinfotext}>
        {data.balance}
         
    </Text> 
        

)
    })}
    
<Text style = {styles.Mainwallet}> Main Wallet </Text>
<View style = {styles.rowholder}>
<View style = {styles.rowholderobject}>
    <Settinggs name='send' size= {25} style = {{color:"white"}}/>
    </View>

<View style = {styles.rowholderobject}><AntDesign name='arrowdown' size= {25} style = {{color:"white"}}/></View>

<View style = {styles.rowholderobject}>
<Settinggs name='shopping-cart' size= {25} style = {{color:"white"}}/>
</View>
    </View>
    
    </View>
        </View>
        
      </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height : hp("35%"),
        width : '100%',
        transform : [ { scaleX : 2 } ],
        borderBottomStartRadius : 200,
        borderBottomEndRadius : 200,
        overflow : 'hidden',
    },
  
    headerContainer: { 
        flex : 1,
        transform : [ { scaleX : 0.5 } ],

        backgroundColor : '#c4a654', 
    },
    Lowerpart: {
      flex: 1,
      backgroundColor: '#eeeeee',
    },
    rowholder: {
      display:'flex',
      flexDirection:'row',
      marginTop:hp("3.5%") 
    },
    rowholderobject: {
        width: 56,
        height: 56,
        borderRadius: 56/2,
        backgroundColor:"#cdb679",
        marginLeft:10,
        marginRight:10,
        justifyContent:'center',
        alignItems:'center'
    },
    Footerobjectsheader:{
      paddingHorizontal:wp("10%"),
      paddingVertical:hp("2.5%")
    },
    Footerobjectsheadertext:{
           fontSize:20,
           fontFamily:Fonts.POPPINS_SEMI_BOLD
    },
    Balanceinfo:{
      
  marginTop:hp("5%")
    },
     
    Balanceinfotext:{
       fontSize:35,
       fontFamily:Fonts.POPPINS_REGULAR,
       color:"white"
    },
    Mainwallet:{
      fontSize:15, 
      color:"white", 
      fontFamily:Fonts.POPPINS_REGULAR
    },
    Upperrowholder:{
        flexDirection:'row',
        justifyContent:'flex-end',
        paddingHorizontal:10,
        paddingVertical:10
    },
    Balanceholder:{
        justifyContent:'center',
        alignItems:'center'
    }
  });
export default HomeUpperheader;
