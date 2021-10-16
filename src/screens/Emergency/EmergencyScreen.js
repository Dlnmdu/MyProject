import {Image, Text, TouchableOpacity, View, Alert} from 'react-native';

import React, {useState, useEffect} from 'react';
import logAddinfoStyle from '../../../styles/logAddinfoStyle';
import style from './styles';
import SendSMS from 'react-native-sms';
import Geolocation from 'react-native-geolocation-service';
import Header from '../../components/Header';

const EmergencyScreen = props => {
  const [mobileNumber, SetMobileNumber] = useState('0767765412');

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [bodySMS, setBodySMS] = useState('');

  useEffect(() => {
    setBodySMS(
      `https://www.google.com/maps/search/?api=1&query=${latitude}%2C${longitude}`,
    );
  }, []);

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
    if (mobileNumber.length != 10) {
      alert('Please insert correct contact number');
      return;
    }

    SendSMS.send(
      {
        // Message body
        body: bodySMS,
        // Recipients Number
        recipients: [mobileNumber],
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
            elevation:12
          }}>
          <TouchableOpacity onPress={() => {}} style={{top: 0, left: 0}}>
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
