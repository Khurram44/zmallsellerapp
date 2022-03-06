import React from 'react';
import {
  StyleSheet,
  View,Text,StatusBar,ScrollView
} from 'react-native';
import {
  Select,
  VStack,
  CheckIcon,
  Center,
  NativeBaseProvider,
} from 'native-base';
import DynamicForm from '@coffeebeanslabs/react-native-form-builder';import {heightPercentageToDP, widthPercentageToDP} from 'react-native-responsive-screen';
import {Separator} from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Fonts} from '../contants'; 

function Address({navigation}) { 
    
  let [service, setService] = React.useState('');
  const formTemplate = {
    data: [
      
      {
        component: 'input-text',
        field_name: 'Full Name',
        is_mandatory: 'true',
        meta: {
          label: 'Full Name',
          placeholder: 'Taha Khalid'
        }
      },
      
      {
        component: 'input-text',
        field_name: 'Email',
        is_mandatory: 'true',
        meta: {
          label: 'Email',
          placeholder: 'qwed@gmail.com'
        }
      },
      {
        component: 'input-text',
        field_name: 'Address',
        is_mandatory: 'true',
        meta: {
          label: 'Address',
          placeholder: 'house 20 A lahore'
        }
      },
      {
        component: 'input-text',
        field_name: 'Mobile Number',
        is_mandatory: 'true',
        meta: {
          label: 'Mobile Number',
          placeholder: '03598418225'
        }
      },
       
      {
        component: 'input-text',
        field_name: 'Country',
        is_mandatory: 'true',
        meta: {
          label: 'Country',
          placeholder: 'Pakistan'
        }
      },
      
       
        
      
     
       
    ]
  }

  
  const onSubmit = formFields => {
    // Actions on submit button click.
    console.log('Form submitted with fields: ', formFields);
  }
  return (
    <View style={styles.container}> 
<ScrollView style = {{height:heightPercentageToDP("60%")}}>
      
<VStack alignItems="center" space={4}>
          <Select
            selectedValue={service}
            minWidth="375"
            accessibilityLabel="Select Your Province"
            placeholder="Select Your Province"
            _selectedItem={{
              bg: '#c89956',
              endIcon: <CheckIcon size="5" />,
            }}
            mt={5}
            onValueChange={itemValue => setService(itemValue)}>
            <Select.Item label="Punjab" value="Punjab" />
            <Select.Item label="Sindh" value="Sindh" />
            <Select.Item label="Balochistan" value="Balochistan" />
            <Select.Item label="KPK" value="KPK" />
            <Select.Item label="Gilgit Baltistan" value="Gilgit Baltistan" />
            <Select.Item label="Islamabad" value="Islamabad" />
          </Select>

          <Select
            selectedValue={service}
            minWidth="375"
            accessibilityLabel="Select Your City"
            placeholder="Select Your City"
            _selectedItem={{
              bg: '#c89956',
              endIcon: <CheckIcon size="5" />,
            }}
            mt={5}
            onValueChange={itemValue => setService(itemValue)}>
            <Select.Item label="Lahore" value="Lahore" />
            <Select.Item label="Rawalpindi" value="Rawalpindi" />
            <Select.Item label="Karachi" value="Karahi" />
            <Select.Item label="Okara" value="Okara" />
          </Select>
        </VStack>

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

export default Address;