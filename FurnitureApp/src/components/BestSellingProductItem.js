import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {Rating} from 'react-native-ratings';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native-gesture-handler';

const BestSellingProductItem = (props) => {
  return (
    <TouchableNativeFeedback onPress={props.onSelectFurniture}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{uri: props.imageUrl}} style={styles.image} />
        </View>
        <View style={styles.details}>
          <View style={styles.favoritesDetails}>
            <Text style={styles.name}>{props.name}</Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.rating}>{props.rating.toString()}</Text>
              <Rating imageSize={10} />
            </View>
            <Text style={styles.price}>${props.price.toString()}</Text>
          </View>
          <View style={styles.favorites}>
            <TouchableOpacity>
              <Image
                style={styles.favoritesImage}
                source={require('../../assets/heart.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    backgroundColor: 'white',
    height: 100,
    width: 200,
    borderRadius: 20,
    elevation: 2,
    overflow: 'hidden',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  image: {
    width: 80,
    height: 100,
  },
  details: {
    flex: 1,
    padding: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  favorites: {
    borderTopLeftRadius: 15,
    borderBottomEndRadius: 15,
    backgroundColor: 'red',
    width: 25,
    height: 25,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  favoritesDetails: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#1B1E27',
  },
  rating: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    color: '#1B1E27',
    opacity: 0.5,
    marginEnd: 5,
  },
  price: {
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    color: '#1B1E27',
  },
  favoritesImage: {
    height: 15,
    width: 15,
  },
});

export default BestSellingProductItem;
