import { View, Text, Button } from 'react-native'
import React from 'react'

const HomeYoutube = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About Us')}
      />
     
     
    </View>
  )
}

export default HomeYoutube