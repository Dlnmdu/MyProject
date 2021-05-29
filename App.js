import 'react-native-gesture-handler';

import { Image, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import  React,{ Component } from 'react';

import AddInformation from './src/screens/SignUp/AddInformation';
import AddPreInformation from './src/screens/AddMobileNumbers/AddPreInformation';
import ChangeUserData from './src/screens/ChangeUserData/ChangeUserData';
import LoginScreen from './src/screens/Login/LoginScreen';
import StartScreen from './src/screens/StartScreen/StartScreen';
import TabNavigation from './src/screens/TabNavigation';
import { createStackNavigator } from '@react-navigation/stack';
import { combineReducers, createStore } from 'redux';
import {Provider} from 'react-redux';
// import {connect} from "react-redux";
// import thunk from 'react-redux';
import emergNumberReducer from './src/ReduxStore/reducers/EmergencyNumbers/index';
//import ReduxThunk from 'redux-thunk'

const rootReducer = combineReducers({emergNumbers:emergNumberReducer});
const store = createStore(rootReducer);
const Stack = createStackNavigator();

const NavigationDrawerStructure = (props) => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
     <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{width: 25, height: 25, marginLeft: 5}}
        />
      </TouchableOpacity>
    </View>
  );
};



function App({navigation}) {
  return (

    <Provider store={store}>
    <NavigationContainer initialRouteName = "start">
      <Stack.Navigator>

      <Stack.Screen name ='start' component={StartScreen}
        options={{
          headerShown: false
        /*  title: 'Welcome', 
          headerStyle:{
           height: 450,
            backgroundColor:'#f44336',
            borderRadius:45 
          },
          headerTitleStyle:{
            alignSelf:'center',
            color:'white',
            //fontWeight: 'italic',
            fontSize: 30,
            bottom: 190
             },*/
          
        }} />

      <Stack.Screen name="login" component={LoginScreen} 
        options={{
          headerShown:false
        }} />
      
       
      <Stack.Screen name="addinfo" component={AddInformation} 
        options={{
          headerShown: false
        }} />

     

      <Stack.Screen name="preInfo" component={AddPreInformation} 
        options={{
          headerShown: false
        }} /> 

     

      <Stack.Screen name="tabNav" component={TabNavigation}
       options={{
       title: 'Emergency', 
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        
        headerStyle:{
          backgroundColor:'#f44336',
         // borderRadius:20 
         borderBottomLeftRadius: 20,
         borderBottomRightRadius: 20
        },
        headerTitleStyle:{
         // alignSelf:'center',
          textAlign:'center',
          color:'white',
          fontWeight: 'bold',
          right:30
        }
      }} />

      </Stack.Navigator>


    </NavigationContainer>
    </Provider>

    

  );
}

export default App;