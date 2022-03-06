import React from 'react';
import {
  StyleSheet,
  View,Text,StatusBar,ScrollView
} from 'react-native';
import DynamicForm from '@coffeebeanslabs/react-native-form-builder';import {heightPercentageToDP, widthPercentageToDP} from 'react-native-responsive-screen';
import {Separator} from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Fonts} from '../contants'; 

function Adddiscount({navigation}) { 
    
  const formTemplate = {
    data: [
      
      {
        component: 'input-text',
        field_name: 'name',
        is_mandatory: 'true',
        meta: {
          label: 'Promotion Name',
          placeholder: 'Enter Promotion name..'
        }
      },
      
      {
        component: 'input-text',
        field_name: 'name',
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
          title: 'Starting Date'
        }
      },
      {
        component: 'input-date',
        field_name: 'birthDate',
        is_mandatory: 'true',
        meta: {
          title: ' Ending Date'
        }
      },
      { 
        component: 'input-radio',
        field_name: 'gender',
        is_mandatory: 'true',
        meta: {
          text: 'Select The Discount Type',
          data: [
            {
              label: 'Fix Amount',
              value: 'Fix Amount'
            },
            {
              label: 'Percentage',
              value: 'Percentage'
            }
          ]
        }
      },
      {
        index: 2,
        component: 'input-text',
        field_name: 'Enter The Discount Amount',
        is_mandatory: 'true',
        meta: {
          label: 'Enter The Discount Amount',
          placeholder: 'Enter The Discount Amount'
        }
      },
       
      { 
        component: 'input-text',
        field_name: 'Usage Quantity',
        is_mandatory: 'true',
        meta: {
          label: 'Usage Quantity',
          placeholder: 'Usage Quantity'
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
<ScrollView>
     <StatusBar barStyle="dark-content" backgroundColor="grey" translucent />
      <Separator height={StatusBar.currentHeight} />
      <View style={styles.headerContainer}>
        <Ionicons
          name="chevron-back-outline"
          size={25}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTitle}>Create Discount Promotions</Text>
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

export default Adddiscount;