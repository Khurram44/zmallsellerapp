import React from 'react';
import {View, Text, StatusBar, StyleSheet, Image} from 'react-native';
import {
  Button,
  Modal,
  Stack,
  FormControl,
  Input,
  Center,
  NativeBaseProvider,
} from 'native-base';
 
import {Avatar, Badge, Icon, withBadge} from 'react-native-elements'; 
import {Display} from '../utils';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Productreview from '../components/Productreview';
import SellerReview from '../components/SellerReview';
import DynamicForm from '@coffeebeanslabs/react-native-form-builder';

import {Separator} from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Fonts} from '../contants';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import Managereviewsbottom from '../components/Managereviewsbottom';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {useState} from 'react';
import Starrating from '../components/Starrating';
const Tab = createMaterialTopTabNavigator();

const ManageReviews = ({navigation}) => {
  const formTemplate = {
    data: [
       
      {
        index: 1,
        component: 'rating',
        field_name: 'tech_rating',
        is_mandatory: 'true',
        meta: {
          label: 'Rate yourself in your favorite programming language',
          count: 8
        },
      },
      
       
    ]
  }

  const onSubmit = formFields => {
    // Actions on submit button click.
    console.log('Form submitted with fields: ', formFields);
  }




  const [placement, setPlacement] = useState(undefined);
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState('full');

  const [modalVisible, setModalVisible] = useState(false);
  const handleSizeClick = newSize => { 
    setModalVisible(!modalVisible);
    setPlacement('bottom');
  };

  const openModal = placement => {
    setOpen(true);
    setPlacement(placement);
  };
  return (
    <NativeBaseProvider>
      <View style={{flex: 1, padding: 10, backgroundColor: 'white'}}>
        <StatusBar barStyle="dark-content" backgroundColor="grey" translucent />
        <Separator height={StatusBar.currentHeight} />
        <View style={styles.headerContainer}>
          <Ionicons
            name="chevron-back-outline"
            size={25}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.headerTitle}>Manage Reviews</Text>
          <TouchableOpacity  onPress={() => handleSizeClick(size)}>
            <Image
              source={require('../assets/images/n.png')}
              style={{width: 25, height: 25}}
              
            />
          </TouchableOpacity>
        </View>

        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: 'grey',
            inactiveTintColor: 'grey',
            labelStyle: {
              fontSize: 13,
              fontFamily: Fonts.POPPINS_REGULAR,
            },

            style: {
              backgroundColor: 'white',
            },
            indicatorStyle: {
              backgroundColor: 'orange',
              width: widthPercentageToDP('10%'),
              left: '20%',
            },
          }}>
          <Tab.Screen name=" Product Review" component={Productreview} />
          <Tab.Screen name="Seller Review" component={SellerReview} />
        </Tab.Navigator>
        <Modal isOpen={modalVisible} onClose={setModalVisible} size={size}>
          <Modal.Content maxWidth="350" {...styles[placement]}>
            <Modal.CloseButton />
            <Modal.Header>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 20,
                  fontFamily: Fonts.POPPINS_MEDIUM,
                }}>Filter</Text>
            </Modal.Header><Modal.Body>
              
              <Starrating/>
              </Modal.Body><Modal.Footer><Button.Group space={2}><Button
                  variant="ghost"
                  colorScheme="blueGray"
                  onPress={() => {
                    setOpen(false);
                  }}>
                  Cancel
                </Button>
                <Button
                  onPress={() => {
                    setOpen(false);
                  }}>
                  Save
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </View>
    </NativeBaseProvider>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 1,
    justifyContent: 'space-evenly',
  },

  headerTitle: {
    fontSize: 15,
    fontFamily: Fonts.POPPINS_BOLD,
    lineHeight: 20 * 1.4,

    width: widthPercentageToDP('80%'),
    textAlign: 'center',
  },
  bottom: {
    marginBottom: 0,
    marginTop: 'auto',
  },
});

export default ManageReviews;
