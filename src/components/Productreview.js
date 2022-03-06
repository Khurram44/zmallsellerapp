import React from 'react'
import { View, Text,Image } from 'react-native'
import { heightPercentageToDP } from 'react-native-responsive-screen'

const Productreview = () => {
    return (
        <View style = {{flex:1,backgroundColor:"white" ,alignItems:'center',justifyContent:'center'}}>
            <Image source = {require("../assets/images/review.png")} style = {{width:150,height:150}}/>
        </View>
    )
}

export default Productreview
