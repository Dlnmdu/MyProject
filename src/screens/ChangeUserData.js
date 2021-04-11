import React,{useState} from 'react';
import {View, Text,TextInput, TouchableOpacity, KeyboardAvoidingView,ScrollView} from 'react-native';
import logAddinfoStyle from '../../styles/logAddinfoStyle';
import PNumberList from '../components/PNumberList';
import GovEmerNumList from '../components/GovEmerNumList';

const ChangeUserData = (props)=>{
    const [enableShift, setEnableShift] = useState(false)
    return(

        <ScrollView>
        
        < KeyboardAvoidingView
        style={logAddinfoStyle.container}
        behavior="position"
        enabled={enableShift}
      >
        <View style={logAddinfoStyle.changeAddDataContainer}>
            <TextInput style={logAddinfoStyle.addNumbersInput}
            placeholder = 'Add New Numbers'
            onFocus={()=>{setEnableShift(false)}}
            keyboardType = 'numeric' />

            <TouchableOpacity style={logAddinfoStyle.pNumSaveButton}>
                <Text style={{color:'white', alignSelf:'center',top:6,fontWeight:'bold'}}>Save</Text>
            </TouchableOpacity>

            <View style={logAddinfoStyle.ChangeEmrgNumberView} >
                <PNumberList />
            </View>

            <TextInput style={[logAddinfoStyle.addNumbersInput,{marginTop:20}]}
            placeholder = 'Add New Numbers'
            onFocus={()=>{setEnableShift(false)}}
            keyboardType = 'numeric' />

            <TouchableOpacity style={logAddinfoStyle.pNumSaveButton}
             onPress={()=> props.navigation.navigate('preInfo')}>
                <Text style={{color:'white', alignSelf:'center',top:6,fontWeight:'bold'}}>Savee</Text>
            </TouchableOpacity>

            <View style={logAddinfoStyle.ChangeEmrgNumberView} >
                <GovEmerNumList />
            </View>
            
            <TextInput style={logAddinfoStyle.changeMessageInput}
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