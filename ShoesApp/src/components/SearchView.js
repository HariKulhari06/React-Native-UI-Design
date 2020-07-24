import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

import Colors from '../constants/Colors';
import {TextInput} from 'react-native-gesture-handler';

const SearchView = (props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.icon}
        source={require('../../assets/Search-Icon.png')}
      />
      <TextInput style={styles.inputText} placeholder="Search Something" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 40,
    elevation: 20,
    backgroundColor: Colors.White,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  icon: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
  },
  inputText: {
    flex: 1,
    marginHorizontal: 5,
    fontSize: 14,
    fontFamily: 'Roboto-Light',
    color: 'black',
  },
});
export default SearchView;
