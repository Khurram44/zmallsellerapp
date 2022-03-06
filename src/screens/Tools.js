 
import React from 'react'
import { View, Text,StyleSheet,ScrollView } from 'react-native'
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { height } from 'styled-system';
import ToolsItem from '../components/ToolsItem';
import { Fonts } from '../contants'; 
const Tools = () => {
    return (
        <View style = {styles.MainHeader}>
        <ScrollView >  
          <View style = {{ marginTop:heightPercentageToDP("1%") }}>
            
            <Text style = {styles.MainHeaderText}>Tools</Text></View> 
          
            <ToolsItem/></ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    MainHeader: { 
      backgroundColor:'#eff0f4',
      height:heightPercentageToDP("90%") 
    },
    MainHeaderText:{
    fontSize:25,
    color:"#121317",
    fontFamily:Fonts.POPPINS_SEMI_BOLD,
    padding:15
    }
  });
export default Tools
