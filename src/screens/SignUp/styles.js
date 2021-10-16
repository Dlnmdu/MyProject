import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  AddInfocontainer: {
    backgroundColor: '#b00020',
  },

  action: {
    flexDirection: 'row',
    marginTop: 10,
    backgroundColor: '#FFEBEE',
    paddingBottom: -2,
    borderRadius: 16,
    height: 60,
  },

  addInfoHeader: {
    height: 220,
    backgroundColor: '#b00020',
  },

  addInfoFooter: {
    backgroundColor: 'white',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    height: 570,
  },

  textFooter: {
    color: '#b71c1c',
    fontSize: 18,
  },

  AddinfoSaveButton: {
    width: 150,
    height: 60,
    backgroundColor: '#b00020',
    borderRadius: 16,
    justifyContent: 'center',
    top: 15,
    right: 35,
  },

  AddinfoSaveButtonText: {
    color: 'white',
    alignSelf: 'center',
    padding: 5.7,
    fontWeight: 'bold',
    fontSize: 16,
  },

  AddinfoNextButton: {
    width: 150,
    height: 60,
    backgroundColor: '#b00020',
    borderRadius: 16,
    bottom: 30,
    justifyContent: 'center',
    left: 29,
  },
});

export default style;
