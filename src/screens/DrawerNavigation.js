import React from 'react';
import {View, Text} from 'react-native';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
//import HealthScreen from './HealthScreen';
//import FirstAidInfoScreen from './FirstAidInfoScreen';
//import EmergencyScreen from './EmergencyScreen';
//import LocationScreen from './LocationScreen';
import ChangeUserData from './ChangeUserData'; 
//import PoliceStations from './PoliceStations/PoliceStations';  
import EmergencyScreen from './EmergencyScreen';
import { NavigationContainer } from '@react-navigation/native';



//import { NavigationContainer } from '@react-navigation/native';


//const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


const DrawerNavigation =()=>{

    return(
    <NavigationContainer>
    <Drawer.Navigator initialRouteName='Emergency'>
        <Drawer.Screen name='Emergency' component={EmergencyScreen} />
        <Drawer.Screen name='change' component={ChangeUserData} />
    </Drawer.Navigator>
    </NavigationContainer>
    )
}




export default DrawerNavigation;