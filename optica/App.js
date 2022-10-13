import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/screens/Home'
import MyCart from './components/screens/MyCart';
import PorductInfo from './components/screens/PorductInfo';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false,    
      }}>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='MyCart' component={MyCart}/>
        <Stack.Screen name='PorductInfo' component={PorductInfo}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}