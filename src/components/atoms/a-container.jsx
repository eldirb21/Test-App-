import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
 
export default function AContainer(props, style) {
   var {bg, barStyle, children} = props;
  function FocusAwareStatusBar(props) {
    const isFocused = useIsFocused();
    return isFocused ? <StatusBar {...props} /> : null;
  }
  var styled = [
    style,
    {
      flex: 1,
      backgroundColor: bg ? bg : '#ecf0f1',
     },
  ];
  return (
    <SafeAreaView style={styled}>
      {/* <FocusAwareStatusBar barStyle={barStyle} backgroundColor={bg} /> */}
      {children}
    </SafeAreaView>
  );
}
