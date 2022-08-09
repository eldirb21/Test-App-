import React, {useState} from 'react';
import {Dimensions, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useEffect} from 'react/cjs/react.production.min';
import Aicon from './a-icon';
import AText from './a-text';

const {width, height} = Dimensions.get('window');
export default function Atabs(props) {
  const {onChange} = props;
  const [tabSelect, settabSelect] = useState(0);
  const [tabs, settabs] = useState([
    {
      name: 'Semua',
      icon: 'menu',
      iconType: 'MaterialCommunityIcons',
    },
    {
      name: 'Idea',
      icon: 'lightbulb-on-outline',
      iconType: 'MaterialCommunityIcons',
    },
    {
      name: 'Artikel',
      icon: 'text-box-outline',
      iconType: 'MaterialCommunityIcons',
    },
    {
      name: 'Poling',
      icon: 'poll',
      iconType: 'MaterialCommunityIcons',
    },
    {
      name: 'Petisi',
      icon: 'account-group-outline',
      iconType: 'MaterialCommunityIcons',
    },
  ]);

  return (
    <View style={styles.container}>
      {tabs.map((item, index) => {
        return (
          <View key={index} style={styles.item}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                onChange(index);
                settabSelect(index);
              }}
              style={[
                styles.press_item,
                {backgroundColor: tabSelect == index ? '#05B1A1' : '#FFFFFF'},
              ]}
            >
              <Aicon
                name={item.icon}
                type={item.iconType}
                color={tabSelect == index ? '#FFFFFF' : '#05B1A1'}
                size={20}
              />
            </TouchableOpacity>
            <AText style={{color: '#05B1A1'}}>{item.name}</AText>
          </View>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: width / 5,
  },
  press_item: {
    padding: 20,
    borderWidth: 0.4,
    borderColor: '#9B9B9B',
    borderRadius: 7,
  },
});
