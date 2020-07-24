import React from 'react';
import {Image, TouchableOpacity, StyleSheet} from 'react-native';

const HeaderButton = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => {}}>
      <Image style={styles.image} source={props.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingEnd: 16,
  },
  image: {
    height: 23,
    width: 23,
  },
});

export default HeaderButton;
