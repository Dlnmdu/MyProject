import {StyleSheet} from 'react-native';

const style = StyleSheet.create({ 
    item: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        //borderColor: '#f44336',
        //borderWidth: 1.5,
        //borderColor: '#f44336',
    
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 15,
        width: 350,
        height: 70,
        alignSelf: 'center',
        borderRadius: 15,
      },
      title: {
        color: '#b71c1c',
        // fontWeight: 'bold',
        fontSize: 24,
        //top: 5,
        //color: 'white',
        fontWeight: '800',
      },
      numberTextView:{
       // backgroundColor:'green',
        height:30,
        textAlign:'left',
        alignSelf: 'flex-start',
        marginTop:7,
        marginLeft:10
      },
      DeleteIcon:{
        //backgroundColor:'yellow',
        height:70,
        width:60
      },
      itemContainerWrapper:{
        backgroundColor:'#fce4ec',
        width:280,
        height:50,
        bottom:10,
        borderRadius:15,
        left:-12
      }
});

export default style;
