import React from 'react';
import {View, Text, Image, StyleSheet, SafeAreaView} from 'react-native';
import style from './styles';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const LocationScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      
        
          {/* <Image
          style={style.imageStyle}
          source={require('../../../assets/location.jpg')}
        /> */}
          <MapView
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
              latitude: 57.709127,
              longitude: 11.934746,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
       
     
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
  },
});

export default LocationScreen;
