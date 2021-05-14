import {StyleSheet} from 'react-native';

const style = StyleSheet.create({

    AppLogo:{
        width:240,
        height: 240,
        alignSelf: 'center',
        top: 150
   },

    startScreenContainer:{
      
        backgroundColor: '#f44336',
        flex: 1,
       // alignSelf:'center',
        
   },

   addPreInfosaveButtonText:{
    color: 'white',
    alignSelf:'center',
    padding: 5.7,
    fontWeight:'bold',
    
},

   startScreenFooter:{
       flex: 1,
       backgroundColor:'white',
       borderTopLeftRadius: 30,
       borderTopRightRadius: 30,
        paddingVertical:50
   },

   startScreenHeader:{
    backgroundColor: '#f44336',
    flex: 2,
    

},

  

   welcomeText2:{
       fontSize: 26,
       bottom: 20,
       textAlign: 'center',
       color:'#b71c1c'
   },
   introTextView:{
      // left:25,
       top: 30,
      // right:25,
       marginHorizontal: 25,
       
   },

   signUpBtn:{
        width: 300,
        height: 35,
        backgroundColor: 'red',
        borderRadius:5,
        bottom: 35
   },

   signInBtn:{
    width: 300,
    height: 35,
    backgroundColor: 'red',
    borderRadius:5,
    bottom:30
   },
   googleSignUpBtn:{
    width: 300,
    height: 35,
    backgroundColor: 'red',
    borderRadius:5,
    bottom: 40
   },

   introText:{
    color:'#b71c1c',
    textAlign: 'center',
    marginLeft: 5,
    marginRight: 5
   },
})


export default style;