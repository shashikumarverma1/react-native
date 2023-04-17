import { View, Text, Button } from 'react-native'
import React from 'react'

const About = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
    <Button
      title="Go to About"
      onPress={() => navigation.navigate('About')}
    />
     <Button title="Go back" onPress={() => navigation.goBack()} />
  </View>
  );
}

export default About