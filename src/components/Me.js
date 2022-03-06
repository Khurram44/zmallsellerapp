import React from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  FlatList,
  Alert,
  StyleSheet,
  Image,
} from 'react-native';
import {Colors} from '../contants';
import {Separator} from '../components';

import { useNavigation } from '@react-navigation/native'; 
  
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {Fonts} from '../contants';

import {widthPercentageToDP} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Data = [
  {id: 1, name: 'My Account', image: require('../assets/images/account.png')},
  {id: 2, name: 'My Store', image: require('../assets/images/store.png')},
  {id: 3, name: 'Change Password', image: require('../assets/images/cp.png')},
  {id: 4, name: 'Contact Us', image: require('../assets/images/cu.png')},
  {id: 5, name: 'Terms and Policy', image: require('../assets/images/tap.png')},
  {id: 6, name: 'Help', image: require('../assets/images/help.png')},
];
const Me = () => {
  
const navigation = useNavigation();
  function Item({id, name, image}) {
    function Onpressfunc(id) {
      const data = Data.find(dat => {
        const datt = dat.id === id;
        console.log(datt.name);
      });
    }
    return ( 
      <TouchableOpacity onPress={()=>navigation.navigate(name)}>
        <View style={styles.mainwrapper}>
          <Image source={image} style={{width: 30, height: 30}} />
          <Text style={styles.Textstyle}>{name}</Text>
          <Image
            source={require('../assets/images/next.png')}
            style={{width: 30, height: 30}}
          />
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <View style={{flex: 1, }}>
      <View style = {styles.Controlview}>
      <ScrollView>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={Colors.DEFAULT_WHITE}
          translucent
        />
        <Separator height={StatusBar.currentHeight} />
        <View style={{flexDirection: 'row', marginTop: 10, padding: 7.5}}>
          <Ionicons
            name="chevron-back-outline"
            size={30}
            onPress={() => navigation.goBack()}
            style={{marginLeft: 10}}
          />
          <Text style={{marginLeft: widthPercentageToDP('35%'), fontSize: 20}}>
            Me
          </Text>
        </View>

        <FlatList
          data={Data}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return <Item id={item.id} name={item.name} image={item.image}  />;
          }}
        />
      </ScrollView>
      <View style = {{justifyContent:'center',alignItems:'center'}}>
      <TouchableOpacity style = {styles.Logout}>
        <Text style = {styles.Logouttext}>Logout</Text>
      </TouchableOpacity></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Textstyle: {
    fontSize: 15,
    fontFamily: Fonts.POPPINS_REGULAR,
    paddingHorizontal: widthPercentageToDP('5%'),
  },
  mainwrapper: {
    width: widthPercentageToDP('100%'),
    backgroundColor: 'white',
    marginTop: 10,
    padding: 2,
    height: heightPercentageToDP('8%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    alignItems: 'center',
  }, 
  Logout:{
    
    backgroundColor: 'white',

    width:widthPercentageToDP("75%"),
    marginTop:30,
    padding:10,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    borderWidth:2,
    borderColor:"red"

  },
  Logouttext:{
    fontSize:20,
    color:Colors.DEFAULT_YELLOW

  }
});

export default Me;
