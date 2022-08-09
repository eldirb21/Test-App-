import {View, Text} from 'react-native';
import React from 'react';
import AContainer from '../../components/atoms/a-container';
import AappBar from '../../components/molecules/a-appBar';
import AContent from '../../components/atoms/a-content';

export default function Groups(props) {
  return (
    <AContainer>
      <AappBar ongoBack={() => props.navigation.goBack()} title="Group" />
      <AContent scroll></AContent>
    </AContainer>
  );
}
