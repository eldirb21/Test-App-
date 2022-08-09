import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import AText from './a-text';

export default function Atabs(props) {
  const {data, pd, onChange, childStyle} = props;
  const [Tab, setTab] = useState(data);
  const [selectTab, setselectTab] = useState(0);
  const color = (index, border) => {
    if (border) return selectTab == index ? '#278F02' : 'rgba(0,0,0,0.02)';
    return selectTab == index ? '#278F02' : '#000';
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {Tab.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => {
                onChange(index);
                setselectTab(index);
              }}
              activeOpacity={0.7}
              style={[styles.item, {borderColor: color(index, 'border')}]}
              key={index}
            >
              <AText style={{color: color(index), fontWeight: '600'}}>
                {item}
              </AText>
            </TouchableOpacity>
          );
        })}
      </View>
      <View
        style={[
          childStyle,
          {flex: 1, paddingHorizontal: pd ? 20 : 0, paddingTop: pd ? 6 : 0},
        ]}
      >
        {props.children}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1},
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 20,
    borderBottomWidth: 3,
  },
});
