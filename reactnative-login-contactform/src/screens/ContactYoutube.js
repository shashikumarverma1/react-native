import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'

import CheckBox from "expo-checkbox";
import { useFonts, WorkSans_400Regular } from "@expo-google-fonts/work-sans";
import { Nunito_700Bold } from "@expo-google-fonts/nunito";
import AppLoading from "expo-app-loading";



const ContactYoutube = ({navigation}) => {
const [userName, setUserName] = useState("");
const [password, setPassword] = useState("");  
const [agree, setAgree] = useState(false);

const submit = () => {
  // return Alert.alert(userName, password);
  if (userName === "a" && password === "p") {
    Alert.alert(`Thank You ${userName}`);
    navigation.navigate("Home");
  } else {
    Alert.alert("Username or password is not correct")
  }
};

  return (
    <View style={StyleSheet.mainContainer}>
      <Text style={styles.mainHeader}
      >Login Form</Text>
      <Text style={styles.description}>
        You can reach us anytime via any@thapa.com
      </Text>
      
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter Your Name</Text>
        <TextInput style={styles.inputStyle} 
        autoCapitalize="none"
        autoCorrect={false}
        value={userName}
        onChangeText={(actualData) => setUserName(actualData)}
        />
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter Your Password</Text>
        <TextInput style={styles.inputStyle} 
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        value={password}
        onChangeText={(actualData) => setPassword(actualData)}
        />
      </View>

       <View style={styles.wrapper}>
        <CheckBox
        value={agree}
        onValueChange={() => setAgree(!agree) }
        color ={agree ? "#4630EB" : undefined}
        />
        <Text style={styles.wrapperText}>
          I have read and agreed with the TC

        </Text>
       </View>
       <TouchableOpacity style={[styles.buttonStyle, {
        backgroundColor: agree ? "#4630EB" : "grey", 
      },
      ]}
      disabled={!agree}
      onPress={() => submit()}
      >
        <Text style={styles.buttonText}>Login</Text>

       </TouchableOpacity>
      
    </View>
  )
};
const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    paddingHorizontal: 30,
    backgroundColor: "#fff",
  },
  mainHeader: {
    fontSize: 24,
    color: "#344055",
    fontWeight: "500",
    paddingTop: 50,
    paddingBottom: 15,
    fontFamily: "Nunito_700Bold",
    textTransform: "capitalize",
  },
  description: {
    fontSize: 18,
    color: "#7d7d7d",
    paddingBottom: 20,
    fontFamily: "WorkSans_400Regular",
    lineHeight: 25,
  },

  inputContainer: {
    marginTop: 20,
  },
  labels: {
    // fontWeight: "bold",
    fontSize: 15,
    color: "#7d7d7d",
    paddingBottom: 5,
    fontFamily: "WorkSans_400Regular",
    lineHeight: 25,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.3)",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 2,
  },
  multiineStyle: {
    paddingVertical: 4,
  },
  buttonStyle: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 18,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  buttonText: {
    color: "#eee",
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    fontFamily: "WorkSans_400Regular",
  },
  wrapperText: {
    marginLeft: 10,
    color: "#7d7d7d",
    fontFamily: "WorkSans_400Regular",
  },
}
  )


export default ContactYoutube;