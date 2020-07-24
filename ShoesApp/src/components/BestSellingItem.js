import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

const BestSellingItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../../assets/shoe.png')} />
      </View>
      <View style={styles.Detailcontainer}>
        <View style={styles.namecontainer}>
          <Text style={styles.name}>New Sports Shoes 128</Text>
          <Text style={styles.category}>Sports Shoes</Text>
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <View>
                <Image
                  style={styles.imageButtons}
                  source={require('../../assets/minus.png')}
                />
              </View>
            </TouchableOpacity>
            <Text style={styles.quantityText}>2</Text>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <View>
                <Image
                  style={styles.imageButtons}
                  source={require('../../assets/Plus-Icon.png')}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.price}>$120.0</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 5,
  },
  imageContainer: {
    height: 70,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: 10,
  },
  image: {
    flex: 1,
    marginTop: 10,
    rotation: 25,
    height: 120,
    width: 120,
  },
  Detailcontainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    marginStart: 15,
    marginEnd: 5,
    alignItems: 'center',
  },
  namecontainer: {
    flex: 1,
  },
  name: {
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
    color: '#343434',
  },
  category: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    color: '#AEAAAA',
  },
  buttons: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  button: {
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: 5,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageButtons: {
    height: 10,
    width: 10,
    resizeMode: 'contain',
    tintColor: 'black',
  },
  quantityText: {
    marginHorizontal: 15,
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#2D2D2D',
  },
  price: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
});

export default BestSellingItem;
