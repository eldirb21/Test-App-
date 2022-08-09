import {View, Text, FlatList, Image} from 'react-native';
import React, {useState} from 'react';
import AContainer from '../../components/atoms/a-container';
import AappBar from '../../components/molecules/a-appBar';
import AContent from '../../components/atoms/a-content';
import AText from '../../components/atoms/a-text';
import datas from '../../db/data-list'
export default function Follows(props) {
  const [data, setdata] = useState(datas);
  const renderItem = ({item, index}) => {
    return (
      <View
        key={index}
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.25)',
          borderWidth: 0.2,
          borderColor: '#05B1A1',
          borderRadius: 35,
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10,
          padding: 12,
        }}
      >
        <View style={{width: '20%'}}>
          <Image
            style={{
              width: 48,
              height: 48,
              borderRadius: 100,
              borderWidth: 2,
              borderColor: '#05B1A1',
            }}
            source={{uri: item.img}}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <AText style={{color: '#000', fontSize: 15}}>{item.name}</AText>
          <View
            style={{
              backgroundColor: '#46B29C',
              padding: 10,
              borderRadius: 35,
              width: 106,
              alignItems: 'center',
            }}
          >
            <AText style={{color: '#FFF', fontSize: 15}}>Mengikuti</AText>
          </View>
        </View>
      </View>
    );
  };
  return (
    <AContainer>
      <AappBar ongoBack={() => props.navigation.goBack()} title="Mengikuti" />
      <AContent ph pb>
        <FlatList style={{marginBottom:10}}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          data={data}
        />
      </AContent> 
    </AContainer>
  );
}
