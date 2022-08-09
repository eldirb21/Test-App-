import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
  ToastAndroid,
  ProgressBarAndroid,
} from 'react-native';
import React, {useState} from 'react';
import AContainer from '../../components/atoms/a-container';
import AContent from '../../components/atoms/a-content';
import AappBar from '../../components/molecules/a-appBar';
import AText from '../../components/atoms/a-text';
import Aicon from '../../components/atoms/a-icon';
import AFloating from '../../components/atoms/a-floating';

const {height, width} = Dimensions.get('screen');
export default function Home(props) {
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
        <ImageBackground
          style={{
            height: height / 4,
            width: '100%', //width,
            flex: 1,
          }}
          source={{uri: Images}}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              backgroundColor: '#05B1A1',
              padding: 10,
              borderRadius: 100,
              alignSelf: 'flex-end',
              right: 30,
              top: 20,
            }}
          >
            <Aicon type="Ionicons" name="camera" size={25} color="#FFF" />
          </TouchableOpacity>
        </ImageBackground>
        <View
          style={[
            {
              top: -35,
              alignItems: 'center',
              backgroundColor: '#FFFFFF',
              width: '90%',
              alignSelf: 'center',
              // marginVertical: 20,
              borderRadius: 7,
            },
            {
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.23,
              shadowRadius: 2.62,

              elevation: 4,
            },
          ]}
        >
          <View
            style={{
              position: 'absolute',
              left: 20,
              top: -45,
            }}
          >
            <Image
              style={{
                height: 80,
                width: 80,
                borderRadius: 100,
              }}
              source={{uri: Images}}
            />
          </View>
          <View
            style={{
              marginVertical: 10,
              justifyContent: 'center',
              alignItems: 'center',
              width: '70%',
            }}
          >
            <View style={{marginBottom: 5}}>
              <View style={{marginBottom: 10}}>
                <AText
                  style={{color: '#000000', fontSize: 15, fontWeight: '700'}}
                >
                  Skylar Vaccaro
                </AText>
                <View
                  style={{
                    flexDirection: 'row',
                  }}
                >
                  {[1, 2, 3, 4, 5].map((item, index) => (
                    <View key={index}>
                      <Aicon name="star-border" size={16} color="#DD7F29" />
                    </View>
                  ))}
                </View>
              </View>
              <AText style={{color: '#000000', fontWeight: '400'}}>
                Penulis | Politisi
              </AText>
            </View>
            <AText
              style={{color: '#000', fontWeight: '600', textAlign: 'center'}}
            >
              "Hidup itu sederhana, kita yang membuatnya sulit."
            </AText>
          </View>
          <View
            style={{
              width: '100%',
              backgroundColor: '#05B1A1',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 10,
              borderBottomLeftRadius: 7,
              borderBottomRightRadius: 7,
            }}
          >
            {PMP.map((item, index) => (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  if (item.name == 'Mengikuti') {
                    props.navigation.navigate('Follows');
                  } else if (item.name == 'Pengikut') {
                    props.navigation.navigate('Followers');
                  } else
                    ToastAndroid.show(
                      'Fiture coming soon!',
                      ToastAndroid.SHORT,
                    );
                }}
                key={index}
                style={[
                  {width: '30%', alignItems: 'center'},
                  index == 1 && {
                    borderRightWidth: 1,
                    borderLeftWidth: 1,
                    borderColor: '#FFFFFF',
                    width: '31.5%',
                  },
                ]}
              >
                <AText style={{color: '#FFFFFF', fontWeight: '400'}}>
                  {item.name}
                </AText>
                <AText
                  style={{color: '#FFFFFF', fontSize: 16, fontWeight: '700'}}
                >
                  {item.count}
                </AText>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View
          style={{
            marginTop: -10,
            padding: 20,
            backgroundColor: '#E4E4E4',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              transform: [{rotateZ: '180deg'}, {rotateY: '180deg'}],
            }}
          >
            <Aicon name="medal" type="FontAwesome5" size={45} color="#EA6C00" />
          </View>
          <View style={{flex: 1, marginLeft: 20}}>
            <AText style={{color: '#000000', fontSize: 14, fontWeight: '700'}}>
              Total Poin Anda
            </AText>
            <AText style={{color: '#747474', fontSize: 12}}>
              <AText style={{color: '#EA6C00', fontSize: 16}}>230</AText> Klaim
              Reward
            </AText>
          </View>
          <Aicon name={'arrow-forward-ios'} size={18} color="#0D0D0D" />
        </View>
        <View style={{padding: 20, marginBottom: -20}}>
          <AText style={{color: '#797979'}}>Lengkapi Profile Anda 2/3</AText>
          <View
            style={{
              zIndex: 99,
              borderWidth: 2.5,
              borderRadius: 10,
              borderColor: '#05B1A1',
            }}
          >
            <ProgressBarAndroid
              style={{marginVertical: -7, zIndex: -99}}
              color="#EA6C00"
              styleAttr="Horizontal"
              indeterminate={false}
              progress={0.7}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
          }}
        >
          {tabs.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  flex: 1,
                  // borderWidth: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  // height: width / 5,
                  width: width / 5,
                }}
              >
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => settabSelect(index)}
                  style={{
                    padding: 20,
                    borderWidth: 0.4,
                    borderColor: '#9B9B9B',
                    borderRadius: 7,
                    backgroundColor: tabSelect == index ? '#05B1A1' : '#FFFFFF',
                  }}
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
        <View
          style={{
            paddingHorizontal: 20,
            marginTop: -10,
          }}
        >
          {(tabSelect == 0 || tabSelect == 1) && (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
								marginBottom:10
              }}
            >
              <Image
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 100,
                  borderWidth: 3,
                  padding: 5,
                  borderColor: '#05B1A1',
                }}
                source={{uri: Images}}
              />
              <View
                style={{
                  marginLeft: 20,
                }}
              >
                <AText
                  style={{
                    fontSize: 18,
                    fontWeight: '700',
                  }}
                >
                  Julia Mareta
                </AText>
                <AText style={{color: '#797979'}}>
                  19 menit lalu | <AText style={{color: '#05B1A1'}}>Idea</AText>
                </AText>
              </View>
            </View>
          )}
					 {(tabSelect == 0 || tabSelect == 2) && (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
								marginBottom:10,
              }}
            >
              <Image
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 100,
                  borderWidth: 3,
                  padding: 5,
                  borderColor: '#05B1A1',
                }}
                source={{uri: Images}}
              />
              <View
                style={{
                  marginLeft: 20,
                }}
              >
                <AText
                  style={{
                    fontSize: 18,
                    fontWeight: '700',
                  }}
                >
                  Julia Mareta
                </AText>
                <AText style={{color: '#797979'}}>
                  19 menit lalu | <AText style={{color: '#05B1A1'}}>Artikel</AText>
                </AText>
              </View>
            </View>
          )}
        </View>
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
