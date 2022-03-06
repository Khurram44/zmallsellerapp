import React from 'react'
import { View, Text,StatusBar } from 'react-native'
import {Separator} from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {Colors, Fonts} from '../contants';
import {Display} from '../utils';
import Vouchermain from './Vouchermain';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import Bundledealsmain from './Bundledealsmain';
const Bundledealsamain = ({navigation}) => {
    return (
        <View style = {{flex:1}}>
          <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      <View style = {{flexDirection:'row',marginTop:10,padding:7.5}}>
        <Ionicons
          name="chevron-back-outline"
          size={30}
          onPress={() => navigation.goBack()}
          style = {{marginLeft:10}}
        />
        <Text style = {{marginLeft:widthPercentageToDP("25%"),fontSize:20}}>Bundledeals</Text>
        

      </View>
      
<Bundledealsmain/>
        </View>
    )
}

export default Bundledealsamain
