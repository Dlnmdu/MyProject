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

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import style from './styles';
import firestore from '@react-native-firebase/firestore';
import {DEFAULT_VERSION} from 'redux-persist/lib/constants';

const AddPreInformation = props => {
  const [enableShift, setEnableShift] = useState(false);
  const [pEmergNumber, setPEmergNumber] = useState('');
  const [pEmergNumber2, setPEmergNumber2] = useState('');
  const [pEmergNumber3, setPEmergNumber3] = useState('');
  const [pEmergNumber4, setPEmergNumber4] = useState('');
  const [pEmergNumber5, setPEmergNumber5] = useState('');

  const addPEmergNumbers = () => {
    firestore()
      .collection('Pcontacts')
      .add({
        number1: pEmergNumber,
      })
      .then(() => {
        setPEmergNumber(' ');
      });
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView
        style={style.container}
        behavior="position"
        enabled={enableShift}>
        <View style={style.addPreInfoDataView}>
          <View style={style.addPreInfoHeader}>
            <Image
              style={{width: 100, height: 100, top: 30, left: 130}}
              source={require('../../../assets/add.png')}
            />

            <Text style={style.addPreinfoTxt}>
              Add phone numbers people who want to inform incase of an emergency
              situation.{' '}
            </Text>
          </View>

          <View style={style.addPreInfoFooter}>
            <View style={[style.action, {top: -5}]}>
              <FontAwesome5
                style={{top: 13}}
                name="mobile-alt"
                size={24}
                color="#f44336"
              />
              <TextInput
                style={style.userNameInput}
                placeholder="Enter Mobile Number 1"
                keyboardType="numeric"
                onFocus={() => {
                  setEnableShift(false);
                }}
                onChangeText={text => {
                  setPEmergNumber(text);
                }}
              />

              <MaterialCommunityIcons
                style={{top: 13, left: 123}}
                name="checkbox-marked-circle-outline"
                size={24}
                color="green"
              />
            </View>

            <View style={[style.action, {top: 5}]}>
              <FontAwesome5
                style={{top: 13}}
                name="mobile-alt"
                size={24}
                color="#f44336"
              />
              <TextInput
                style={style.userNameInput}
                placeholder="Enter  Mobile Number 2"
                keyboardType="numeric"
                onFocus={() => {
                  setEnableShift(false);
                }}
                onChangeText={text => {
                  setPEmergNumber2(text);
                }}
              />

              <MaterialCommunityIcons
                style={{top: 13, left: 123}}
                name="checkbox-marked-circle-outline"
                size={24}
                color="green"
              />
            </View>

            <View style={[style.action, {top: 15}]}>
              <FontAwesome5
                style={{top: 13}}
                name="mobile-alt"
                size={24}
                color="#f44336"
              />
              <TextInput
                style={style.userNameInput}
                placeholder="Enter Mobile Number 3"
                keyboardType="numeric"
                onFocus={() => {
                  setEnableShift(false);
                }}
                onChangeText={text => {
                  setPEmergNumber3(text);
                }}
              />

              <MaterialCommunityIcons
                style={{top: 13, left: 128}}
                name="checkbox-marked-circle-outline"
                size={24}
                color="green"
              />
            </View>

            <View style={[style.action, {top: 25}]}>
              <FontAwesome5
                style={{top: 13}}
                name="mobile-alt"
                size={24}
                color="#f44336"
              />
              <TextInput
                style={style.userNameInput}
                placeholder="Enter Mobile Number 4"
                keyboardType="numeric"
                onFocus={() => {
                  setEnableShift(false);
                }}
                onChangeText={text => {
                  setPEmergNumber4(text);
                }}
              />

              <MaterialCommunityIcons
                style={{top: 13, left: 128}}
                name="checkbox-marked-circle-outline"
                size={24}
                color="green"
              />
            </View>

            <View style={[style.action, {top: 35}]}>
              <FontAwesome5
                style={{top: 13}}
                name="mobile-alt"
                size={24}
                color="#f44336"
              />
              <TextInput
                style={style.userNameInput}
                placeholder="Enter Mobile Number 5"
                keyboardType="numeric"
                onFocus={() => {
                  setEnableShift(false);
                }}
                onChangeText={text => {
                  setPEmergNumber5(text);
                }}
              />

              <MaterialCommunityIcons
                style={{top: 13, left: 128}}
                name="checkbox-marked-circle-outline"
                size={24}
                color="green"
              />
            </View>

            <TextInput
              style={style.messageInput}
              multiline
              numberOfLines={4}
              keyboardAvoid={() => setEnableShift(true)}
              placeholder={
                'Add Message you want to send in an emergency situation'
              }
            />

            <View style={{alignSelf: 'center', marginTop: 50}}>
              <TouchableOpacity
                style={style.addPreInfoSaveBtn}
                onPress={() => {
                  if (pEmergNumber !== '') {
                    props.navigation.navigate('tabNav');
                    addPEmergNumbers();
                  } else {
                    Alert.alert('Please add mobile numbers');
                  }
                }}>
                <Text style={style.addPreInfosaveButtonText}> Save </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{height: 60}} />
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default AddPreInformation;
