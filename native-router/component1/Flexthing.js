import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, Pressable } from 'react-native';
import React, { useState } from 'react';
// import { Exstyles } from '../.expo/style/Home';
export default function Flexthing(props) {
  const [inputdata, setinputdata] = useState('')
  const [showLogin, setShowLogin] = useState(false)
  const [pass, setpass] = useState('')
  const { container, input1, Texts, yourpassword } = styles
  return (
    <View style={{flex:1, flexDirection:'row'}} >
    <View style={{flex:2, backgroundColor:'red'}}></View>
    <View style={{flex:3, backgroundColor:'green'}}></View>
    <View style={{flex:2, backgroundColor:'blue'}}></View>
    <View style={{flex:2, backgroundColor:'aqua'}}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',



  },
  clrs: {
    backgroundColor: 'red'
  },
  input1: {
    // color:'red',
    padding: 10,
    fontSize: 18,
    // margin:5,
    backgroundColor: '	rgb(241, 243, 244)',
    width: 200,
    marginBottom: 20,
    borderRadius: 5
  },
  Texts: {
    fontSize: 25,
    marginBottom: 20,
    color: 'orange',
    textAlign: 'center'
  },
  yourpassword: {
    color: 'blue',
    marginLeft: 'auto',
    marginBottom: 10,
    fontSize: 12
  }
});

