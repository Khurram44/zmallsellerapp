import React from 'react';
import {
  StyleSheet,
  View,Text,StatusBar,ScrollView
} from 'react-native';
import DynamicForm from '@coffeebeanslabs/react-native-form-builder';import {heightPercentageToDP, widthPercentageToDP} from 'react-native-responsive-screen';
import {Separator} from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Fonts} from '../contants'; 
import { TouchableOpacity } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';
const Data = [{Title:"Ali javed",AccountNumber:"202545854555466",Bank:"Bank Al Habib"},{Title:"obaid ali",AccountNumber:"202545854555466",Bank:"Bank Islami"}]
const Bankaccount = () => {
  
const navigation = useNavigation();
    return (
        <View><StatusBar barStyle="dark-content" backgroundColor="grey" translucent />
        <Separator height={StatusBar.currentHeight} />
        <View style={styles.headerContainer}>
          <Ionicons
            name="chevron-back-outline"
            size={25}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.headerTitle}>Bank Account</Text>
         
        </View>

        <Text style = {{textAlign:'center',marginTop:heightPercentageToDP("5%"),fontSize:25,fontFamily:Fonts.POPPINS_REGULAR,color:"green"}}>Existing Bank Accounts</Text>
        <ScrollView  horizontal={true} bounces = {false}pagingEnabled = {true} showsHorizontalScrollIndicator = {false}>
            {Data.map((data)=>{
                return(
                    <View style = {styles.Cardholder}>
                    <View style = {styles.card}>
                        <View style = {styles.rowholder}>
                        <Text style = {styles.cardinner}>Title : </Text><Text style = {styles.cardsubinner}>{data.Title}</Text>
                        </View>
                        <View style = {styles.rowholder}>
                        <Text style = {styles.cardinner}>Account No. : </Text><Text style = {styles.cardsubinner}>{data.AccountNumber}</Text>
                        </View>
                        <View style = {styles.rowholder}>
                        <Text style = {styles.cardinner}>Bank : </Text><Text style = {styles.cardsubinner}>{data.Bank}</Text>
                        </View>
                        
                    </View>
                              </View>
                )
            })}
       </ScrollView>
       <TouchableOpacity onPress={()=>navigation.navigate("AddBank")} style = {{justifyContent:'center',alignItems:'center'}}><View style = {styles.Buttonholder}>
           <Text style = {styles.Buttontext}>Add New Bank Account</Text>
       </View></TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    headerContainer: {
      flexDirection: 'row',
      paddingVertical: 10,
      paddingHorizontal: 5,
    },
    headerTitle: {
      fontSize: 18,
      fontFamily: Fonts.POPPINS_BOLD,
      lineHeight: 20 * 1.4,
      marginLeft: widthPercentageToDP('30%'),
      textAlign: 'center',
    },
    Cardholder:{ 
         marginTop:heightPercentageToDP("10%"),
    marginLeft:widthPercentageToDP("3%"),
    marginRight:widthPercentageToDP("3%"),justifyContent:'center'
    },card:{
        
    width:widthPercentageToDP("80%"),
    height:heightPercentageToDP("30%"),
    
    backgroundColor:"white",
    borderRadius:20,borderWidth:1,borderColor:"grey"
    },
    cardinner:{
        marginTop:20,paddingHorizontal:20,fontSize:15,fontFamily:Fonts.POPPINS_REGULAR,color:"blue"
    },
    rowholder:{
       flexDirection:'row'
    },
    cardsubinner:{
        marginTop:20,paddingHorizontal:20,fontSize:15,fontFamily:Fonts.POPPINS_REGULAR,color:"grey"
    },Buttonholder:{
        justifyContent:'center',alignItems:'center',marginTop:heightPercentageToDP("5%"),width:widthPercentageToDP("50%"),backgroundColor:"white",borderRadius:10,borderColor:"green",borderWidth:2
    },Buttontext:{
        fontSize:15,fontFamily:Fonts.POPPINS_REGULAR,padding:10
    }
  });
  
export default Bankaccount
