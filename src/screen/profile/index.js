import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Switch,
  Keyboard,
  ToastAndroid,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AContainer from '../../components/atoms/a-container';
import AContent from '../../components/atoms/a-content';
import AappBar from '../../components/molecules/a-appBar';
import AText from '../../components/atoms/a-text';
import Abutton from '../../components/atoms/a-button';
import Aicon from '../../components/atoms/a-icon';
import DB from '../../db/SQLite';
import localStore from '../../db/local-store';
import ASpinner from '../../components/atoms/a-spinner';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import AcameraAlert from '../../components/atoms/a-cameraAlert';
import Base64 from '../../utils/base64';
import ChangePassword from './changePassword';

export default function Account(props) {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [loading, setloading] = useState(false);
  const [cameras, setcameras] = useState(false);
  const [ShowChangePass, setShowChangePass] = useState(false);
  const [data, setdata] = useState({});
  useEffect(() => {
    const calback = props.navigation.addListener('focus', () => {
      load();
    });
    return calback;
  }, []);

  const load = async () => {
    var user = await localStore.get('authUser');
    var orderBy = {
      id: user.id,
    };
    setloading(true);
    DB.getSingle('users', orderBy)
      .then(res => {
        setloading(false);
        if (res.data[0] != undefined) setdata(res.data[0]);
      })
      .catch(err => {
        setloading(false);
        console.log(err);
      });
  };
  const [root, setroot] = useState([
    {
      subject: 'Profile',
      root: [
        {
          code: 'AD',
          name: 'Account details',
          icon: 'person-outline',
        },
        {
          code: 'DO',
          name: 'Documents',
          icon: 'document-text-outline',
          iconType: 'Ionicons',
        },
        {
          code: 'TL',
          name: 'Turn your location',
          icon: 'location-outline',
          iconType: 'Ionicons',
          switch: false,
        },
      ],
    },
    {
      subject: 'Bank details',
      root: [
        {
          code: 'BA',
          name: 'Bank Account',
          icon: 'account-balance-wallet',
        },
      ],
    },
    {
      subject: 'Notifications',
      root: [
        {
          code: 'AN',
          name: 'Activities notifications',
          icon: 'equalizer',
          switch: false,
        },
        {
          code: 'EN',
          name: 'Email notification',
          icon: 'send',
          iconType: 'Feather',
          switch: false,
        },
      ],
    },
    {
      subject: 'Security',
      root: [
        {
          code: 'SI',
          name: 'Sign in with touch ID',
          icon: 'security',
          switch: false,
        },
        {
          code: 'CP',
          name: 'Change password',
          icon: 'lock',
        },
      ],
    },
  ]);
  const onEditPhoto = img => {
    var newData = data;
    newData.image = img;
    setcameras(!cameras);
    setloading(true);
    DB.update('users', newData, 'id')
      .then(res => {
        setloading(false);
        load();
      })
      .catch(err => {
        console.log(err);
        setloading(false);
      });
  };
  const doSignOut = async () => {
    await localStore.delete('authUser');
    props.navigation.replace('Signin');
  };
  return (
    <AContainer>
      <AContent scroll>
        <View style={styles.cont_logo}>
          {data.image && (
            <View>
              <Image
                resizeMode="cover"
                style={styles.logo}
                source={{uri: Base64.decode(data.image)}}
              />
              <TouchableOpacity
                onPress={() => setcameras(!cameras)}
                style={styles.edit_img}
              >
                <Aicon name="camera" type="Feather" size={16} color="#FFF" />
              </TouchableOpacity>
            </View>
          )}
          <AText style={{fontWeight: 'bold', color: '#FFF'}}>{data.name}</AText>
          <AText style={{color: '#FFF'}}>{data.email}</AText>
        </View>
        <View style={styles.content}>
          <View style={{flex: 1, marginBottom: 20}}>
            {root.map((item, index) => {
              return (
                <View key={index}>
                  <AText style={styles.content_title}>{item.subject}</AText>
                  {item.root.map((itm, idx) => {
                    return (
                      <TouchableOpacity
                        disabled={itm.switch != undefined}
                        onPress={() => {
                          if (itm.code == 'AD') {
                            props.navigation.navigate('Accountdetails', data);
                          } else if (itm.code == 'CP') {
                            setShowChangePass(!ShowChangePass);
                          } else
                            ToastAndroid.show(
                              `${itm.name} feature is coming soon!`,
                              ToastAndroid.SHORT,
                            );
                          // console.log(itm.code);
                        }}
                        key={idx}
                        style={styles.item_content}
                      >
                        <Aicon
                          type={itm.iconType}
                          name={itm.icon}
                          color={'blue'}
                          size={25}
                        />
                        <View style={styles.item_content_label}>
                          <AText style={{flex: 1, color: '#000'}}>
                            {itm.name}
                          </AText>
                          {itm.switch != undefined ? (
                            <Switch
                              focusable
                              style={{marginRight: itm.switch ? 0 : -8}}
                              trackColor={{false: '#FFF', true: 'green'}}
                              thumbColor={itm.switch ? '#FFF' : '#FFF'}
                              ios_backgroundColor="#3e3e3e"
                              onValueChange={() => {
                                var newroot = [...root];
                                newroot[index].root[idx].switch = !newroot[
                                  index
                                ].root[idx].switch;
                                ToastAndroid.show(
                                  `${itm.name} feature is coming soon!`,
                                  ToastAndroid.SHORT,
                                );
                                setroot(newroot);
                              }}
                              value={itm.switch}
                            />
                          ) : (
                            <Aicon
                              name="arrow-forward-ios"
                              color="rgba(0,0,0,.2)"
                              size={20}
                            />
                          )}
                        </View>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              );
            })}
          </View>
          <Abutton
            styleBtn={{marginHorizontal: 20}}
            title="Sign out"
            textColor="#FFF"
            onPress={() => doSignOut()}
          />
        </View>
        <ASpinner visible={loading} />
      </AContent>
      <ChangePassword
        data={data}
        visible={ShowChangePass}
        onClose={() => setShowChangePass(!ShowChangePass)}
      />
      <AcameraAlert
        visible={cameras}
        onClose={() => setcameras(!cameras)}
        onChange={img => onEditPhoto(img)}
      />
    </AContainer>
  );
}
const styles = StyleSheet.create({
  edit_img: {
    backgroundColor: 'blue',
    position: 'absolute',
    borderRadius: 100,
    padding: 5,
    bottom: 20,
    right: 5,
  },
  cont_logo: {
    borderBottomWidth: 0.2,
    borderColor: 'rgba(0,0,0,.2)',
    alignItems: 'center',
    paddingVertical: 35,
    backgroundColor: 'green',
  },
  logo: {
    height: 100,
    width: 100,
    borderRadius: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  content: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 20,
    // paddingHorizontal: 20,
  },
  content_title: {
    fontWeight: '600',
    textTransform: 'uppercase',
    marginLeft: 20,
    paddingVertical: 15,
  },
  item_content: {
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  item_content_label: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 0.2,
    borderColor: 'rgba(0,0,0,.2)',
    paddingVertical: 20,
    marginLeft: 20,
    paddingRight: 20,
  },
});
