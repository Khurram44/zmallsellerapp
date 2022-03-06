import React,{useState,useEffect} from 'react'
import { View, Text } from 'react-native'
import TextTicker from 'react-native-text-ticker'
import axios from 'axios'; 
import {Colors, Fonts, Images} from '../contants';
import { heightPercentageToDP } from 'react-native-responsive-screen';

const Overallcryptoticker = () => {

const [market, setmarket] = useState([]); 
  useEffect(() => { 
    axios
      .get('https://api.coingecko.com/api/v3/global')
      .then(res => {
        setmarket(res.data.data);
         
      })
      .catch(function (error) {
        console.error(error);
        
      });
  }, []); 
    return (
        <View>
            <TextTicker
          style={{
            fontSize: 20,
            marginBottom: 20,
            marginTop: 10,
            color: '#7b4600',
            fontWeight: 'bold',
            marginTop:heightPercentageToDP("5%"),
            fontFamily:Fonts.POPPINS_EXTRA_BOLD
          }}
          duration={50000}
          loop
          bounce
          repeatSpacer={100}
          scrollSpeed={50}
        >
          Active Crypto Currencies: {market?.active_cryptocurrencies + '    '}
          Market cap percentage of ETH:{' '}
          {market?.market_cap_percentage?.eth.toFixed(2) + '%' + '     '}
          Market cap percentage of ADA:{' '}
          {market?.market_cap_percentage?.ada.toFixed(2) + '%' + '     '}
          Market cap percentage of BNB:{' '}
          {market?.market_cap_percentage?.bnb.toFixed() + '%' + '    '}
          Market cap percentage of USDT is{' '}
          {market?.market_cap_percentage?.usdt.toFixed(2) + '%' + '    '}
          Market cap percentage of XRP:{' '}
          {market?.market_cap_percentage?.xrp.toFixed(2) + '%' + '    '}
          
          Market cap percentage of USDC:{' '}
          {market?.market_cap_percentage?.usdc.toFixed(2) + '%' + '    '}
          Market cap percentage of SOL:{' '}
          {market?.market_cap_percentage?.sol.toFixed(2) + '%' + '    '}
       
        </TextTicker>
        </View>
    )
}

export default Overallcryptoticker;
