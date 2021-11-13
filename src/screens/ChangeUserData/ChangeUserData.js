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
import {useIsFocused} from '@react-navigation/native';

const ChangeUserData = ({navigation: {navigate}}) => {
  const [enableShift, setEnableShift] = useState(false);
  const [govNumberText, setGovNumberText] = useState('');
  const [govNumbersCard, setGovNumbersCard] = useState([]);
  const [personalNumbersText, setPersonalNumberText] = useState('');
  const [personalNumbers, setPersonalNumbers] = useState([]);
  const [filteredPersonalNumbers, setFilteredPersonalNumebers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  const ref = firestore().collection('Pcontacts');
  const ref1 = firestore().collection('Message');
  const myRnId = () => parseInt(Date.now() * Math.random());
  const isFocused = useIsFocused();

  useEffect(() => {
    console.log('use effect called no prob======================');
    return ref.onSnapshot(querySnapshot => {
      const numberlist = [];
      querySnapshot.forEach(doc => {
        const {number1} = doc.data();
        const {number2} = doc.data();
        const {number3} = doc.data();
        const {number4} = doc.data();
        const {number5} = doc.data();
        numberlist.push({
          id: doc.id,
          number1,
          number2,
          number3,
          number4,
          number5,
        });
      });

      // console.log('number List ****************', numberlist);

      setPersonalNumbers(
        numberlist?.map(({number1, number2, number3, number4, number5}) => [
          number1,
          number2,
          number3,
          number4,
          number5,
        ]),
      );

      if (loading) {
        setLoading(false);
      }
      PNumberList;
    });
  }, [isFocused]);

  useEffect(() => {
    console.log('new use Effect running==========');
    return ref1.onSnapshot(querySnapshot => {
      querySnapshot.forEach(doc => {
        const {eMessage} = doc.data();
        console.log('message print in use Effect----', eMessage);
        setMessage(eMessage);
      });
    });
  }, []);

  console.log('this is a message *******************', message);

  useEffect(() => {
    console.log('second use effect called--------------------');
    if (personalNumbers.length >= 1) {
      const filtered = [].concat.apply([], personalNumbers);
      console.log('print filtered', filtered);
      setFilteredPersonalNumebers(filtered);
    }
  }, [personalNumbers]);

  console.log('personal numbers filtered', filteredPersonalNumbers);
  console.log('personal numbers', personalNumbers);

  const addPEmergNumbers = () => {
    firestore()
      .collection('Pcontacts2')
      .add({
        id: myRnId(),
        number7: personalNumbersText,
      })
      .then(() => {
        setPersonalNumberText(' ');
      });
  };

  const deletePEmergNumber = item => {
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
    //  console.log('print added item', item.index);
    return (
      // <TouchableOpacity key={index} onPress={() => deletePEmergNumber(item)}>
      <GovEmergNumberCard text={item} onClicks={deletePEmergNumber} />
      // </TouchableOpacity>
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
      {/* <ScrollView style={{height: '100%', paddingHorizontal: 15}}> */}
      {/* <View style={{marginTop: 30}}>
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
      </View> */}
      <View style={style.ChangeEmrgNumberView}>
        <FlatList
          data={filteredPersonalNumbers && filteredPersonalNumbers}
          renderItem={renderItemPersonalNum}
          keyExtractor={item => item.key}
        />
      </View>

      <View style={{alignSelf: 'center', marginTop: 20}}>
        <TouchableOpacity
          style={style.loginButton}
          onPress={() => {
            navigate('preInfo', {fromChangeData: true});
          }}>
          <Text style={style.loginButtonText}> Edit </Text>
        </TouchableOpacity>
      </View>

      {/* <View style={{marginTop: 30}}>
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
      </View> */}

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
            value={message}
            numberOfLines={4}
          />
        </View>
      </View>
      {/* </ScrollView> */}
    </View>

    //   <View style={{height: 50}} />
    // </KeyboardAvoidingView>
  );
};

export default ChangeUserData;
