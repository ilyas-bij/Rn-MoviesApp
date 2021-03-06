import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native'


import { enableScreens } from 'react-native-screens';
import { createStackNavigator  } from '@react-navigation/stack';
import Tab from "../BottomTab/Tabs";
import Home from '../TabScreen/Home';
import Detail from '../TabScreen/Detail';

enableScreens();
const Stack = createStackNavigator ();
export default function StackNav() {

  
  
  
    return (
     

        <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        >
          <Stack.Screen name="Tab" component={Tab} options={{}}/>
          <Stack.Screen name="home" component={Home} options={{ headerShown: false}}/>
          <Stack.Screen name="Detail" component={Detail}  />
          

          </Stack.Navigator>
          
    )
}

const styles = StyleSheet.create({})