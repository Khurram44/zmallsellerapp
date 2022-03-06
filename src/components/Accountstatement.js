import React from 'react';
import {StyleSheet, View, Text, StatusBar, ScrollView} from 'react-native';
import DynamicForm from '@coffeebeanslabs/react-native-form-builder';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Separator} from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Fonts} from '../contants';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {useNavigation} from '@react-navigation/native';
const Data = [
  {Title: 'Ali javed', AccountNumber: '202545854555466', Bank: 'Bank Al Habib'},
  {Title: 'obaid ali', AccountNumber: '202545854555466', Bank: 'Bank Islami'},
];
const Accountstatement = () => {
    const formTemplate = {
        data: [
          
          {
            id:1,
            component: 'input-text',
            field_name: 'name',
            is_mandatory: 'true',
            meta: {
              label: 'Voucher Name',
              placeholder: 'Enter name..'
            }
          },
          
          {
            id:2,
            component: 'input-text',
            field_name: 'namek',
            is_mandatory: 'true',
            meta: {
              label: 'Voucher Code',
              placeholder: 'Enter name..'
            }
          },
          {
            component: 'input-date',
            field_name: 'birthDate',
            is_mandatory: 'true',
            meta: {
              title: 'Voucher Claim Period Starting Date'
            }
          },
          {
            component: 'input-date',
            field_name: 'birthDate',
            is_mandatory: 'true',
            meta: {
              title: 'Voucher Claim Period Ending Date'
            }
          },
           
        ]
      }
    
      
      const onSubmit = formFields => {
        // Actions on submit button click.
        console.log('Form submitted with fields: ', formFields.birthDate.value); 
      }
  const navigation = useNavigation();
  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor="grey" translucent />
      <Separator height={StatusBar.currentHeight} />
      <View style={styles.headerContainer}>
        <Ionicons
          name="chevron-back-outline"
          size={25}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTitle}>Account Statement</Text>
      </View>

      <Text
        style={{
          textAlign: 'center',
          marginTop: heightPercentageToDP('5%'),
          fontSize: 25,
          fontFamily: Fonts.POPPINS_REGULAR,
          color: 'green',
        }}>
        Transaction Overview
      </Text>
      
      <ScrollView
        horizontal={true}
        bounces={false}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}>
        {Data.map(data => {
          return (
            <View style={styles.Cardholder}>
              <View style={styles.card}>
                 </View>
               
            </View>
          );
        })}
      </ScrollView>
      <TouchableOpacity
        onPress={() => navigation.navigate('AddBank')}
        style={{justifyContent: 'center', alignItems: 'center'}}>
        
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: Fonts.POPPINS_BOLD,
    lineHeight: 20 * 1.4,
    marginLeft: widthPercentageToDP('30%'),
    textAlign: 'center',
  },
  Cardholder: {
    marginTop: heightPercentageToDP('5%'),
    marginLeft: widthPercentageToDP('3%'),
    marginRight: widthPercentageToDP('3%'),
    justifyContent: 'center',
  },
  card: {
    width: widthPercentageToDP('80%'),
    height: heightPercentageToDP('60%'),

    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'grey',
  },
  cardinner: {
    marginTop: 20,
    paddingHorizontal: 20,
    fontSize: 15,
    fontFamily: Fonts.POPPINS_REGULAR,
    color: 'blue',
  },
  rowholder: {
    flexDirection: 'row',
  },
  cardsubinner: {
    marginTop: 20,
    paddingHorizontal: 20,
    fontSize: 15,
    fontFamily: Fonts.POPPINS_REGULAR,
    color: 'grey',
  },
  Buttonholder: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: heightPercentageToDP('5%'),
    width: widthPercentageToDP('50%'),
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: 'green',
    borderWidth: 2,
  },
  Buttontext: {
    fontSize: 15,
    fontFamily: Fonts.POPPINS_REGULAR,
    padding: 10,
  },
});

export default Accountstatement;
