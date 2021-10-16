import 'react-native-gesture-handler';

import {Image, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
  DefaultTheme,
} from '@react-navigation/native';
import React, {Component} from 'react';

import AddInformation from './src/screens/SignUp/AddInformation';
import AddPreInformation from './src/screens/AddMobileNumbers/AddPreInformation';
import ChangeUserData from './src/screens/ChangeUserData/ChangeUserData';
import LoginScreen from './src/screens/Login/LoginScreen';
import StartScreen from './src/screens/StartScreen/StartScreen';
import TabNavigation from './src/screens/TabNavigation';
import {createStackNavigator} from '@react-navigation/stack';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';
// import {connect} from "react-redux";
// import thunk from 'react-redux';
import emergNumberReducer from './src/ReduxStore/reducers/EmergencyNumbers/index';
//import ReduxThunk from 'redux-thunk'
import Toast, {BaseToast} from 'react-native-toast-message';

const rootReducer = combineReducers({emergNumbers: emergNumberReducer});
const store = createStore(rootReducer);
const Stack = createStackNavigator();

const toastConfig = {
  error: ({text1, ...rest}) => {
    return (
      <BaseToast
        {...rest}
        style={style.errorToast}
        text1NumberOfLines={1}
        text2NumberOfLines={1}
        contentContainerStyle={style.container}
        leadingIcon={require('./assets/toastError.png')}
        leadingIconStyle={style.iconView}
        trailingIcon={require('./assets/toastClose.png')}
        trailingIconStyle={style.trailIconView}
        onTrailingIconPress={() => {
          Toast.hide();
        }}
        text1Style={style.text1}
        text2Style={style.text2}
        text1={text1}
      />
    );
  },
  success: ({text1, ...rest}) => {
    return (
      <>
        {text1 && (
          <BaseToast
            {...rest}
            style={style.successToast}
            text1NumberOfLines={1}
            text2NumberOfLines={1}
            contentContainerStyle={style.container}
            leadingIcon={require('./assets/toastSuccess.png')}
            trailingIcon={require('./assets/toastClose.png')}
            leadingIconStyle={style.iconView}
            trailingIconStyle={style.trailIconView}
            onTrailingIconPress={() => {
              Toast.hide();
            }}
            text1Style={style.text1}
            text2Style={style.text2}
            text1={text1}
          />
        )}
      </>
    );
  },
};

const NavigationDrawerStructure = props => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        <Image
          source={{
            uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{width: 25, height: 25, marginLeft: 5}}
        />
      </TouchableOpacity>
    </View>
  );
};

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background: '#FFFFFF',
  },
};

function App({navigation}) {
  return (
    <Provider store={store}>
      <NavigationContainer initialRouteName="start" theme={MyTheme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="start" component={StartScreen} />

          <Stack.Screen
            name="login"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="addinfo"
            component={AddInformation}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="preInfo"
            component={AddPreInformation}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="tabNav"
            component={TabNavigation}
            screenOptions={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast config={toastConfig} ref={ref => Toast.setRef(ref)} />
    </Provider>
  );
}

const style = StyleSheet.create({
  successToast: {
    borderLeftColor: '#2BB573',
    backgroundColor: '#2BB573',
    borderRadius: 16,
    height: 86,
    width: 350,
    marginTop: 20,
  },
  errorToast: {
    borderLeftColor: '#F05454',
    backgroundColor: '#F05454',
    borderRadius: 16,
    height: 86,
    width: 350,
    marginTop: 20,
  },
  container: {paddingHorizontal: 15},
  text1: {
    fontSize: 25,
    fontWeight: '400',
    color: '#FFFFFF',
    fontFamily: 'Poppins-Regular',
  },
  text2: {
    fontSize: 12,
    fontWeight: '400',
    color: '#FFFFFF',
    fontFamily: 'Poppins-Regular',
  },
  iconView: {width: 55, height: 55},
  trailIconView: {
    width: 13,
    height: 13,
    marginTop: -15,
  },
});

export default App;
