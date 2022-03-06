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
  {id: 1, name: 'Men', image: require('../assets/images/men.png')},
  {id: 2, name: 'Beauty', image: require('../assets/images/Beauty.png')},
  {id: 3, name: 'Kids', image: require('../assets/images/kids.png')},
  {id: 4, name: 'Lifestyle', image: require('../assets/images/lifestyle.png')},
  {
    id: 5,
    name: 'Electronics',
    image: require('../assets/images/electronics.png'),
  },
  {id: 5, name: 'Women', image: require('../assets/images/woman.png')},
  {id: 5, name: 'Sports', image: require('../assets/images/sports.png')},
];

import {Colors} from '../contants';

import {Separator} from '../components'; 

const Men = ({ route, navigation }) => {
  const {status} = route.params
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
          <Text style={styles.headerTitle}>{status}</Text>
        </View>
    </View></NativeBaseProvider>
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

export default Men;
