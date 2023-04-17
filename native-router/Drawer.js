import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

function Feed({ navigation }) {
  // console.log(navigation)
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed Screen</Text>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
      {/* <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} /> */}
    </View>
  );
}
function Feed1({ navigation }) {
  // console.log(navigation)
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed1 Screen</Text>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
      {/* <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} /> */}
    </View>
  );
}
function Feed2({ navigation }) {
  // console.log(navigation)
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed2 Screen</Text>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
      {/* <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} /> */}
    </View>
  );
}
function Feed3({ navigation }) {
  // console.log(navigation)
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed3 Screen</Text>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
      {/* <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} /> */}
    </View>
  );
}

function Notifications({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications Screen</Text>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
}

// function CustomDrawerContent(props) {
//   console.log(props)
//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props} />
//       <DrawerItem
//         label="Close drawer"
//         onPress={() => props.navigation.closeDrawer()}
//       />
//       <DrawerItem
//         label="Toggle drawer"
//         onPress={() => props.navigation.toggleDrawer()}
//       />
//     </DrawerContentScrollView>
//   );
// }

const Drawer = createDrawerNavigator();



export default function App() {
  return (
    <NavigationContainer>
  <Drawer.Navigator
      useLegacyImplementation
      // drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Notifications" component={Notifications} />
      <Drawer.Screen name="Feed1" component={Feed1} />
      <Drawer.Screen name="Feed2" component={Feed2} />
      <Drawer.Screen name="Feed3" component={Feed3} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}
