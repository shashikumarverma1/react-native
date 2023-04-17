import { View } from 'react-native';
import React from 'react';
import ContactYoutube from './src/screens/ContactYoutube';
import HomeYoutube from './src/screens/HomeYoutube';
import About from './src/screens/About'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = () => {
  const Stack = createNativeStackNavigator();


  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login"  component={ContactYoutube} />

      <Stack.Screen name="Home" component={HomeYoutube} />
      <Stack.Screen name="About Us" component={About} />

    </Stack.Navigator>

   </NavigationContainer>
  );
  };
export default App;