import React, {useState} from 'react';
import { NavigationContainer, useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Text, Button, View, Modal, TextInput, Alert, Dimensions  } from 'react-native';
import {StyleSheet} from 'react-native';
import { MaterialIcons} from '@expo/vector-icons';
import {List} from '../classes/list.js';
import ListDetails from './listdetails.js';
import {styles} from '../stylesheets/stylesheet.js';

const lists = []

export default function HomeScreen({navigation}) {
    const list_container = lists.map(list => <Button title={String(list.list_name)} onPress={() => navigation.push('List Details', {
      the_list_id: list.id
    })}/>)
  
    // This is to manage Modal State
    const [isModalVisible, setModalVisible] = useState(false);
    
    // This is to manage TextInput State
    const [inputValue, setInputValue] = useState("");

    const toggleModalVisibility = () => {
      const list = new List(inputValue)
      lists.push(list)
      console.log(lists)
      setModalVisible(!isModalVisible);
    };

  return(
    <View>
      <Text>All Lists</Text>
      <View>
        <>{list_container}</>
      </View>
      <MaterialIcons name='add' size={24} onPress={() => setModalVisible(true)}/>
  
      <Modal animationType="slide"
            visible ={isModalVisible}
            presentationStyle="overFullScreen" >
      <View style={styles.viewWrapper}>
        <View style={styles.modalView}>
            <TextInput placeholder="Enter list name..." 
                        value={inputValue} style={styles.textInput} 
                        onChangeText={(value) => setInputValue(value)} />
                        <Button title="Close" onPress={toggleModalVisibility} />
                      </View>
                  </View>
              </Modal>
    </View>
    
  
    );
  }
  
