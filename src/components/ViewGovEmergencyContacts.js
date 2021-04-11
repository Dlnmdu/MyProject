import React from 'react';
import {View, Text, FlatList, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import Foundation from 'react-native-vector-icons/Foundation';
//import { Ionicons } from '@expo/vector-icons';
//import { Foundation } from '@expo/vector-icons';

const DATA = [
    {
      id: '1Num',
      title: '119',
    },
    {
      id: '2Num',
      title: '1991',
    },
    {
      id: '3Num',
      title: '1745',
    },
    {
      id: '4Num',
      title: '2598',
    },
    { 
      id: '5Num',
      title: '8956',
      }
   ];

   const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={{bottom:40, left:195}}>
      <Foundation name="telephone" size={24} color="white" />
      </TouchableOpacity>
       
       
      
    </View>
  );


const GovernmentEmergencyContactNumbersList = ()=>{

    const renderItem = ({ item }) => (
        <Item title={item.title} />
      );

       

    return(
        <View>
            <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator = {false}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
     
    },
    item: {
      flexDirection:'column',
     backgroundColor: '#b71c1c',
      borderColor: '#f44336',
      borderWidth:1.5,
      //borderColor: '#f44336',

      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      width: 250,
      height: 50,
      alignSelf: 'center',
      borderRadius: 15

      
    },
    title: {
      color: 'white',
     // fontWeight: 'bold',
      fontSize: 24,
      bottom: 10,
      fontWeight: 'bold'
    },
  });

export default GovernmentEmergencyContactNumbersList;