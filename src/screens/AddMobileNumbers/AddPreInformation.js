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

const AddPreInformation = ({route, navigation: {navigate}}) => {
  const [enableShift, setEnableShift] = useState(false);
  const [pEmergNumber, setPEmergNumber] = useState('');
  const [pEmergNumber2, setPEmergNumber2] = useState('');
  const [pEmergNumber3, setPEmergNumber3] = useState('');
  const [pEmergNumber4, setPEmergNumber4] = useState('');
  const [pEmergNumber5, setPEmergNumber5] = useState('');
  const [emergencyMessage, setEmergencyMessage] = useState('');

  // const clearCollection = path => {
  //   console.log('delete function called----------------');
  //   const ref = firestore().collection(path);
  //   ref.onSnapshot(snapshot => {
  //     snapshot.docs.forEach(doc => {
  //       ref.doc(doc.id).delete();
  //     });
  //   });
  // };

  const clearCollection = path => {
    firestore().collection(path).get().then(querySnapshot => {
      querySnapshot.docs.forEach(snapshot => {
          snapshot.ref.delete();
      })
  })
  }

  //console.log('routes------',  route.params.fromChangeData);

  const addPEmergNumbers = () => {
    firestore()
      .collection('Pcontacts')
      .add({
        number1: pEmergNumber,
        number2: pEmergNumber2,
        number3: pEmergNumber3,
        number4: pEmergNumber4,
        number5: pEmergNumber5,
      })
      .then(() => {
        setPEmergNumber(' ');
        setPEmergNumber2(' ');
        setPEmergNumber3(' ');
        setPEmergNumber4(' ');
        setPEmergNumber5(' ');
      });
  };

  const addEmergencyMessage = () => {
    console.log('function called emergency message');
    firestore()
      .collection('Message')
      .add({
        eMessage: emergencyMessage,
      })
      .then(() => {
        setEmergencyMessage(' ');
      });
  };

  console.log('printed emergency message', emergencyMessage);

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
          </View>

          <View style={style.addPreInfoFooter}>
            <View style={[style.action, {top: -5}]}>
              <TextInput
                placeholder="Enter Mobile Number 1"
                placeholderTextColor="#EF9A9A"
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
              <TextInput
                placeholderTextColor="#EF9A9A"
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
              <TextInput
                placeholderTextColor="#EF9A9A"
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
              <TextInput
                placeholderTextColor="#EF9A9A"
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
              <TextInput
                // style={style.userNameInput}
                placeholder="Enter Mobile Number 5"
                placeholderTextColor="#EF9A9A"
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
              placeholderTextColor="#EF9A9A"
              numberOfLines={4}
              keyboardAvoid={() => setEnableShift(true)}
              placeholder={
                'Add Message you want to send in an emergency situation'
              }
              onChangeText={text => {
                setEmergencyMessage(text);
              }}
            />

            <View style={{alignSelf: 'center', marginTop: 50}}>
              <TouchableOpacity
                style={style.addPreInfoSaveBtn}
                onPress={() => {
                  if (pEmergNumber !== '' ) {
                    navigate('tabNav');
                    addPEmergNumbers();
                    addEmergencyMessage();
                  } else {
                    Alert.alert('Please add mobile numbers');
                  }
                }}>
                <Text style={style.addPreInfosaveButtonText}> Save </Text>
              </TouchableOpacity>

              {route?.params?.fromChangeData && (
                <TouchableOpacity
                  style={style.addPreInfoSaveBtn}
                  onPress={() => {
                    //  console.log('delte callesdddd------------------');
                    clearCollection('Pcontacts');
                  }}>
                  <Text style={style.addPreInfosaveButtonText}>
                    {' '}
                    Delete Data{' '}
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>

        <View style={{height: 60}} />
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default AddPreInformation;
