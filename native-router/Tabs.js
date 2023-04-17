
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const Tab = createMaterialTopTabNavigator();


export default function App() {


  function TabScreen1() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text >tab1</Text>
       
      </View>
    );
  }
  function TabScreen2() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text >tab2</Text>
       
      </View>
    );
  }
  function TabScreen3() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text >tab3</Text>
       
      </View>
    );
  }
 return (
    <NavigationContainer>
      <Tab.Navigator>
        {/* {
          tabs.map(tab => <Tab.Screen key={tab.name} name={tab.name} component={tab.component} />)
        } */}
        <Tab.Screen name='tab1' component={TabScreen1} />
        <Tab.Screen name='tab2' component={TabScreen2} />
        <Tab.Screen name='tab3' component={TabScreen3} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
