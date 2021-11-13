import {Image, Text, TouchableOpacity, View, Alert} from 'react-native';

import React, {useState, useEffect} from 'react';
import logAddinfoStyle from '../../../styles/logAddinfoStyle';
import style from './styles';
import SendSMS from 'react-native-sms';
import Geolocation from 'react-native-geolocation-service';
import Header from '../../components/Header';
import {useIsFocused} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

const EmergencyScreen = props => {
  const [mobileNumber1, SetMobileNumber1] = useState('0767765412');
  const [mobileNumbe2, SetMobileNumber2] = useState('0710827639');
  const [mobileNumber3, SetMobileNumber3] = useState('');
  const [mobileNumber4, SetMobileNumber4] = useState('');
  const [mobileNumber5, SetMobileNumber5] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [bodySMS, setBodySMS] = useState('');
  const [personalNumbers, setPersonalNumbers] = useState();
  const [message, setMessage] = useState();

  const isFocused = useIsFocused();
  const ref = firestore().collection('Pcontacts');
  const ref1 = firestore().collection('Message');

  useEffect(() => {
    setBodySMS(
      `https://www.google.com/maps/search/?api=1&query=${latitude}%2C${longitude}`,
    );
  }, []);

  useEffect(() => {
    console.log('use effect called no prob======================');
    return ref.onSnapshot(querySnapshot => {
      const numberlist = [];
      querySnapshot.forEach(doc => {
        const {number1} = doc.data();
        const {number2} = doc.data();
        const {number3} = doc.data();
        const {number4} = doc.data();
        const {number5} = doc.data();

        SetMobileNumber1(number1);
        SetMobileNumber2(number2);
        SetMobileNumber3(number3);
        SetMobileNumber4(number4);
        SetMobileNumber5(number5);

        numberlist.push({
          id: doc.id,
          number1,
          number2,
          number3,
          number4,
          number5,
        });
      });

      // console.log('number List ****************', numberlist);

      setPersonalNumbers(
        numberlist?.map(({number1, number2, number3, number4, number5}) => [
          number1,
          number2,
          number3,
          number4,
          number5,
        ]),
      );

      // if (loading) {
      //   setLoading(false);
      // }
      //   PNumberList;
    });
  }, [isFocused]);

  useEffect(() => {
    console.log('new use Effect running==========');
    return ref1.onSnapshot(querySnapshot => {
      querySnapshot.forEach(doc => {
        const {eMessage} = doc.data();
        console.log('message print in use Effect----', eMessage);
        setMessage(eMessage);
      });
    });
  }, []);

  //console.log('personal number print in emergency screen', personalNumbers);
  console.log('personal number print in emergency screen', mobileNumber1,mobileNumbe2,mobileNumber3);

  const handleLocationPermission = async () => {
    let permissionCheck = '';

    permissionCheck = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);

    if (
      permissionCheck === RESULTS.BLOCKED ||
      permissionCheck === RESULTS.DENIED
    ) {
      const permissionRequest = await request(
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      );
      permissionRequest === RESULTS.GRANTED
        ? console.warn('Location permission granted.')
        : console.warn('location permission denied.');
    }
  };

  useEffect(() => {
    handleLocationPermission();
  }, []);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }, []);

  //console.log('print latitude...', latitude);
  //console.log('print longtiude...', lo);

  const initiateSMS = () => {
    // if (mobileNumber.length != 10) {
    //   alert('Please insert correct contact number');
    //   return;
    // }

    SendSMS.send(
      {
        // Message body
        body: bodySMS,
        // Recipients Number
        recipients: [ mobileNumber1,mobileNumbe2,mobileNumber3],
        // An array of types
        // "completed" response when using android
        successTypes: ['sent', 'queued'],
      },

      (completed, cancelled, error) => {
        console.log('running........');
        if (completed) {
          console.log('SMS Sent Completed');
          Alert.alert('message Sent');
        } else if (cancelled) {
          console.log('SMS Sent Cancelled');
        } else if (error) {
          console.log('Some error occured');
        }
      },
    );
  };

  return (
    <View>
      <View style={style.emergScreenContainer}>
        <Header sideMenu />
        <View
          style={{
            width: 300,
            height: 300,
            // backgroundColor: 'yellow',
            top: 150,
            left: 50,
            borderRadius: 200,
            elevation: 12,
          }}>
          <TouchableOpacity
            onPress={() => {
              initiateSMS();
            }}
            style={{top: 0, left: 0}}>
            <Image
              style={{width: 300, height: 300}}
              source={require('../../../assets/AppLogo.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
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
