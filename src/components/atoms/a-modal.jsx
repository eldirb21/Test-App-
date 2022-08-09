import React from 'react';
import {View, Modal, TouchableOpacity} from 'react-native';
export default function AModal(props) {
  return (
    <Modal
      animationType="fade"
      transparent
      statusBarTranslucent={props.visible}
      visible={props.visible}
      onRequestClose={props.onBack}
      {...props}
    >
      <TouchableOpacity
        activeOpacity={0.99}
        onPress={props.onBack}
        style={[
          props.hiddenStyle,
          {backgroundColor: 'rgba(0,0,0,.3)', flex: 1},
        ]}
      />
      <View
        style={[
          props.style,
          {
            position: 'absolute',
            justifyContent: 'center',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          },
        ]}
      >
        {props.children}
      </View>
    </Modal>
  );
}
