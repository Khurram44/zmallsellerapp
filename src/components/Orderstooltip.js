import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Fonts} from '../contants';

import Iconsetting from 'react-native-vector-icons/AntDesign';
import {useState} from 'react';
import {
  Popover,
  Button,
  VStack,
  Select,
  CheckIcon,
  Center,
  NativeBaseProvider,
} from 'native-base';

const Orderstooltip = props => {
  const [position, setPosition] = useState('auto');
  const [dataholder, setdataholder] = useState('Sort from Recent To Earlier');
  return (
    <NativeBaseProvider>
      <View style={styles.Maincontainer}>
        <Popover
          placement={'bottom left'}
          trigger={triggerProps => {
            return (
              <TouchableOpacity style={styles.filterholder} {...triggerProps}>
                <Text style={styles.Titlestyle}>Sort: {props.name}</Text>
                <Iconsetting
                  name="down"
                  size={13}
                  style={{marginLeft: 10, marginTop: 5}}
                />
              </TouchableOpacity>
            );
          }}>
          <Popover.Content borderRadius={'xl'}>
            <Popover.Arrow />

            <Popover.Body>
              <TouchableOpacity>
                <Text>Sort from Recent To Earlier </Text>
              </TouchableOpacity>
            </Popover.Body>
            <Popover.Footer justifyContent="flex-start">
              <TouchableOpacity>
                <Text>Sort from Earlier To Recent </Text>
              </TouchableOpacity>
            </Popover.Footer>
          </Popover.Content>
        </Popover>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  Titlestyle: {
    fontSize: 15,
    fontFamily: Fonts.POPPINS_REGULAR,
  },
  Maincontainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  filterholder: {
    flexDirection: 'row',
  },
});
export default Orderstooltip;
