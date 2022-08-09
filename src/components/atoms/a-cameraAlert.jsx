import React from 'react';
import {
  Alert,
  PermissionsAndroid,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import AText from './a-text';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Base64 from '../../utils/base64';

var options = {
  title: 'Select Image',
  customButtons: [
    {
      name: 'customOptionKey',
      title: 'Choose file from Custom Option',
    },
  ],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export default function AcameraAlert(props) {
  const {visible, onClose, onChange} = props;
  async function onCamera() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'App Camera Permission',
          message: 'App needs access to your camera ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Camera permission given');
        launchCamera(options, res => {
          if (res.didCancel) {
            console.log('User cancelled image picker');
          } else if (res.error) {
            console.log('ImagePicker Error: ', res.error);
          } else if (res.customButton) {
            console.log('User tapped custom button: ', res.customButton);
            Alert.alert(res.customButton);
          } else {
            let source = res.assets.map(x => x.uri);
            let uri = source && source.toString();
            var base64 = Base64.encode(uri);
            onChange(base64);
          }
        });
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }
  function onImageLibrary() {
    launchImageLibrary(options, res => {
      if (res.didCancel) {
        console.log('cancel');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        Alert.alert(res.customButton);
      } else {
        let source = res.assets.map(x => x.uri);
        let uri = source && source.toString();
        var base64 = Base64.encode(uri);
        onChange(base64);
      }
    });
  }
  return (
    <>
      {visible && (
        <View style={styles.container}>
          <View style={styles.body}>
            <AText style={styles.text_head}>Photos</AText>
            <View>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => onImageLibrary()}
                style={styles.btn}
              >
                <AText style={styles.text_body}>From Photos</AText>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => onCamera()}
                style={styles.btn}
              >
                <AText style={styles.text_body}>Take Picture</AText>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            activeOpacity={1}
            onPress={onClose}
            style={styles.footer}
          >
            <AText style={styles.text_body}>Cancel</AText>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,.5)',
    flex: 1,
    justifyContent: 'flex-end',
  },
  body: {
    backgroundColor: '#FFF',
    margin: 10,
    marginBottom: 0,
    borderRadius: 10,
  },
  text_head: {
    padding: 10,
    color: '#9A9A9A',
    fontWeight: '600',
    backgroundColor: '#FFF',
    textAlign: 'center',
    borderRadius: 10,
    textTransform: 'uppercase',
  },
  text_body: {
    color: '#278F02',
    fontWeight: '600',
  },
  btn: {
    padding: 14,
    borderTopWidth: 1,
    alignItems: 'center',
    borderColor: 'rgba(0,0,0,.08)',
  },
  footer: {
    backgroundColor: 'hsl(104, 99%, 88%)',
    padding: 12,
    alignItems: 'center',
    margin: 10,
		marginVertical:4,
    borderRadius: 10,
  },
});
