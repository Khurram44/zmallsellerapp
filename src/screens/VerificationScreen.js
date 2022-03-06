import React from 'react';
import {View, Text, StyleSheet, Image,ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CheckBox from 'react-native-check-box';
import {MDCFormField} from '@material/form-field';
import {MDCCheckbox} from '@material/checkbox';

import LinearGradient from 'react-native-linear-gradient';
import {Fonts} from '../contants';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
const Data = [{id:1,name:""},{id:2,name:""},{id:3,name:""},{id:4,name:""},{id:5,name:""},{id:6,name:""},{id:7,name:""},{id:8,name:""},{id:9,name:""},{id:10,name:""},{id:11,name:""},{id:12,name:""}]
const VerificationScreen = ({navigation}) => {
  return (
    <LinearGradient
      colors={['#3e3c32', '#ce9d5c', '#3e3c32']}
      style={styles.container}>
      <Image
        source={require('../assets/images/Gzltlogoorig.png')}
        style={styles.Imagedesign}
      />
      <Text style={styles.Textstyle}>Import a Wallet</Text>
      <Text style={styles.subtext}>
        Write down correct numbered order of seed phrase here
      </Text>  

      <View style = {{flexDirection:'row'}}>
 <View style = {styles.Phraseholder}>
   
 <Text style = {{color:"white"}}>1</Text>
 <TextInput style = {{borderBottomWidth:1,borderBottomColor:"white"}}/>
 </View>
 <View style = {styles.Phraseholder}>
   <Text style = {{color:"white"}}>2</Text>
 <TextInput style = {{borderBottomWidth:1,borderBottomColor:"white"}}/>
</View>
<View style = {styles.Phraseholder}>
  
<Text style = {{color:"white"}}>3</Text>
<TextInput style = {{borderBottomWidth:1,borderBottomColor:"white"}}/>
</View>
      </View>
      <View style = {{flexDirection:'row'}}>
        
      <View style = {styles.Phraseholder}>
        
   <Text style = {{color:"white"}}>4</Text>
      <TextInput style = {{borderBottomWidth:1,borderBottomColor:"white"}}/>
</View>
<View style = {styles.Phraseholder}>
  
<Text style = {{color:"white"}}>5</Text>
<TextInput style = {{borderBottomWidth:1,borderBottomColor:"white"}}/>
</View>
<View style = {styles.Phraseholder}>
  
<Text style = {{color:"white"}}>6</Text>
<TextInput style = {{borderBottomWidth:1,borderBottomColor:"white"}}/>
</View>
      </View>
      <View style = {{flexDirection:'row'}}>
      <View style = {styles.Phraseholder}>

      <Text style = {{color:"white"}}>7</Text>
      <TextInput style = {{borderBottomWidth:1,borderBottomColor:"white"}}/>
</View>
<View style = {styles.Phraseholder}>
  
<Text style = {{color:"white"}}>8</Text>
<TextInput style = {{borderBottomWidth:1,borderBottomColor:"white"}}/>
</View>
<View style = {styles.Phraseholder}>
  
<Text style = {{color:"white"}}>9</Text>
<TextInput style = {{borderBottomWidth:1,borderBottomColor:"white"}}/>
</View>
      </View>
        
      <View style = {{flexDirection:'row'}}>
      <View style = {styles.Phraseholder}>
        
   <Text style = {{color:"white"}}>10</Text>
      <TextInput style = {{borderBottomWidth:1,borderBottomColor:"white"}}/>
</View>
<View style = {styles.Phraseholder}>
  
<Text style = {{color:"white"}}>11</Text>
<TextInput style = {{borderBottomWidth:1,borderBottomColor:"white"}}/>
</View>
<View style = {styles.Phraseholder}>
  
<Text style = {{color:"white"}}>12</Text>
<TextInput style = {{borderBottomWidth:1,borderBottomColor:"white"}}/>
</View>
 </View>
      <TouchableOpacity onPress = {()=>navigation.navigate("Tabs")} style = {styles.Continuebutton}>
        <Text style = {styles.continuetext}>Confirm</Text>
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
    width: wp('25%'),
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    height: hp('12%'),
    borderRadius: 10,
    marginTop: hp('1.5%'),
    marginLeft:wp("1%"),
    marginRight:wp("1%"),
    
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
  width:wp("50%"),
  height:hp("5%"),
  backgroundColor:"#8b784d",
  borderRadius:20,
  justifyContent:'center',
  alignItems:'center', 
  marginTop:50
},
continuetext:{
  color:"white",
  fontSize:17,
  fontFamily:Fonts.POPPINS_REGULAR,
}
});


export default VerificationScreen;
