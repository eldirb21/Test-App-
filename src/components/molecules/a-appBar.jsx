import {
  View,
  Text,
  TouchableNativeFeedback,
  StyleSheet,
  StatusBar,
} from 'react-native';
import React from 'react';
import Aicon from '../atoms/a-icon';
import AText from '../atoms/a-text';
import LinearGradient from 'react-native-linear-gradient';

const TouchButton = props => {
  var {onPress, color, icontype} = props;
  return (
    <TouchableNativeFeedback
      onPress={onPress}
      background={TouchableNativeFeedback.Ripple('rgba(0,0,0,.2)', true)}
    >
      <View
        style={[
          props.btnStyle,
          {
            padding: 6,
            width: 40,
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}
      >
        <Aicon
          color={color ? color : '#000'}
          style={[props.iconStyle, {marginLeft: -1.5}]}
          type={icontype}
          {...props}
        />
      </View>
    </TouchableNativeFeedback>
  );
};
export default function AappBar(props) {
  function onPress() {
    var {backable} = props;
    if (backable != undefined) {
      backable.props.navigation.goBack();
    } else {
      props.onPress();
    }
  }
  function renderLeft() {
    const {
      size,
      iconColor,
      btnStyle,
      iconStyle,
      ongoBack,
      icontype,
      icon,
      textColor,
      parent,
    } = props;
    return (
      <View style={styles.render_left}>
        {ongoBack && (
          <TouchButton
            btnStyle={btnStyle}
            iconStyle={iconStyle}
            onPress={ongoBack}
            name={icon ? icon : 'arrow-back'}
            size={size ? size : 30}
            color={iconColor ? iconColor : textColor}
            icontype={icontype}
          />
        )}
      </View>
    );
  }
  function renderCenter() {
    const {title, textColor} = props;
    var styled = [
      styles.centext,
      {
        fontSize: 18,
        fontFamily: 'Roboto',
        justifyContent: 'center',
        alignItems: 'center',
        textTransform: 'capitalize',
        color: textColor ? textColor : '#FFFFFF',
      },
    ];
    return (
      <View style={styles.render_center}>
        <AText style={styled}>{title}</AText>
      </View>
    );
  }

  function renderRight() {
    const {isRight} = props;
    return <View style={styles.render_right}>{isRight}</View>;
  }

  var styled = [
    styles.container,
    {
      borderBottomWidth: props.bordered ? 1 : 0,
      borderColor: 'rgba(0,0,0,.05)',
      backgroundColor: props.bg,
    },
  ];

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={
        props.isNotLinear ? ['transparent', 'transparent'] : ['#05B1A1', '#006C90']
      }
    >
      <StatusBar backgroundColor={'#2B6592'} barStyle="dark-content" />
      <View style={styled}>
        {renderLeft()}
        {renderCenter()}
        {renderRight()}
      </View>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 55,
		paddingHorizontal:10
  },
  render_left: {
    width: 100,
    height: '100%',
    justifyContent: 'center',
  },
  render_center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  render_right: {
    width: 100,
    height: '100%',
    justifyContent: 'center',
  },
});
