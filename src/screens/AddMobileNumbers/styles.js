import {StyleSheet} from 'react-native';

const style = StyleSheet.create({

    addPreinfoTxt:{
        fontSize: 16,
      //  fontWeight: 'bold',
        color: '#616161',
        textAlign: 'left',
        top: 20,
        color:'white',
        padding: 20
        
    },

    action:{
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f44336',
        paddingBottom: -2,
       // paddingHorizontal:10
        
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
   
})


export default style;