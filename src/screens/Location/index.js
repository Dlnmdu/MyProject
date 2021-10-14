import React, {useEffect, useState} from 'react';
import {StyleSheet, SafeAreaView, Platform} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';

const LocationScreen = () => {
  const [location, setLocation] = useState(null);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

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
        setLocation({latitude, longitude});
        setLatitude(latitude);
        setLongitude(longitude);
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }, []);

  console.log('print location', location);

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
          }}
          showsUserLocation={true}
        />
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

export default LocationScreen;
