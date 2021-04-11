import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import logAddinfoStyle from '../../styles/logAddinfoStyle';

//import * as Animatable from 'react-native-animatable';


const StartScreen = (props)=>{

    return(
        <View style={logAddinfoStyle.startScreenContainer}>
               
            <View style={logAddinfoStyle.startScreenHeader}>
            <Image
        style={logAddinfoStyle.AppLogo}
        source={require('../../assets/AppLogo.png')}/>
            </View>

            <View  style={logAddinfoStyle.startScreenFooter}>
                
                <Text style={logAddinfoStyle.welcomeText2}>
                    HelpMe Mobile Application</Text>

              

                    <Text style={logAddinfoStyle.introText}>
                        Help Me is emergency Mobile Application
                        which helps you to when you are in emergency situation.
                
                    </Text>

                <View style={{alignSelf:'center', marginTop:50}}>
                    <TouchableOpacity style={logAddinfoStyle.signInBtn}
                     onPress={()=> props.navigation.navigate('login')} >
                        <Text style={logAddinfoStyle.addPreInfosaveButtonText}> Sign In </Text>
                    </TouchableOpacity>
                 </View>

              <View style={{alignSelf:'center', marginTop:20}}>
                    <TouchableOpacity style={logAddinfoStyle.signUpBtn}
                     onPress={()=>props.navigation.navigate('addinfo')} >
                        <Text style={logAddinfoStyle.addPreInfosaveButtonText}> Sign Up </Text>
                    </TouchableOpacity>
                </View>

                <View style={{alignSelf:'center', marginTop:20}}>
                    <TouchableOpacity style={logAddinfoStyle.googleSignUpBtn} >
                        <Text style={logAddinfoStyle.addPreInfosaveButtonText}> Sign Up with Google Account </Text>
                    </TouchableOpacity>
                </View>

                         
            </View>
        </View>
    )
}



export default StartScreen;