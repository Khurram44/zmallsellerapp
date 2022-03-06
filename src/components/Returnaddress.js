import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import DynamicForm from '@coffeebeanslabs/react-native-form-builder';
 
function Returnaddress(props) {
  const formTemplate = {
    data: [
       {
        component: 'input-radio',
        field_name: 'gender',
        is_mandatory: 'true',
        meta: {
          text: 'Copy From Actual Address',
          data: [
            {
              label: 'Yes',
              value: 'Yes'
            },
            {
              label: 'No',
              value: 'No'
            }
          ]
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
      <DynamicForm formTemplate={formTemplate} onSubmit={onSubmit} />
    </View>
  )
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
 
export default Returnaddress;