import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {ProgressBar} from '@react-native-community/progress-bar-android';
import AText from './a-text';

export default function Aprogress({label}) {
  return (
    <View style={styles.container}>
      <AText style={styles.label}>{label}</AText>
      <View style={styles.progress}>
        <ProgressBar
          style={styles.progress_bar}
          color="#EA6C00"
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.7}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginBottom: -20,
  },
  label: {
    color: '#797979',
  },
  progress: {
    zIndex: 99,
    borderWidth: 2.5,
    borderRadius: 10,
    borderColor: '#05B1A1',
  },
  progress_bar: {
    marginVertical: -7,
    zIndex: -99,
  },
});
