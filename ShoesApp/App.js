import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import {StatusBar} from 'react-native';
import Colors from './src/constants/Colors';

const App = (props) => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.primary} />
      <AppNavigator />
    </>
  );
};

export default App;
