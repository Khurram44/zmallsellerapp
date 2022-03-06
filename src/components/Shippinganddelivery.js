import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity,ScrollView,Image } from 'react-native'
import { Fonts } from '../contants'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import {
  Select,
  VStack,
  CheckIcon,
  Center,
  NativeBaseProvider,
  Box,
  TextArea
} from "native-base"

import DocumentPicker from 'react-native-document-picker';
import { TextInput } from 'react-native-gesture-handler'
const Data = [
  {id:1,name:"Unable to Signup"},{id:2,name:"Unable to Login"},{id:3,name:"Unable to Forgot Password"},{id:4,name:"Unable to update Shipping/Billing Address"},{id:5,name:"Others"}
]
const Shippinganddelivery = () => {
  let [service, setService] = React.useState("")
  const [singleFile, setSingleFile] = React.useState('');
  const [multipleFile, setMultipleFile] = React.useState([]);
  
  const selectOneFile = async () => {
    //Opening Document Picker for selection of one file
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
        //There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      //Printing the log realted to the file
      console.log('res : ' + JSON.stringify(res));
      console.log('URI : ' + res.uri);
      console.log('Type : ' + res.type);
      console.log('File Name : ' + res.name);
      console.log('File Size : ' + res.size);
      //Setting the state to show single file attributes
      setSingleFile(res);
    } catch (err) {
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
        alert('Canceled from single doc picker');
      } else {
        //For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  const selectMultipleFile = async () => {
    //Opening Document Picker for selection of multiple file
    try {
      const results = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.images],
        //There can me more options as well find above
      });
      for (const res of results) {
        //Printing the log realted to the file
        console.log('res : ' + JSON.stringify(res));
        console.log('URI : ' + res.uri);
        console.log('Type : ' + res.type);
        console.log('File Name : ' + res.name);
        console.log('File Size : ' + res.size);
      }
      //Setting the state to show multiple file attributes
      setMultipleFile(results);
    } catch (err) {
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
        alert('Canceled from multiple doc picker');
      } else {
        //For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };
  return (
    <NativeBaseProvider>
      <View  style = {{height:heightPercentageToDP("60%")}}>
     <ScrollView style = {{height:heightPercentageToDP("60%")}} >
    <View> 
      <View style = {styles.firstrow}>
        <Text style = {{marginTop:heightPercentageToDP("2.5%"),fontSize:15,fontFamily:Fonts.POPPINS_REGULAR}}>Select Issue</Text>
      <VStack alignItems="center" space={4}>
      <Select
        selectedValue={service}
        minWidth="200"
        accessibilityLabel="Choose Service"
        placeholder="Choose Service"
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />,
        }}
        mt={1}
        onValueChange={(itemValue) => setService(itemValue)}
      >
        {Data.map((data)=>{
          return(
            <Select.Item label = {data.name} value={data.name} />
          )
        })}
       
      </Select>
    </VStack>
  
    </View>
    <View style = {{justifyContent:'center',alignItems:'center',}}>
    <TextInput placeholder='Write Your Issue'  style = {{marginTop:20,borderWidth:1,borderColor:"grey",height:heightPercentageToDP("15%"),width:widthPercentageToDP("95%"),textAlign:'center',borderRadius:10}}/>
    <View
          style={{
            backgroundColor: 'grey',
            height: 2,
            margin: 10
          }} />
        {/*To multiple single file attribute*/}
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={selectMultipleFile}>
          {/*Multiple files selection button*/}
          <Text style={{marginRight: 10, fontSize: 15,color:"white"}}>
            Choose File
          </Text>
           
        </TouchableOpacity>
        <ScrollView>
          {/*Showing the data of selected Multiple files*/}
          {multipleFile.map((item, key) => (
            <View key={key}>
              <Text style={styles.textStyle}>
                File Name: {item.name ? item.name : ''}
                {'\n'}

              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style = {{justifyContent:'center',alignItems:'center'}}>
      <TextInput placeholder='Order Id'  style = {styles.subtextinput}/>
<TextInput placeholder='Full Name'  style = {styles.subtextinput}/>
<TextInput placeholder='Email' style = {styles.subtextinput}/>
<TextInput placeholder='Password' style = {styles.subtextinput}/>
</View>
<View style = {{justifyContent:'center',alignItems:'center'}}>
<TouchableOpacity style = {{justifyContent:'center',alignItems:'center',backgroundColor:"#7eb3ff",marginTop:10,width:widthPercentageToDP("70%"),padding:5}}>
  <Text style = {{textAlign:'center',fontSize:15,fontFamily:Fonts.POPPINS_REGULAR,color:"white"}}>Submit</Text>
</TouchableOpacity>
</View>
    </View> 
    </ScrollView></View>
    </NativeBaseProvider>
  )
}


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
    fontSize: 20,
    fontFamily: Fonts.POPPINS_REGULAR,
    lineHeight: 20 * 1.4,
    marginLeft: widthPercentageToDP('10%'),
    marginTop:heightPercentageToDP("2.5%"),
    textAlign:'center'
  },
  firstrow:{
    flexDirection:'row',
    justifyContent:'space-between'
  ,paddingHorizontal:30,
  marginTop:heightPercentageToDP("2.5%")
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
    alignItems:'center'
  },
  textStyle: {
    backgroundColor: '#fff',
    fontSize: 15,
    marginTop: 16,
    color: 'green',
    textAlign:'center',
    
    alignItems:'center'
  },
  buttonStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#7eb3ff',
    padding: 5,
    justifyContent:'center'
  },
  imageIconStyle: {
    height: 20,
    width: 1,
    resizeMode: 'stretch',
  },
  subtextinput:{
    borderBottomWidth:1,
    marginTop:10,
    borderBottomColor:'black',
    width:widthPercentageToDP("60%"),
    marginLeft:widthPercentageToDP("5%")
  }
});
export default Shippinganddelivery
