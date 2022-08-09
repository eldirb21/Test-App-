import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import AText from '../atoms/a-text';

export default function AcardTabitem({tabSelect, Images}) {
  return (
    <View style={styles.container}>
      {(tabSelect == 0 || tabSelect == 1) && (
        <View style={styles.item_Container}>
          <Image style={styles.img} source={{uri: Images}} />
          <View style={{marginLeft: 20}}>
            <AText style={styles.name}>Julia Mareta</AText>
            <AText style={{color: '#797979'}}>
              19 menit lalu | <AText style={{color: '#05B1A1'}}>Idea</AText>
            </AText>
          </View>
        </View>
      )}
      {(tabSelect == 0 || tabSelect == 2) && (
        <View style={styles.item_Container}>
          <Image style={styles.img} source={{uri: Images}} />
          <View style={{marginLeft: 20}}>
            <AText style={styles.name}>Julia Mareta</AText>
            <AText style={{color: '#797979'}}>
              19 menit lalu | <AText style={{color: '#05B1A1'}}>Article</AText>
            </AText>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: -10,
  },
  item_Container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  img: {
    height: 50,
    width: 50,
    borderRadius: 100,
    borderWidth: 3,
    padding: 5,
    borderColor: '#05B1A1',
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
  },
});
