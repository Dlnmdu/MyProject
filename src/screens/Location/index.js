import React from 'react';
import {View, Text, Image} from 'react-native';
import style from './styles';

const LocationScreen = ()=>{

    return(

        <View>
            <View style={style.imageView}>
                <Image
                style={style.imageStyle}
                source={require('../../../assets/location.jpg')}/>
            </View>
        </View>
    )
}

export default LocationScreen;