import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import DynamicForm from '@coffeebeanslabs/react-native-form-builder';
import {Belt,Bracelet,Cufflinks,Fragrance,HatsandCaps,PocketSquare,Rings,Socks,Ties,Glasses, Jackets, Shorts, FormalTrousers, Sweaters, SweatShirt, SwimWear, TShirt, SportsWear, CausalShirts } from "../Data/Formdata" 
const Data = [
  {
    id:1,name:"Casual Shirts"
  },
  {
    id:2,name:"Casual Trousers and chinos"
  },
  {
    id:3,name:"Formal Trousers"
  },
  {
    id:4,name:"Jackets"
  },
  {
    id:5,name:"Sports"
  },
  {
    id:6,name:"Sweaters"
  },
  {
    id:7,name:"Sweat Shirts"
  },
  {
    id:8,name:"Swim Wear"
  },
  {
    id:9,name:"T-Shirts & Polos"
  },
  {
    id:10,name:"Shorts"
  }
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
const Clothing = () => {
  const aa = 'input-text';
  
function Productsform(formTemplate) {
    console.log(formTemplate)
    console.log("uuuu");
  return(    
          
      <SellerAccount/>    
   );
}
  function Nestedifelse(service) {
    if (service === 'Casual Shirts') {
        console.log("clicked") 
      return(
        <View style = {{height:heightPercentageToDP("60%")}}>
          <ScrollView style = {{height:heightPercentageToDP("60%")}}>
        <DynamicForm formTemplate={CausalShirts}  onSubmit={onSubmit}/>
        </ScrollView></View>
      )
    }
    else if(service === 'Casual Trousers and chinos'){
        return(
          <View style = {{height:heightPercentageToDP("60%")}}>
          <ScrollView style = {{height:heightPercentageToDP("60%")}}>
        <DynamicForm formTemplate={CausalShirts}  onSubmit={onSubmit}/>
        </ScrollView></View>
        )
    }
    else if(service === 'Formal Trousers'){
        return(
          <View style = {{height:heightPercentageToDP("60%")}}>
          <ScrollView style = {{height:heightPercentageToDP("60%")}}>
        <DynamicForm formTemplate={FormalTrousers}  onSubmit={onSubmit}/>
        </ScrollView></View>
        )
    }
    else if(service === 'Jackets'){
        return(
          <View style = {{height:heightPercentageToDP("60%")}}>
          <ScrollView style = {{height:heightPercentageToDP("60%")}}>
        <DynamicForm formTemplate={Jackets}  onSubmit={onSubmit}/>
        </ScrollView></View>
        )
    }
    else if(service === 'Sports'){
        return(
          <View style = {{height:heightPercentageToDP("60%")}}>
          <ScrollView style = {{height:heightPercentageToDP("60%")}}>
        <DynamicForm formTemplate={SportsWear}  onSubmit={onSubmit}/>
        </ScrollView></View>
        )
    }
    else if(service === 'Sweaters'){
        return(
          <View style = {{height:heightPercentageToDP("60%")}}>
          <ScrollView style = {{height:heightPercentageToDP("60%")}}>
        <DynamicForm formTemplate={Sweaters}  onSubmit={onSubmit}/>
        </ScrollView></View>
        )
    }
    else if(service === 'Sweat Shirts'){
        return(
          <View style = {{height:heightPercentageToDP("60%")}}>
          <ScrollView style = {{height:heightPercentageToDP("60%")}}>
        <DynamicForm formTemplate={SweatShirt}  onSubmit={onSubmit}/>
        </ScrollView></View>
        )
    }
    else if(service === 'Swim Wear'){
        return(
          <View style = {{height:heightPercentageToDP("60%")}}>
          <ScrollView style = {{height:heightPercentageToDP("60%")}}>
        <DynamicForm formTemplate={SwimWear}  onSubmit={onSubmit}/>
        </ScrollView></View>
        )
    }
    else if(service === 'Shorts'){
      return(
        <View style = {{height:heightPercentageToDP("60%")}}>
        <ScrollView style = {{height:heightPercentageToDP("60%")}}>
      <DynamicForm formTemplate={Shorts}  onSubmit={onSubmit}/>
      </ScrollView></View>
      )
  }
    else if(service === 'T-Shirts & Polos'){
        return(
          <View style = {{height:heightPercentageToDP("60%")}}>
          <ScrollView style = {{height:heightPercentageToDP("60%")}}>
        <DynamicForm formTemplate={TShirt}  onSubmit={onSubmit}/>
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

export default Clothing;
