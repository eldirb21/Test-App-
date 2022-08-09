import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNav from './src/nav/auth-nav';

export default function App() {
  return (
    <NavigationContainer>
      <AuthNav />
    </NavigationContainer>
  );
}
