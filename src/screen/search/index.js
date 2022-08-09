import {View, Text} from 'react-native';
import React from 'react';
import AContainer from '../../components/atoms/a-container';
import AappBar from '../../components/molecules/a-appBar';
import AContent from '../../components/atoms/a-content';

export default function Searchs() {
  return (
    <AContainer>
      <AappBar ongoBack={() => props.navigation.goBack()} title="Search" />
      <AContent scroll></AContent>
    </AContainer>
  );
}
