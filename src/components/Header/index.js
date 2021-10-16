import React from 'react';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import style from './styles';
import HealthInfoList from '../../components/HealthInfoList';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = ({sideMenu}) => {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => {
            if (sideMenu) {
              navigation.dispatch(DrawerActions.openDrawer());
            } else {
              navigation.goBack();
            }
          }}
          // hitSlop={{left: 5, right: 5, top: 5, bottom: 5}}
          style={{flex: 2, justifyContent: 'center'}}>
          <Icon
            name={sideMenu ? 'menu' : 'arrow-back'}
            color="white"
            size={30}
            style={{marginLeft: 20}}
          />
        </TouchableOpacity>
        <View style={{flex: 3, justifyContent: 'center'}}>
          <Image
            style={{width: 70, height: 70, alignSelf: 'center'}}
            source={require('../../../assets/AppLogo.png')}
          />
        </View>
        <View style={{flex: 2, justifyContent: 'center'}}>
          <TouchableOpacity
            // hitSlop={{left: 5, right: 5, top: 5, bottom: 5}}
            style={{justifyContent: 'center'}}>
            <Icon
              name="home"
              color="white"
              size={25}
              style={{marginRight: 30, alignSelf: 'flex-end'}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;
