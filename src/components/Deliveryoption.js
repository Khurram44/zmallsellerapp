import React from 'react'
import { View, Text } from 'react-native'
import { heightPercentageToDP } from 'react-native-responsive-screen'
import { Fonts } from '../contants'
import DynamicForm from '@coffeebeanslabs/react-native-form-builder';
const Deliveryoption = () => {
    const formTemplate = {
        data: [
           {
            component: 'input-radio',
            field_name: 'gender',
            is_mandatory: 'true',
            meta: {
              text: 'STANDARD',
              data: [
                 
                {
                  label: 'TRAX',
                  value: 'TRAX'
                }
              ]
            }
          }
        ]
      }
     
    
      
      const onSubmit = formFields => {  
        console.log('Form submitted with fields: ', formFields);
      }
    return (
        <View style = {{flex:1,alignItems:'center'}}>
            <Text style = {{marginTop:heightPercentageToDP("10%"),color:"grey",fontSize:25,fontFamily:Fonts.POPPINS_REGULAR}}></Text>
            
      <DynamicForm formTemplate={formTemplate}  onSubmit={onSubmit}/>
        </View>
    )
}

export default Deliveryoption
