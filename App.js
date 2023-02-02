import React, {useState} from 'react';
import { NavigationContainer, useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Text, Button, View, Modal, TextInput, Alert, Dimensions  } from 'react-native';
import {StyleSheet} from 'react-native';
import { MaterialIcons} from '@expo/vector-icons';
import HomeScreen from './screens/home.js';
import ListDetails from './screens/listdetails.js';
import {styles} from './stylesheets/stylesheet.js';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home">
        <Stack.Screen name = "Home" component = {HomeScreen} />
        <Stack.Screen name = "List Details" component = {ListDetails}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}