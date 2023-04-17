import React, { Component } from 'react';
import { StatusBar } from 'react-native'

const App = () => {
   return (
     <View>
         <StatusBar barStyle = "dark-content" hidden = {false} 
      backgroundColor = "#00BCD4" translucent = {true}/>
      
     </View>

   )
}
export default App