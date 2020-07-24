import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppStacks} from './AppStacks';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AppStacks />
    </NavigationContainer>
  );
};

export default AppNavigator;
