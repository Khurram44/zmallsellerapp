import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Button,
  Modal,
  FormControl,
  Input,
} from "native-base"
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  Select,
  VStack,
  CheckIcon,
  Center,
  NativeBaseProvider,
  ScrollView,
} from 'native-base';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { Avatar } from 'react-native-elements';
import { Colors, Fonts, Images } from '../contants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Separator } from '../components';
import { Display } from '../utils';
import Feather from 'react-native-vector-icons/Feather';
import { AuthenicationService } from '../services';
import LottieView from 'lottie-react-native';
import { width } from 'styled-system';

const inputStyle = state => {
  switch (state) {
    case 'valid':
      return {
        ...styles.inputContainer,
        borderWidth: 1,
        borderColor: Colors.SECONDARY_GREEN,
      };
    case 'invalid':
      return {
        ...styles.inputContainer,
        borderWidth: 1,
        borderColor: Colors.DEFAULT_RED,
      };
    default:
      return styles.inputContainer;
  }
};

const showMarker = state => {
  switch (state) {
    case 'valid':
      return (
        <AntDesign
          name="checkcircleo"
          color={Colors.SECONDARY_GREEN}
          size={18}
          style={{ marginLeft: 5 }}
        />
      );
    case 'invalid':
      return (
        <AntDesign
          name="closecircleo"
          color={Colors.DEFAULT_RED}
          size={18}
          style={{ marginLeft: 5 }}
        />
      );
    default:
      return null;
  }
};

