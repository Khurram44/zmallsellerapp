import React from 'react';
import {View, Text,StyleSheet,Image, ScrollView} from 'react-native'; 
import { Fonts } from '../contants';
import {heightPercentageToDP, widthPercentageToDP} from 'react-native-responsive-screen';
import Iconsetting from 'react-native-vector-icons/AntDesign';
import Orderstooltip from './Orderstooltip';
import {Table, TableWrapper, Row} from 'react-native-table-component';
import axios from 'axios'
import { useEffect,useState } from 'react';
const AwaitingConfirmation = () => {
  const [tableHead , setTableHead]=useState([
    'Order No',
  'First Name',
  'Last Name',
  'Status',
  'Order Date',
  ])
  const [widthArr , setWithArr] = useState([60, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150])
  
  const [orders , setOrders] = useState([])
  const people =[]
  const url = 'https://zmallapi.herokuapp.com/api/v1/orders/vendor/364'
  useEffect(()=>{
    const api = async () =>{
      const result = await axios.get(url)
      setOrders(result.data)
      console.log(orders[0] && orders[0].id)
      // people.push(data[0].id)
      
    }
    api()
  },[])
  console.log("Orders",orders)
  for (let i = 0; i < orders.length; i++) {
    people.push([
      orders[i] && orders[i].order_no,
      orders[i] && orders[i].first_name,
      orders[i] && orders[i].last_name,
      orders[i] && orders[i].status,
      orders[i] && orders[i].added_on,
       ] )}
  
  console.log('perople',people)
  
             
  return ( 
    
    <View style={styles.container}>
      <View>
        <View style = {{height:heightPercentageToDP("7%"),backgroundColor:"white"}}>
           <Orderstooltip name = "Awaiting Pickup Request"/></View>
           
        </View>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator = {false} >
      <View style = {{}}>
        <Table>
          <Row
            data={tableHead}
            widthArr={widthArr}
            style={styles.header}
            textStyle={styles.text}
          />
        </Table>
        <ScrollView style={styles.dataWrapper}>
          <Table borderStyle={{borderWidth: 1, borderColor: 'grey'}}>
            {people == [] ? <Text>Waiting</Text>:people.map((rowData, index) => (
              <Row
                key={index}
                data={rowData}
                widthArr={widthArr}
                style={[
                  styles.row,
                  index % 2 && {backgroundColor: '#ffffff'},
                ]}
                textStyle={styles.text}
              />
            ))}
          </Table>
        </ScrollView>
      </View>
    </ScrollView>
  </View>

  
 );
}; 
export default AwaitingConfirmation;
const styles = StyleSheet.create({
  container: {flex: 1, paddingTop: 10,height:heightPercentageToDP("50%")},
  header: {height: 50},
  text: {textAlign: 'center', color: 'black'},
  dataWrapper: {marginTop: -1},
  row: {height: 40, backgroundColor: '#ffffff'},
});