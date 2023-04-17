import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable,ActivityIndicator, View} from 'react-native';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      {/* <Modal
        animationType=""
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
   <Pressable onPress={()=>setModalVisible(!modalVisible)}>
    <Text>show modal</Text>
   </Pressable> */}
   
      {/* <View style = {styles.container}>
            <ActivityIndicator
               animating = {true}
               color = '#bc2b78'
               size = "large"
               style = {styles.activityIndicator}/>
         </View> */}
    </View>
  );
};

const styles = StyleSheet.create ({
  container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     marginTop: 70
  },
  activityIndicator: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     height: 80
  }
})

export default App;