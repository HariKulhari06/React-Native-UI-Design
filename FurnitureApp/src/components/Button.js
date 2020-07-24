import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

const Button = (props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={props.icon} />
      <Text style={styles.text}>{props.text.toUpperCase()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F83A26',
    borderRadius: 30,
    height: 40,
    flexDirection: 'row',
    elevation: 5,
  },
  text: {
    fontSize: 15,
    fontFamily: 'Roboto-Medium',
    color: 'white',
  },
  icon: {
    height: 18,
    width: 18,
    tintColor: 'white',
    marginEnd: 10,
  },
});

export default Button;
