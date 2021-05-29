import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
//import { Ionicons } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';



const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <TouchableOpacity style={{bottom: 40, left: 195}}>
      <Ionicons name="close-circle-sharp" size={24} color="white" />
    </TouchableOpacity>
  </View>
);

const GovEmerNumList = () => {
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
    backgroundColor: '#b71c1c',
    borderColor: '#f44336',
    borderWidth: 1.5,
    //borderColor: '#f44336',

    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    width: 250,
    height: 50,
    alignSelf: 'center',
    borderRadius: 15,
  },
  title: {
    color: '#b71c1c',
    // fontWeight: 'bold',
    fontSize: 24,
    bottom: 15,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default GovEmerNumList;
