import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';

export default function AContent(props) {
  var {bg, scroll, children, pd, ph, pv,pb, containerStyle} = props;

  var styled = [
    containerStyle,
    {
      flex: 1,
      display: 'flex',
      backgroundColor: bg,
    },
  ];

  return scroll ? (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}
      style={styled}
      {...props}
    >
      <View
        style={[
          {
            flex: 1,
            marginBottom: 4,
          },
          pd && {padding: 20 || 0},
          ph && {paddingHorizontal: 20},
          pv && {paddingVertical:  10},
					pb && {paddingBottom:  10},
        ]}
      >
        {children}
      </View>
    </ScrollView>
  ) : (
    <SafeAreaView
      style={[
        styled,
        pd && {padding: 20},
        ph && {paddingHorizontal: 20},
        pv && {paddingVertical: 20},
      ]}
      {...props}
    >
      {children}
    </SafeAreaView>
  );
}
