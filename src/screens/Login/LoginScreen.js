import {Alert, Button, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React,{useState} from 'react';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from "@react-native-firebase/auth"
import logAddinfoStyle from '../../../styles/logAddinfoStyle';
import style from './styles';

const LoginScreen =  (props)=>{

    const [userNameCheckIco, setUserNameCheckIco] = useState(true)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [fetching, setFetching] = useState(false)
  const [error, setError] = useState("")
  const [isValid, setValid] = useState(true)

  const __doSignUp = () => {
    if (!email) {
        Alert.alert("Email Required")
     // setError("Email required *")
      setValid(false)
      return

    } else if (!password && password.trim() && password.length > 6) {
     // setError("Weak password, minimum 5 chars")
     Alert.alert("Weak Password, minimum 5 characters")
      setValid(false)
      return
      
    }/* else if (!__isValidEmail(email)) {
      setError("Invalid Email")
      setValid(false)
      return
    }*/

    __doSingIn(email, password)
  }

  const __doSingIn = async (email, password) => {
    try {
      let response = await auth().signInWithEmailAndPassword(email, password)
      if (response && response.user) {
        Alert.alert("Success ✅", "Authenticated successfully")
        props.navigation.navigate('tabNav')
      }
    } catch (e) {
   //  console.error(e.message)
      Alert.alert("Invalid Email or Password")
    }
  }

 

    return(
        <View style={style.logincontainer}>
            <View style={style.loginHeaderView}>

                <Text style={style.loginHeaderText}>
                    Hello !
                </Text>

            </View>

            <View style={style.loginFooterView}>

                <View style={{marginTop:70,marginLeft:10,marginRight:10}}>
                    <Text style={style.textFooter} >
                        Email
                    </Text>

                    <View style={style.action}>
                        <FontAwesome5 style={{top:13}} name="user-check" size={24} color="#f44336"  />
                        <TextInput 
                            label={"Email"}
                            style={style.userNameInput}
                            placeholder= 'Enter User Name Here'
                            onChangeText={()=> setUserNameCheckIco(false) } 
                            color='black'
                            onChangeText={text => {
                                setError
                                setEmail(text)
                              }}
                            error={isValid} />
            
                        <MaterialCommunityIcons style={{top:13}} name="checkbox-marked-circle-outline"
                            size={24} color="green"
                            disabled={userNameCheckIco} /> 

                    </View>

                    <Text style={[style.textFooter,{marginTop:35}]} >
                        Password
                    </Text>

                    <View style={style.action}>
                        <FontAwesome style={{top:13}} name="lock" size={30} color="#f44336" />
                        <TextInput 
                            label={"Password"}
                            style={style.passwordInput}
                            placeholder= 'Enter Password Here'
                            color='black'
                            secureTextEntry= {true} 
                            error={isValid}
                            onChangeText={text => setPassword(text)} />

                        <Ionicons style={{top:13}} name="eye-off-outline" size={24} color="gray" />

                    </View>

                    <Text style={{color:'#b71c1c', top: 15}}>
                        Forgot Password ?
                    </Text>
            


                    <View style={{alignSelf:'center', marginTop:50}}>
                        <TouchableOpacity style={style.loginButton}
                        onPress= 
                            {__doSignUp}>
                        <Text style={style.loginButtonText}> LOGIN </Text>
                        </TouchableOpacity>
                    </View>
            
                </View>

            </View>

        </View>
    )
}



export default LoginScreen;