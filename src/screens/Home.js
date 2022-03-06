import React from 'react';
import {View, Text, StatusBar, StyleSheet, Image} from 'react-native';
 
import {
  Popover,
  Button,
  VStack,
  Select,
  CheckIcon,
  Box,
  Center,
  NativeBaseProvider,
} from 'native-base';
import Antdesign from 'react-native-vector-icons/AntDesign';

import {Avatar, Badge, Icon, withBadge} from 'react-native-elements';

import {Display} from '../utils';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Productreview from '../components/Productreview';
import SellerReview from '../components/SellerReview';

import {Separator} from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors, Fonts} from '../contants';
import {heightPercentageToDP, widthPercentageToDP} from 'react-native-responsive-screen';
import Managereviewsbottom from '../components/Managereviewsbottom';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useState} from 'react';
import Homecarousel from '../components/Homecarousel';
const Tab = createMaterialTopTabNavigator();
const Data = [
  {
    id: 1,
    image: require('../assets/images/dow4.jpg'),
    Fans: 4,
    name: 'Zcollection',
  },
];
const Home = () => {
  function Example() {
    const [position, setPosition] = useState('auto');
    return (
      <Box h="0%" w="0%" alignItems="center">
        <Popover
          trigger={triggerProps => {
            return (
              <Button {...triggerProps} colorScheme="danger">
                Delete Customer
              </Button>
            );
          }}>
          <VStack space={1}>
            <Popover.Content w="100%">
              <Popover.Arrow />
              <Popover.CloseButton />
              <Popover.Header>Delete Customer</Popover.Header>
              <Popover.Body>
                This will remove all data relating to Alex. This action cannot
                be reversed. Deleted data can not be recovered.
              </Popover.Body>
              <Popover.Footer justifyContent="flex-end">
                <Button.Group space={2}>
                  <Button colorScheme="coolGray" variant="ghost">
                    Cancel
                  </Button>
                  <Button colorScheme="danger">Delete</Button>
                </Button.Group>
              </Popover.Footer>
            </Popover.Content>
          </VStack>
        </Popover>
      </Box>
    );
  }

  return (
    <NativeBaseProvider>
      <View style={styles.Homecontainer}>
        <View style={styles.Headingrowholder}>
          <Text style={styles.Headingtext}>Seller Center</Text>
          <TouchableOpacity>
            <Antdesign name="scan1" size={30} />
          </TouchableOpacity>
        </View>
        <View style={styles.secondrow}>
          <Avatar
            size={54}
            rounded
            icon={{name: 'adb', type: 'material'}}
            containerStyle={{backgroundColor: 'orange'}}>
            <Avatar.Accessory size={24} />
          </Avatar>
          {Data.map(data => {
            return (
              <View style={styles.Subrow}>
                <View style={styles.Storenameholder}>
                  <Text style={styles.Storename}>{data.name}</Text>
                </View>
                <Text style={styles.Fansstyle} size={35}>
                  Fans {data.Fans}
                </Text>
              </View>
            );
          })}
        </View>
        <View style={{height:heightPercentageToDP("25%"),marginTop:heightPercentageToDP("0.5%"),backgroundColor:"white"}}>
        <Homecarousel/>
        </View>
        <View style = {{marginTop:heightPercentageToDP("5%")}}>
          <Image/>
        </View>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  Homecontainer: {
    padding: 1,
  },
  Headingtext: {
    fontSize: 22,
    color: '#2270f1',
    fontFamily: Fonts.POPPINS_REGULAR,
  },
  Headingrowholder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    padding: 15,
    borderBottomColor: '#e3e1e0',
  },
  secondrow: {
    flexDirection: 'row',
    padding: 15,
  },
  Subrow: {
    marginLeft: widthPercentageToDP('5%'),
    marginTop: widthPercentageToDP('0.5%'),
  },
  Storename: {
    fontSize: 16,
    fontFamily: Fonts.POPPINS_BOLD,
    color: 'black',
  },
  Fansstyle: {
    fontSize: 16,
    fontFamily: Fonts.POPPINS_REGULAR,
    color: 'grey',
  },
  Storenameholder: {
    flexDirection: 'row',
    marginLeft: 5,
  },
});

export default Home;
