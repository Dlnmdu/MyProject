import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import style from './styles';
import FirstAidInfoList from '../../components/FirstAidInfoList';
import Header from '../../components/Header';

const FirstAidInfoScreen = () => {
  return (
    <ScrollView>
      <Header sideMenu />
      <View>
        <Text style={style.burnText}>Burn Injuries</Text>
        <View>
          <FirstAidInfoList />
        </View>

        <Text style={style.burnText}>Deep Cut Injuries</Text>

        <View>
          <FirstAidInfoList />
        </View>

        <Text style={style.burnText}>Accidents</Text>

        <View>
          <FirstAidInfoList />
        </View>
      </View>
    </ScrollView>
  );
};

export default FirstAidInfoScreen;
