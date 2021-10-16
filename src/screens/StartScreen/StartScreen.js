import {Image, Text, TouchableOpacity, View} from 'react-native';

import React from 'react';
import logAddinfoStyle from '../../../styles/logAddinfoStyle';
import style from './styles';

//import * as Animatable from 'react-native-animatable';

const StartScreen = props => {
  return (
    <View style={style.startScreenContainer}>
      <View style={style.startScreenHeader}>
        <Image
          style={style.AppLogo}
          source={require('../../../assets/AppLogo.png')}
        />
      </View>

      <View style={style.startScreenFooter}>
        <View style={{alignSelf: 'center', marginTop: 20}}>
          <TouchableOpacity
            style={style.signUpBtn}
            onPress={() => props.navigation.navigate('addinfo')}>
            <Text style={style.addPreInfosaveButtonText}> Sign Up </Text>
          </TouchableOpacity>
        </View>

        <View style={{alignSelf: 'center', marginTop: 20}}>
          <TouchableOpacity style={style.googleSignUpBtn}>
            <Text style={style.addPreInfosaveButtonText}>
              {' '}
              Sign Up with Google Account{' '}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{alignSelf: 'center', marginTop: 10}}>
          <TouchableOpacity
            style={style.signInBtn}
            onPress={() => props.navigation.navigate('login')}>
            <Text style={style.signInButtonText}> Sign In </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default StartScreen;
