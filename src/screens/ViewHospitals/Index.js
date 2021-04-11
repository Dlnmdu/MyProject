import React from 'react';
import {View, Text, TouchableOpacity,Image} from 'react-native';
import style from './styles';
//import { Foundation } from '@expo/vector-icons';
import Foundation from 'react-native-vector-icons/Foundation';



const Hospitals = ()=>{

    return(
        <View >
            <View style={style.fullNumberView}>
                <Text style={style.text1}>Contact</Text>
                <View style={style.mobileNumberStyle}>

                    <Text style={style.mobileNumberTextStyle}> 0112931471</Text>
                    <TouchableOpacity style={style.callButton}>
                        <Foundation name="telephone" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={style.mapView}>

            <Image
                style={style.imageStyle}
                source={require('../../../assets/Hospitals.jpg' )}/>

            </View>
        </View>
    )
    
}

export default Hospitals;