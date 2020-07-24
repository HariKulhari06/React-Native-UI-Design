import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const CategoryItem = (props) => {
  return (
    <View
      style={{
        ...styles.container,
        ...{
          elevation: props.elevation,
          backgroundColor: props.backgroundColor,
        },
      }}>
      <Image style={styles.image} source={{uri: props.imageUrl}} />
      <Text style={styles.name}> {props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    height: 80,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  image: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
  name: {
    fontFamily: 'Roboto-Regular',
  },
});

export default CategoryItem;
