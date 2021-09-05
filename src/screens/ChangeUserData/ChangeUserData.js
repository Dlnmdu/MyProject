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
} from 'react-native';
import React, {useState, useEffect} from 'react';
import PNumberList from '../../components/PNumberList';
import style from './styles';
import GovEmergNumberCard from '../../components/GovEmergNumberCard/index';
import NumbersUpdateInput from '../../components/NumbersUpdateInput/index';
import firestore from '@react-native-firebase/firestore';

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
    <KeyboardAvoidingView
      style={style.container}
      behavior="position"
      enabled={enableShift}>
      <View style={style.changeAddDataContainer}>
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

        <TextInput
          style={style.changeMessageInput}
          placeholder="Change Your Emergency Message and press enter "
          onFocus={() => {
            setEnableShift(true);
          }}
          multiline
          numberOfLines={4}
        />
      </View>

      <View style={{height: 50}} />
    </KeyboardAvoidingView>
  );
};

export default ChangeUserData;
