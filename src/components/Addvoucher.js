import React from 'react';
import {
  StyleSheet,
  View,Text,StatusBar,ScrollView
} from 'react-native';
import DynamicForm from '@coffeebeanslabs/react-native-form-builder';import {heightPercentageToDP, widthPercentageToDP} from 'react-native-responsive-screen';
import {Separator} from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Fonts} from '../contants'; 
import axios from 'axios'

function Addvoucher({route,navigation}) { 
    const {name} = route.params
    const url = 'https://zmallapi.herokuapp.com/api/v1/vouchers'
    console.log(name)
  const formTemplate = {
    data: [
      
      {
        id:1,
        component: 'input-text',
        field_name: 'vname',
        is_mandatory: 'true',
        meta: {
          label: 'Voucher Name',
          placeholder: 'Enter name..'
        }
      },
      
      {
        id:2,
        component: 'input-text',
        field_name: 'cname',
        is_mandatory: 'true',
        meta: {
          label: 'Voucher Code',
          placeholder: 'Enter name..'
        }
      },
      {
        component: 'input-date',
        field_name: 'birthDate',
        is_mandatory: 'true',
        meta: {
          title: 'Voucher Claim Period Starting Date'
        }
      },
      {
        component: 'input-date',
        field_name: 'birthDate1',
        is_mandatory: 'true',
        meta: {
          title: 'Voucher Claim Period Ending Date'
        }
      },
       
    ]
  }
  

  
  const onSubmit = formFields => {
    // Actions on submit button click.
    console.log('Form submitted with fields: ', formFields.birthDate.value);
    AddData()
    function AddData (){
      axios.post(url,{
        "user_id": 3705,
        "type": name,
        "voucher_name": formFields.vname.value,
        "voucher_code": formFields.cname.value,
        "starting_time": formFields.birthDate.value,
        "ending_time": formFields.birthDate1.value,
        "discount_type": "Fix Amount",
        "discount_number": "300",
        "min_price": 0,
        "quantity": 12,
        "claimed": 0,
        "product": "[\"729\"]",
        "status": "Active"
        })

    }

  }
  return (
    <View style={styles.container}> 
<ScrollView>
     <StatusBar barStyle="dark-content" backgroundColor="grey" translucent />
      <Separator height={StatusBar.currentHeight} />
      <View style={styles.headerContainer}>
        <Ionicons
          name="chevron-back-outline"
          size={25}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTitle}>Create Vouchers</Text>
      </View>
    
   
      <DynamicForm formTemplate={formTemplate}  onSubmit={onSubmit}/>
      
      </ScrollView>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginLeft: widthPercentageToDP('25%'),
    textAlign: 'center',
  },
});

export default Addvoucher;