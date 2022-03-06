import React,{useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'; 
import {MDCFormField} from '@material/form-field';
import {MDCCheckbox} from '@material/checkbox';

import LinearGradient from 'react-native-linear-gradient';
import {Fonts} from '../contants';
import {TouchableOpacity} from 'react-native-gesture-handler'; 
import CheckBox from '@react-native-community/checkbox';

const WelcomeScreen = ({navigation}) => {

   const [toggleCheckBox, setToggleCheckBox] = useState(false)

  return (
    <LinearGradient
      colors={['#3e3c32', '#ce9d5c', '#3e3c32']}
      style={styles.container}>
      <Image
        source={require('../assets/images/Gzltlogoorig.png')}
        style={styles.Imagedesign}
      />
      <Text style={styles.Textstyle}>
        GZLT <Text style={styles.Innertext}>Wallet</Text>
      </Text>
      <Text style={styles.subtext}>
        Import an existing wallet or create a shiny new wallet
      </Text>
      <View style={styles.Recoveryholder}>
        <TouchableOpacity
          style={styles.Recoveryimport}
          onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.Recoverytext}>Import with Recovery Phrase</Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          marginTop: hp('1.5%'),
          fontSize: 15,
          color: 'white',
          fontFamily: Fonts.POPPINS_REGULAR,
        }}>
        OR
      </Text>
      <View style={styles.Recoveryholder1}>
        <TouchableOpacity
          style={styles.Recoveryimport1}
          onPress={() => navigation.navigate('Signin')}>
          <Text style={styles.Recoverytext1}>Create a New Wallet</Text>
        </TouchableOpacity>
        <View style = {{flexDirection:'row',paddingHorizontal:60,paddingVertical:10,marginTop:hp('2.5%')}}>
 <CheckBox
    disabled={false}
    value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(newValue)}
  />
  <Text style = {{fontSize:12,color:"white",marginLeft:10}}>By Proceeding , You Agree with Termms and Conditions.</Text>
  </View>
      </View>
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
    width: 130,
    height: 130,
    marginTop: hp('5%'),
  },
  Textstyle: {
    color: '#433f2d',
    fontSize: 40,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,

    marginTop: hp('2.5%'),
  },
  Innertext: {
    color: '#fbd705',
  },
  subtext: {
    color: '#ffffff',
    textAlign: 'center',
    paddingHorizontal: 50,
    fontSize: 18,
    marginTop: 20,
    fontFamily: Fonts.POPPINS_REGULAR,

    marginTop: hp('2.5%'),
  },
  Recoveryimport: {
    marginTop: hp('5%'),
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
});
export default WelcomeScreen;
