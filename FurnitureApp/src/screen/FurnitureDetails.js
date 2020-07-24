import React, {useState} from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import Button from '../components/Button';

const FurnitureDetails = (props) => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantityHandler = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantityHandler = () => {
    if (quantity != 1) setQuantity(quantity - 1);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.goBack();
          }}>
          <Image
            style={styles.backImage}
            source={require('../../assets/back_arrow.png')}
          />
        </TouchableOpacity>
        <View style={styles.imageCard}>
          <View style={styles.productImageContainer}>
            <View style={styles.furnitureColorBackground} />
            <Image
              style={styles.productImage}
              source={require('../../assets/taco_chair.png')}
            />
          </View>
          <View style={styles.favoriteContainer}>
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
      </View>
      <View style={styles.details}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>Taco Chair</Text>
          <Text style={styles.price}>$500</Text>
        </View>
        <Text style={styles.colorText}>Available Color</Text>
        <View style={styles.colorsContainer}>
          <View
            style={{...styles.selectedColor, ...{backgroundColor: '#7A627F'}}}
          />
          <View style={{...styles.color, ...{backgroundColor: '#C5BD34'}}} />
          <View style={{...styles.color, ...{backgroundColor: '#768484'}}} />
          <View style={{...styles.color, ...{backgroundColor: '#392A23'}}} />
          <View style={{...styles.color, ...{backgroundColor: '#0F150F'}}} />
          <View style={{...styles.color, ...{backgroundColor: '#96A399'}}} />
        </View>
        <Text style={styles.aboutText}>About</Text>
        <Text style={styles.desText}>
          Ut reprehenderit duis excepteur magna elit nisi excepteur nostrud
          voluptate elit ipsum. consectetur ea cupidatat.
        </Text>
        <View style={styles.cardContainer}>
          <View style={styles.quntityContainer}>
            <TouchableOpacity onPress={incrementQuantityHandler}>
              <Image
                style={styles.quntityIcon}
                source={require('../../assets/plus.png')}
              />
            </TouchableOpacity>
            <Text style={styles.quntityText}>{quantity.toString()}</Text>
            <TouchableOpacity onPress={decrementQuantityHandler}>
              <Image
                style={styles.quntityIcon}
                source={require('../../assets/minus.png')}
              />
            </TouchableOpacity>
            <Button
              text={'Add To Cart'}
              icon={require('../../assets/cart.png')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  header: {
    flexDirection: 'row',
  },
  backImage: {
    marginTop: 20,
    marginStart: 20,
    marginEnd: 50,
    height: 24,
    width: 24,
  },
  details: {
    padding: 20,
  },
  nameContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  name: {
    fontSize: 32,
    fontFamily: 'Roboto-Medium',
  },
  price: {
    fontSize: 22,
    fontFamily: 'Roboto-Bold',
    color: '#ED4233',
  },
  colorText: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: '#1B1E27',
    opacity: 0.5,
    marginTop: 10,
  },
  colorsContainer: {
    marginVertical: 20,
    flex: 1,
    flexDirection: 'row',
  },
  color: {
    height: 20,
    width: 20,
    borderRadius: 10,
    marginEnd: 10,
  },
  selectedColor: {
    height: 20,
    width: 20,
    borderRadius: 10,
    marginEnd: 10,
    borderWidth: 2,
    borderColor: 'red',
  },
  aboutText: {
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
    color: '#1B1E27',
    marginTop: 20,
  },
  desText: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: '#1B1E27',
    opacity: 0.5,
  },
  cardContainer: {
    flexDirection: 'row',
  },
  quntityContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  quntityIcon: {
    height: 20,
    width: 20,
    padding: 5,
  },
  cartButton: {
    width: 200,
  },
  quntityText: {
    marginHorizontal: 20,
    fontSize: 20,
    fontFamily: 'Roboto-Regular',
    color: '#1B1E27',
  },
  imageCard: {
    flex: 1,
    backgroundColor: 'white',
    height: 350,
    borderBottomStartRadius: 35,
  },
  productImageContainer: {
    flex: 3,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  productImage: {
    height: 300,
    width: 300,
    position: 'absolute',
    resizeMode: 'contain',
  },
  furnitureColorBackground: {
    width: '100%',
    height: 120,
    backgroundColor: '#796580',
    opacity: 0.1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  favoriteContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  favorites: {
    borderTopRightRadius: 30,
    borderBottomStartRadius: 30,
    backgroundColor: '#ED4233',
    width: 40,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  favoritesImage: {
    height: 20,
    width: 20,
  },
});

export default FurnitureDetails;
