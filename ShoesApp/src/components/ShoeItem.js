import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';
import {Rating} from 'react-native-ratings';

import Colors from '../constants/Colors';

const ShoeItem = (props) => {
  return (
    <TouchableNativeFeedback
      onPress={() => {
        props.onSelect;
      }}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.shoesImage}
            source={require('../../assets/shoe.png')}
          />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.name}>Modern Best Shoes</Text>
          <Rating imageSize={10} style={styles.rating} />
          <Text style={styles.price}>$120.00</Text>
        </View>

        <TouchableOpacity
          style={styles.favroiteContiner}
          onPress={() => {
            // eslint-disable-next-line no-alert
            alert('Under Developmeant');
          }}>
          <View>
            <Image
              style={styles.addImage}
              source={require('../../assets/Plus-Icon.png')}
            />
          </View>
        </TouchableOpacity>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 200,
    width: 120,
    backgroundColor: 'white',
    elevation: 3,
    margin: 5,
    borderRadius: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    overflow: 'hidden',
  },
  imageContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  shoesImage: {
    height: 180,
    width: 180,
    marginTop: 50,
    resizeMode: 'contain',
  },
  name: {
    fontFamily: 'Roboto-Bold',
    fontSize: 13,
    color: 'black',
    marginStart: 10,
  },
  rating: {marginStart: 10, marginTop: 3},
  price: {
    fontFamily: 'Roboto-Bold',
    fontSize: 13,
    marginTop: 10,
    marginStart: 10,
    color: 'black',
  },
  favroiteContiner: {
    backgroundColor: Colors.Accent,
    position: 'absolute',
    padding: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomRightRadius: 15,
  },
  addImage: {
    height: 15,
    width: 15,
  },
});
export default ShoeItem;
