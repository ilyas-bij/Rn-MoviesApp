import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

export default function SearcheItem({item}) {
  const url = `https://image.tmdb.org/t/p/original`+item.poster_path
  return (
      <View style={styles.container}>
    <View style={styles.item}>
  <View style={styles.imgcon }>
  <Image source={{
          uri: url,
        }}  style={styles.img }/>
  </View>
  <View style={styles.info}>
  <Text style={styles.title} numberOfLines={2}>{item.original_title}</Text>
  
  <Text style={styles.date} numberOfLines={1}>Date : {item.release_date} </Text>
  <Text style={styles.des} numberOfLines={3}>{item.overview}</Text>

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
      marginLeft:-3,
      marginRight:21,
      marginTop:5,
      backgroundColor: '#fff5f5a6',
      padding: 20,
        height:165,
      marginHorizontal:10,
          margin:2,
       flexDirection: "row",
       borderWidth: 1,
       borderColor: "#d66d6dd9",
       borderRadius: 12,
       
       
    },
    title: {
      fontSize:21,
      
            marginLeft:35,
      width:"70%",
      alignItems:"flex-end",
      color: "#000",
      

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
       color: "#000",
       opacity:0.7
 
      
      }
   
  });