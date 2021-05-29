import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import style from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {govNumbersCard, setGovNumbersCard} from '../../screens/ChangeUserData/ChangeUserData';


const GovEmergNumberCard = (props) => {

  const deleteNumbers=(index)=>{
    let numbersCopy = [...govNumbersCard];
    numbersCopy.splice(index, 1);
    setGovNumbersCard(numbersCopy);
  }
  
  return (
    
    <View style={style.item}>
      <View style={style.itemContainerWrapper}>
        <View style={style.numberTextView}>
          <Text style={style.title}>{props.text.item}</Text>
        </View >
        <View style={{ marginLeft:290, marginTop:0, position:'absolute',width:50, height:50, alignItems:'center'}}>
          <TouchableOpacity style={{ marginTop:5 }} onPress={()=>deleteNumbers() }>
            <Ionicons name="close-circle-sharp" size={40} color="#b71c1c" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
    
  );
};

export default GovEmergNumberCard;
