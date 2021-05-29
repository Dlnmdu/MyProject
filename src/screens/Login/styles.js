import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  logincontainer: {
    backgroundColor: '#f44336', //'#493D26'
    flex: 1,
  },

  textFooter: {
    color: '#b71c1c',
    fontSize: 18,
  },

  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f44336',
    paddingBottom: -2,
    // paddingHorizontal:10
  },

  userNameInput: {
    flex: 1,
    paddingLeft: 10,
  },

  passwordInput: {
    flex: 1,
    paddingLeft: 22,
  },

  loginHeaderView: {
    flex: 1,
    backgroundColor: '#f44336',
  },

  loginFooterView: {
    backgroundColor: 'white',
    flex: 3,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingHorizontal: 10,
  },

  loginHeaderText: {
    fontSize: 50,
    color: 'white',
    textAlign: 'center',
    top: 50,
    fontWeight: 'bold',
  },

  inputUserName: {
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 45,
    padding: 15,
    height: 50,
    width: 250,
    // marginRight: 20,
    // marginLeft: 50,
    marginTop: 35,
    alignSelf: 'center',
  },

  inputPassword: {
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 45,
    padding: 15,
    height: 50,
    width: 250,
    //marginRight: 20,
    // marginLeft: 50,
    //marginTop: 45,
    alignSelf: 'center',
  },

  loginButton: {
    width: 325,
    height: 35,
    backgroundColor: 'red',
    borderRadius: 5,
  },

  loginButtonText: {
    color: 'white',
    alignSelf: 'center',
    padding: 5.7,
    fontWeight: 'bold',
  },
});

export default style;
