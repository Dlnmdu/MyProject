import React from 'react';
import {View, Text, TouchableOpacity,Image} from 'react-native';
import logAddinfoStyle from '../../styles/logAddinfoStyle';


const EmergencyScreen = (props)=>{

    return(
        <View style={logAddinfoStyle.emergScreenContainer}>
            <TouchableOpacity
             onPress={()=> props.navigation.navigate('preInfo')}>
            <Image
                style={{width:300, height:300, top:150, left:30}}
                source={require('../../assets/HelpButton.png' )}/>
            </TouchableOpacity>
        </View>
    )
}

export default EmergencyScreen;

/* 
<TouchableOpacity style={logAddinfoStyle.helpButton} >
                <Text style={{color:'#b71c1c',fontSize:60,top:100,
                fontWeight:'bold'}}>
                Help !</Text>
            </TouchableOpacity>

*/