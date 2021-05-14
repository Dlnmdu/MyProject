import {StyleSheet} from 'react-native';

const style = StyleSheet.create( {

  

        AddInfocontainer:{
            // flex: 1,
             backgroundColor: '#f44336',
             
         },

         action:{
            flexDirection: 'row',
            marginTop: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#f44336',
            paddingBottom: -2,
           // paddingHorizontal:10
            
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

         textFooter:{
            color:'#b71c1c',
            fontSize: 18,
            
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
         }
   
} )


export default style;