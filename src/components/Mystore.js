import {createNavigatorFactory} from '@react-navigation/core';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  Touchable,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import CategoryList from '../components/CategoryList';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Separator} from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Fonts} from '../contants';
import {Avatar} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
const Data = [
  {
    id: 1,
    name: 'Ali Store',
    followers: '2',
    reviews: '4.8 (11)',
    itemssold: '0',
    location: 'Rawalpindi, Punjab',
    cancellationrate: '5%',
    ontimeshipment: '91%',
  },
];
const Mystore = () => {
    const navigation = useNavigation();

  return (
    <View style={styles.Maincontainer}>
      <View style={styles.MainHeader}>
        <View style={{marginTop: heightPercentageToDP('5%')}}>
          <Avatar
            size="large"
            rounded
            source={{uri: 'https://randomuser.me/api/portraits/'}}
            title="AS"
          />
        </View>
        {Data.map(data => {
          return (
            <View
              style={{
                marginTop: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 25,
                  fontFamily: Fonts.POPPINS_REGULAR,
                  color: 'orange',
                }}>
                {data.name}
              </Text>
              <View
                style={{
                  marginTop: 10,
                  backgroundColor: 'white',
                  width: widthPercentageToDP('100%'),
                  height: heightPercentageToDP('12%'),
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text
                    style={{
                      fontSize: 18,
                      color: 'green',
                      fontFamily: Fonts.POPPINS_BOLD,
                    }}>
                    {data.followers}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 15,
                      fontFamily: Fonts.POPPINS_SEMI_BOLD,
                      color: 'orange',
                    }}>
                    Followers
                  </Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text
                    style={{
                      fontSize: 18,
                      color: 'green',
                      fontFamily: Fonts.POPPINS_BOLD,
                    }}>
                    {data.itemssold}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 18,
                      fontFamily: Fonts.POPPINS_SEMI_BOLD,
                      color: 'orange',
                    }}>
                    Items Sold
                  </Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text
                    style={{
                      fontSize: 18,
                      color: 'green',
                      fontFamily: Fonts.POPPINS_BOLD,
                    }}>
                    {data.reviews}
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 15,
                      fontFamily: Fonts.POPPINS_SEMI_BOLD,
                      color: 'orange',
                    }}>
                    Reviews
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: widthPercentageToDP('100%'),
                  backgroundColor: 'white',
                  marginTop: 20,
                  height: 50,
                  justifyContent: 'center',
                  paddingHorizontal: 50,
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 5,
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                }}>
                <Image
                  source={require('../assets/images/locationss.png')}
                  style={{width: 30, height: 30}}
                />

                <Text
                  style={{
                    color: 'orange',
                    fontSize: 18,
                    fontFamily: Fonts.POPPINS_REGULAR,
                  }}>
                  {data.location}
                </Text>
              </View>

              <View
                style={{
                  width: widthPercentageToDP('100%'),
                  backgroundColor: 'white',
                  marginTop: 20,
                  height: 50,
                  justifyContent: 'center',
                  paddingHorizontal: 50,
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 5,
                  justifyContent: 'space-between',
                }}>
                <Image
                  source={require('../assets/images/cr.png')}
                  style={{width: 30, height: 30}}
                />

                <Text
                  style={{
                    color: 'orange',
                    fontSize: 18,
                    fontFamily: Fonts.POPPINS_REGULAR,
                  }}>
                  {data.cancellationrate}
                </Text>
              </View>
              <View
                style={{
                  width: widthPercentageToDP('100%'),
                  backgroundColor: 'white',
                  marginTop: 20,
                  height: 50,
                  justifyContent: 'center',
                  paddingHorizontal: 50,
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 5,
                  justifyContent: 'space-between',
                }}>
                <Image
                  source={require('../assets/images/ots.png')}
                  style={{width: 30, height: 30}}
                />

                <Text
                  style={{
                    color: 'orange',
                    fontSize: 18,
                    fontFamily: Fonts.POPPINS_REGULAR,
                  }}>
                  {data.ontimeshipment}
                </Text>
              </View>

              <TouchableOpacity
                onPress={()=> navigation.navigate("Storecomp") }
                style={{
                  width: widthPercentageToDP('80%'),
                  backgroundColor: 'orange',
                  marginTop: 20,
                  height: 50,
                  paddingHorizontal: 50,
                  flexDirection: 'row',
                  paddingVertical: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 20,
                    fontFamily: Fonts.POPPINS_SEMI_BOLD,
                    color: 'white',
                  }}>
                  View Store
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainHeader: {
    flex: 1,
    alignItems: 'center',
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
    marginLeft: widthPercentageToDP('35%'),
    textAlign: 'center',
  },
  Buttonholder: {},
  Maincontainer: {
    flex: 1,
  },
  Avatarstyle: {
    marginTop: heightPercentageToDP('5%'),
  },
});

export default Mystore;
