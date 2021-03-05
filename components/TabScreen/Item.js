import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

export default function List() {
  return (
      <View style={styles.container}>
    <View style={styles.item}>
  <View style={styles.imgcon }>
  <Image source={require('../../assets/test.jpg')}   style={styles.img }/>
  </View>
  <View style={styles.info}>
  <Text style={styles.title} numberOfLines={2}>titel detit elde movetitel</Text>
  
  <Text style={styles.date} numberOfLines={1}>12/22</Text>
  <Text style={styles.des} numberOfLines={3}>titel de move titel de movetitel de movetitel de movetitel de movetitel de movetitel de movetitel de movetitel de movetitel de move</Text>

  </View>
  
  </View>
  </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      width:"100%",
      marginHorizontal:10,

    },
    item: {
      backgroundColor: '#454648d9',
      padding: 20,
        height:165,
      marginHorizontal:12,
          margin:9,
       flexDirection: "row",
       borderWidth: 1,
       borderColor: "#d66d6dd9",
       borderRadius: 12,
       
    },
    title: {
      fontSize:21,
      
            marginLeft:40,
      width:"70%",
      alignItems:"flex-end",
      color: "#FFF",
      

    },
    imgcon:{
      width:'25%',
      alignItems:"flex-start",
      
    },
    img:{
      marginTop:-15,
      marginLeft:-15,
      borderRadius: 12,
        width:110,
        height:150,
       
    
    },
    info:{
      marginTop:-10,
      width:'95%',
     
    },
    date:{
        fontSize:16,
         marginLeft:40,
        width:"70%",
        alignItems:"flex-end",
        color: "#ec3737d9",
  
       
      },
      des:{
        fontSize:16,
        marginLeft:40,
       width:"70%",
       alignItems:"flex-end",
       color: "#FFF",
       opacity:0.7
 
      
      }
   
  });