import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  ToastAndroid,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import AContainer from '../../components/atoms/a-container';
import AContent from '../../components/atoms/a-content';
import second from '.';
import AText from '../../components/atoms/a-text';
import AtextInput from '../../components/atoms/a-textInput';
import AappBar from '../../components/molecules/a-appBar';
import Abutton from '../../components/atoms/a-button';
import ASpinner from '../../components/atoms/a-spinner';
import DB from '../../db/SQLite';
export default function ChangePassword(props) {
  const {onClose, visible, data} = props;
  const [loading, setloading] = useState(false);
  const [Inputs, setInputs] = useState({
    password: '',
    oldPassword: '',
  });
  const doChangePass = () => {
    if (Inputs.oldPassword == '') {
      ToastAndroid.show('Current Password is required!', ToastAndroid.SHORT);
    } else if (Inputs.password == '') {
      ToastAndroid.show('Password is required!', ToastAndroid.SHORT);
    } else if (
      Inputs.oldPassword.toLowerCase() != data.password.toLowerCase()
    ) {
      ToastAndroid.show('Old Password Not Match!', ToastAndroid.SHORT);
    } else {
      var newdata = data;
      newdata.password = Inputs.password;
      setloading(true);
      DB.update('users', newdata, 'id')
        .then(res => {
          setloading(false);
          onClose();
          setInputs({});
        })
        .catch(err => {
          setloading(false);
        });
    }
  };
  return (
    <Modal visible={visible} transparent onRequestClose={onClose}>
      <TouchableOpacity style={styles.overlay} />
      <View style={styles.container}>
        <AappBar
          title={'Change Password'}
          onBackCustom={onClose}
          textColor="#000"
          icon="close"
          size={20}
          bordered
        />
        <View
          style={{
            marginTop: 20,
            padding: 20,
          }}
        >
          <View style={{marginBottom: 20}}>
            <AtextInput
              ishidden
              placeholder="Old Password"
              value={Inputs.oldPassword}
              onChangeText={val =>
                setInputs({
                  ...Inputs,
                  oldPassword: val ? val.toLowerCase() : '',
                })
              }
            />
            <AtextInput
              ishidden
              placeholder="Password"
              value={Inputs.password}
              onChangeText={val =>
                setInputs({...Inputs, password: val ? val.toLowerCase() : ''})
              }
            />
          </View>
          <Abutton
            title="Change password"
            textColor="#FFF"
            onPress={() => doChangePass()}
          />
        </View>
        <ASpinner visible={loading} />
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  container: {
    backgroundColor: '#FFF',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
});
