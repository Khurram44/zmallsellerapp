import React, {useState} from 'react';
import {
  Accordion,
  Box,
  NativeBaseProvider,
  Center,
  ScrollView,
  VStack,
  Text,
  Button,
  Modal,
  FormControl,
  InputTextArea,
  Input,
  TextArea,
} from 'native-base';
import {
  View,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {Display} from '../utils';
import {useNavigation} from '@react-navigation/native';
import {Fonts} from '../contants';

import Ionicons from 'react-native-vector-icons/Ionicons';
const Filtertags = [
  {id: 2, name: 'Men', image: require('../assets/images/men.png')},
  {id: 323, name: 'Beauty', image: require('../assets/images/Beauty.png')},
  {id: 510, name: 'Kids', image: require('../assets/images/kids.png')},
  {id: 516, name: 'Lifestyle', image: require('../assets/images/lifestyle.png')},
  {
    id: 745,
    name: 'Electronics',
    image: require('../assets/images/electronics.png'),
  },
  {id: 1, name: 'Women', image: require('../assets/images/woman.png')},
  {id: 788, name: 'Sports', image: require('../assets/images/sports.png')},
];

import {Colors} from '../contants';

import {Separator} from '../components';
import Men from './Men';
import Beauty from './Beauty';
import Kids from './Kids';
import Lifestyle from './Lifestyle';
import Electronics from './Electronics';
import Women from './Women';
import Sports from './Sports';

const Addproducts = () => {
  const navigation = useNavigation();
  const [Status, setStatus] = useState();
  function SetStatusfunc(ss) {
    setStatus(ss);
  }
  console.log(Status);

  return (
    <NativeBaseProvider>
      <View>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={Colors.DEFAULT_WHITE}
          translucent
        />
        <Separator height={StatusBar.currentHeight} />

        <View style={styles.headerContainer}>
          <Ionicons
            name="chevron-back-outline"
            size={30}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.headerTitle}>Add Products</Text>
        </View>
        <View style={styles.Allcat}>
          <Text style={styles.Allcattxt}>All Categories</Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              flexWrap: 'wrap',
              marginTop: heightPercentageToDP('5%'),
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: 1,
            }}>
            {Filtertags.map(data => (
              <View
                style={{
                  width: widthPercentageToDP('25%'),
                  borderRadius: 10,
                  padding: 8,
                  borderColor: 'black',
                  marginTop: heightPercentageToDP('.5%'),
                  height: heightPercentageToDP('15%'),
                }}>
                <TouchableOpacity onPress={() => SetStatusfunc(data.name) }>
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <View
                      style={[
                        Status === data.name ? styles.cont : styles.mainview,
                      ]}>
                      <Image source={data.image} style={styles.imagess} />
                    </View>
                    <Text
                      style={{
                        fontSize: 15,
                        fontFamily: Fonts.POPPINS_REGULAR,
                        color: 'black',
                        textAlign: 'center',
                        marginTop: 10,
                        marginBottom: 10,
                      }}>
                      {data.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate(Status, {status: Status})}
            style={{justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
                width: widthPercentageToDP('30%'),
                height: heightPercentageToDP('4%'),
                backgroundColor: '#5fa1ff',
                borderRadius: 10,
              }}
              onPress={() => navigation.navigate('')}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 15,
                  fontFamily: Fonts.POPPINS_REGULAR,
                  color: 'white',
                }}>
                Next
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </NativeBaseProvider>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: Fonts.POPPINS_MEDIUM,
    lineHeight: 20 * 1.4,
    width: Display.setWidth(80),
    textAlign: 'center',
    color: Colors.LIGHTCOLOR,
  },
  Allcat: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  Allcattxt: {
    fontSize: 20,
    fontFamily: Fonts.POPPINS_REGULAR,
  },

  cont: {
    borderWidth: 2,
    borderColor: 'orange',
    borderRadius: 60 / 2,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagess: {
    width: 50,
    height: 50,
  },
  mainview: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Addproducts;
