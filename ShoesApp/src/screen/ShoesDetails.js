import React, {useEffect} from 'react';
import {View, StyleSheet, Text, Image, Button} from 'react-native';

import Colors from '../constants/Colors';
const ShoesDetails = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.brandName}>Nike</Text>
      <Text style={styles.name}>Modern Best Shoes</Text>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../../assets/shoe.png')} />
      </View>
      <View style={styles.details}>
        <View style={styles.tabs}>
          <Text style={styles.discription}>Discription</Text>
          <Text style={styles.reviews}>Reviews</Text>
        </View>
        <Text style={styles.discriptionText}>
          There are many variations are of the passages of lorem Ipsum
          available, but there majoritys have are suffered is alteration in some
          forms, by the injected of humour, ors randomised words which.
        </Text>
        <Text style={{...styles.discription, ...{marginTop: 16}}}>Size</Text>
        <View style={styles.buttons}>
          <View style={{...styles.button, ...{backgroundColor: 'white'}}}>
            <Text style={{...styles.discription, ...{fontSize: 16}}}>
              Order Now
            </Text>
          </View>
          <View style={styles.button}>
            <Text
              style={{
                ...styles.discription,
                ...{fontSize: 16, color: Colors.White},
              }}>
              Add To Cart
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.primary,
    flex: 1,
  },
  brandName: {
    fontFamily: 'Roboto-medium',
    fontSize: 15,
    color: '#343434',
    marginStart: 16,
    marginTop: 16,
  },
  name: {
    fontFamily: 'Roboto-medium',
    fontSize: 23,
    color: '#343434',
    marginStart: 16,
  },
  imageContainer: {
    width: '100%',
    height: 300,
    alignContent: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    rotation: 10,
  },
  details: {
    backgroundColor: 'white',
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 16,
  },
  tabs: {
    width: '100%',
    flexDirection: 'row',
  },
  discription: {
    fontFamily: 'Roboto-medium',
    fontSize: 16,
    color: 'black',
  },
  reviews: {
    fontFamily: 'Roboto-medium',
    fontSize: 15,
    color: '#BBBBBB',
    marginHorizontal: 16,
  },
  discriptionText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    color: '#707070',
    marginTop: 16,
  },
  buttons: {
    marginTop: 16,
    width: '100%',
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Accent,
    elevation: 20,
    height: 60,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    marginHorizontal: 5,
  },
});

ShoesDetails.navigationOptions = ({navigation}) => {
  let tabBarVisible = false;
  return {
    tabBarVisible,
  };
};
export default ShoesDetails;
