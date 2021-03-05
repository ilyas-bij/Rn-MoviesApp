import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from "../TabScreen/Home";
import List from "../TabScreen/List";
import Search from "../TabScreen/Search";
import { Ionicons,MaterialCommunityIcons,Feather } from '@expo/vector-icons';
const Tab = createMaterialBottomTabNavigator();

export default  function Tabs() {
  return (
    <Tab.Navigator
    initialRouteName="Home"
    activeColor="red"
    inactiveColor="#000"
    barStyle={{ backgroundColor: '#FFF',opacity:0.6 }}
      
    screenOptions={({ route }) => ({
      showIcon: true,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
        
            if (route.name === 'movie') {
              iconName = focused
            
              return   <MaterialCommunityIcons name="movie-roll" size={24} color={color} />;
            } else if (route.name === 'Search') {
              return   <Feather name="search" size={24} color={color} />;
            } else if (route.name === 'Mylist') {
              return   <Ionicons name="md-list" size={24} color={color} />
            }

            // You can return any component that you like here!
            
          },
        })}
        
    
  >
      <Tab.Screen name="movie" component={Home}   options={{   }} />
      <Tab.Screen name="Search" component={Search} />
     <Tab.Screen name="Mylist" component={List} />
    </Tab.Navigator>
  );
}

