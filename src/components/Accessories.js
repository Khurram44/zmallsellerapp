import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import DynamicForm from '@coffeebeanslabs/react-native-form-builder';
import { useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';
import {Belt,Bracelet,Cufflinks,Fragrance,HatsandCaps,PocketSquare,Rings,Socks,Ties,Glasses } from "../Data/Formdata" 
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
 
 
const onSubmit  = formFields => {
  // Actions on submit button click.
  console.log('Form submitted with fields: ', formFields);
  addProduct();
  function addProduct() {
    axios.post('https://zmallapi.herokuapp.com/api/v1/products',{
      "title": formFields.name.value,
      "slug": formFields.name.value,
      "images": "210612091035130 (4).webp",
      "quantity": formFields.Quantity.value,
      "category": 323,
      "sub_category_id": 507,
      "brand_id": formFields.Brand.value,
      "type_id": formFields.Product_id.value,
      "product_sku": "",
      "availability": "yes",
      "description": formFields.Description.value,
      "price": formFields.Price.value,
      "status": "active",
      "discount_type": "Fixed",
      "discount_price": formFields.Discount.value,
      "promotion_discount": null,
      "allow_sale": "No",
      "model_no": formFields.Model.value,
      "length": formFields.length.value,
      "breath": formFields.Breath.value,
      "height": formFields.Height.value,
      "dimensionIn": formFields.PackageDimention.value,
      "weight": formFields.Weight.value,
      "weightIn": formFields.ProductWeight.value,
      "is_deleted": 0,
      "added_on": moment().format('YYYY-MM-DD'),
      "added_by": 2100000,
      "permission": "Requested",
      "reject_reason": null,
      "video": formFields.video.value,
      "sold": "0"
      })
    
}
};
const Accessories = () => {
  const acc_ID = 507
  const [Status, setStatus] = useState();
  const url = `https://zmallapi.herokuapp.com/api/v1/manage/`
  useEffect(() => {
    const api = async () => {
      const result  = await axios.get(url);
      setStatus(result.data)
    }
    api()
  }, []);
  console.log(Status);
  // const filter = Status.filter(item => item.module_id === 2 && item.parent_id === 2)
  
  // console.log(filter);
  const aa = 'input-text';
  console.log('Accessories')
  const accId = 507
function Productsform(formTemplate) {
    console.log(formTemplate)
    console.log("uuuu");
  return(    
          
      <SellerAccount/>    
   );
}
  function Nestedifelse(service) {
    if (service === 'Belts') {
        console.log("clicked") 
      return(
        <View style = {{height:heightPercentageToDP("60%")}}>
          <ScrollView style = {{height:heightPercentageToDP("60%")}}>
        <DynamicForm formTemplate={Belt}  onSubmit={onSubmit}/>
        </ScrollView></View>
      )
    }
    else if(service === 'Bracelets'){
        return(
          <View style = {{height:heightPercentageToDP("60%")}}>
          <ScrollView style = {{height:heightPercentageToDP("60%")}}>
        <DynamicForm formTemplate={Bracelet}  onSubmit={onSubmit}/>
        </ScrollView></View>
        )
    }
    else if(service === 'Cufflinks'){
        return(
          <View style = {{height:heightPercentageToDP("60%")}}>
          <ScrollView style = {{height:heightPercentageToDP("60%")}}>
        <DynamicForm formTemplate={Cufflinks}  onSubmit={onSubmit}/>
        </ScrollView></View>
        )
    }
    else if(service === 'Hats and Caps'){
        return(
          <View style = {{height:heightPercentageToDP("60%")}}>
          <ScrollView style = {{height:heightPercentageToDP("60%")}}>
        <DynamicForm formTemplate={HatsandCaps}  onSubmit={onSubmit}/>
        </ScrollView></View>
        )
    }
    else if(service === 'Fragrance'){
        return(
          <View style = {{height:heightPercentageToDP("60%")}}>
          <ScrollView style = {{height:heightPercentageToDP("60%")}}>
        <DynamicForm formTemplate={Fragrance}  onSubmit={onSubmit}/>
        </ScrollView></View>
        )
    }
    else if(service === 'Pocket Squares'){
        return(
          <View style = {{height:heightPercentageToDP("60%")}}>
          <ScrollView style = {{height:heightPercentageToDP("60%")}}>
        <DynamicForm formTemplate={PocketSquare}  onSubmit={onSubmit}/>
        </ScrollView></View>
        )
    }
    else if(service === 'Rings'){
        return(
          <View style = {{height:heightPercentageToDP("60%")}}>
          <ScrollView style = {{height:heightPercentageToDP("60%")}}>
        <DynamicForm formTemplate={Rings}  onSubmit={onSubmit}/>
        </ScrollView></View>
        )
    }
    else if(service === 'Socks'){
        return(
          <View style = {{height:heightPercentageToDP("60%")}}>
          <ScrollView style = {{height:heightPercentageToDP("60%")}}>
        <DynamicForm formTemplate={Socks}  onSubmit={onSubmit}/>
        </ScrollView></View>
        )
    }
    else if(service === 'Sports Accessories'){
        return(
          <View style = {{height:heightPercentageToDP("60%")}}>
          <ScrollView style = {{height:heightPercentageToDP("60%")}}>
        <DynamicForm formTemplate={Belt}  onSubmit={onSubmit}/>
        </ScrollView></View>
        )
    }
    else if(service === 'Sunglasses'){
        return(
          <View style = {{height:heightPercentageToDP("60%")}}>
          <ScrollView style = {{height:heightPercentageToDP("60%")}}>
        <DynamicForm formTemplate={Glasses}  onSubmit={onSubmit}/>
        </ScrollView></View>
        )
    }
    else if(service === 'Ties'){
        return(
          <View style = {{height:heightPercentageToDP("60%")}}>
          <ScrollView style = {{height:heightPercentageToDP("60%")}}>
        <DynamicForm formTemplate={Ties}  onSubmit={onSubmit}/>
        </ScrollView></View>
        )
    }
     
   
  }

  let [service, setService] = React.useState('');

  return (
    <NativeBaseProvider>
      {/* <View>{filter.map((res)=><Text>{res.module_id} AND {res.parent_id}</Text>)}</View> */}
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
            <Select.Item label="Belts" value="Belts" />
            <Select.Item label="Bracelets" value="Bracelets" />
            <Select.Item label="Cufflinks" value="Cufflinks" />
            <Select.Item label="Hats and Caps" value="Hats and Caps" />
            <Select.Item label="Fragrance" value="Fragrance" />
            <Select.Item label="Pocket Squares" value="Pocket Squares" />
            <Select.Item label="Rings" value="Rings" />
            <Select.Item label="Socks" value="Socks" />
            <Select.Item label="Sports Accessories" value="Sports Accessories" />
            <Select.Item label="Sunglasses" value="Sunglasses" />
            <Select.Item label="Ties" value="Ties" />
          </Select>
         </VStack>
        {Nestedifelse(service)}
        </ScrollView>
        
            
         
    </NativeBaseProvider>
  );
};

export default Accessories;
