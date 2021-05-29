import React from 'react';
import {View, Text} from 'react-native';
import style from './styles';
import HealthInfoList from '../../components/HealthInfoList';

const HealthScreen = () => {
  return (
    <View>
      <HealthInfoList />
    </View>
  );
};

export default HealthScreen;
