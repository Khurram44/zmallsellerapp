import React from 'react';
import {
  StyleSheet,
  View,Text,StatusBar,ScrollView
} from 'react-native';
import DynamicForm from '@coffeebeanslabs/react-native-form-builder';import {heightPercentageToDP, widthPercentageToDP} from 'react-native-responsive-screen';
import {Separator} from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
    Select,
    VStack,
    CheckIcon,
    Center,
    NativeBaseProvider,
  } from "native-base"
import {Fonts} from '../contants'; 
import { TouchableOpacity } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';

const Addbank = () => {
    let [service, setService] = React.useState("")

    const formTemplate = {
        data: [
          {
            component: 'input-text',
            field_name: 'Title',
            is_mandatory: 'true',
            meta: {
              label: 'Title',
              placeholder: 'Enter the Title of Your Bank Account..',
            },
          },
    
        
          {
            index: 2,
            component: 'input-text',
            field_name: 'Account Number',
            is_mandatory: 'true',
            meta: {
              label: 'Account Number',
              placeholder: 'Enter the Account Number of your Bank',
            },
          },
          
        ],
      };
    
      const onSubmit = formFields => {
        // Actions on submit button click.
        console.log('Form submitted with fields: ', formFields);
      };


    return (
        <NativeBaseProvider><View style = {{flex:1}}>
          <StatusBar barStyle="dark-content" backgroundColor="grey" translucent />
        <Separator height={StatusBar.currentHeight} />
        <View style={styles.headerContainer}>
          <Ionicons
            name="chevron-back-outline"
            size={25}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.headerTitle}>Add Bank Account</Text>
         
        
        </View>
<View style = {{flex:1,marginTop:heightPercentageToDP("10%")}}>
<VStack alignItems="center" space={4}>
      <Select
        selectedValue={service}
        minWidth="200"
        accessibilityLabel="Choose a Bank"
        placeholder="Choose a Bank"
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />,
        }}
        mt={1}
        onValueChange={(itemValue) => setService(itemValue)}
      >
        <Select.Item label="UX Research" value="ux" />
        <Select.Item label="Web Development" value="web" />
        <Select.Item label="Cross Platform Development" value="cross" />
        <Select.Item label="UI Designing" value="ui" />
        <Select.Item label="Backend Development" value="backend" />
        <Select.Item label="UX Research" value="ux" />
        <Select.Item label="Web Development" value="web" />
        <Select.Item label="Cross Platform Development" value="cross" />
        <Select.Item label="UI Designing" value="ui" />
        <Select.Item label="Backend Development" value="backend" />
        <Select.Item label="UX Research" value="ux" />
        <Select.Item label="Web Development" value="web" />
        <Select.Item label="Cross Platform Development" value="cross" />
        <Select.Item label="UI Designing" value="ui" />
        <Select.Item label="Backend Development" value="backend" />
        <Select.Item label="UX Research" value="ux" />
        <Select.Item label="Web Development" value="web" />
        <Select.Item label="Cross Platform Development" value="cross" />
        <Select.Item label="UI Designing" value="ui" />
        <Select.Item label="Backend Development" value="backend" />
      </Select>
    </VStack>

<DynamicForm formTemplate={formTemplate}  onSubmit={onSubmit}/>
</View>
        </View></NativeBaseProvider>

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
export default Addbank
