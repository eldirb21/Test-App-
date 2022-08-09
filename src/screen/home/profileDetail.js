import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import AContainer from '../../components/atoms/a-container';
import AappBar from '../../components/molecules/a-appBar';
import AContent from '../../components/atoms/a-content';
import AText from '../../components/atoms/a-text';
import Aicon from '../../components/atoms/a-icon';

export default function ProfileDetail(props) {
  const [data, setdata] = useState([
    {
      code: 'PE',
      subject: 'Pekerjaan',
      desc: {
        name: 'Graphic Design',
        desc: 'Opinia',
        date: '(2008-Sekarang)',
      },
    },
    {
      code: 'PD',
      subject: 'Pendidikan',
      desc: {
        name: 'Design Engineering',
        desc: 'Politeknik Manufaktur negeri Bandung',
        date: '(2011-2013)',
      },
    },
    {
      code: 'TT',
      subject: 'Tempat Tinggal',
      desc: {
        name: 'Kota Bekasi',
        desc: '',
        date: '(2011-2013)',
      },
    },
    {
      code: 'HB',
      subject: 'Hobi',
      desc: {
        name: 'Musik',
        desc: '',
        date: '',
      },
    },
    {
      code: 'WS',
      subject: 'Website:',
      desc: {
        name: 'www.gdsagdsagdsa.com',
        desc: '',
        date: '',
      },
    },
  ]);
  return (
    <AContainer>
      <AappBar
        ongoBack={() => props.navigation.goBack()}
        textColor="#000"
        isNotLinear
        title=""
      />
      <AContent scroll ph>
        {data.map((item, index) => {
          return (
            <View key={index} style={styles.card_item}>
              <AText style={styles.subject}>{item.subject}</AText>
              <View style={styles.items}>
                <Aicon
                  style={{width: '14%'}}
                  type={
                    (item.code == 'HB' && 'Feather') ||
                    (item.code == 'WS' && 'AntDesign') ||
                    (item.code == 'PD' && 'Ionicons')
                  }
                  name={
                    (item.code == 'PE' && 'work-outline') ||
                    (item.code == 'PD' && 'school-outline') ||
                    (item.code == 'TT' && 'location-on') ||
                    (item.code == 'HB' && 'pen-tool') ||
                    (item.code == 'WS' && 'earth')
                  }
                  color="#05B1A1"
                  size={(item.code == 'WS' && 20) || 23}
                />
                <View style={{flex: 1}}>
                  <AText style={styles.desc_name}>{item.desc.name}</AText>
                  {item.desc.desc != '' && <AText>{item.desc.desc}</AText>}
                  {item.desc.date != '' && <AText>{item.desc.date}</AText>}
                </View>
              </View>
            </View>
          );
        })}
      </AContent>
    </AContainer>
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
