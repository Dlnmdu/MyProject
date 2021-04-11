import {StyleSheet} from 'react-native';

const logAddinfoStyle = StyleSheet.create({

    // Start Add information Screen Styles***********************************

    AddInfocontainer:{
       // flex: 1,
        backgroundColor: '#f44336',
        
    },

    addInfoHeader: {
        height:220,
        //flex: 1,
        backgroundColor: '#f44336'
    },

    addInfoFooter:{
       // flex: 4,
        backgroundColor: 'white',
        borderTopRightRadius:30,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius:30,
        height:570,
        
        
        
    },

    AddinfoSaveButton:{
        width: 150,
        height: 35,
        backgroundColor: 'red',
        borderRadius: 5,
        top:15,
        right: 35
       
    },

    AddinfoSaveButtonText:{
        color: 'white',
        alignSelf:'center',
        padding: 5.7,
        fontWeight:'bold',
        
    },

    AddinfoNextButton:{
        width: 150,
        height: 35,
        backgroundColor: 'red',
        borderRadius: 5,
        bottom:5,
        left: 17
    },

    // Finish add information screen styles************************************

    //Start Login screen styles ***********************************

    logincontainer:{
        backgroundColor: '#f44336', //'#493D26'
        flex: 1
    },

    textFooter:{
        color:'#b71c1c',
        fontSize: 18,
        
    },

    action:{
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f44336',
        paddingBottom: -2,
       // paddingHorizontal:10
        
    },

    userNameInput:{
        flex:1,
        paddingLeft: 10
    },

    passwordInput:{
        flex:1,
        paddingLeft: 22
    },

    loginHeaderView:{
        flex: 1,
        backgroundColor: '#f44336'
    },

    loginFooterView:{
        backgroundColor: 'white',
        flex:3,
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        paddingHorizontal: 10,
        
           
    },

    loginHeaderText:{
        fontSize:50,
        color:'white',
        textAlign:'center',
        top: 50,
        fontWeight: 'bold'
    },

    inputUserName:{
        borderWidth: 3,
        borderColor: 'white',
        borderRadius: 45,
        padding: 15,
        height: 50,
        width: 250,
       // marginRight: 20,
       // marginLeft: 50,
        marginTop: 35,
        alignSelf: 'center'
        
    },

    inputPassword:{
        borderWidth: 3,
        borderColor: 'white',
        borderRadius: 45,
        padding: 15,
        height: 50,
        width: 250,
        //marginRight: 20,
       // marginLeft: 50,
        //marginTop: 45,
        alignSelf:'center'
     
    },

    loginButton:{
        width:325,
        height: 35,
        backgroundColor: 'red',
        borderRadius: 5
    },

    loginButtonText:{
        color: 'white',
        alignSelf:'center',
        padding: 5.7,
        fontWeight:'bold'
    },

    // end of login screen styles ************************************


    // Start of add pre information screen styles *****************************

    addPreinfoTxt:{
        fontSize: 16,
      //  fontWeight: 'bold',
        color: '#616161',
        textAlign: 'left',
        top: 20,
        color:'white',
        padding: 20
        
    },

    addPreInfoHeaderText:{
        color:'white',
       padding:20,
       top:20,
       fontSize: 30,
       fontWeight: 'bold',
       alignSelf:'center'
    },

    addPreInfoDataView:{
      //  width: 320,
      //  height: 600,
       backgroundColor: 'red',
     //   top: 40,
     //   alignSelf:'center',
     //   borderRadius:15,
        flex: 1
        
    },

    addPreInfoHeader:{
        flex:1,
        backgroundColor:'#f44336',
        height:200
    },

    addPreInfoFooter:{
        flex: 3,
        backgroundColor:'white',
        padding: 20,
        height: 700,
        borderTopLeftRadius:20,
        borderTopRightRadius:20
    },

    messageInput:{
        borderWidth: 1,
        borderColor: '#f44336',
        borderRadius: 10,
      //  marginLeft: 35,
      //  marginRight: 35,
        top: 60,
        padding: 15,
        textAlignVertical: "top",
       // backgroundColor: '#ff9800',
      //  bottom: 20
               
    },

    addPreInfoSaveBtn:{
        width: 320,
        height: 35,
       // borderWidth: 1,
       backgroundColor: 'red',
       // borderColor: '#f44336',
        borderRadius: 5,
        right:0,
        top:30

    },

    addPreInfosaveButtonText:{
        color: 'white',
        alignSelf:'center',
        padding: 5.7,
        fontWeight:'bold',
        
    },

    addPreInfoNextBtn:{
        flexDirection:'row',
        width: 150,
        height: 35,
       // borderWidth: 1,
        backgroundColor: 'red',
        //borderColor: '#f44336',
        borderRadius: 5,
        marginLeft: 170,
       // bottom: 35,
        top:65

    },

    AddPreInfoNextButtonText:{
        color: 'white',
        left:40,
        padding: 5.7,
       // color: '#b71c1c',
        fontWeight:'bold',
        alignSelf: 'center'

    },

    //Start of the Start Screen Styles*********************

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

   // start emergency screens Styles *******************

   emergScreenContainer:{

   },

   helpButton:{
    width:300,
    height: 300,
    borderWidth:5,
    borderColor:'#b71c1c',
    backgroundColor:'#ff948f',
    alignSelf:'center',
    alignContent:'center',
    alignItems:'center',
    top:220,
    borderRadius:300

   },

// Change users data screen *********************

addNumbersInput:{
    borderWidth: 1.5,
    borderColor: '#f44336',
    borderRadius:5,
    top: 30,
    marginHorizontal:20,
    paddingLeft: 10,
    width: 230,
    height:40
},

changeAddDataContainer:{
    
},

ChangeEmrgNumberView:{
    width: 318,
    height: 180,
   // borderColor: '#f44336',
  //  borderWidth: 3,
    borderRadius: 10,
    marginHorizontal: 20,
    top: 20,
  // backgroundColor: '#ff948f',
    borderWidth: 1.5,
    borderColor:'#f44336'

},

pNumSaveButton:{
    backgroundColor: 'red',
    borderWidth: 1.5,
    borderColor: '#f44336',
    width:70,
    height: 35,
    left:260,
    borderRadius:5,
    bottom:5
},
changeMessageInput:{
    borderWidth: 1.5,
    borderColor: '#f44336',
    marginHorizontal: 20,
    top:40,
    textAlignVertical: "top",
    padding: 10,
    borderRadius:10
}


})

export default logAddinfoStyle;