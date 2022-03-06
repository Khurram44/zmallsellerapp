import React from 'react';
import {View, Text, StyleSheet,Image,FlatList,ScrollView,TouchableOpacity} from 'react-native';
import {heightPercentageToDP, widthPercentageToDP} from 'react-native-responsive-screen';
import { Fonts } from '../contants';
import Finance from '../Data/Finance'

import { useNavigation } from '@react-navigation/native';
const Financecard = () => {
 

const navigation = useNavigation();
    return (
        <View style = {styles.Maincontainertoolsitem}>
        {Finance.map((item)=>{
          return(
            <View style = {styles.maincardholder}>
              <Text style = {styles.moremaintext}>{item.name}</Text>
         <View style = {styles.Rowholder}>
           <TouchableOpacity onPress={()=>navigation.navigate("BankAccount")} style ={styles.row}>

             <Image source = {item.image1} style = {styles.imagestyle}/>
             <Text style = {styles.Maintext}>{item.category1}</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>navigation.navigate("AccountStatement")} style ={styles.row}>
             <Image source = {item.image2} style = {styles.imagestyle}/>
             <Text style = {styles.Maintext}>{item.category2}</Text>
           </TouchableOpacity>
           <TouchableOpacity style ={styles.row } onPress={()=>navigation.navigate("Transaction")}>
             <Image source = {item.image3} style = {styles.imagestyle}/>
             <Text style = {styles.Maintext}>{item.category3}</Text>
           </TouchableOpacity>
         </View>
          
              </View>
          )
        })}
        
      </View>
    
    )
}




const styles = StyleSheet.create({
  Maincontainertoolsitem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  maincardholder: {
    padding: 20,
    backgroundColor: 'white',
    width: widthPercentageToDP('95%'),
    

    borderRadius: 10,
    marginBottom:15
  },
  row: {justifyContent:'center',alignItems:'center',
width:widthPercentageToDP("30%")},
  Rowholder: {
    flexDirection: 'row', 
    paddingTop:10,
    
  },
  
  Maintext:{
      fontSize:15,
      fontFamily:Fonts.POPPINS_REGULAR,
      padding:5,
      color:"#909090"
  },
  imagestyle:{
      width:40,height:40
  },
  moremaintext:{
fontSize:18,
fontFamily:Fonts.POPPINS_SEMI_BOLD,
padding:10,
marginBottom:5
  }
});
export default Financecard
