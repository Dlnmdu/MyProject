import React from 'react';
import {View, Text, FlatList, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
//import { Ionicons } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DATA = [
    {
      id: '1Num',
      title: 'Step 1',
      discription: "This view will include steps to do when you are in an emergency situation.  "
     
    },
    {
      id: '2Num',
      title: 'Step 2',
    },
    {
      id: '3Num',
      title: 'Step 3',
    },
    {
      id: '4Num',
      title: 'Step 4',
    },
    { 
      id: '5Num',
      title: 'Step 5',
      }
   ];

   const Item = ({ title,discription }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.discription}>{discription}</Text>
       
      
    </View>
  );


const FirstAidInfoList = ()=>{

    const renderItem = ({ item }) => (
        <Item title={item.title } 
            discription={item.discription}/>
      );

       

    return(
        <View>
            <FlatList
            horizontal={true}
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
     // backgroundColor: '#f44336',
      borderColor: '#f44336',
      borderWidth:1.5,
      //borderColor: '#f44336',

      padding: 20,
      marginVertical: 8,
      marginHorizontal: 8,
      width: 250,
      height: 200,
      alignSelf: 'center',
      borderRadius: 15

      
    },
    title: {
      color: '#b71c1c',
     // fontWeight: 'bold',
      fontSize: 24,
      bottom: 10
    },

    discription:{
        color: '#b71c1c'
    }
    
  });

export default FirstAidInfoList;