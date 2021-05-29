import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  fullNumberView: {
    marginTop: 20,
    flexDirection: 'row',
  },

  text1: {
    marginLeft: 10,
    top: 15,
    fontSize: 20,
    color: '#b71c1c',
    fontWeight: 'bold',
  },

  mobileNumberStyle: {
    width: 220,
    height: 50,
    backgroundColor: 'red',
    left: 15,
    borderRadius: 15,
    flexDirection: 'row',
  },

  mobileNumberTextStyle: {
    fontSize: 24,
    left: 10,
    top: 10,
    color: 'white',
    fontWeight: 'bold',
  },

  callButton: {
    top: 14,
    left: 45,
  },

  mapView: {
    width: 400,
    height: 630,
  },

  imageStyle: {
    left: 10,
    right: 10,
    top: 20,
    width: 340,
    height: 580,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: 'red',
  },
});

export default style;
