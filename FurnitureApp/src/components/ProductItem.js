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

const ProductItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onSelectFurniture}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <View
            style={{...styles.background, ...{backgroundColor: props.color}}}
          />
          <Image style={styles.image} source={{uri: props.imageUrl}} />
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
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: 'white',
    height: 200,
    width: 120,
    borderTopLeftRadius: 75,
    borderTopRightRadius: 75,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 2,
    overflow: 'hidden',
  },
  imageContainer: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 100,
  },
  background: {
    position: 'absolute',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '100%',
    height: 45,
    opacity: 0.1,
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

export default ProductItem;
