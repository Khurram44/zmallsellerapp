import React from 'react';
import { Accordion, Box, NativeBaseProvider, Center, ScrollView } from 'native-base';
import { View, Text } from 'react-native';
import axios from 'axios'
import { useEffect,useState } from 'react';

import { heightPercentageToDP } from 'react-native-responsive-screen';
const Data = [
    {id:1,Question:"How Do i return a product i have purchased from zmall?",Answer:"Zmall is Good"},{id:2,Question:"How Do i return a product i have purchased from zmall ?",Answer:"Zmall is Good"},{id:3,Question:"How Do i return a product i have purchased from zmall ?",Answer:"Zmall is Good"},{id:4,Question:"How Do i return a product i have purchased from zmall ?",Answer:"Zmall is Good"},
    {id:5,Question:"How Do i return a product i have purchased from zmall ?",Answer:"Zmall is Good"}
]

function AccordionComponent() {
  const [data , setData] = useState([])
  useEffect(()=>{
   
    const url ="https://zmallapi.herokuapp.com/api/v1/faqs/resp/cashback"
    const api_call = async ()=>{
      const result = await axios.get(url)
      setData(result.data)
      console.log("new Faqs",result.data)
    }
    api_call()
  },[])

  return (
    <Box m={3}>
      <Accordion allowMultiple>
          {data.map((data)=>{
              return(

                <Accordion.Item>
                <Accordion.Summary>
                  {data.question} 
                </Accordion.Summary>
                <Accordion.Details>
                 {data.answer}</Accordion.Details>
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
