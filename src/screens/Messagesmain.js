import React from 'react';
import {View, Text, StyleSheet, Image,TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {FlatList} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';

const Data = [
  {
    name: 'Your next appointment',
    id: 1,
    details: 'Start at 3:00pm Todat',
  },
  {
    name: 'New Review',
    id: 2,
    details: 'Ravindu Dhanan',
  },
  {
    name: 'Payment Recieved',
    id: 3,
    details: 'LKR 50,000',
  },
  {
    name: 'Cancel Appoinment',
    id: 5,
    details: 'Ravindu Dhanan',
  },
  {
    name: 'Visit Clinic',
    id: 5,
    details: 'Ravindu Dhanan',
  },
];

const Messagemain = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
       
      <View style={{marginTop: hp('10%')}}>
        <View style={{height: hp('70%'), marginTop: hp('2%')}}>
          <FlatList
            data={Data}
            keyExtractor={item => {
              item.id;
            }}
            renderItem={({item}) => {
              return (
                <View style={styles.main}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                  <View  style={styles.text1}>
                   <Text style={styles.name} >{item.name} </Text> 
                   <Text style={styles.detail}>{item.details} </Text> 
                  </View>
                  <TouchableOpacity>
           <AntDesign style={styles.arrow} name={'doubleright'} size={25} color={'#9299b2'} />
           </TouchableOpacity>

                 
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};
export default Messagemain;


const styles = StyleSheet.create({
  container: {
    height: hp('85%'),
    width: wp('100%'),
  },
  
  detail:{
    fontSize:20,
    fontWeight:'bold',
    color:'black'
  },
  name: {
    fontSize: 17,
    color:'#3d88eb',
    marginTop:hp('-1%')
  },
  text1:{
    margin:13
  },
  main: {
    height: hp('10%'),
    width: wp('90%'),
    borderRadius: 10,
    backgroundColor: 'white',
    marginLeft: wp('5%'),
    padding: 5,
    marginBottom: hp('2%'),
  },

  view1: {
    backgroundColor: '#09a1ec',
    height: hp('12%'),
    borderBottomRightRadius: wp('3%'),
    borderBottomLeftRadius: wp('3%'),
  },
  img: {
    height: hp('5%'),
    width: wp('6%'),
    backgroundColor: 'white',
    marginLeft: wp('1%'),
  },
  text:{
    fontSize:25,
    color:'white',
    padding:5,
    marginTop:30
},
  greater: {
    height: hp('5%'),
    width: wp('6%'),
    margin:18
  },
  arrow:{
      marginTop:hp('3%'),
      marginLeft:wp('5%'),
      padding:5
  }
});