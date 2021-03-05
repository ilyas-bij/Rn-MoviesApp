import { StatusBar } from 'expo-status-bar';
import React ,{useState, useEffect} from 'react';
import { StyleSheet, Text, View ,Pressable,SafeAreaView,FlatList } from 'react-native';
import { Ionicons,AntDesign } from '@expo/vector-icons';
import axios from 'axios';


export default function Home({navigation}) {
 
  const [Data, steData] = useState([]);
 
  
 
 useEffect(() => {
  const fetchItems = async () => {
  
    const result = await axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=b6958e0f1dfb582b43656f847c0a9822&language=en-US&page=2 `
    )
    .then(function (response) {
      //console.log(response);
      steData(response.data.results)
     
    })
    .catch(function (error) {
      console.log(error);
    });
    //steData(result.data.results)
    
  }
  
    
 
  fetchItems()
}, [])

const renderItem = ({ item }) => (
 <Text style={{backgroundColor:'#DDD'}}> {item.original_title}</Text>
);
 
  return (
    
    <View style={styles.container}>
       <Pressable
        style={{marginTop:30}}
        onPress={() => console.log(Data)}
      >
        <Text style={styles.text}>get started</Text>
      </Pressable>
        <SafeAreaView >
      <FlatList
        data={Data}
        
        renderItem={renderItem}
        keyExtractor={(item,index) => 'key'+index}
      />
      
    </SafeAreaView>
   
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