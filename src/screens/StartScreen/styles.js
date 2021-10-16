import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  AppLogo: {
    width: 240,
    height: 240,
    alignSelf: 'center',
    top: 120,
  },

  startScreenContainer: {
    backgroundColor: '#b00020',
    flex: 1,
    // alignSelf:'center',
  },

  addPreInfosaveButtonText: {
    color: 'white',
    alignSelf: 'center',
    padding: 5.7,
    fontWeight: 'bold',
    fontSize: 16,
  },
  signInButtonText:{
    color: '#b00020',
    alignSelf: 'center',
    padding: 5.7,
    fontWeight: 'bold',
    fontSize: 16,
  },

  startScreenFooter: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
  },

  startScreenHeader: {
    backgroundColor: '#b00020',
    flex: 2,
  },

  welcomeText2: {
    fontSize: 26,
    bottom: 20,
    textAlign: 'center',
    color: '#b71c1c',
  },
  introTextView: {
    // left:25,
    top: 30,
    // right:25,
    marginHorizontal: 25,
  },

  signUpBtn: {
    width: 350,
    height: 60,
    backgroundColor: '#b00020',
    borderRadius: 16,
    marginBottom: 35,
    justifyContent: 'center',
  },

  signInBtn: {
    width: 350,
    height: 60,
    //  backgroundColor: '#b00020',
    borderWidth: 2,
    borderColor: '#b00020',
    borderRadius: 16,
    bottom: 35,
    justifyContent: 'center',
  },
  googleSignUpBtn: {
    width: 350,
    height: 60,
    backgroundColor: '#b00020',
    borderRadius: 16,
    bottom: 40,
    justifyContent: 'center',
  },

  introText: {
    color: '#b71c1c',
    textAlign: 'center',
    marginLeft: 5,
    marginRight: 5,
  },
});

export default style;
