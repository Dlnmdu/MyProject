import React from 'react';
import {View, Text, TextInput} from 'react-native';
import logAddinfoStyle from '../../styles/logAddinfoStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

//import { FontAwesome5 } from '@expo/vector-icons';
//import { FontAwesome } from '@expo/vector-icons';
//import { MaterialCommunityIcons } from '@expo/vector-icons';
//import { Ionicons } from '@expo/vector-icons';

const InputComponent = () => {
  return (
    <View style={logAddinfoStyle.action}>
      <FontAwesome name="lock" size={24} color="#f44336" />
      <TextInput
        style={logAddinfoStyle.passwordInput}
        placeholder="Enter Password Here"
        secureTextEntry={true}
      />

      <Ionicons name="eye-off-outline" size={24} color="gray" />
    </View>
  );
};

export default InputComponent;
