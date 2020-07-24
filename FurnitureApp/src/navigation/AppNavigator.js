import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from './Navigation';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};

export default AppNavigator;
