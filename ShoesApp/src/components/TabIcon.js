import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const TabIcon = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Image
        style={{...styles.icon, ...{tintColor: props.color}}}
        source={props.icon}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  icon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    marginHorizontal: 15,
  },
});
export default TabIcon;
