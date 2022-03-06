import React from 'react';
import { Accordion, Box, NativeBaseProvider, Center, ScrollView } from 'native-base';
import { View, Text } from 'react-native';

import { heightPercentageToDP } from 'react-native-responsive-screen';
const Data = [
    {id:1,Question:"How Do i return a product i have purchased from zmall?",Answer:"Zmall is Good"},{id:2,Question:"How Do i return a product i have purchased from zmall ?",Answer:"Zmall is Good"},{id:3,Question:"How Do i return a product i have purchased from zmall ?",Answer:"Zmall is Good"},{id:4,Question:"How Do i return a product i have purchased from zmall ?",Answer:"Zmall is Good"},
    {id:5,Question:"How Do i return a product i have purchased from zmall ?",Answer:"Zmall is Good"}
]

function AccordionComponent() {
  
  return (
    <Box m={3}>
      <Accordion allowMultiple>
          {Data.map((data)=>{
              return(

                <Accordion.Item>
                <Accordion.Summary>
                  {data.Question} 
                </Accordion.Summary>
                <Accordion.Details>
                 {data.Answer}</Accordion.Details>
              </Accordion.Item>
              )
          })}
       </Accordion>
    </Box>
  );
}
export default function Generalfaq () {
  return (
    <NativeBaseProvider>
        <View style  =  {{height:heightPercentageToDP("60%")}}>
        <ScrollView style  =  {{height:heightPercentageToDP("60%")}}>
      <Center flex={1}>
        <AccordionComponent />
      </Center></ScrollView></View>
    </NativeBaseProvider>
  );
}
