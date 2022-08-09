import {View, Text, Keyboard} from 'react-native';
import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {tabNav} from './nav-data';
import Aicon from '../components/atoms/a-icon';
import {useNavigation} from '@react-navigation/native';

const Tab = createBottomTabNavigator();
export default function TabNav() {
  const navigation = useNavigation();

  var tabBarOptions = {
    keyboardHidesTabBar: true,
    style: {height: 55},
  };
  return (
    <Tab.Navigator
      tabBarOptions={tabBarOptions}
      screenOptions={({route}) => ({
        tabBarLabel: () => null,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let iconType;
          let iconSize;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Searchs') {
            iconName = focused ? 'search' : 'search';
          } else if (route.name === 'Groups') {
            iconName = focused ? 'groups' : 'groups';
          } else if (route.name === 'Chats') {
            iconName = focused ? 'ios-chatbubbles' : 'ios-chatbubbles';
            iconType = focused ? 'Ionicons' : 'Ionicons';
            iconSize = focused ? 24 : 24;
          }

          return (
            <Aicon
              type={iconType}
              name={iconName}
              size={iconSize ? iconSize : 29}
              color={focused ? '#05B1A1' : '#797979'}
            />
          );
        },
      })}
    >
      {tabNav.map((item, index) => (
        <Tab.Screen key={index} name={item.name} component={item.path} />
      ))}
    </Tab.Navigator>
  );
}
