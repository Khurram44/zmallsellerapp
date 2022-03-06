import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CheckBox from 'react-native-check-box';
import {MDCFormField} from '@material/form-field';
import {MDCCheckbox} from '@material/checkbox';

import LinearGradient from 'react-native-linear-gradient';
import {Fonts} from '../contants';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

const SigninScreen = ({navigation}) => {
  return (
    <LinearGradient
      colors={['#3e3c32', '#ce9d5c', '#3e3c32']}
      style={styles.container}>
      <Image
        source={require('../assets/images/Gzltlogoorig.png')}
        style={styles.Imagedesign}
      />
      <Text style={styles.Textstyle}>Recovery Phrase </Text>
      <Text style={styles.subtext}>
        Write down or copy the correct numbered order and keep them somewhere
        safe.
      </Text>
      <View style={styles.Phraseholder}>
        <View style={styles.Phraserowholder}>
           <View style = {{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
             <Text  style = {{marginLeft:20,marginRight:20,fontSize:17,fontFamily:Fonts.POPPINS_REGULAR,color:"white"}}>1 volcano</Text>
             <Text  style = {{marginLeft:20,marginRight:20,fontSize:17,fontFamily:Fonts.POPPINS_REGULAR,color:"white"}}>2 motor</Text>
            
           </View>

           <View style = {{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
             <Text  style = {{marginLeft:20,marginRight:20,fontSize:17,fontFamily:Fonts.POPPINS_REGULAR,color:"white"}}>3 globe</Text>
             <Text  style = {{marginLeft:20,marginRight:20,fontSize:17,fontFamily:Fonts.POPPINS_REGULAR,color:"white"}}>4 motion</Text>
            
           </View>

           <View style = {{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
             <Text  style = {{marginLeft:20,marginRight:20,fontSize:17,fontFamily:Fonts.POPPINS_REGULAR,color:"white"}}>5 season</Text>
             <Text  style = {{marginLeft:20,marginRight:20,fontSize:17,fontFamily:Fonts.POPPINS_REGULAR,color:"white"}}>6 wave</Text>
            
           </View>

           <View style = {{flexDirection:'row',justifyContent:'space-between',marginTop:20,}}>
             <Text style = {{marginLeft:20,marginRight:20,fontSize:17,fontFamily:Fonts.POPPINS_REGULAR,color:"white"}}>7 rocket</Text>
             <Text  style = {{marginLeft:20,marginRight:20,fontSize:17,fontFamily:Fonts.POPPINS_REGULAR,color:"white"}}>8 walnut</Text>
            
           </View>
           <View style = {{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
             <Text  style = {{marginLeft:20,marginRight:20,fontSize:17,fontFamily:Fonts.POPPINS_REGULAR,color:"white"}}>9 zone</Text>
             <Text  style = {{marginLeft:20,marginRight:20,fontSize:17,fontFamily:Fonts.POPPINS_REGULAR,color:"white"}}>10 zoo</Text>
            
           </View>
           <View style = {{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
             <Text  style = {{marginLeft:20,marginRight:20,fontSize:17,fontFamily:Fonts.POPPINS_REGULAR,color:"white"}}>11 style</Text>
             <Text  style = {{marginLeft:20,marginRight:20,fontSize:17,fontFamily:Fonts.POPPINS_REGULAR,color:"white"}}>12 summer
</Text>
            
           </View>
           
        </View>
       
      </View>
      <Text style = {styles.Textlower}>Do Not Share These Words With Anyone</Text>
      <TouchableOpacity onPress = {()=>navigation.navigate("Verification")} style = {styles.Continuebutton}>
        <Text style = {styles.continuetext}>Continue</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#755900',
  },
  Imagedesign: {
    width: 80,
    height: 80,
    marginTop: hp('3.5%'),
  },
  Textstyle: {
    color: '#ffffff',
    fontSize: 20,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,

    marginTop: hp('2.5%'),
  },
  Innertext: {
    color: '#fbd705',
  },
  subtext: {
    color: '#ffffff',
    textAlign: 'center',
    paddingHorizontal: wp('10%'),
    fontSize: 15,
    fontFamily: Fonts.POPPINS_REGULAR,

    marginTop: hp('1%'),
  },
  Recoveryimport: {
    marginTop: hp('10%'),
    backgroundColor: '#3e3c32',
    width: wp('80%'),
    padding: 15,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Recoveryholder: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Recoverytext: {
    color: 'white',
    fontSize: 15,
    paddingHorizontal: 20,
    fontFamily: Fonts.POPPINS_REGULAR,
  },
  Recoveryimport1: {
    marginTop: hp('1%'),
    backgroundColor: '#3e3c32',
    width: wp('80%'),
    padding: 15,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Recoveryholder1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Recoverytext1: {
    color: 'white',
    fontSize: 15,
    paddingHorizontal: 20,
    fontFamily: Fonts.POPPINS_REGULAR,
  },
  Phraseholder: {
    width: wp('75%'),
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    height: hp('45%'),
    borderRadius: 30,
    marginTop: hp('2.5%') ,
    
    padding:10
  },
  Phraserowholder: { 
    paddingHorizontal:20,
    paddingVertical:10

    

  },
  PhrasetextmainLeft:{
    color:"white",
    fontSize:18,
    textAlign:'center',
    fontFamily:Fonts.POPPINS_REGULAR,
    marginRight:50,
    width:wp("25%")  
  },
  PhrasetextmainRight:{
    color:"white",
    fontSize:18,
    textAlign:'center',
    fontFamily:Fonts.POPPINS_REGULAR, 
    marginLeft:30,
    width:wp("25%")  
  },
  Textlower:{
    marginTop:hp("2.5%"),
    fontSize:15,
    fontFamily:Fonts.POPPINS_REGULAR,
    color:"#fbd704"
},
Continuebutton:{
  width:wp("60%"),
  height:hp("5%"),
  backgroundColor:"#8b784d",
  borderRadius:20,
  justifyContent:'center',
  alignItems:'center', 
  marginTop:10
},
continuetext:{
  color:"white",
  fontSize:18,
  fontFamily:Fonts.POPPINS_REGULAR
}
});


export default SigninScreen;
