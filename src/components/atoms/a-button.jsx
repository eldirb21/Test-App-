import {View, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import AText from './a-text';

export default function Abutton(props) {
  const {title, type, bordered, styleBtn, textColor, bgColor} = props;
  var styledbtn = [
    styles.btn,
    styleBtn,

    type == 'small' && {width: '50%'},
    type == 'large' && {width: '100%'},
    bordered
      ? {
          borderWidth: 1,
          borderColor: textColor ? textColor : 'grey',
        }
      : {backgroundColor: bgColor ? bgColor : 'grey'},
    ,
  ];
  var styledbtntext = [
    styles.btnText,
    {
      color: textColor ? textColor : 'grey',
      textTransform: 'uppercase',
    },
  ];
  return (
    <TouchableOpacity activeOpacity={0.7} style={styledbtn} {...props}>
      <AText style={styledbtntext}>{title}</AText>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    borderRadius: 10,
    padding: 13,
  },
  btnText: {
    fontWeight: '600',
    fontSize: 16,
  },
});
