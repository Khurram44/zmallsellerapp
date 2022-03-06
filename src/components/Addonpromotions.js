import React, {Component} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Table, TableWrapper, Row} from 'react-native-table-component';
import Voucherscomp from './Voucherscomp';

import { heightPercentageToDP } from 'react-native-responsive-screen' 
import Addoncomp from './Addoncomp';
export default class Addonpromotions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: [
        'Sr.No',
        'Promotion Name', 
        'Promotion Type',
        'Add-On | Gift Products', 
        'Starting Date',
        'Ending Date', 
        'Status',
        'Actions'
      ],
      widthArr: [60, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150],
    };
  }

  render() {
    const state = this.state;
    const tableData = [];

    return (
      <View style={styles.container}>
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
        <Addoncomp/>
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
});
