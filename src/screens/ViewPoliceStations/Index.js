import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import style from './styles';
import Foundation from 'react-native-vector-icons/Foundation';
import Geolocation from 'react-native-geolocation-service';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

const PoliceStations = () => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [allPlaces, setAllPlaces] = useState('');
  const [policeLocations, setPoliceLocations] = useState([]);
  const url =
    'https://maps.googleapis.com/maps/api/place/nearbysearch/json?' +
    'location=' +
    latitude +
    ',' +
    longitude +
    '&radius=10000&type=police&key=AIzaSyAKL072gMMQOtkiRb0mRDY9fKJ1P17oF7k';

  const [location, setLocation] = useState(null);

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

  useEffect(() => {
    console.log('run use effect correctly-----------');
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(res => {
        var places = []; // This Array WIll contain locations received from google
        for (let googlePlace of res.results) {
          var place = {};
          var lat = googlePlace.geometry.location.lat;
          var lng = googlePlace.geometry.location.lng;
          var coordinate = {
            latitude: lat,
            longitude: lng,
          };

          var gallery = [];

          if (googlePlace.photos) {
            for (let photo of googlePlace.photos) {
              var photoUrl = url.GooglePicBaseUrl + photo.photo_reference;
              gallery.push(photoUrl);
            }
          }

          place['placeTypes'] = googlePlace.types;
          place['coordinate'] = coordinate;
          place['placeId'] = googlePlace.place_id;
          place['placeName'] = googlePlace.name;
          place['gallery'] = gallery;

          places.push(place);
          setAllPlaces(places);
        }

        // Do your work here with places Array
      })
      .catch(error => {
        console.log(error);
      });
  }, [latitude, longitude]);

  console.log('print all placess------', allPlaces);

  useEffect(() => {
    allPlaces &&
      setPoliceLocations(
        allPlaces.map(d => {
          return {location: d.coordinate, id: d.placeId, name: d.placeName};
        }),
      );
  }, [allPlaces]);

  // useEffect(() => {
  //   fetch(url)
  //     .then(response => response.json())
  //     .then(JsonResponse => {
  //       // console.error(JsonResponse)
  //       console.log(JsonResponse);
  //       setPlaces(JsonResponse);
  //     })
  //     .catch(error => {
  //       alert('error');
  //     });
  // }, []);

  console.log('location array------', policeLocations);

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

        //curly brace here lets you write javscript in JSX
      )}
      {policeLocations.map(item => (
        <Marker
          key={item?.id}
          title={item?.name}
          name={item?.name}
          position={{lat: item?.latitude, lng: item?.longitude}}
        />
      ))}
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

export default PoliceStations;
