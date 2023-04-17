
import { Text, View,StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FetchApi } from './FetchApi';
import Login from './component1/Login';
import Flexthing from './component1/Flexthing';
// import { List1 } from './List1';
import Stack1 from './component1/Stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createMaterialTopTabNavigator();
// const Tab = createBottomTabNavigator();

export default function App() {

 return (
   <>
         {/* <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/> */}

<NavigationContainer >
<Tab.Navigator style={{paddingTop:25}}>

  <Tab.Screen name='home' component={FetchApi} />
  <Tab.Screen name='chats' component={Stack1} />
  <Tab.Screen name='status' component={Login} />
  <Tab.Screen name='calls' component={Flexthing} />
</Tab.Navigator>
</NavigationContainer>
   </>

   // <FetchApi/>
  );
}

