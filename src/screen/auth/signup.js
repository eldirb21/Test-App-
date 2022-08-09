import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ToastAndroid,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AContainer from '../../components/atoms/a-container';
import AText from '../../components/atoms/a-text';
import AtextInput from '../../components/atoms/a-textInput';
import AContent from '../../components/atoms/a-content';
import Abutton from '../../components/atoms/a-button';
import DB from '../../db/SQLite';
import db_query from '../../db/db_query';
import ASpinner from '../../components/atoms/a-spinner';
import AcameraAlert from '../../components/atoms/a-cameraAlert';
import Base64 from '../../utils/base64';
import Aicon from '../../components/atoms/a-icon';

export default function Signup(props) {
  const [loading, setloading] = useState(false);
  const [cameras, setcameras] = useState(false);
  const [Inputs, setInputs] = useState({
    name: '',
    phone: '',
    email: '',
    userName: '',
    password: '',
    image: '',
  });

  const doSignUp = () => {
    if (Inputs.name == '') {
      ToastAndroid.show('Name is required!', ToastAndroid.SHORT);
    } else if (Inputs.phone == '') {
      ToastAndroid.show('Phone is required!', ToastAndroid.SHORT);
    } else if (Inputs.email == '') {
      ToastAndroid.show('email is required!', ToastAndroid.SHORT);
    } else if (Inputs.userName == '') {
      ToastAndroid.show('userName is required!', ToastAndroid.SHORT);
    } else if (Inputs.password == '') {
      ToastAndroid.show('password is required!', ToastAndroid.SHORT);
    } else if (Inputs.image == '') {
      ToastAndroid.show('image is required!', ToastAndroid.SHORT);
    } else {
      setloading(true);

      DB.post('users', Inputs)
        .then(res => {
          setloading(false);
          props.navigation.replace('Signin');
        })
        .catch(err => {
          console.log(err);
          setloading(false);
        });
    }
  };
  const doBack = () => {
    props.navigation.replace('Signin');
  };
  return (
    <AContainer>
      <AContent pd containerStyle={styles.container}>
        <View style={styles.cont_img}>
          <Image
            resizeMode="cover"
            style={styles.logo}
            source={
              Inputs.image
                ? {uri: Base64.decode(Inputs.image)}
                : require('../../assets/logo.jpeg')
            }
          />
          <TouchableOpacity
            onPress={() => setcameras(!cameras)}
            style={styles.edit_img}
          >
            <Aicon name="camera" type="Feather" size={16} color="#FFF" />
          </TouchableOpacity>
        </View>
        <View style={styles.form}>
          <AtextInput
            placeholder="Name"
            value={Inputs.name}
            onChangeText={val => setInputs({...Inputs, name: val})}
          />
          <AtextInput
            placeholder="Phone"
            value={Inputs.phone}
            onChangeText={val => setInputs({...Inputs, phone: val})}
          />
          <AtextInput
            placeholder="email"
            value={Inputs.email}
            onChangeText={val => setInputs({...Inputs, email: val})}
          />
          <AtextInput
            placeholder="userName"
            value={Inputs.userName}
            onChangeText={val =>
              setInputs({...Inputs, userName: val ? val.toLowerCase() : ''})
            }
          />
          <AtextInput
            placeholder="password"
            value={Inputs.password}
            onChangeText={val =>
              setInputs({...Inputs, password: val ? val.toLowerCase() : ''})
            }
          />
        </View>
        <View>
          <Abutton
            title="Sign Up"
            textColor="#FFF"
            onPress={() => doSignUp()}
          />
          <View style={styles.forgot_pass}>
            <AText>Already have accout?</AText>
            <TouchableOpacity style={styles.back} onPress={() => doBack()}>
              <AText style={{color: 'green'}}>Sign In</AText>
            </TouchableOpacity>
          </View>
        </View>
        <ASpinner visible={loading} />
      </AContent>
      <AcameraAlert
        visible={cameras}
        onClose={() => setcameras(!cameras)}
        onChange={img => {
          setInputs({...Inputs, image: img});
          setcameras(!cameras);
        }}
      />
    </AContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  cont_img: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  logo: {
    height: 100,
    width: 100,
    borderRadius: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  edit_img: {
    backgroundColor: 'blue',
    position: 'absolute',
    borderRadius: 100,
    padding: 5,
    bottom: 20,
    right: 5,
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
