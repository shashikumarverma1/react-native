import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import React ,{useState , useEffect} from 'react';

export const FetchApi=(props) =>{
const [data, setdata] = useState([])
  
 useEffect(()=>{
  Getuser()
 },[])
  const Getuser=async()=>{
    let url='https://fakestoreapi.com/users'
    let res=await fetch(url)
    res=await res.json()
    // console.log(res)
    setdata(res)
  }
  console.log('data',data)
  return (
    <View style={styles.container} >
 <Text style={{padding:20, fontSize:30, fontWeight:700 , margin:10}}>
  your data{data.length}</Text>

<ScrollView>
{
  data.map((e)=>{
  return(
    <Text style={{paddingLeft:30 , backgroundColor:'aqua' , marginBottom:5 , padding:10}}>{e.id} {e.username}</Text>
  )
  })
}
  </ScrollView> 
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
  },
  input:{
    border:'2px solid red' ,
   padding:10 
   ,marginBottom:10,
   marginLeft:30 ,
   marginRight:30
   
  }
});

