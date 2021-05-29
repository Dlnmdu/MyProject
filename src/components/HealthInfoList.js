import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
//import { Ionicons } from '@expo/vector-icons';

const DATA = [
  {
    id: '1Num',
    title: 'Heart Rate',
    discription: 'This area included heart Rate',
    image: (
      <Image
        style={{width: 80, height: 80, bottom: 25}}
        source={require('../../assets/heartRate.png')}
      />
    ),
  },
  {
    id: '2Num',
    title: 'Blood Pressure',
    discription: 'This area included BloodPressure',
    image: (
      <Image
        style={{width: 80, height: 80, bottom: 25}}
        source={require('../../assets/bloodPressure.png')}
      />
    ),
  },
  {
    id: '3Num',
    title: 'Steps',
    discription: 'This area included steps',
    image: (
      <Image
        style={{width: 80, height: 80, bottom: 25}}
        source={require('../../assets/steps.png')}
      />
    ),
  },
  {
    id: '4Num',
    title: 'Calories',
    discription: 'This area included calories',
    image: (
      <Image
        style={{width: 80, height: 80, bottom: 25}}
        source={require('../../assets/calories.png')}
      />
    ),
  },
  {
    id: '5Num',
    title: 'Step 5',
  },
];

const Item = ({title, discription, image}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.discription}>{discription}</Text>
    {image}
  </View>
);

const HealthInfoList = () => {
  const renderItem = ({item}) => (
    <Item
      title={item.title}
      discription={item.discription}
      image={item.image}
    />
  );

  return (
    <View>
      <FlatList
        horizontal={false}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flexDirection: 'column',
    // backgroundColor: '#f44336',
    borderColor: '#f44336',
    borderWidth: 1.5,
    //borderColor: '#f44336',

    padding: 20,
    marginVertical: 8,
    marginHorizontal: 8,
    width: 335,
    height: 150,
    alignSelf: 'center',
    borderRadius: 15,
  },
  title: {
    color: '#b71c1c',
    // fontWeight: 'bold',
    fontSize: 24,
    bottom: 10,
  },

  discription: {
    color: '#b71c1c',
    left: 100,
  },
});

export default HealthInfoList;