const Allproducts = ({ navigation }) => {
  const [showModal, setShowModal] = useState(false)
  const [orders, setOrders] = useState([])
  const people = []
  const url = 'https://zmallapi.herokuapp.com/api/v1/products/364'
  useEffect(() => {
    const api = async () => {
      const result = await axios.get(url)
      setOrders(result.data)
      console.log(orders[0] && orders[0].id)
      // people.push(data[0].id)
      let abc = orders[0] && orders[0].title
      console.log("Here", abc.substring(0, 20))

    }
    api()
  }, [])
  console.log("Orders", orders[0] && orders[0].id)
  const [Status, setStatus] = useState('');
  function SetStatusfunc(ss) {
    setStatus(ss);
  }

  let [service, setService] = React.useState('');
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [usernameErrorMessage, setUsernameErrorMessage] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [emailState, setEmailState] = useState('default');
  const [usernameState, setUsernameState] = useState('default');

  const register = () => {
    let user = {
      username,
      email,
      password,
    };
    setIsLoading(true);
    AuthenicationService.register(user).then(response => {
      setIsLoading(false);
      if (!response?.status) {
        setErrorMessage(response?.message);
      }
    });
    navigation.navigate('RegisterPhone');
  };

  const checkUserExist = async (type, value) => {
    if (value?.length > 0) {
      AuthenicationService.checkUserExist(type, value).then(response => {
        if (response?.status) {
          type === 'email' && emailErrorMessage
            ? setEmailErrorMessage('')
            : null;

          type === 'username' && usernameErrorMessage
            ? setUsernameErrorMessage('')
            : null;
          type === 'email' ? setEmailState('valid') : null;
          type === 'username' ? setUsernameState('valid') : null;
        } else {
          type === 'email' ? setEmailErrorMessage(response?.message) : null;
          type === 'username'
            ? setUsernameErrorMessage(response?.message)
            : null;
          type === 'email' ? setEmailState('invalid') : null;
          type === 'username' ? setUsernameState('invalid') : null;
        }
      });
    }
  };

  const [rating, setRating] = useState([]);

  const url2 = 'https://zmallapi.herokuapp.com/api/v1/reviews/product/51'
  const [titles, setTitle] = useState('');
  useEffect(() => {
    const api = async () => {
      const result = await axios.get(url2)
      setRating(result.data)
      console.log(rating)


    }
    api()
  }, [])
  let rate = 0
  let rate1 = 0
  for (let i = 0; i < rating.length; i++) {
    let temp = parseInt(rating[i].star_rating)
    rate = rate + temp
    rate1 = i + 1
  }
  let ratings = (rate / rate1)

  return (
    <NativeBaseProvider>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Manage Products</Modal.Header>
          <Modal.Body>
            <View>
              <Text>You can Manage this product from here </Text>
            </View>
            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20, backgroundColor: "red", padding: 10 }}>
              <Text style={{ color: "white", fontSize: 18 }}>Delete</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20, backgroundColor: "orange", padding: 10 }}>
              <Text style={{ color: "white", fontSize: 18 }}>Edit Product</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20, backgroundColor: "green", padding: 10 }}>
              <Text style={{ color: "white", fontSize: 18 }}>Save</Text>
            </TouchableOpacity>
            <View>
            </View>
          </Modal.Body>
        </Modal.Content>
      </Modal>
      <View style={styles.container}>
        <View style={{ height: heightPercentageToDP("70%") }}>
          <ScrollView>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                marginTop: heightPercentageToDP('5%'),
                justifyContent: 'space-between',
                paddingHorizontal: 15
              }}>
              {orders.map(data => (
                <TouchableOpacity
                  onPress={() => SetStatusfunc(data.name)}
                  style={{
                    width: widthPercentageToDP('45%'),
                    borderRadius: 10,
                    padding: 8,
                    borderColor: 'grey',
                    marginTop: heightPercentageToDP('2.5%'),
                    height: heightPercentageToDP('50%'),
                    backgroundColor: "#ffffff",
                    padding: 10,
                    borderWidth: 2,
                  }}>
                  <TouchableOpacity style={[
                    Status === data.name ? styles.cont : styles.imagess,
                  ]} onPress={() => setShowModal(true)}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                      <View
                        style={[
                          Status === data.name ? styles.cont : styles.imagess,
                        ]}>
                        <Image source={data.image} style={{ height: heightPercentageToDP("10%"), width: widthPercentageToDP("40%") }} />
                        <Text
                          style={{
                            fontSize: 15,
                            fontFamily: Fonts.POPPINS_REGULAR,
                            color: 'black',
                            textAlign: 'center',
                            marginTop: 10,
                            fontFamily: Fonts.POPPINS_REGULAR
                          }}>
                          {data.title}
                        </Text>
                        <Text style={{ fontSize: 15, fontFamily: Fonts.POPPINS_BOLD, color: "green", paddingHorizontal: 10, marginTop: 10 }}> Rs. {data.price}</Text>
                        <View style={{ flexDirection: 'row' }}>
                          <Text style={{ fontSize: 15, fontFamily: Fonts.POPPINS_BOLD, color: "red", paddingHorizontal: 10, marginTop: 0.5, textDecorationLine: 'line-through' }}>Rs . {data.pricebefore}</Text>
                          <Text style={{ fontSize: 15, fontFamily: Fonts.POPPINS_BOLD, color: "green", paddingHorizontal: 10, marginTop: 0.5 }}>{data.discount} off</Text>
                        </View>


                        <Text style={{ fontSize: 12, fontFamily: Fonts.POPPINS_BOLD, color: "grey", paddingHorizontal: 10, marginTop: 0.5 }}>Quantity : {data.quantity}</Text>
                        <View style={{ flexDirection: 'row' }}>
                          <Text style={{ fontSize: 15, fontFamily: Fonts.POPPINS_BOLD, color: "green", paddingHorizontal: 10, marginTop: 0.5 }}>{ratings}({rate1})</Text>
                          <Image source={require("../assets/images/star.png")} style={{ width: 20, height: 20 }} />
                        </View></View>

                    </View>
                  </TouchableOpacity>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  Maintitle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginBottom: 1,
  },
  Headingtextholder: {},
  Headingtext: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: Fonts.POPPINS_REGULAR,
  },
  cont: {

  },
  imagess: {
  },
});

export default Allproducts;
