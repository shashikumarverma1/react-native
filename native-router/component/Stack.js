import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import {  createDrawerNavigator,  DrawerContentScrollView,  DrawerItemList, DrawerItem,} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import FetchApi1 from '../component/FetchApi1.js'
const Stack = createStackNavigator();
import ChatData from './ChatData.js';


export default function Stack1() {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Feed1" component={FetchApi1} />
    <Stack.Screen name="ChatData" component={ChatData} />
  </Stack.Navigator>
  
  );
}


