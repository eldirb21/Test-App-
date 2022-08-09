import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {stackNav} from './nav-data';

const Stack = createStackNavigator();
export default function AuthNav(props) {
  return (
    <Stack.Navigator
      headerMode="screen"
      screenOptions={{
        headerShown: false,
      }}
    >
      {stackNav.map((item, index) => (
        <Stack.Screen key={index} name={item.name} component={item.path} />
      ))}
    </Stack.Navigator>
  );
}
