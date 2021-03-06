import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';

export default function List() {
  return (
    <View style={styles.container}>
      <ImageBackground 
    style={{width: "100%", height: "100%",backgroundColor:"#404040a6" }} 
    
    source={require("../../assets/account.png")}
>

    <View style={{  flex:1,
    alignItems: 'center',
    justifyContent: 'center',}}> 
        <Text>helo from Mylist</Text>
    </View>
    
      <StatusBar style="dark" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  
  },
});