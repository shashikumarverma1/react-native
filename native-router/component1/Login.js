import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, Pressable } from 'react-native';
import React, { useState } from 'react';
// import { Exstyles } from '../.expo/style/Home';
export default function Login(props) {
  const [inputdata, setinputdata] = useState('')
  const [showLogin, setShowLogin] = useState(false)
  const [pass, setpass] = useState('')
  const { container, input1, Texts, yourpassword } = styles
  return (
    <View style={container} >
      {
        showLogin ? <View>
          <Text style={Texts} className="#737373 component-active:font-extrabold" >Login here</Text>

          <TextInput placeholder='Enter Email'  style={input1} value={inputdata} onChangeText={(e) => setinputdata(e)} />
          <TextInput placeholder='Enter Passwrd' style={input1} value={pass} onChangeText={(e) => setpass(e)} secureTextEntry={true} />
          <Text style={yourpassword}>forgot your Passwrd ?</Text>
          <Button title='Login' onPress={() => { setinputdata('') }}></Button>
          <Pressable onPress={() => setShowLogin(!showLogin)}>
            <Text style={{ margin: 20, textAlign: "center" }}>new user ? sigup</Text>
          </Pressable>

        </View> : <View>
          <Text style={Texts}>Signup here</Text>
          <TextInput placeholder='Enter Name' style={input1} value={inputdata} onChangeText={(e) => setinputdata(e)} />
          <TextInput placeholder='Enter Email' style={input1} value={inputdata} onChangeText={(e) => setinputdata(e)} />
          <TextInput placeholder='Enter Passwrd' style={input1} value={pass} onChangeText={(e) => setpass(e)} secureTextEntry={true} />
          <TextInput placeholder='confirm Passwrd' style={input1} value={pass} onChangeText={(e) => setpass(e)} secureTextEntry={true} />

          {/* <Text style={yourpassword}>forgot your Passwrd ?</Text> */}
          <Button title='Signup' onPress={() => { setinputdata('') }}></Button>
          <Pressable onPress={() => setShowLogin(!showLogin)}>
            <Text style={{ margin: 20, textAlign: "center" }}>Already user ? Login</Text>
          </Pressable>

        </View>
      }


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

