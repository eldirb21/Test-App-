import {FlatList} from 'react-native';
import React, {useState} from 'react';
import AContainer from '../../components/atoms/a-container';
import AappBar from '../../components/molecules/a-appBar';
import AContent from '../../components/atoms/a-content';
import datas from '../../db/data-list';
import AcardItem from '../../components/molecules/a-card-item';

export default function Followers(props) {
  const [data, setdata] = useState(datas);
  const renderItem = ({item, index}) => {
    return <AcardItem img={item.img} name={item.name} textBtn="Ikuti" />;
  };
  return (
    <AContainer>
      <AappBar ongoBack={() => props.navigation.goBack()} title="Pengikut" />
      <AContent ph pb>
        <FlatList
          style={{marginBottom: 10}}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          data={data}
        />
      </AContent>
    </AContainer>
  );
}
