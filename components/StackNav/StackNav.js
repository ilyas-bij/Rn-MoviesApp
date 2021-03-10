import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native'


import { enableScreens } from 'react-native-screens';
import { createStackNavigator  } from '@react-navigation/stack';
import Tab from "../BottomTab/Tabs";
import Home from '../TabScreen/Home';
import Detail from '../TabScreen/Detail';
import Lists from '../TabScreen/List'
import Item from '../TabScreen/MyList/ListItem';
import { set } from 'react-native-reanimated';

enableScreens();
const Stack = createStackNavigator ();
export default function StackNav({navigation}) {


useEffect(() => {
  
}, [navigation])



  const [List,setList]=useState([])

  const len = List.length
  
  
function Add(params) {
  if (List.length === 0) {
    setList([...List,params])
    console.log('first add')
    }else {
  
const found = List.find(element => element.id === params.id);

       
      if (found === undefined) {
        setList([...List,params])
        console.log("Add")
      }else{
        console.log('All ready hear '+List.length)

      }
}
}
  
function Delet(params) {
  setList((p)=>{
    return p.filter(List=>List.id != params.id )
  });
}
  
  
  
    return (
     

        <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        >
          <Stack.Screen name="Tab" component={Tab} initialParams={{len:List}}/>
          <Stack.Screen name="home" component={Home} options={{ headerShown: false}}/>
          <Stack.Screen name="Detail" component={Detail}  initialParams={{List:List,AddNew:Add}} />
          <Stack.Screen name="Mylist" component={Lists}  initialParams={{List:List , Del:Delet}} />


          

          </Stack.Navigator>
          
    )
}

const styles = StyleSheet.create({})