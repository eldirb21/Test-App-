import React, {useEffect} from 'react';
import {Image, StyleSheet, ActivityIndicator} from 'react-native';
import AContainer from '../../components/atoms/a-container';
import AContent from '../../components/atoms/a-content';

export default function Splash(props) {
  useEffect(() => {
    valideteSession();
  }, []);
  const valideteSession = async () => {
    setTimeout(() => {
      props.navigation.replace('TabNav');
    }, 1500);
  };
  return (
    <AContainer>
      <AContent pd containerStyle={styles.container}>
        <Image style={styles.logo} source={require('../../assets/logo.jpeg')} />
        <ActivityIndicator
          style={styles.indicator}
          pointerEvents="none"
          color="green"
          size="large"
          collapsable
          animating
          focusable
        />
      </AContent>
    </AContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  logo: {
    height: 100,
    width: 100,
    borderRadius: 100,
    alignSelf: 'center',
    marginBottom: 50,
  },
  indicator: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: '30%',
  },
});
