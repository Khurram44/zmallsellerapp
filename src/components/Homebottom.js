import React,{useEffect,useState} from 'react'
import { View, Text,StyleSheet,Image} from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  
import axios from 'axios';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Settinggs from 'react-native-vector-icons/Feather';
import Coingekocard from "../components/Coingekocard"
const Data = [{
    name:"Gzlt",
    Price:"$0.012",
    holdings:"2500",
    image:require("../assets/images/Gzltlogoorig.png"),
    Tfhchange:"+0.12%"
},
{
    name:"Etherum",
    Price:"$4300",
    holdings:"0.12",
    image:require("../assets/images/model.png"),
    Tfhchange:"+0.12%"
}]
import Icon01 from 'react-native-vector-icons/Fontisto';
import {Colors, Fonts, Images} from '../contants'; 
import { flex } from 'styled-system';
import { ScrollView } from 'react-native-gesture-handler';

const Homebottom = () => {
    
  const [coinlist, setcoinlist] = useState([]);
    useEffect(() => {
        axios
          .get(
            'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false',
          )
          .then(response => {
            setcoinlist(response.data);
          })
          .catch(function (error) {
            console.error(error);
          });
      }, []);
    
    return (
        <View style = {styles.container}  >
            <ScrollView style = {{height:hp("57%")}}>
            <Text style = {styles.YourTokens}>Your Tokens</Text>
            <View style = {styles.Yourcoinholder}>
            {
                Data.map((data)=>{
                    return(
                        <View style = {styles.Yourcoinscard}>
                            <Image source = {data.image} style = {styles.Imagestyle}/>
                            <Text style = {styles.holdings}>{data.holdings}</Text>
                            
                            <Text style = {styles.Namestyle}>{data.name}</Text>
                            <Text style = {styles.change}>{data.Tfhchange}</Text>
                        </View>
                    )
                })
            }
           </View>
           <View style = {{marginTop:10}}>
               <Text style = {styles.YourTokens}>Top 100 Coins </Text>
               <ScrollView horizontal = {true} showsHorizontalScrollIndicator = {false}>
               {
                   coinlist.map((data)=>{
                       return(
                           <Coingekocard  key={data.id}
                           images={data.image}
                           name={data.name}
                           symbol={data.symbol}
                           price={data.current_price}
                           pricechange={data.price_change_percentage_24h}
                           marketcap={data.market_cap}
                           rank={data.market_cap_rank}
                           tfhigh={data.high_24h}
                           tflow={data.low_24h}
                           circsupply={data.circulating_supply}
                           totalsupply={data.total_supply}
                           max_supply={data.max_supply}
                           ath={data.ath}
                           atl={data.atl}
           />
                       )
                   })
               }</ScrollView>
           </View>
           
           </ScrollView>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        
        padding:20, 
        height:hp("57%"),paddingBottom:10
    } ,
    YourTokens:{
      fontSize:20,
      fontFamily:Fonts.POPPINS_REGULAR ,
      paddingVertical:hp("1%"),

    },
    Yourcoinholder:{
        flexDirection:'row'
    },
    Yourcoinscard:{
        width:wp("37%"),
        height:hp("20%"),
        marginLeft:wp("2%"),
        marginRight:wp("2%"),
        backgroundColor:"white",
        borderRadius:10,
        elevation:10,
        alignItems:'flex-start',
        marginTop:hp("1%"),
        padding:10
        
    },
    Imagestyle:{
        width:40,height:40,marginLeft:20
    },
    holdings:{
        color:'grey',
        fontSize:12,
        fontFamily:Fonts.POPPINS_REGULAR,
        marginTop:10,
        marginLeft:20
    },
    Namestyle:{
fontSize:17,
fontFamily:Fonts.POPPINS_REGULAR,
color:"brown",

marginTop:1,
marginLeft:20
    },
    change:{
        fontSize:12,
fontFamily:Fonts.POPPINS_REGULAR,
color:"green",

marginTop:1,
marginLeft:20
    }
  });
export default Homebottom
