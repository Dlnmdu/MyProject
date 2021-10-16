import {
  Alert,
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, {useState} from 'react';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';
import logAddinfoStyle from '../../../styles/logAddinfoStyle';
import style from './styles';
import Toast from 'react-native-toast-message';

const LoginScreen = props => {
  const [userNameCheckIco, setUserNameCheckIco] = useState(true);

  const [email, setEmail] = useState('dulanhelp@gmail.com');
  const [password, setPassword] = useState('12345678');
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState('');
  const [isValid, setValid] = useState(true);

  const __doSignUp = () => {
    if (!email) {
      Alert.alert('Email Required');
      // setError("Email required *")
      setValid(false);
      return;
    } else if (!password && password.trim() && password.length > 6) {
      // setError("Weak password, minimum 5 chars")
      Alert.alert('Weak Password, minimum 5 characters');
      setValid(false);
      return;
    } /* else if (!__isValidEmail(email)) {
      setError("Invalid Email")
      setValid(false)
      return
    }*/

    __doSingIn(email, password);
  };

  const __doSingIn = async (email, password) => {
    try {
      let response = await auth().signInWithEmailAndPassword(email, password);
      if (response && response.user) {
        Toast.show({
          text1: 'Success',
          text2: 'Login Successful',
          visibilityTime: 5000,
          type: 'success',
        });
        props.navigation.navigate('tabNav');
      }
    } catch (e) {
      Toast.show({
        text1: 'Error',
        text2: 'Invalid Username Or Password',
        visibilityTime: 5000,
        type: 'error',
      });
    }
  };

  return (
    <View style={style.logincontainer}>
      <View style={style.loginHeaderView}>
        <Image
          source={require('../../../assets/AppLogo.png')}
          style={{width: 100, height: 100, alignSelf:'center'}}
        />
      </View>

      <View style={style.loginFooterView}>
        <View style={{marginTop: 70, marginLeft: 10, marginRight: 10}}>
          <Text style={style.textFooter}>Email</Text>

          <View style={style.action}>
            <TextInput
              label={'Email'}
              style={style.userNameInput}
              placeholder="Enter User Name Here"
              onChangeText={() => setUserNameCheckIco(false)}
              color="black"
              onChangeText={text => {
                setError;
                setEmail(text);
              }}
              error={isValid}
            />

            <MaterialCommunityIcons
              style={{top: 15, marginRight: 20}}
              name="checkbox-marked-circle-outline"
              size={24}
              color="green"
              disabled={userNameCheckIco}
            />
          </View>

          <Text style={[style.textFooter, {marginTop: 35}]}>Password</Text>

          <View style={style.action}>
            <TextInput
              label={'Password'}
              style={style.passwordInput}
              placeholder="Enter Password Here"
              color="black"
              secureTextEntry={true}
              error={isValid}
              onChangeText={text => setPassword(text)}
            />

            <Ionicons
              style={{marginRight: 20, marginTop: 15}}
              name="eye-off-outline"
              size={24}
              color="gray"
            />
          </View>

          <Text style={{color: '#b71c1c', top: 15}}>Forgot Password ?</Text>

          <View style={{alignSelf: 'center', marginTop: 50}}>
            <TouchableOpacity style={style.loginButton} onPress={__doSignUp}>
              <Text style={style.loginButtonText}> LOGIN </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
