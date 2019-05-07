import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
//import SosScreen from '../screens/SosScreen';


const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-map' : 'md-map'}
    />
  ),
  tabBarOptions: {
  activeTintColor: '#b8860b',
  labelStyle: {
    fontSize: 12,
  },
  style: {
    backgroundColor: 'rgba(77, 0, 19, 0.8)',
  },
}
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'News',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
  tabBarOptions: {
    activeTintColor: '#b8860b',
    labelStyle: {
    fontSize: 12,
  },
  style: {
    backgroundColor: 'rgba(77, 0, 19, 0.8)',
  },
}
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
  tabBarOptions: {
  activeTintColor: '#b8860b',
  labelStyle: {
    fontSize: 12,
  },
  style: {
    backgroundColor: 'rgba(77, 0, 19, 0.8)',
  },
}
};

// const sosStack = createStackNavigator({
//   sos: SosScreen,
// });

// sosStack.navigationOptions = {
//   tabBarLabel: 'Links',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
//     />
//   ),
//   tabBarOptions: {
//   activeTintColor: '#e91e63',
//   labelStyle: {
//     fontSize: 12,
//   },
//   style: {
//     backgroundColor: 'rgba(52, 52, 52, 0.4)',
//   },
// }
// };

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
  // sosStack
});
