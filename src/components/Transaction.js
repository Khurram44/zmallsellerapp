import React, {Component} from 'react';
import {StyleSheet, View, ScrollView,StatusBar,Text,Image, Touchable} from 'react-native';
import {Table, TableWrapper, Row} from 'react-native-table-component';

import DynamicForm from '@coffeebeanslabs/react-native-form-builder';
import {Fonts} from '../contants';
import Voucherscomp from './Voucherscomp';
import {heightPercentageToDP, widthPercentageToDP} from 'react-native-responsive-screen';
import {Separator} from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';  
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class Transaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: [
        'Date',
        'Transaction Type', 
        'Transaction Number',
        'Order Number', 
        'Details',
        'Comment', 
        'Amount',
        'VAT',
        'WHT',
        'Statement'
      ],
      widthArr: [60, 150, 150, 150, 150, 150, 150, 150,150,150]
    };
  }

  render() {
    const state = this.state;
    const tableData = [];
    
    const formTemplate = {
        data: [
          
         
          {
            component: 'input-date',
            field_name: 'birthDate',
            is_mandatory: 'true',
            meta: {
              title: 'Starting Date'
            }
          },
          {
            component: 'input-date',
            field_name: 'birthDate',
            is_mandatory: 'true',
            meta: {
              title: 'Ending Date'
            }
          },
           
        ]
      }
    
      
      const onSubmit = formFields => {
        // Actions on submit button click.
        console.log('Form submitted with fields: ', formFields.birthDate.value); 
      }

    return (
      <View style={styles.container}>
          <StatusBar barStyle="dark-content" backgroundColor="grey" translucent />
        <Separator height={StatusBar.currentHeight} />
        <View style={styles.headerContainer}>
          <Ionicons
            name="chevron-back-outline"
            size={25}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.headerTitle}>Transaction Overview</Text>
         
        
        </View>
        <View style = {styles.Upperholder}><Text style = {styles.Amountstyle}>Total Amount: </Text>
        <TouchableOpacity>
        <Image source={require("../assets/images/filter.png")} style = {{width:30,height:30}}/>
        </TouchableOpacity>
     
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator = {false} >
          <View style = {{}}>
            <Table>
              <Row
                data={state.tableHead}
                widthArr={state.widthArr}
                style={styles.header}
                textStyle={styles.text}
              />
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{borderWidth: 1, borderColor: 'grey'}}>
                {tableData.map((rowData, index) => (
                  <Row
                    key={index}
                    data={rowData}
                    widthArr={state.widthArr}
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
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, paddingTop: 10,height:heightPercentageToDP("50%")},
  header: {height: 50},
  text: {textAlign: 'center', color: 'black'},
  dataWrapper: {marginTop: -1},
  row: {height: 40, backgroundColor: '#ffffff'},
  
  headerContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: Fonts.POPPINS_BOLD,
    lineHeight: 20 * 1.4,
    marginLeft: widthPercentageToDP('22%'),
    textAlign: 'center',
  },
  Upperholder:{
      marginTop:10,padding:15,
      backgroundColor:"white",
      flexDirection:'row',
      justifyContent:'space-between'
  },
  Amountstyle:{
      fontSize:15,
      color:"red",
      fontFamily:Fonts.POPPINS_SEMI_BOLD
  }
});
