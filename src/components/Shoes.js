import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import DynamicForm from '@coffeebeanslabs/react-native-form-builder';
import {Belt,Bracelet,Cufflinks,Fragrance,HatsandCaps,PocketSquare,Rings,Socks,Ties,Glasses, Jackets, Shorts, FormalTrousers, Sweaters, SweatShirt, SwimWear, TShirt, SportsWear, CausalShirts, CausalShoes, FormalShoes, Sandals, SportsShoes } from "../Data/Formdata" 
const Data = [
  {
    id:1,name:"Casual Shoes"
  },
  {
    id:2,name:"Formal Shoes"
  },
  {
    id:3,name:"Sandals and Sleepers"
  },
  {
    id:4,name:"Sports Shoes"
  },
  
]
 import {
  Select,
  VStack,
  CheckIcon,
  Center,
  NativeBaseProvider,
} from 'native-base';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Contactus from './Contactus';
import Termsandpolicy from './Termsandpolicy';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors, Fonts} from '../contants';
import Help from './Help';
import SellerAccount from './SellerAccount';
import Businessinfo from './Businessinfo';
import Address from './Address';
import Returnaddress from './Returnaddress';
 
 
const onSubmit = formFields => {
  // Actions on submit button click.
  console.log('Form submitted with fields: ', formFields.birthDate.value);
};
const Shoes = () => {
  const aa = 'input-text';
  
function Productsform(formTemplate) {
    console.log(formTemplate)
    console.log("uuuu");
  return(    
          
      <SellerAccount/>    
   );
}
  function Nestedifelse(service) {
    if (service === 'Casual Shoes') {
        console.log("clicked") 
      return(
        <View style = {{height:heightPercentageToDP("60%")}}>
          <ScrollView style = {{height:heightPercentageToDP("60%")}}>
        <DynamicForm formTemplate={CausalShoes}  onSubmit={onSubmit}/>
        </ScrollView></View>
      )
    }
    else if(service === 'Formal Shoes'){
        return(
          <View style = {{height:heightPercentageToDP("60%")}}>
          <ScrollView style = {{height:heightPercentageToDP("60%")}}>
        <DynamicForm formTemplate={FormalShoes}  onSubmit={onSubmit}/>
        </ScrollView></View>
        )
    }
    else if(service === 'Sandals and Sleepers'){
        return(
          <View style = {{height:heightPercentageToDP("60%")}}>
          <ScrollView style = {{height:heightPercentageToDP("60%")}}>
        <DynamicForm formTemplate={Sandals}  onSubmit={onSubmit}/>
        </ScrollView></View>
        )
    }
    else if(service === 'Sports Shoes'){
        return(
          <View style = {{height:heightPercentageToDP("60%")}}>
          <ScrollView style = {{height:heightPercentageToDP("60%")}}>
        <DynamicForm formTemplate={SportsShoes}  onSubmit={onSubmit}/>
        </ScrollView></View>
        )
    }
     
  }

  let [service, setService] = React.useState('');

  return (
    <NativeBaseProvider>
        <ScrollView style = {{height:heightPercentageToDP("50%")}}>
        <VStack alignItems="center" space={4}>
          <Select
            selectedValue={service}
            minWidth="375"
            accessibilityLabel="Select Your Product"
            placeholder="Select Information Type"
            _selectedItem={{
              bg: '#c89956',
              endIcon: <CheckIcon size="5" />,
            }}
            mt={5}
            onValueChange={itemValue => setService(itemValue)}>
              {Data.map((data)=>{
                return(
                  <Select.Item label={data.name} value={data.name} />
                )
              })}
           
           </Select>
         </VStack>
        {Nestedifelse(service)}
        </ScrollView>
        
            
         
    </NativeBaseProvider>
  );
};

export default Shoes;
