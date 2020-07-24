import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from '../screen/Dashboard';
import FurnitureDetails from '../screen/FurnitureDetails';
import HeaderButton from '../components/HeaderButton';

const AppStackNavigator = createStackNavigator();

export const Navigation = () => {
  return (
    <AppStackNavigator.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
        },
      }}>
      <AppStackNavigator.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          title: 'Furniture App',
          headerRight: () => (
            <HeaderButton image={require('../../assets/cart.png')} />
          ),
          headerLeft: () => {
            <HeaderButton image={require('../../assets/drawer.png')} />;
          },
        }}
      />
      <AppStackNavigator.Screen
        name="FurnitureDetails"
        component={FurnitureDetails}
        options={{
          header: () => {
            null;
          },
        }}
      />
    </AppStackNavigator.Navigator>
  );
};
