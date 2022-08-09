import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import AContainer from '../../components/atoms/a-container';
import AContent from '../../components/atoms/a-content';
import AappBar from '../../components/molecules/a-appBar';
import AText from '../../components/atoms/a-text';
import Aicon from '../../components/atoms/a-icon';
import AFloating from '../../components/atoms/a-floating';
import {ProgressBar} from '@react-native-community/progress-bar-android';
import Atabs from '../../components/atoms/a-tabs';
import AcardInfo from '../../components/molecules/a-card-info';
import Aprogress from '../../components/atoms/a-progress';
import AcardTabitem from '../../components/molecules/a-card-tab-item';
import AcardbgProfile from '../../components/molecules/a-card-bg_profile';
import AcardUser from '../../components/molecules/a-card-user';

const {height, width} = Dimensions.get('screen');
export default function Home(props) {
  const [tabSelect, settabSelect] = useState(0);

  const [PMP, setPMP] = useState([
    {
      name: 'Postingan',
      count: 26,
    },
    {
      name: 'Mengikuti',
      count: 30,
    },
    {
      name: 'Pengikut',
      count: 29,
    },
  ]);
  var Images =
    'https://mojok.co/terminal/wp-content/uploads/2021/07/Kata-Siapa-Jadi-Contact-Person-CP-Sebuah-Acara-Itu-Enak-Justru-Stok-Sabarnya-Harus-Ekstra-terminal-mojok.jpg';

  return (
    <AContainer>
      <AappBar
        ongoBack={() => props.navigation.goBack()}
        title="Profile"
        isRight={
          <View style={styles.isRight}>
            <TouchableOpacity>
              <Aicon name="share-social-outline" type="Ionicons" size={25} />
            </TouchableOpacity>
            <View style={{margin: 10}} />
            <TouchableOpacity
              onPress={() => props.navigation.navigate('ProfileDetail')}
            >
              <Aicon name="user" type="Feather" size={25} />
            </TouchableOpacity>
          </View>
        }
      />
      <AContent scroll>
        <AcardbgProfile Images={Images} onPress={() => {}} />
        <AcardUser Images={Images} PMP={PMP} navigation={props.navigation} />

        <AcardInfo />
        <Aprogress label={`Lengkapi Profile Anda 2/3`} />
        <Atabs onChange={select => settabSelect(select)} />
        <AcardTabitem tabSelect={tabSelect} Images={Images} />

        <AFloating />
      </AContent>
    </AContainer>
  );
}
const styles = StyleSheet.create({
  isRight: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
