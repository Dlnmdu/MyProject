import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  Keyboard,
  Alert,
  SafeAreaView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import PNumberList from '../../components/PNumberList';
import style from './styles';
import GovEmergNumberCard from '../../components/GovEmergNumberCard/index';
import NumbersUpdateInput from '../../components/NumbersUpdateInput/index';
import firestore from '@react-native-firebase/firestore';
import Header from '../../components/Header';
const ChangeUserData = props => {
  const [enableShift, setEnableShift] = useState(false);
  const [govNumberText, setGovNumberText] = useState('');
  const [govNumbersCard, setGovNumbersCard] = useState([]);
  const [personalNumbersText, setPersonalNumberText] = useState('');
  const [personalNumbers, setPersonalNumbers] = useState([]);
  const [filteredPersonalNumbers, setFilteredPersonalNumebers] = useState([]);
  const [loading, setLoading] = useState(true);

  const ref = firestore().collection('Pcontacts');
  const myRnId = () => parseInt(Date.now() * Math.random());

  useEffect(() => {
    return ref.onSnapshot(querySnapshot => {
      const numberlist = [];
      querySnapshot.forEach(doc => {
        const {number1} = doc.data();
        numberlist.push({
          id: doc.id,
          number1,
        });
      });

      setPersonalNumbers(numberlist?.map(({number1}) => [number1]));

      if (loading) {
        setLoading(false);
      }
      PNumberList;
    });
  }, []);

  useEffect(() => {
    if (personalNumbers) {
      const filtered = [].concat.apply([], personalNumbers);
      setFilteredPersonalNumebers(filtered);
    }
  }, [personalNumbers]);

  const addPEmergNumbers = () => {
    firestore()
      .collection('Pcontacts')
      .add({
        id: myRnId(),
        number1: personalNumbersText,
      })
      .then(() => {
        setPersonalNumberText(' ');
      });
  };

  const deletePEmergNumber = item => {
    console.log('index from delete ', item.item);
    if (item) {
      firestore()
        .collection('Pcontacts')
        .where('number1', '==', item.item)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            doc.ref.delete();
          });
          Alert.alert('Successfully deleted');
        });
    }
  };

  const addNewGovNumberCard = () => {
    Keyboard.dismiss();
    setGovNumbersCard([...govNumbersCard, govNumberText]);
    setGovNumberText('');
  };

  const deleteGovNumbers = index => {
    let numbersCopy = [...govNumbersCard];
    numbersCopy.splice(index, 1);
    setGovNumbersCard(numbersCopy);
  };

  const renderItemPersonalNum = (item, index) => {
    console.log('print added item', item.index);
    return (
      <TouchableOpacity key={index} onPress={() => deletePEmergNumber(item)}>
        <GovEmergNumberCard text={item} />
      </TouchableOpacity>
    );
  };

  const renderItemGovNum = (item, index) => {
    return (
      <TouchableOpacity key={index} onPress={() => deleteGovNumbers()}>
        <GovEmergNumberCard text={item} />
      </TouchableOpacity>
    );
  };

  return (
    // <KeyboardAvoidingView
    // //  style={style.container}
    //   behavior="position"
    //   enabled={enableShift}>

    <View style={style.changeAddDataContainer}>
      <Header />
      <ScrollView style={{height: '100%', paddingHorizontal: 15}}>
        <View style={{marginTop: 30}}>
          <NumbersUpdateInput
            placeholder="Add new personal Numbers"
            onChangeText={text => {
              setPersonalNumberText(text);
            }}
            value={personalNumbersText}
            onPress={() => {
              // addNewPersonalNumberCard();
              addPEmergNumbers();
            }}
          />
        </View>
        <View style={style.ChangeEmrgNumberView}>
          <FlatList
            data={filteredPersonalNumbers && filteredPersonalNumbers}
            renderItem={renderItemPersonalNum}
            keyExtractor={item => item.key}
          />
        </View>

        <View style={{marginTop: 30}}>
          <NumbersUpdateInput
            placeholder="Add new government Numbers"
            onChangeText={text => {
              setGovNumberText(text);
            }}
            value={govNumberText}
            onPress={() => {
              addNewGovNumberCard();
            }}
          />
        </View>
        <View style={style.ChangeEmrgNumberView}>
          <FlatList
            data={govNumbersCard}
            renderItem={renderItemGovNum}
            keyExtractor={item => item.key}
          />
        </View>

        <View style={{height: 300}}>
          <View
            style={{
              width: '100%',
              height: 130,
              backgroundColor: '#b00020',
              borderRadius: 16,
            }}>
            <Text
              style={{
                color: '#FFFFFF',
                marginLeft: 10,
                top: 7,
                fontWeight: 'bold',
              }}>
              Change your message
            </Text>
            <TextInput
              style={style.changeMessageInput}
              placeholder="Enter message here "
              placeholderTextColor="#EF9A9A"
              onFocus={() => {
                setEnableShift(true);
              }}
              multiline
              numberOfLines={4}
            />
          </View>
        </View>
      </ScrollView>
    </View>

    //   <View style={{height: 50}} />
    // </KeyboardAvoidingView>
  );
};

export default ChangeUserData;
