import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './components/TabScreen/Home'
import Tab from './components/BottomTab/Tabs'
import StackNav from "./components/StackNav/StackNav";
export default function App() {
  return (
  
      
      <NavigationContainer >
      <StackNav />
   </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
