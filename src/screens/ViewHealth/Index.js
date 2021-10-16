import React from 'react';
import {View, Text} from 'react-native';
import style from './styles';
import HealthInfoList from '../../components/HealthInfoList';
import Header from '../../components/Header';

const HealthScreen = () => {
  return (
    <View>
      <Header sideMenu />
      <HealthInfoList />
    </View>
  );
};

export default HealthScreen;
