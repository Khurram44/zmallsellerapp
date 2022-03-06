import React from 'react'
import { View, Text } from 'react-native'
import axios from 'axios'
import { useEffect,useState } from 'react'

const Sellerlogo = () => {
    const [help, setHelp] = useState([])

  useEffect(()=>{
   
    const url ="https://zmallapi.herokuapp.com/api/v1/faqs/resp/shipment%20&%20delivery"
    const api_call = async ()=>{
      const result = await axios.get(url)
      setHelp(result.data)
      console.log("new Faqs",result.data)
    }
    api_call()
  },[])

    return (
        <View style = {{marginTop:120}}>
           { help.map((help)=>(<View><Text>{help.question}</Text>
           <Text>{help.answer}</Text></View>)) }
        </View>
    )
}

export default Sellerlogo
