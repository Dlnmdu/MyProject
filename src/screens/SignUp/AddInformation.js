import {
  Alert,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

import AddInput from '../../components/AddInput';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import InputComponent from '../../components/InputComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import auth from '@react-native-firebase/auth';
import logAddinfoStyle from '../../../styles/logAddinfoStyle';
import style from './styles';

const AddInformation = props => {
  const [enableShift, setEnableShift] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
    } /*else if (!isValid(email)) {
      setError("Invalid Email")
      setValid(false)
      return
    }*/

    __doCreateUser(email, password);
  };

  const __doCreateUser = async (email, password) => {
    try {
      let response = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      if (response && response.user) {
        Alert.alert('Success ✅', 'Account created successfully');
      }
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <View style={style.AddInfocontainer}>
      <View style={style.addInfoHeader}>
        <Image
          style={{width: 100, height: 100, top: 70, left: 130}}
          source={require('../../../assets/add.png')}
        />

        <Text style={{marginHorizontal: 10, top: 80, color: 'white'}}>
          Please Enter Your Information to Sign Up with Us
        </Text>
      </View>

      <ScrollView>
        <KeyboardAvoidingView
          style={style.container}
          behavior="position"
          enabled={enableShift}>
          <View style={style.addInfoFooter}>
            <View style={{marginTop: 25, marginLeft: 20, marginRight: 20}}>
              <Text style={style.textFooter}>Name</Text>

              <View style={[style.action, {top: 5}]}>
                <MaterialIcons
                  style={{top: 13}}
                  name="drive-file-rename-outline"
                  size={24}
                  color="#f44336"
                />
                <TextInput
                  style={style.userNameInput}
                  placeholder="Enter First Name Here"
                  placeholderTextColor="black"
                  color="black"
                  onFocus={() => {
                    setEnableShift(false);
                  }}
                />

                <MaterialCommunityIcons
                  style={{top: 13, left: 120}}
                  name="checkbox-marked-circle-outline"
                  size={24}
                  color="green"
                />
              </View>

              <View style={[style.action, {top: 10}, {paddingBottom: -50}]}>
                <MaterialIcons
                  style={{top: 13}}
                  name="drive-file-rename-outline"
                  size={24}
                  color="#f44336"
                />
                <TextInput
                  style={style.userNameInput}
                  placeholder="Enter Last Name Here"
                  onFocus={() => {
                    setEnableShift(false);
                  }}
                />

                <MaterialCommunityIcons
                  style={{top: 13, left: 120}}
                  name="checkbox-marked-circle-outline"
                  size={24}
                  color="green"
                />
              </View>

              <Text style={[style.textFooter, {top: 20}, {paddingBottom: -50}]}>
                E-Mail
              </Text>

              <View style={[style.action, {top: 20}]}>
                <MaterialIcons
                  style={{top: 13}}
                  name="email"
                  size={24}
                  color="#f44336"
                />
                <TextInput
                  style={style.userNameInput}
                  label={'Email'}
                  placeholder="Enter Email Here"
                  onFocus={() => {
                    setEnableShift(true);
                  }}
                  keyboardType="email-address"
                  onChangeText={text => {
                    setError;
                    setEmail(text);
                  }}
                  error={isValid}
                  color="black"
                />

                <MaterialCommunityIcons
                  style={{top: 13, left: 155}}
                  name="email-check"
                  size={24}
                  color="green"
                />
              </View>

              <Text style={[style.textFooter, {top: 30}, {paddingBottom: -50}]}>
                Password
              </Text>

              <View style={[style.action, {top: 25}]}>
                <FontAwesome
                  style={{top: 13}}
                  name="lock"
                  size={24}
                  color="#f44336"
                />
                <TextInput
                  label={'Password'}
                  style={style.userNameInput}
                  color="black"
                  placeholder="Enter Password Here"
                  onFocus={() => {
                    setEnableShift(true);
                  }}
                  error={isValid}
                  onChangeText={text => setPassword(text)}
                  color="black"
                />

                <Ionicons
                  style={{top: 13, left: 135}}
                  name="eye-off-outline"
                  size={24}
                  color="gray"
                />
              </View>

              {error ? (
                <View style={styles.errorLabelContainerStyle}>
                  <Text style={styles.errorTextStyle}>{error}</Text>
                </View>
              ) : null}

              <Text style={[style.textFooter, {top: 35}, {paddingBottom: -30}]}>
                Confirm Password
              </Text>

              <View style={[style.action, {top: 35}]}>
                <FontAwesome
                  style={{top: 13}}
                  name="lock"
                  size={24}
                  color="#f44336"
                />
                <TextInput
                  style={style.userNameInput}
                  placeholder="Confirm Password"
                  onFocus={() => {
                    setEnableShift(true);
                  }}
                />

                <Ionicons
                  style={{top: 13, left: 148}}
                  name="eye-off-outline"
                  size={24}
                  color="gray"
                />
              </View>

              <View style={{marginTop: 50, left: 37}}>
                <TouchableOpacity
                  style={style.AddinfoSaveButton}
                  onPress={__doSignUp}>
                  <Text style={style.AddinfoSaveButtonText}> Save </Text>
                </TouchableOpacity>
              </View>

              <View style={{alignSelf: 'center', bottom: 15, left: 70}}>
                <TouchableOpacity
                  style={style.AddinfoNextButton}
                  onPress={() => props.navigation.navigate('preInfo')}>
                  <Text style={style.AddinfoSaveButtonText}> Next </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{height: 60}} />
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default AddInformation;
