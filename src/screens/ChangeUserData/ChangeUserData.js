import {KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React,{useState} from 'react';

import GovEmerNumList from '../../components/GovEmerNumList';
import PNumberList from '../../components/PNumberList';
import logAddinfoStyle from '../../../styles/logAddinfoStyle';
import style from './styles';

const ChangeUserData = (props)=>{
    const [enableShift, setEnableShift] = useState(false)
    return(

        <ScrollView>
        
        < KeyboardAvoidingView
        style={style.container}
        behavior="position"
        enabled={enableShift}
        >
        <View style={style.changeAddDataContainer}>
            <TextInput style={style.addNumbersInput}
            placeholder = 'Add New Numbers'
            onFocus={()=>{setEnableShift(false)}}
            keyboardType = 'numeric' />

            <TouchableOpacity style={style.pNumSaveButton}>
                <Text style={{color:'white', alignSelf:'center',top:6,fontWeight:'bold'}}>Save</Text>
            </TouchableOpacity>

            <View style={style.ChangeEmrgNumberView} >
                <PNumberList />
            </View>

            <TextInput style={[style.addNumbersInput,{marginTop:20}]}
            placeholder = 'Add New Numbers'
            onFocus={()=>{setEnableShift(false)}}
            keyboardType = 'numeric' />

            <TouchableOpacity style={style.pNumSaveButton}
             onPress={()=> props.navigation.navigate('preInfo')}>
                <Text style={{color:'white', alignSelf:'center',top:6,fontWeight:'bold'}}>Savee</Text>
            </TouchableOpacity>

            <View style={style.ChangeEmrgNumberView} >
                <GovEmerNumList />
            </View>
            
            <TextInput style={style.changeMessageInput}
            placeholder = 'Change Your Emergency Message and press enter '
            onFocus={()=>{setEnableShift(true)}}
            multiline 
            numberOfLines= {4}
             />
        </View>
        
        <View style={{ height: 50 }} />

        </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default ChangeUserData;