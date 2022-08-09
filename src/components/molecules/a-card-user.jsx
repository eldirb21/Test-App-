import {
  View,
  Text,
  Image,
  StyleSheet,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import AText from '../atoms/a-text';
import Aicon from '../atoms/a-icon';

export default function AcardUser(props) {
  const {Images, PMP, navigation} = props;
  return (
    <View style={[styles.container, styles.shadow]}>
      <View style={styles.photo}>
        <Image style={styles.img} source={{uri: Images}} />
      </View>
      <View style={styles.container_profile}>
        <View style={{marginBottom: 5}}>
          <View style={{marginBottom: 10}}>
            <AText style={styles.user}>Skylar Vaccaro</AText>
            <View style={{flexDirection: 'row'}}>
              {[1, 2, 3, 4, 5].map((item, index) => (
                <View key={index}>
                  <Aicon name="star-border" size={16} color="#DD7F29" />
                </View>
              ))}
            </View>
          </View>
          <AText style={styles.title}>Penulis | Politisi</AText>
        </View>
        <AText style={styles.motto}>
          "Hidup itu sederhana, kita yang membuatnya sulit."
        </AText>
      </View>
      <View style={styles.footer}>
        {PMP.map((item, index) => (
          <TouchableOpacity
            style={[styles.footer_item, index == 1 && styles.footer_filter]}
            activeOpacity={0.7}
            key={index}
            onPress={() => {
              if (item.name == 'Mengikuti') {
                navigation.navigate('Follows');
              } else if (item.name == 'Pengikut') {
                navigation.navigate('Followers');
              } else
                ToastAndroid.show('Fiture coming soon!', ToastAndroid.SHORT);
            }}
          >
            <AText style={styles.name}>{item.name}</AText>
            <AText style={styles.count}>{item.count}</AText>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: -35,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: '90%',
    alignSelf: 'center',
    // marginVertical: 20,
    borderRadius: 7,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  photo: {
    position: 'absolute',
    left: 20,
    top: -45,
  },
  img: {
    height: 80,
    width: 80,
    borderRadius: 100,
  },
  container_profile: {
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
  },
  footer: {
    width: '100%',
    backgroundColor: '#05B1A1',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
  },
  footer_item: {
    width: '30%',
    alignItems: 'center',
  },
  footer_filter: {
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: '#FFFFFF',
    width: '31.5%',
  },
  user: {
    color: '#000000',
    fontSize: 15,
    fontWeight: '700',
  },
  title: {
    color: '#000000',
    fontWeight: '400',
  },
  motto: {
    color: '#000',
    fontWeight: '600',
    textAlign: 'center',
  },
  name: {
    color: '#FFFFFF',
    fontWeight: '400',
  },
  count: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
