import React, {useContext, useState} from 'react';
import {
  Alert,
  Animated,
  Image,
  PanResponder,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Aicon from './a-icon';

export default function AFloating(props) {
  const onFloating = () => {
    Alert.alert('Floating action button Clicked');
  };
  const {customStyle, bacground, bottom, icon, color} = props;
  return (
    <View style={styles.Container}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onFloating}
        style={styles.btn_action}
      >
        <Aicon
          size={30}
          color="#FFF"
          name="pencil-plus-outline"
          type="MaterialCommunityIcons"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    position: 'absolute',
    right: 5,
    bottom: 5,
  },

  btn_action: {
    position: 'absolute',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 10,
    backgroundColor: '#05B1A1',
    borderColor: '#000000',
    borderRadius: 200 / 2,
  },

  btn_icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    tintColor: '#FFFFFF',
  },
});
