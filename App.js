
import 'react-native-gesture-handler';
import  React,{ Component } from 'react';
import { View, Text,TouchableOpacity, Image } from 'react-native';
import { NavigationContainer,getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import AddInformation from './src/screens/AddInformation';
import AddPreInformation from './src/screens/AddPreInformation';
import StartScreen from './src/screens/StartScreen';
import TabNavigation from './src/screens/TabNavigation';
import ChangeUserData from './src/screens/ChangeUserData';


   
const Stack = createStackNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
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

    

  );
}

export default App;