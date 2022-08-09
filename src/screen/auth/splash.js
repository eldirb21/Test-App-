import React, {useEffect} from 'react';
import {Image, StyleSheet, ActivityIndicator} from 'react-native';
import AContainer from '../../components/atoms/a-container';
import AContent from '../../components/atoms/a-content';
import db_query from '../../db/db_query';
import localStore from '../../db/local-store';
import DB from '../../db/SQLite';

export default function Splash(props) {
  useEffect(() => {
    valideteSession();
  }, []);
  const valideteSession = async () => {
    var user = await localStore.get('authUser');
    DB.createTable('users', db_query.tbl_user);
    setTimeout(() => {
      // if (user != null) {
        props.navigation.replace('TabNav');
      // } else {
      //   props.navigation.replace('Signin');
      // }
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
