import React from 'react';
import {View, Text, StyleSheet,Image,FlatList,ScrollView,TouchableOpacity} from 'react-native';
import {heightPercentageToDP, widthPercentageToDP} from 'react-native-responsive-screen';
import { Fonts } from '../contants'; 
import Marketing from '../Data/Marketing';

import { useNavigation } from '@react-navigation/native';
const MarketingCard = () => {
  
const navigation = useNavigation();
    return (
        <View style = {styles.Maincontainertoolsitem}>
        {Marketing.map((item)=>{
          return(
            <View style = {styles.maincardholder}>
                <Text style = {styles.moremaintext}>{item.name}</Text>
         <View style = {styles.Rowholder}>
           <TouchableOpacity style ={styles.row}>

             <Image source = {item.image1} style = {styles.imagestyle}/>
             <Text style = {styles.Maintext}>{item.category1}</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>navigation.navigate("Vouchers")} style ={styles.row}>
             <Image source = {item.image2} style = {styles.imagestyle}/>
             <Text style = {styles.Maintext}>{item.category2}</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>navigation.navigate("Discountamain")} style ={styles.row}>
             <Image source = {item.image3} style = {styles.imagestyle}/>
             <Text style = {styles.Maintext}>{item.category3}</Text>
           </TouchableOpacity>
         </View>
         <View style = {styles.Rowholder}>
           <TouchableOpacity onPress={()=>navigation.navigate("Bundledeals")} style ={styles.row}>

             <Image source = {item.image4} style = {styles.imagestyle}/>
             <Text style = {styles.Maintext}>{item.category4}</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>navigation.navigate('Addamain')} style ={styles.row}>
             <Image source = {item.image5} style = {styles.imagestyle}/>
             <Text style = {styles.Maintext}>{item.category5}</Text>
           </TouchableOpacity>
           <TouchableOpacity   style ={styles.row}>
             <Image source = {item.image6} style = {styles.imagestyle}/>
             <Text style = {styles.Maintext}>{item.category6}</Text>
           </TouchableOpacity>
         </View>
         <View style = {styles.Rowholder}>
           <TouchableOpacity style ={styles.row}>

             <Image source = {item.image7} style = {styles.imagestyle}/>
             <Text style = {styles.Maintext}>{item.category7}</Text>
           </TouchableOpacity>
           <TouchableOpacity style ={styles.row}>
             <Image source = {item.image8} style = {styles.imagestyle}/>
             <Text style = {styles.Maintext}>{item.category8}</Text>
           </TouchableOpacity>
           <TouchableOpacity style ={styles.row}>
             <Image source = {item.image9} style = {styles.imagestyle}/>
             <Text style = {styles.Maintext}>{item.category9}</Text>
           </TouchableOpacity>
         </View>
         <View style ={styles.Rowholder}>
         <TouchableOpacity style ={styles.row}>
           <Image source = {item.image10} style = {styles.imagestyle}/>
           <Text style = {styles.Maintext}>{item.category10}
           </Text>
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
export default MarketingCard
