import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React ,{useState} from 'react';
// import { Exstyles } from '../.expo/style/Home';
export default function Home(props) {
  
  return (
    <View style={styles.container} >
    <Text >
      name : </Text>
      <Text >
    age : </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',width:'100vw'
    // justifyContent: 'center',
  },
  clrs:{
    backgroundColor:'red'
  }
});























