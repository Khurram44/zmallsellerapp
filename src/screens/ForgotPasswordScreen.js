import React, {Component} from 'react';
import {
  View,
  Text,
  Animated,
  PanResponder,
  StyleSheet,
  Image,TouchableOpacity
} from 'react-native';
import {renderNode} from 'react-native-elements/dist/helpers';
import {Fonts} from '../contants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

import Draggable from 'react-native-draggable';
import { TextInput } from 'react-native-gesture-handler';
const Data = [
  {id: 1, name: 'Hello', x: 20, y: 30},
  {id: 2, name: 'Lelo', x: 30, y: 50},
  {id: 3, name: 'Yuo', x: 40, y: 60},
  {id: 4, name: 'pop', x: 50, y: 70},
];
export class ForgotPasswordScreen extends Component {
  textPosition = {x: 0, y: 0};
  constructor(props) {
    super(props);
    this.positon.addListener(LatestPosition => {
      this.textPosition = LatestPosition;
    });
  }
  positon = new Animated.ValueXY();
  PanResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (e, gestureState) => {
      const newPostion = {x: gestureState.dx, y: gestureState.dy};
      this.positon.setValue(newPostion);
    },
    onPanResponderGrant: () => {
      this.positon.setOffset({x: this.textPosition.x, y: this.textPosition.y});
      this.positon.setValue({x: 0, y: 0});
    },
    onPanResponderEnd: () => {
      this.positon.flattenOffset();
    },
  });

  render() {
    return (
      <LinearGradient
        colors={['#3e3c32', '#ce9d5c', '#3e3c32']}
        style={styles.container}>
        <Image
          source={require('../assets/images/Gzltlogoorig.png')}
          style={styles.Imagedesign}
        />
        <Text style={styles.Textstyle}>Confirm Recovery Phrase</Text>
        <Text style={styles.subtext}>
          Drag and Drop each word to it's correct order 
        </Text>

        <View style={styles.Phraseholder}>
          <View style = {{flexDirection:'row'}}>
          <Text style = {{marginLeft:20,marginRight:60,marginTop:20,fontSize:15,color:"white"}}>1</Text>
          <Text style = {{marginLeft:20,marginRight:60,marginTop:20,fontSize:15,color:"white"}}>2</Text>
          <Text style = {{marginLeft:20,marginRight:60,marginTop:20,fontSize:15,color:"white"}}>3</Text>
          </View>
          <View style = {{flexDirection:'row'}}>
          <Text style = {{marginLeft:20,marginRight:60,marginTop:20,fontSize:15,color:"white"}}>4</Text>
          <Text style = {{marginLeft:20,marginRight:60,marginTop:20,fontSize:15,color:"white"}}>5</Text>
          <Text style = {{marginLeft:20,marginRight:60,marginTop:20,fontSize:15,color:"white"}}>6</Text>
          </View>
          <View style = {{flexDirection:'row'}}>
          <Text style = {{marginLeft:20,marginRight:60,marginTop:20,fontSize:15,color:"white"}}>7</Text>
          <Text style = {{marginLeft:20,marginRight:60,marginTop:20,fontSize:15,color:"white"}}>8</Text>
          <Text style = {{marginLeft:20,marginRight:60,marginTop:20,fontSize:15,color:"white"}}>9</Text>
          </View>
          <View style = {{flexDirection:'row'}}>
          <Text style = {{marginLeft:14,marginRight:50,marginTop:20,fontSize:15,color:"white"}}>10</Text>
          <Text style = {{marginLeft:20,marginRight:60,marginTop:20,fontSize:15,color:"white"}}>11</Text>
          <Text style = {{marginLeft:20,marginRight:60,marginTop:20,fontSize:15,color:"white"}}>12</Text>
          </View>
        
        
      </View>
        

            <Draggable>

            <View style = {styles.Dragstyles}>
            <Text style = {styles.Dragstylestext}>rocket</Text>
            </View>
              
            </Draggable> 

            <Draggable>

            <View style = {styles.Dragstyles}>
            <Text style = {styles.Dragstylestext}>volcano</Text>
            </View>
              
            </Draggable> 
            <Draggable>

            <View style = {styles.Dragstyles}>
            <Text style = {styles.Dragstylestext}>motor</Text>
            </View>
              
            </Draggable> 
            <Draggable>

            <View style = {styles.Dragstyles}>
            <Text style = {styles.Dragstylestext}>globe</Text>
            </View>
              
            </Draggable> 
            <Draggable>

            <View style = {styles.Dragstyles}>
            <Text style = {styles.Dragstylestext}>motion</Text>
            </View>
              
            </Draggable> 
            <Draggable>

            <View style = {styles.Dragstyles}>
            <Text style = {styles.Dragstylestext}>season</Text>
            </View>
              
            </Draggable> 
            <Draggable>

            <View style = {styles.Dragstyles}>
            <Text style = {styles.Dragstylestext}>wave</Text>
            </View>
              
            </Draggable> 
            <Draggable>

            <View style = {styles.Dragstyles}>
            <Text style = {styles.Dragstylestext}>walnut</Text>
            </View>
              
            </Draggable> 
            <Draggable>

            <View style = {styles.Dragstyles}>
            <Text style = {styles.Dragstylestext}>zoo</Text>
            </View>
              
            </Draggable> 
            <Draggable>

            <View style = {styles.Dragstyles}>
            <Text style = {styles.Dragstylestext}>summer</Text>
            </View>
              
            </Draggable> 
            <Draggable>

            <View style = {styles.Dragstyles}>
            <Text style = {styles.Dragstylestext}>style</Text>
            </View>
              
            </Draggable> 
 
            <Draggable>

            <View style = {styles.Dragstyles}>
            <Text style = {styles.Dragstylestext}>zone</Text>
            </View>
              
            </Draggable>
            <TouchableOpacity
          style={styles.Recoveryimport1}
          onPress={() => navigation.navigate('Signin')}>
          <Text style={styles.Recoverytext1}>Confirm</Text>
        </TouchableOpacity>
          
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#755900',
  },

  Imagedesign: {
    width: 100,
    height: 100,
    marginTop: hp('5%'),
  },
  Textstyle: {
    color: '#ffffff',
    fontSize: 20,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,

    marginTop: hp('1.5%'),
  },
  Innertext: {
    color: '#fbd705',
  },
  subtext: {
    color: '#ffffff',
    textAlign: 'center',
    paddingHorizontal: 80,
    fontSize: 15,
    marginTop: 20,
    fontFamily: Fonts.POPPINS_REGULAR,

    marginTop: hp('1.5%'),
  },
  Recoveryimport: {
    marginTop: hp('10%'),
    backgroundColor: '#3e3c32',
    width: wp('80%'),
    padding: 15,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Recoveryholder: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Recoverytext: {
    color: 'white',
    fontSize: 15,
    paddingHorizontal: 20,
    fontFamily: Fonts.POPPINS_REGULAR,
  },
  Recoveryimport1: {
    marginTop: hp('1%'),
    backgroundColor: '#3e3c32',
    width: wp('50%'),
    padding: 5,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Recoveryholder1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Recoverytext1: {
    color: 'white',
    fontSize: 15,
    paddingHorizontal: 10,
    fontFamily: Fonts.POPPINS_REGULAR,
  },
   Phraseholder: {
    width: wp('75%'),
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    height: hp('28%'),
    borderRadius: 30,
    marginTop: hp('22.5%') ,
    
    padding:10
  },
  Dragstyles:{
    width:wp("15%"),
    height:hp("4%"),
    backgroundColor:"#c4a654",
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center',
    paddingVertical:5
    
  },
  Dragstylestext:{
    color:"white",
    fontSize:15
  }
});

export default ForgotPasswordScreen;
