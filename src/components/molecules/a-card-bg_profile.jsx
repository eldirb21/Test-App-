import {
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Aicon from '../atoms/a-icon';

const {height, width} = Dimensions.get('window');

export default function AcardbgProfile({Images, onPress}) {
  return (
    <ImageBackground style={styles.container} source={{uri: Images}}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
        style={styles.icon_camera}
      >
        <Aicon type="Ionicons" name="camera" size={25} color="#FFF" />
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height / 4,
    width: '100%', //width,
    flex: 1,
  },
  icon_camera: {
    backgroundColor: '#05B1A1',
    padding: 10,
    borderRadius: 100,
    alignSelf: 'flex-end',
    right: 30,
    top: 20,
  },
});
