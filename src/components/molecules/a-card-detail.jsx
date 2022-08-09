import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import AContainer from '../../components/atoms/a-container';
import AappBar from '../../components/molecules/a-appBar';
import AContent from '../../components/atoms/a-content';
import AText from '../../components/atoms/a-text';
import Aicon from '../../components/atoms/a-icon';

export default function AcardDetail({subject, code, desc}) {
  return (
    <View style={styles.card_item}>
      <AText style={styles.subject}>{subject}</AText>
      <View style={styles.items}>
        <Aicon
          style={{width: '14%'}}
          type={
            (code == 'HB' && 'Feather') ||
            (code == 'WS' && 'AntDesign') ||
            (code == 'PD' && 'Ionicons')
          }
          name={
            (code == 'PE' && 'work-outline') ||
            (code == 'PD' && 'school-outline') ||
            (code == 'TT' && 'location-on') ||
            (code == 'HB' && 'pen-tool') ||
            (code == 'WS' && 'earth')
          }
          color="#05B1A1"
          size={(code == 'WS' && 20) || 23}
        />
        <View style={{flex: 1}}>
          <AText style={styles.desc_name}>{desc.name}</AText>
          {desc.desc != '' && <AText>{desc.desc}</AText>}
          {desc.date != '' && <AText>{desc.date}</AText>}
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card_item: {
    borderBottomWidth: 0.3,
    borderColor: '#797979',
    paddingBottom: 8,
    marginBottom: 10,
  },
  subject: {
    color: '#05B1A1',
    fontSize: 16,
    fontWeight: '700',
  },
  items: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  desc_name: {
    fontSize: 16,
    fontWeight: '400',
  },
});
