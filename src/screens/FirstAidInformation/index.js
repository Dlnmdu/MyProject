import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import style from './styles';
import FirstAidInfoList from '../../components/FirstAidInfoList';

const FirstAidInfoScreen = () => {
  return (
    <ScrollView>
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
