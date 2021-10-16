import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  addNumbersInput: {
    borderWidth: 1.5,
    borderColor: '#f44336',
    borderRadius: 5,
    top: 30,
    marginHorizontal: 20,
    paddingLeft: 10,
    width: 230,
    height: 40,
  },

  changeAddDataContainer: {
  
   height:'100%',
   flex:1
  },

  ChangeEmrgNumberView: {
    
    width: '100%',
    height: 180,
    borderRadius: 10,
   // marginLeft: 15,
   // marginRight: 15,
    marginTop: 20,
  },

  pNumSaveButton: {
  
    borderWidth: 1.5,
    borderColor: '#f44336',
    width: 70,
    height: 35,
    left: 260,
    borderRadius: 5,
    bottom: 5,
  },
  changeMessageInput: {
   // borderWidth: 1.5,
   // borderColor: '#f44336',
   width:'95%',
   backgroundColor:'#FFEBEE',
    marginHorizontal: 20,
    top: 14,
    textAlignVertical: 'top',
    padding: 10,
    borderRadius: 13,
    alignSelf:'center'
  },
});

export default style;
