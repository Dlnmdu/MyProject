import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';

import GovEmerNumList from '../../components/GovEmerNumList';
import PNumberList from '../../components/PNumberList';
import logAddinfoStyle from '../../../styles/logAddinfoStyle';
import style from './styles';
import {useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import GovEmergNumberCard from '../../components/GovEmergNumberCard/index';
import addGovEmergNumbers from '../../ReduxStore/actions/EmergencyNumbers/index';
import { set } from 'react-native-reanimated';
import NumbersUpdateInput from '../../components/NumbersUpdateInput/index';



const ChangeUserData = props => {

  // const updatedGovNumbers = useSelector((state) => state.emergNumbers.govNumbers);
  // const dispatch = useDispatch();

  const [enableShift, setEnableShift] = useState(false);
  const [govNumberText, setGovNumberText] = useState('');
  const [govNumbersCard, setGovNumbersCard] = useState([]);
  const [personalNumbersText, setPersonalNumberText] = useState('');
  const [personalNumberCard, setPersonalNumberCard] = useState([]);

  const addNewGovNumberCard=()=>{
    Keyboard.dismiss()
    setGovNumbersCard ([...govNumbersCard, govNumberText]);
    setGovNumberText('');    
  }

  const addNewPersonalNumberCard=()=>{
    Keyboard.dismiss();
    setPersonalNumberCard([...personalNumberCard, personalNumbersText]);
    setPersonalNumberText('');
  }

  const deletePersonalNumbers=(index)=>{
    let personalNumbersCopy = [...personalNumberCard];
    personalNumbersCopy.splice(index, 1);
    setPersonalNumberCard(personalNumbersCopy);
  }

  const deleteGovNumbers=(index)=>{
    let numbersCopy = [...govNumbersCard];
    numbersCopy.splice(index, 1);
    setGovNumbersCard(numbersCopy);
  }

  const renderItemPersonalNum=(item,index)=>{
    return( 
      <TouchableOpacity key={index} onPress={()=>deletePersonalNumbers() }>
      <GovEmergNumberCard text={item}/> 
      </TouchableOpacity>      
    )
  }

  const renderItemGovNum =(item,index)=>{ 
    
    return( 
      <TouchableOpacity key={index} onPress={()=>deleteGovNumbers() }>
      <GovEmergNumberCard text={item}/> 
      </TouchableOpacity>      
    )
  };

 
  return (
    <KeyboardAvoidingView
      style={style.container}
      behavior="position"
      enabled={enableShift}>


      <View style={style.changeAddDataContainer}>
        {/* <View>
          <TextInput
            style={style.addNumbersInput}
            placeholder="Add New Numbers"
            onFocus={() => {
              setEnableShift(false);
            }}
            keyboardType="numeric"
            
          />

          <TouchableOpacity
            style={style.pNumSaveButton}
            >
            <Text
              style={{
                color: 'white',
                alignSelf: 'center',
                top: 6,
                fontWeight: 'bold',
              }}>
              Save
            </Text>
          </TouchableOpacity>

          <View style={style.ChangeEmrgNumberView}>
            <PNumberList />
          </View>
        </View> */}

<View style={{marginTop:30}}>
          <NumbersUpdateInput 
          placeholder='Add new personal Numbers'
          onChangeText={text => {
            setPersonalNumberText(text);}}
          value={personalNumbersText}
          onPress = {()=>{addNewPersonalNumberCard()} } />   
        </View>
        <View style={style.ChangeEmrgNumberView}>   
           <FlatList
            data={personalNumberCard}
            renderItem={renderItemPersonalNum}
            keyExtractor = {(item)=>item.key}
          />          
        </View> 




       

        <View style={{marginTop:30}}>
          <NumbersUpdateInput 
          placeholder='Add new government Numbers'
          onChangeText={text => {
            setGovNumberText(text);}}
          value={govNumberText}
          onPress = {()=>{addNewGovNumberCard()} } />   
        </View>
        <View style={style.ChangeEmrgNumberView}>   
           <FlatList
            data={govNumbersCard}
            renderItem={renderItemGovNum}
            keyExtractor = {(item)=>item.key}
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
