import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity,Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/MaterialIcons';
import {Fonts} from '../contants';

import { useNavigation } from '@react-navigation/native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {
  Button,
  Modal,
  Stack,
  FormControl,
  Input,
  Center,
  NativeBaseProvider,
} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import Addvoucher from './Addvoucher';

const Filtertags = [
  {id: 1, name: 'Shop Voucher', image:require("../assets/images/shop64.png")},
  {id: 2, name: 'Product Voucher', image:require("../assets/images/pro64.png")},
];
const OrdersButtonb = () => { 
  
const navigation = useNavigation();
  const [placement, setPlacement] = useState(undefined);
  const [open, setOpen] = useState(false);

  const openModal = placement => {
    setOpen(true);
    setPlacement(placement);
  };
  const [Status, setStatus] = useState('');
  function SetStatusfunc(ss) {
    setStatus(ss);
  
  }

  return (
    <NativeBaseProvider>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <Modal.Content maxWidth="350" {...styles[placement]}>
          <Modal.CloseButton />
          <Modal.Header> Select Voucher Type </Modal.Header>
          <Modal.Body>
            {Filtertags.map(data => (
              <View style={styles.Vouchertypeholder}>
                <TouchableOpacity
                  onPress={() => {SetStatusfunc(data.name) ; ()=> navigation.navigate("Addvoucher")}}
                  style={[
                    Status === data.name && Styles.cont,
                    {
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: heightPercentageToDP('15%'),
                      marginBottom: 40,  
                      width: widthPercentageToDP('70%'),
                      backgroundColor:"#d9d5d4"
                    },
                  ]}>
                  <View style
                   = {{flexDirection:'row',justifyContent:'space-around'}}>
                    <Image source = {data.image}
                    style = {{width
                    :50,height:50,marginRight:30}}
                    />
                    <Text style
                     = {{fontSize:18,fontFamily:Fonts.POPPINS_REGULAR,textAlign:'center',width:80}}>{data.name}</Text>
                     
                  </View>
                </TouchableOpacity>
               
              </View>
            ))}
             <TouchableOpacity onPress={()=> navigation.navigate("Addvoucher")} style = {{alignItems:'center',padding:10,backgroundColor:"#6ac2ff",borderRadius:10}}>
                 <Text style = {{fontSize:20,color:"white"}}>Next</Text>
                </TouchableOpacity>
          </Modal.Body>
        </Modal.Content>
      </Modal>
      <View style={{backgroundColor: '#eff0f4', flex: 1}}>
        <View style={styles.Buttonholder}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Addbundledeal")}
            style={styles.Buttonsttyle}>
            <Text style={styles.Buttontext}>+ Create New Bundle Deal</Text>
          </TouchableOpacity>
        </View>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  Buttonholder: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',

    width: widthPercentageToDP('100%'),
    height: heightPercentageToDP('10%'),
    marginTop:20
  },
  Buttonsttyle: {
    width: widthPercentageToDP('90%'),
    backgroundColor: '#4673f4',
    height: heightPercentageToDP('7%'),
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding:5
  },
  Buttontext: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontFamily: Fonts.POPPINS_REGULAR,
  },
  Vouchertypeholder: {},
});
const Styles = StyleSheet.create({
  cont: {
    padding: 10,
    borderRadius: 10,
    width: widthPercentageToDP('80%'),
    justifyContent: 'center',
    alignItems: 'center',
    height: heightPercentageToDP('15%'),
    marginBottom: 40,
    borderWidth: 3,
    borderColor: 'orange',
    backgroundColor:"green"
  },
});
export default OrdersButtonb;
