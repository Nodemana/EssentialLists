import React, {useState} from 'react';
import { NavigationContainer, useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Text, Button, View, Modal, TextInput, Alert, Dimensions} from 'react-native';
import Checkbox from 'expo-checkbox';
import {styles} from '../stylesheets/stylesheet.js';

import { MaterialIcons} from '@expo/vector-icons';
import {List} from '../classes/list.js';

export default function ListDetails({route, navigation}){
    const {the_list_id} = route.params
    const the_list = List.findById(the_list_id);
    const [selectedElements, setSelectedElements] = useState({});

    // Update the value of selectedElements based on the condition
    if (the_list.element_states.length > 0){
        setSelectedElements(the_list.element_states);
    }

  const element_container = the_list.elements.map((element, index) => (
    <View>
      <Checkbox
        value={selectedElements[index]}
        onValueChange={(value) => setSelectedElements({ ...selectedElements, [index]: value })}
        style={styles.checkbox}
      />
      <Text>{element}</Text>
    </View>
  ));
    // This is to manage Modal State
    const [isModalVisible, setModalVisible] = useState(false);

    // This is to manage TextInput State
    const [inputValue, setInputValue] = useState("");

    const toggleModalVisibility = () => {
      the_list.elements.push(inputValue)
      setModalVisible(!isModalVisible);
    };

    const SaveAndReturn = () => {
        the_list.element_states = selectedElements
        console.log(selectedElements)
        console.log(the_list.element_states)
        navigation.navigate("Home")
    }

    React.useEffect(() => {
        // Use `setOptions` to update the button that we previously specified
        // Now the button includes an `onPress` handler to update the count
        navigation.setOptions({
          headerLeft: () => (
            <Button onPress={() => SaveAndReturn()} title="Back" />
          ),
        });
      }, [navigation]);

return(
        <View>
            <View>
        <>{element_container}</>
            </View>
            <MaterialIcons name='add' size={24} onPress={() => setModalVisible(true)}/>
  
      <Modal animationType="slide"
            visible ={isModalVisible}
            presentationStyle="overFullScreen" >
      <View style={styles.viewWrapper}>
        <View style={styles.modalView}>
            <TextInput placeholder="Enter element..." 
                        value={inputValue} style={styles.textInput} 
                        onChangeText={(value) => setInputValue(value)} />
                        <Button title="Close" onPress={toggleModalVisibility} />
                      </View>
                  </View>
              </Modal>
        </View>
    );
};