import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ImageBackground,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AContainer from '../../components/atoms/a-container';
import AContent from '../../components/atoms/a-content';
import AappBar from '../../components/molecules/a-appBar';
import AText from '../../components/atoms/a-text';
import Aicon from '../../components/atoms/a-icon';
import Base64 from '../../utils/base64';
import Abutton from '../../components/atoms/a-button';
import DB from '../../db/SQLite';
import AcameraAlert from '../../components/atoms/a-cameraAlert';
import ASpinner from '../../components/atoms/a-spinner';

export default function Accountdetails(props) {
  const [data, setdata] = useState(props.route.params);
  const [cameras, setcameras] = useState(false);
  const [edit, setedit] = useState(false);
  const [loading, setloading] = useState(false);

  const doUpdate = () => {
    setloading(true);
    DB.update('users', data, 'id')
      .then(res => {
        setloading(false);
        props.navigation.goBack();
      })
      .catch(err => {
        setloading(false);
      });
  };
  return (
    <AContainer>
      <AappBar
        iconRight={edit ? 'account-cancel-outline' : 'account-edit-outline'}
        onBackCustom={() => props.navigation.goBack()}
        onRight={() => setedit(!edit)}
        type="MaterialCommunityIcons"
        title="Profile detail"
        textColor="#000"
        size={28}
        bordered
      />
      <AContent pd>
        <View>
          <ImageBackground
            resizeMode="cover"
            style={styles.logo}
            imageStyle={{borderRadius: 100}}
            source={{uri: Base64.decode(data.image)}}
          >
            {edit && (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setcameras(!cameras)}
                style={styles.edit_img}
              >
                <Aicon name="camera" type="Feather" size={20} color="blue" />
              </TouchableOpacity>
            )}
          </ImageBackground>
        </View>
        <View style={styles.form_container}>
          <TextInput
            editable={edit}
            placeholder="Name"
            placeholderTextColor="rgba(0,0,0,0.2)"
            onChangeText={val => setdata({...data, name: val})}
            value={data.name}
            style={styles.form}
          />
          <TextInput
            editable={edit}
            placeholder="Email"
            placeholderTextColor="rgba(0,0,0,0.2)"
            onChangeText={val => setdata({...data, email: val})}
            value={data.email}
            style={styles.form}
          />
          <TextInput
            editable={edit}
            placeholder="Phone"
            placeholderTextColor="rgba(0,0,0,0.2)"
            onChangeText={val => setdata({...data, phone: val})}
            value={data.phone}
            style={styles.form}
          />
          <TextInput
            editable={edit}
            placeholder="UserName"
            placeholderTextColor="rgba(0,0,0,0.2)"
            onChangeText={val =>
              setdata({...data, userName: val ? val.toLowerCase() : ''})
            }
            value={data.userName}
            style={styles.form}
          />
        </View>
        {edit && (
          <Abutton title="Update" textColor="#FFF" onPress={() => doUpdate()} />
        )}
        <ASpinner visible={loading} />
      </AContent>
      <AcameraAlert
        visible={cameras}
        onClose={() => setcameras(!cameras)}
        onChange={img => setdata({...data, image: img})}
      />
    </AContainer>
  );
}
const styles = StyleSheet.create({
  form_container: {
    marginTop: 40,
    flex: 1,
  },
  form: {
    color: '#000',
    borderBottomWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.2)',
  },

  logo: {
    height: 100,
    width: 100,
    borderRadius: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  edit_img: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
});
