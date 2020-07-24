import React from 'react';
import {StyleSheet, Button} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Home from '../screen/Home';
import Favorites from '../screen/Favorites';
import Notifications from '../screen/Notifications';
import Profile from '../screen/Profile';
import ShoesDetails from '../screen/ShoesDetails';

import Colors from '../constants/Colors';
import TabIcon from '../components/TabIcon';

const DrawerNavigator = createDrawerNavigator();
export const AppStacks = () => {
  return (
    <DrawerNavigator.Navigator>
      <DrawerNavigator.Screen
        name="Home"
        component={BottomTabkNavigator}
        options={{
          drawerIcon: (props) => (
            <TabIcon
              icon={require('../../assets/Home-Icon.png')}
              color={props.color}
            />
          ),
        }}
      />
    </DrawerNavigator.Navigator>
  );
};

const BottomTabStackNavigator = createMaterialBottomTabNavigator();

export const BottomTabkNavigator = () => {
  return (
    <BottomTabStackNavigator.Navigator
      activeColor={Colors.Accent}
      inactiveColor={Colors.Gray}
      labeled={false}
      initialRouteName="Dashboard"
      keyboardHidesNavigationBar={true}
      barStyle={{backgroundColor: Colors.White}}>
      <BottomTabStackNavigator.Screen
        name="Dashboard"
        component={HomeStack}
        options={{
          tabBarIcon: ({color}) => (
            <TabIcon
              icon={require('../../assets/Home-Icon.png')}
              color={color}
            />
          ),
        }}
      />
      <BottomTabStackNavigator.Screen
        name="Favorites"
        component={FavoritesStack}
        options={{
          tabBarIcon: ({color}) => (
            <TabIcon
              icon={require('../../assets/Favourite-Icon.png')}
              color={color}
            />
          ),
        }}
      />
      <BottomTabStackNavigator.Screen
        name="Notifications"
        component={NotificationsStack}
        options={{
          tabBarIcon: ({color}) => (
            <TabIcon
              icon={require('../../assets/Bell-Icon.png')}
              color={color}
            />
          ),
        }}
      />
      <BottomTabStackNavigator.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarIcon: ({color}) => (
            <TabIcon
              icon={require('../../assets/Profile-Icon.png')}
              color={color}
            />
          ),
        }}
      />
    </BottomTabStackNavigator.Navigator>
  );
};

const HomeStackNavigator = createStackNavigator();
export const HomeStack = (props) => {
  return (
    <HomeStackNavigator.Navigator
      screenOptions={{
        headerStyle: styles.defaultHeaderStyle,
      }}>
      <HomeStackNavigator.Screen
        name="Shoes"
        component={Home}
        options={{
          headerRight: () => (
            <TabIcon icon={require('../../assets/Cart.png')} />
          ),
          headerLeft: () => (
            <TabIcon
              icon={require('../../assets/Menu-Bar.png')}
              onPress={() => {
                props.navigation.openDrawer();
              }}
            />
          ),
          headerTitleAlign: 'center',
          headerTitleStyle: styles.headerTitle,
          headerTitle: () => {
            null;
          },
        }}
      />
      <HomeStackNavigator.Screen
        name="ShoesDetails"
        component={ShoesDetails}
        options={{
          headerTitleStyle: styles.headerTitle,
        }}
      />
    </HomeStackNavigator.Navigator>
  );
};

const FavoritesStackNavigator = createStackNavigator();
export const FavoritesStack = () => {
  return (
    <FavoritesStackNavigator.Navigator
      screenOptions={{
        headerStyle: styles.defaultHeaderStyle,
      }}>
      <FavoritesStackNavigator.Screen name="Favorites" component={Favorites} />
    </FavoritesStackNavigator.Navigator>
  );
};

const NotificationsStackNavigator = createStackNavigator();
export const NotificationsStack = () => {
  return (
    <NotificationsStackNavigator.Navigator
      screenOptions={{
        headerStyle: styles.defaultHeaderStyle,
      }}>
      <NotificationsStackNavigator.Screen
        name="Notifications"
        component={Notifications}
      />
    </NotificationsStackNavigator.Navigator>
  );
};

const ProfileStackNavigator = createStackNavigator();
export const ProfileStack = () => {
  return (
    <ProfileStackNavigator.Navigator
      screenOptions={{
        headerStyle: styles.defaultHeaderStyle,
      }}>
      <ProfileStackNavigator.Screen name="Profile" component={Profile} />
    </ProfileStackNavigator.Navigator>
  );
};

const styles = StyleSheet.create({
  defaultHeaderStyle: {
    elevation: 0,
    backgroundColor: Colors.primary,
  },
  headerTitle: {
    fontFamily: 'Roboto-Bold',
  },
});
