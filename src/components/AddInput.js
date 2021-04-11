import React from 'react';
import {View, Text, StyleSheet, TextInput, Keyboard} from'react-native';

const AddInput = ({pHolder,keyboardAvoid,keyboard,right})=>{

    return(

        <View style={{marginTop:30}} >
            <TextInput placeholder={pHolder}
            fontWeight='bold'
            color='#38340D'
            mode='outlined'
            onFocus= {keyboardAvoid}
            keyboardType={keyboard}
            icon = {right}
            
            style={styles.inputFirstName} />
        </View>

    )
}

const styles=StyleSheet.create({

    inputFirstName:{
        borderWidth: 3,
        borderColor: 'white',
        borderRadius: 10,
        padding: 15,
        height: 50,
        width: 250,
        alignSelf:'center',
        marginHorizontal: 100,
        backgroundColor: '#ff9800'
        

    }

})

export default AddInput;