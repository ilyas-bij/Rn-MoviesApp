import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons,AntDesign } from '@expo/vector-icons';

export default function Detail() {
  return (
    <View style={styles.container}>
      <Text>helo from home</Text>
      <Ionicons name="arrow-back" size={22} color="black" />
      <StatusBar style="auto" />
    </View>
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