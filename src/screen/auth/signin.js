import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  EventEmitter,
  AppState,
  Keyboard,
  ToastAndroid,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AContainer from '../../components/atoms/a-container';
import AText from '../../components/atoms/a-text';
import AtextInput from '../../components/atoms/a-textInput';
import AContent from '../../components/atoms/a-content';
import Abutton from '../../components/atoms/a-button';
import DB from '../../db/SQLite';
import ASpinner from '../../components/atoms/a-spinner';
import localStore from '../../db/local-store';

export default function Signin(props) {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [loading, setloading] = useState(false);

  const [Inputs, setInputs] = useState({
    UserName: '',
    Password: '',
  });

  const doLogin = () => {
    if (Inputs.UserName == '') {
      ToastAndroid.show('UserName is required!', ToastAndroid.SHORT);
    } else if (Inputs.Password == '') {
      ToastAndroid.show('Password is required!', ToastAndroid.SHORT);
    } else {
      setloading(true);
      DB.getSingle('users', Inputs)
        .then(async res => {
          setloading(false);
          if (res.data.length == 0) {
            ToastAndroid.show('No data user Found!', ToastAndroid.SHORT);
          } else {
            await localStore.insert('authUser', res.data[0]);
            props.navigation.replace('TabNav');
          }
        })
        .catch(err => {
          console.log(err);
          setloading(false);
        });
    }
  };
  const doSignUp = () => {
    props.navigation.replace('Signup');
  };
  return (
    <AContainer>
      <AContent pd containerStyle={styles.container}>
        <Image style={styles.logo} source={require('../../assets/logo.jpeg')} />
        <View style={styles.form}>
          <AtextInput
            placeholder="Username"
            value={Inputs.UserName}
            onChangeText={val =>
              setInputs({...Inputs, UserName: val ? val.toLowerCase() : ''})
            }
          />
          <AtextInput
            ishidden
            placeholder="Password"
            value={Inputs.Password}
            onChangeText={val =>
              setInputs({...Inputs, Password: val ? val.toLowerCase() : ''})
            }
          />
        </View>
        <View>
          <Abutton title="Sign In" textColor="#FFF" onPress={() => doLogin()} />
          <View style={styles.forgot_pass}>
            <AText>Don't have accout?</AText>
            <TouchableOpacity style={styles.back} onPress={() => doSignUp()}>
              <AText style={{color: 'green'}}>Sign Up</AText>
            </TouchableOpacity>
          </View>
        </View>
        <ASpinner visible={loading} />
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
  form: {
    marginBottom: 50,
  },
  forgot_pass: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  back: {
    marginLeft: 20,
  },
});
