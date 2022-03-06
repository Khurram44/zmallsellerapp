import React from 'react'
import { View, Text,FlatList,StyleSheet,Image} from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { Data } from '../Data'
import {Fonts} from '../contants';

const HomeScreen = () => {
  return (
    <View style = {styles.Maincontainer}>
       {
         Data.map((item)=>{
           return(
             
             <View style = {styles.submain}>
               <View style = {styles.Card}> 
               <View >
                
               <Text style = {styles.Maintext}> {item.name} </Text>
               <View style = {{flexDirection:'row', flexWrap:'wrap',alignItems:'flex-start',padding
              :20}}>
                <View>
                <Image/>
              <Text style = {{width:widthPercentageToDP("25%")}}>{item.category1}</Text>
                </View>
               
               <View>
               <Image/>
              <Text style = {{width:widthPercentageToDP("25%")}}>{item.category2}</Text>
               </View>
             

              <Text style = {{width:widthPercentageToDP("25%")}}>{item.category3
              }</Text>

              <Text style = {{width:widthPercentageToDP("25%")}}>{item.category4}</Text>

              <Text style = {{width:widthPercentageToDP("25%")}}>{item.category5}</Text> 
              </View>
              </View>
              </View>
                    
                 </View>
           )
         })
       }
    </View>
  )
}

const styles = StyleSheet.create({ 
Maincontainer:{
  flex:1,
  marginTop:heightPercentageToDP('5.5%')

},
submain:{
  marginTop:heightPercentageToDP("2.5%"),
  justifyContent:'center',
  alignItems:'center'
},
Card:{
  backgroundColor:"white",
  padding:10,
  width:widthPercentageToDP("95%"),
  borderRadius:10
},
Maintext:{
  fontSize:16,
  fontFamily:Fonts.POPPINS_BOLD
},
subholder:{
  flexDirection:'row',
  justifyContent:'space-evenly',
  alignItems:'flex-start',
  flexWrap:'wrap'
},
rowholder:{
width:widthPercentageToDP("25%")
}
});
export default HomeScreen;
