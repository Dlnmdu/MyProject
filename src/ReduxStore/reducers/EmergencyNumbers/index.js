import {
  ADD_GOVERNMENT_EMERGENCY_NUMBERS,
  ADD_PERSONAL_EMERGENCY_NUMBERS,
  DELETE_GOVERNMENT_EMERGENCY_NUMBERS,
  DELETE_PERSONAL_EMERGENCY_NUMBERS,
} from '../../actions/EmergencyNumbers';

import GovEmergNumber from '../../../Models/GovEmergNumbers/Index';
//import {PersonalEmergNumber} from '../../../Models/PersonalEmergNumbers/index';

const GOV_EMERG_NUMBERS = [new GovEmergNumber('n1','234235235'), new GovEmergNumber('n2','3243466')]


const initialState = {
  govNumbers: GOV_EMERG_NUMBERS
};

const emergNumberReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GOVERNMENT_EMERGENCY_NUMBERS:
      const id = Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, '')
        .substr(0, 5);
      const newGovNumber = new GovEmergNumber(id, action.GNumber);
      const existingGovEmergNumbers = [...state.govNumbers];
      return {...state, govNumbers: existingGovEmergNumbers.concat(newGovNumber)};

      default:
        return state;
  }
};


export default emergNumberReducer;