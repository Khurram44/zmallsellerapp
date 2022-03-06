import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import DynamicForm from '@coffeebeanslabs/react-native-form-builder';
import {Belt,Bracelet,Cufflinks,Fragrance,HatsandCaps,PocketSquare,Rings,Socks,Ties,Glasses, Jackets, Shorts, FormalTrousers, Sweaters, SweatShirt, SwimWear, TShirt, SportsWear, CausalShirts} from "../Data/Formdata" 
const Data = [
  {
    id:1,name:"Bag Pack"
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
  addProduct();
  function addProduct() {
    axios.post('https://zmallapi.herokuapp.com/api/v1/products',{
      "title": formFields.name.value,
      "slug": formFields.name.value,
      "images": "210612091035130 (4).webp",
      "quantity": formFields.Quantity.value,
      "category": 323,
      "sub_category_id": 506, //This is for adding category
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
const Bags = () => {
  const aa = 'input-text';
  
function Productsform(formTemplate) {
    console.log(formTemplate)
    console.log("uuuu");
  return(    
          
      <SellerAccount/>    
   );
}
  function Nestedifelse(service) {
    if (service === 'Bag Pack') { 
      return(
        <View style = {{height:heightPercentageToDP("60%")}}>
          <ScrollView style = {{height:heightPercentageToDP("60%")}}>
        <DynamicForm formTemplate={CausalShirts}  onSubmit={onSubmit}/>
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

export default Bags;
