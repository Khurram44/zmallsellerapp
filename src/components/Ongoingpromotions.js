
import React, {Component, useEffect} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Table, TableWrapper, Row} from 'react-native-table-component';
import Voucherscomp from './Voucherscomp';
import axios from 'axios'
import { useState } from 'react';

import { heightPercentageToDP } from 'react-native-responsive-screen' 

function Ongoingpromotion() {
  const [data , setData] = useState([])
const [tableHead , setTableHead]=useState([
  'Sr.No',
'Voucher Name',
'Voucher Code',
'Voucher Type',
'Discount Type',
'Discount Amount',
'Starting Date',
'Ending Date',
'Minimum Price',
'Total Quantity',
'Claimed',
'Status',])
const [widthArr , setWithArr] = useState([60, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150])
const tableData =[]
const people =[]
const url = 'https://zmallapi.herokuapp.com/api/v1/vouchers'
useEffect(()=>{
const api = async () =>{
  const result = await axios.get(url)
  setData(result.data)
  console.log(data[0] && data[0].id)
  // people.push(data[0].id)
//  const nf = data.filter(res => res.status == 'Expired' )
//  console.log("Filtered",filter)

  
}
api()

},[])
const  filter = data.filter(res => res.status == 'Active' || res.status == 'Available' )
console.log("Filtered",filter)


for (let i = 0; i < filter.length; i++) {
  people.push([
    i+1,
    filter[i] && filter[i].voucher_name,
    filter[i] && filter[i].voucher_code,
    filter[i] && filter[i].type,
    filter[i] && filter[i].discount_type,
    filter[i] && filter[i].discount_number,
    filter[i] && filter[i].starting_time,
    filter[i] && filter[i].ending_time,
    filter[i] && filter[i].min_price,
    filter[i] && filter[i].quantity,
    filter[i] && filter[i].claimed,
     ] )}

console.log('perople',people)

           
  return   (
    <View style={styles.container}>
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
      <Voucherscomp/>
    </View>
  );
;
}

export default Ongoingpromotion;


const styles = StyleSheet.create({
  container: {flex: 1, paddingTop: 10,height:heightPercentageToDP("50%")},
  header: {height: 50},
  text: {textAlign: 'center', color: 'black'},
  dataWrapper: {marginTop: -1},
  row: {height: 40, backgroundColor: '#ffffff'},
});
