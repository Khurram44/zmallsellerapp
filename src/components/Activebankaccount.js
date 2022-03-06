import React from 'react'
import {View, Text, StyleSheet,Image,FlatList,ScrollView,TouchableOpacity} from 'react-native';
import {heightPercentageToDP, widthPercentageToDP} from 'react-native-responsive-screen';
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import { Kohana } from 'react-native-textinput-effects';
import {
    Container,
    Header,
    Content,
    Card,
    CardItem, 
    Body,
    NativeBaseProvider
  } from 'native-base';
 
const Activebankaccount = () => {
    const[Form,setForm] = React.useState([])
    return (
         <View>
             <Text>Hello world</Text>
         </View>
       
    )
}

const styles = StyleSheet.create({
    Maincontainer: {
     
        backgroundColor:'#eff0f4',
        flex:1
    },
    maincardholder: {
      padding: 20,
      backgroundColor: 'white',
      width: widthPercentageToDP('95%'),
  
      borderRadius: 10,
      marginBottom:15
    },
    maincenter:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:heightPercentageToDP("5%")
    }
  });

export default Activebankaccount
