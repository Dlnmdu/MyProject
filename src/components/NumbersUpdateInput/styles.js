import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  numberInput: {
    flexDirection: 'column',
    width: 300,
    height: 40,
    backgroundColor: '#FFFFFF',
    //marginHorizontal:60
    alignSelf: 'center',
    borderRadius: 30,
    borderColor: '#b00020',
    borderWidth: 2,
  },
  textInput: {
    paddingLeft: 20, //backgroundColor:'red'
  },
  addButton: {
    width: 40,
    height: 35,
    backgroundColor: '#fce4ec',
    position: 'absolute',
    marginVertical: 2.5,
    marginLeft: 255,
    borderRadius: 30,
    // justifyContent:'flex-end'
  },
  plusText: {
    fontSize: 30,
    alignSelf: 'center',
    bottom: 4,
    color: '#b71c1c',
  },
});

export default style;
