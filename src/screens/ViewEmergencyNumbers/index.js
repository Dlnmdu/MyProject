import React from 'react';
import {View, Text} from 'react-native';
import style from './styles';
import EmergencyContactNumbersList from '../../components/ViewEmergencyContactNumbers';
import GovernmentEmergencyContactNumbersList from '../../components/ViewGovEmergencyContacts';

const EmergencyContactNumbers = () => {
  return (
    <View>
      <Text style={style.emergencyNumberTextStyle}>
        Emergency Contact Numbers
      </Text>

      <View style={[style.emergencyContactNumbersStyle, {top: 30}]}>
        <EmergencyContactNumbersList />
      </View>

      <Text style={[style.emergencyNumberTextStyle, {top: 60}]}>
        Government Emergency Contact Numbers
      </Text>

      <View style={[style.emergencyContactNumbersStyle, {top: 70}]}>
        <GovernmentEmergencyContactNumbersList />
      </View>
    </View>
  );
};

export default EmergencyContactNumbers;
