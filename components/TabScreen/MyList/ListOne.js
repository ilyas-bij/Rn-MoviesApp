import { StatusBar } from 'expo-status-bar';
import React ,{useState, useEffect} from 'react';
import { StyleSheet, Text, View ,Pressable,SafeAreaView,FlatList,ImageBackground,TouchableOpacity } from 'react-native';
import { Ionicons,AntDesign } from '@expo/vector-icons';
import Item from './ListItem'



export default function ListOne({navigation,Data,Del}) {
 //console.log(Data)
 useEffect(() => {
   
   return () => {
     
   }
 }, [Data])
//render function ***********************************************************************
const renderItem = ({ item }) => (
 
      <Item item={item} Del={Del}/>

);
 
  return (

        <SafeAreaView >
      <FlatList
      style={{marginBottom:80}}
        data={Data}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item,index) => 'key'+index}
      />
      
    </SafeAreaView>
   
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{textAlign:'center',
  marginTop:35,fontSize:20,
  color:"red"

  
}
});