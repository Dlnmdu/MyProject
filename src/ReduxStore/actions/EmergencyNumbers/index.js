export const ADD_GOVERNMENT_EMERGENCY_NUMBERS = 'ADD_GOVERNMENT_EMERG_NUMBERS';
export const ADD_PERSONAL_EMERGENCY_NUMBERS = 'ADD_PERSONAL_EMERGENCY_NUMBERS';
export const DELETE_GOVERNMENT_EMERGENCY_NUMBERS =
  'DELETE_GOVERNMENT_EMERG_NUMBERS';
export const DELETE_PERSONAL_EMERGENCY_NUMBERS =
  'DELETE_PERSONAL_EMERGENCY_NUMBERS';

export const addGovEmergNumbers = (content) => {
  return {type: ADD_GOVERNMENT_EMERGENCY_NUMBERS, GNumber: content};
};

// export const addPersonalEmergNumbers =(personalContent) => {
//   return {type: ADD_PERSONAL_EMERGENCY_NUMBERS, personalEmergNumber: personalContent};
// };

// export const deleteGovEmergNumber = (id) => {
//   return {type: DELETE_GOVERNMENT_EMERGENCY_NUMBERS, govEmergNumberId: id};
// };

// export const deletePersonalEmergNumber = (personalId) => {
//   return {type: DELETE_PERSONAL_EMERGENCY_NUMBERS, personalEmergNumberId: personalId};
// };







