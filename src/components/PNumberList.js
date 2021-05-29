import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import { Ionicons } from '@expo/vector-icons';

const DATA = [
  {
    id: '1Num',
    title: '0715896324',
  },
  {
    id: '2Num',
    title: '0774852692',
  },
  {
    id: '3Num',
    title: '0775541259',
  },
  {
    id: '4Num',
    title: '0775541259',
  },
  {
    id: '5Num',
    title: '0775541259',
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <TouchableOpacity style={{bottom: 40, left: 195}}>
      <Ionicons name="close-circle-sharp" size={24} color="white" />
    </TouchableOpacity>
  </View>
);

const PNumberList = () => {
  const renderItem = ({item}) => <Item title={item.title} />;
  return (
    <View>
      <FlatList
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
    borderWidth: 1.5,
    borderColor: '#f44336',
    backgroundColor: '#b71c1c',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    width: 250,
    height: 50,
    alignSelf: 'center',
    borderRadius: 15,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    bottom: 13,
  },
});

export default PNumberList;
