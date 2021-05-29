import {
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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {color} from 'react-native-reanimated';
import logAddinfoStyle from '../../../styles/logAddinfoStyle';
import style from './styles';

//import { Feather } from '@expo/vector-icons';
//import { MaterialCommunityIcons } from '@expo/vector-icons';
//import { MaterialIcons } from '@expo/vector-icons';
//import { FontAwesome5 } from '@expo/vector-icons';

const AddPreInformation = props => {
  const [enableShift, setEnableShift] = useState(false);

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
                onPress={() => props.navigation.navigate('tabNav')}>
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
