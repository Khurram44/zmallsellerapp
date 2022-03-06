import {React,useEffect,useState} from 'react'
import { View, Text } from 'react-native'
import Maincryptostats from './Maincryptostats';
import Overallcryptoticker from './Overallcryptoticker';

const Apirenderer = () => {

  const [market, setmarket] = useState([]);
  const [coinlist, setcoinlist] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get('https://api.coingecko.com/api/v3/global')
      .then(res => {
        setmarket(res.data.data);
         
      })
      .catch(function (error) {
        console.error(error);
        
      });
  }, []);

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
        <View>
             {console.log(coinlist)}
            
            {coinlist.map((data)=>{
                return(
<Maincryptostats key={data.id}
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
            })}
            
        </View>
    )
}

export default Apirenderer
