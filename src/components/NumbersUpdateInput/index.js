import React from 'react';
import {View,Text, TextInput,TouchableOpacity} from "react-native";
//import { TouchableOpacity } from 'react-native-gesture-handler';
import style from './styles';

const NumbersUpdateInput =({placeholder,onChangeText,value,onPress })=>{
    return(
    <View style={style.numberInput}>
        <TextInput 
            style={style.textInput}
            placeholder={placeholder}
            placeholderTextColor="#ffcdd2"
            onChangeText={onChangeText}
            value={value} />

        <TouchableOpacity
             style={style.addButton}
             onPress={onPress} >
            <Text style={style.plusText}>+</Text>
        </TouchableOpacity>




    </View>
    )
}

export default NumbersUpdateInput;