import React from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Header = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <TouchableOpacity
        onPress={() => Alert.alert('Alert!', 'Feature Not Implimented Yet.')}>
        <Text style={styles.endText}>{props.endText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 20,
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontFamily: 'Roboto-Medium',
  },
  endText: {
    color: '#ED4233',
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
  },
});
export default Header;
