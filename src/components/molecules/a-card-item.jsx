import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import AText from '../atoms/a-text';

export default function AcardItem({img, name, textBtn}) {
  return (
    <View style={styles.container}>
      <View style={{width: '20%'}}>
        <Image style={styles.img} source={{uri: img}} />
      </View>
      <View style={styles.name}>
        <AText style={styles.name_text}>{name}</AText>
        <View style={styles.btn}>
          <AText style={styles.btn_label}>{textBtn}</AText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    borderWidth: 0.2,
    borderColor: '#05B1A1',
    borderRadius: 35,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    padding: 12,
  },
  img: {
    width: 48,
    height: 48,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#05B1A1',
  },
  name: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  name_text: {
    color: '#000',
    fontSize: 15,
  },
  btn: {
    backgroundColor: '#46B29C',
    padding: 10,
    borderRadius: 35,
    width: 106,
    alignItems: 'center',
  },
  btn_label: {
    color: '#FFF',
    fontSize: 15,
  },
});
