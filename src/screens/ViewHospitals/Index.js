import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import style from './styles';
//import { Foundation } from '@expo/vector-icons';
import Foundation from 'react-native-vector-icons/Foundation';
import Geolocation from 'react-native-geolocation-service';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

const Hospitals = () => {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [bodySMS, setBodySMS] = useState('');
  const [location, setLocation] = useState(null);
  const [mapRegion, setMapRegion] = useState([]);

  const [hospitals] = useState([
    {
      title:'colombo',
      latitude:33.8,
      longitude:77.8,
      
    },
    {
      title:'colomboss',
      latitude:33.2 ,
      longitude:77.3,
      
    }
  ])

  var radius = 5 * 1000;
  var apiKey = 'AIzaSyAKL072gMMQOtkiRb0mRDY9fKJ1P17oF7k';

  var markers = [
    {
      latitude: 45.65,
      longitude: -78.9,
      title: 'Foo Place',
      subtitle: '1234 Foo Drive',
    },
  ];

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
        setLocation({latitude, longitude});
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }, []);

  useEffect(() => {
    setBodySMS(
      'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' +
        latitude +
        ',' +
        longitude +
        '&radius=' +
        radius +
        '&key=' +
        apiKey,
    );
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {location && (
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
             // latitudeDelta: 0.0922,
             // longitudeDelta: 0.0421,
            }}
            title="Me"
            description="My Location"></Marker>
            { hospitals && 
            <Marker
            coordinate={hospitals && hospitals}
            title='Hospitals'
            description='Searched hospitals'></Marker>

            }
        </MapView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
});

export default Hospitals;
