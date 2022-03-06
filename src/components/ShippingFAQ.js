import React from 'react';
import { Accordion, Box, NativeBaseProvider, Center, ScrollView } from 'native-base';
import { View, Text } from 'react-native';
import axios from 'axios'
import { useEffect,useState } from 'react';

import { heightPercentageToDP } from 'react-native-responsive-screen';

function AccordionComponent() {
  const [data , setData] = useState([])
  // const [filter , setFilter] = useState([])
  useEffect(()=>{
   
    const url ="https://zmallapi.herokuapp.com/api/v1/faqs"
    const api_call = async ()=>{
      const result = await axios.get(url)
      setData(result.data)
      // console.log("new Faqs",result.data)
    }
    api_call()
  },[])
  // const filteredUsers = services.filter(users => users.sub_category_id == subcatID && users.category_id == itemID )
        
 const filter = data.filter(res => res.category == 'Shipment & Delivery' )
  console.log("Filtered",filter)

  return (
    <Box m={3}>
      <Accordion allowMultiple>
          {filter.map((data)=>{
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
