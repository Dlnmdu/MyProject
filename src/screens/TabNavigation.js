import {Text, View} from 'react-native';

import ChangeUserData from './ChangeUserData/ChangeUserData';
import EmergencyContactNumbers from './ViewEmergencyNumbers/index';
import EmergencyScreen from './Emergency/EmergencyScreen';
import FirstAidInfoScreen from './FirstAidInformation/index';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import HealthScreen from './ViewHealth/Index';
import Hospitals from './ViewHospitals/Index';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LocationScreen from './Location/index';
import LoginScreen from './Login/LoginScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PoliceStations from './ViewPoliceStations/Index';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

//import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'darkgray',
        activeBackgroundColor: '#b00020',
        inactiveBackgroundColor: '#FFFFFF',
        //inactiveBackgroundColor: '#b55031',
        style: {
          backgroundColor: '#CE4418',
          paddingBottom: 0,
        },
      }}
      screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Emergency"
        component={EmergencyScreen}
        options={{
          tabBarLabel: 'Emergency',
          tabBarIcon: ({focused, color, size}) => (
            <MaterialCommunityIcons
              name="hospital-box"
              size={30}
              color={focused ? '#FFFFFF' : '#b00020'}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Location"
        component={LocationScreen}
        options={{
          tabBarLabel: 'Location',
          tabBarIcon: ({focused, color, size}) => (
            <MaterialIcons
              name="location-pin"
              size={30}
              color={focused ? '#FFFFFF' : '#b00020'}
            />
          ),
        }}
      />

      <Tab.Screen
        name="FirstAid"
        component={FirstAidInfoScreen}
        options={{
          tabBarLabel: 'First Aid',
          headerTitleStyle: {
            alignSelf: 'center',
            color: 'white',
            fontWeight: 'bold',
          },
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name="information-circle"
              size={30}
              color={focused ? '#FFFFFF' : '#b00020'}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Health"
        component={HealthScreen}
        options={{
          tabBarLabel: 'Health',
          tabBarIcon: ({focused, color, size}) => (
            <FontAwesome
              name="heartbeat"
              size={30}
              color={focused ? '#FFFFFF' : '#b00020'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const DrawarNav = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen
        name="tabNav"
        component={TabNavigation}
        options={{
          title: 'Emergency',
          drawerIcon: ({focused, color, size}) => (
            <MaterialCommunityIcons
              name="hospital-box"
              size={30}
              color="#f44336"
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Change Data"
        component={ChangeUserData}
        options={{
          title: 'Change Data',
          headerTitleStyle: {
            color: 'red',
            fontSize: 24,
          },
          drawerIcon: ({focused, color, size}) => (
            <MaterialIcons
              name="published-with-changes"
              size={24}
              color="#f44336"
            />
          ),
        }}
      />

      <Drawer.Screen
        name="View Nearest Police Stations"
        component={PoliceStations}
        options={{
          title: 'Police Stations',
          drawerIcon: ({focused, color, size}) => (
            <MaterialIcons name="local-police" size={24} color="#f44336" />
          ),
        }}
      />

      <Drawer.Screen
        name="View Nearest Hospitals"
        component={Hospitals}
        options={{
          title: 'Hospitals',
          drawerIcon: ({focused, color, size}) => (
            <FontAwesome5 name="hospital" size={24} color="#f44336" />
          ),
        }}
      />

      <Drawer.Screen
        name="Emergency Contact Numbers"
        component={EmergencyContactNumbers}
        options={{
          title: 'Emergency Contacts',
          drawerIcon: ({focused, color, size}) => (
            <MaterialIcons
              name="quick-contacts-dialer"
              size={24}
              color="#f44336"
            />
          ),
        }}
      />

      <Drawer.Screen
        name="login"
        component={LoginScreen}
        options={{
          title: 'Log Out',
          drawerIcon: ({focused, color, size}) => (
            <MaterialCommunityIcons
              name="logout-variant"
              size={24}
              color="#f44336"
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawarNav;
