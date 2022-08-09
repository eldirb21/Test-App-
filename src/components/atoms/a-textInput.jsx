import React, {useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import Aicon from './a-icon';
import AText from './a-text';

export default function AtextInput(props) {
  const {
    label,
    error,
    containerStyle,
    labelStyle,
    textStyle,
    iconLeft,
    iconLeftType,
    borderColor,
    ishidden,
    iconWidth,
  } = props;
  const [hiddenText, sethiddenText] = useState(true);
  return (
    <View style={[containerStyle, {marginBottom: 10}]}>
      {label && (
        <AText style={[labelStyle, {color: '#9A9A9A', fontWeight: '500'}]}>
          {label}
        </AText>
      )}
      {iconLeft ? (
				// <AtextInput
				// 	iconLeft="home"
				// 	iconWidth={50}
				// 	ishidden
				// 	placeholder="Password"
				// 	value={}
				// 	onChangeText={ }
				// />
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 0.8,
            borderRadius: 10,
            borderColor: borderColor ? borderColor : 'rgba(0,0,0,0.2)',
            width: '100%',
          }}
        >
          <Aicon
            name={iconLeft}
            style={{
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              backgroundColor: '#166b88',
              padding: 12,
              width: iconWidth ? iconWidth : 70,
              margin: -1,
              textAlign: 'center',
            }}
            type={iconLeftType}
            size={25}
            color="#FFF"
          />
          <TextInput
            secureTextEntry={hiddenText}
            placeholder={label}
            placeholderTextColor={borderColor ? borderColor : 'grey'}
            style={[
              textStyle,
              ishidden && {paddingRight: 50},
              {padding: 10, color: borderColor ? borderColor : 'grey', flex: 1},
            ]}
            {...props}
          />
          {ishidden && (
            <TouchableOpacity
              onPress={() => sethiddenText(!hiddenText)}
              style={[styles.hiddenText, iconLeft && {right: 2}]}
              activeOpacity={0.7}
            >
              <Aicon
                size={20}
                type="Ionicons"
                name={hiddenText ? 'ios-eye-off' : 'ios-eye'}
                color={borderColor ? borderColor : 'grey'}
              />
            </TouchableOpacity>
          )}
        </View>
      ) : (
        <View>
          <TextInput
            secureTextEntry={hiddenText}
            placeholder={label}
            placeholderTextColor={borderColor ? borderColor : 'grey'}
            style={[
              textStyle,
              ishidden && {paddingRight: 60},
              styles.form,
              {
                color: borderColor ? borderColor : 'grey',
                borderColor: borderColor ? borderColor : 'rgba(0,0,0,0.2)',
              },
            ]}
            {...props}
          />
          {ishidden && (
            <TouchableOpacity
              onPress={() => sethiddenText(!hiddenText)}
              style={styles.hiddenText}
              activeOpacity={0.7}
            >
              <Aicon
                size={20}
                type="Ionicons"
                name={hiddenText ? 'ios-eye-off' : 'ios-eye'}
                color={borderColor ? borderColor : 'grey'}
              />
            </TouchableOpacity>
          )}
        </View>
      )}
      {error != undefined && (
        <View>
          {error == '' || <AText style={{color: 'red'}}>{error}</AText>}
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  hiddenText: {
    position: 'absolute',
    right: 10,
    padding: 14,
  },
  form: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
});
