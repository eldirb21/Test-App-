import {View, StyleSheet} from 'react-native';
import React from 'react';
import Aicon from '../atoms/a-icon';
import AText from '../atoms/a-text';

export default function AcardInfo() {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Aicon name="medal" type="FontAwesome5" size={45} color="#EA6C00" />
      </View>
      <View style={styles.point_label}>
        <AText style={styles.point_text}>Total Poin Anda</AText>
        <AText style={styles.text_reward}>
          <AText style={styles.text_reward_count}>230</AText> Klaim Reward
        </AText>
      </View>
      <Aicon name={'arrow-forward-ios'} size={18} color="#0D0D0D" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: -10,
    padding: 20,
    backgroundColor: '#E4E4E4',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    transform: [{rotateZ: '180deg'}, {rotateY: '180deg'}],
  },
  point_label: {
    flex: 1,
    marginLeft: 20,
  },
  point_text: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '700',
  },
  text_reward: {
    color: '#747474',
    fontSize: 12,
  },
  text_reward_count: {
    color: '#EA6C00',
    fontSize: 16,
  },
});
