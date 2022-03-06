import React from 'react';
import {
  StyleSheet,
  View,Text,StatusBar,ScrollView
} from 'react-native';
import DynamicForm from '@coffeebeanslabs/react-native-form-builder';import {heightPercentageToDP, widthPercentageToDP} from 'react-native-responsive-screen';
import {Separator} from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Fonts} from '../contants'; 

function SellerAccount({navigation}) { 
    
  const formTemplate = {
    data: [
      
      {
        component: 'input-text',
        field_name: 'First Name',
        is_mandatory: 'true',
        meta: {
          label: 'First Name',
          placeholder: 'Taha'
        }
      },
      
      {
        component: 'input-text',
        field_name: 'name',
        is_mandatory: 'true',
        meta: {
          label: 'Last Name',
          placeholder: 'Khalid'
        }
      },
      {
        component: 'input-text',
        field_name: 'name',
        is_mandatory: 'true',
        meta: {
          label: 'Email',
          placeholder: 'qwret@gmail.com'
        }
      },
       
     
      {
        index: 2,
        component: 'input-text',
        field_name: 'Enter The Discount Amount',
        is_mandatory: 'true',
        meta: {
          label: 'Phone Number',
          placeholder: '03102547897'
        }
      },
       
      { 
        component: 'input-text',
        field_name: 'Usage Quantity',
        is_mandatory: 'true',
        meta: {
          label: 'Shop Name',
          placeholder: 'zstore'
        }
      }
     
       
    ]
  }

  
  const onSubmit = formFields => {
    // Actions on submit button click.
    console.log('Form submitted with fields: ', formFields);
  }
  return (
    <View style={styles.container}> 
<ScrollView style = {{height:heightPercentageToDP("60%")}}>
      
   
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
    paddingHorizontal: 1,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: Fonts.POPPINS_BOLD,
    lineHeight: 20 * 1.4,
    marginLeft: widthPercentageToDP('15%'),
    textAlign: 'center',
  },
});

export default SellerAccount;