import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import {  createDrawerNavigator,  DrawerContentScrollView,  DrawerItemList, DrawerItem,} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
import FetchApi1 from './FetchApi1';
import ChatData from './ChatData';

export const Stack1=()=> {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Feed1" component={FetchApi1} />
    <Stack.Screen name="Feed2" component={ChatData} />
    {/* <Stack.Screen name="Feed3" component={Feed3} /> */}
  </Stack.Navigator>
  );
}
const Feed1=(props)=>{
  // console.log(props)
  return(
  <View>
      <Text>feed1</Text>
      <Button title='feed2' onPress={()=>props.navigation.navigate('Feed2')} />
      <Text>feed3</Text>
      <Button title='feed3' onPress={()=>props.navigation.navigate('Feed3')} />

     
  </View>
  )
}
const Feed2=({navigation})=>{
  return(
    <View>
      <Text>feed2</Text>

     
  </View>
  )
}
const Feed3=()=>{
  return(
    <Text>feed3</Text>
  )
}

