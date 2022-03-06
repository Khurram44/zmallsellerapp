import {createNavigatorFactory} from '@react-navigation/core';
import React,{Component} from 'react';
import {View, Text, StyleSheet, StatusBar,Button} from 'react-native';
import CategoryList from '../components/CategoryList';

import {Fonts} from '../contants';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {heightPercentageToDP, widthPercentageToDP} from 'react-native-responsive-screen';
import {Separator} from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PasswordInputText from 'react-native-hide-show-password-input';

export default class Changepassword extends Component {

  constructor(props) {
    super(props);
    this.state = {
      password: '',
    };
  }
  
  render() {
    const { password } = this.state;
    
    return (
      <View style={{ margin: 20 }}>
<StatusBar barStyle="dark-content" backgroundColor="grey" translucent />
      <Separator height={StatusBar.currentHeight} />
      <View style={styles.headerContainer}>
        <Ionicons
          name="chevron-back-outline"
          size={25}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTitle}>Change Password</Text>
      </View>
        <PasswordInputText
          getRef={input => this.input = input}
          value={password}
          onChangeText={(password) => this.setState({ password })}
          label={"Enter the Current Password"}
        />
        <PasswordInputText
          getRef={input => this.input = input}
          value={password}
          onChangeText={(password) => this.setState({ password })}
          label={"Enter New Password"}
        />
        <PasswordInputText
          getRef={input => this.input = input}
          value={password}
          onChangeText={(password) => this.setState({ password })}
          label={"Confirm New Password"}
        />

        <Button
          title="Update"
          onPress={() => this.input.clear()} />
          
      </View>
    );
  }
}
const styles = StyleSheet.create({
    MainHeader: {
      flex: 1,
      backgroundColor: '#eff0f4',
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
      marginLeft: widthPercentageToDP('20%'),
      textAlign: 'center',
    },
    Buttonholder: {
       
    },
  });