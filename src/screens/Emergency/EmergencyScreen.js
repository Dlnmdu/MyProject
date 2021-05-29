import {Image, Text, TouchableOpacity, View} from 'react-native';

import React from 'react';
import logAddinfoStyle from '../../../styles/logAddinfoStyle';
import style from './styles';

const EmergencyScreen = props => {
  return (
    <View style={style.emergScreenContainer}>
      <TouchableOpacity>
        <Image
          style={{width: 300, height: 300, top: 150, left: 30}}
          source={require('../../../assets/HelpButton.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default EmergencyScreen;

/* 
<TouchableOpacity style={logAddinfoStyle.helpButton} >
                <Text style={{color:'#b71c1c',fontSize:60,top:100,
                fontWeight:'bold'}}>
                Help !</Text>
            </TouchableOpacity>

*/
