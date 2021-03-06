import { StatusBar } from 'expo-status-bar';
import React ,{useState, useEffect} from 'react';
import { StyleSheet, Text, View ,Pressable,SafeAreaView,FlatList,ImageBackground,TouchableOpacity } from 'react-native';
import { Ionicons,MaterialIcons } from '@expo/vector-icons';
import axios from 'axios';
import Item from '../TabScreen/Item'



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
//render function ***********************************************************************
const renderItem = ({ item }) => (
 //<Text style={{backgroundColor:'#DDD'}}> {item.original_title}</Text>
<TouchableOpacity  onPress={() => navigation.navigate('Detail',{item:item})}>
      <Item item={item}/>
 </TouchableOpacity>

);
 
  return (
    
    <View style={styles.container}>
    <StatusBar style="dark" />

    <ImageBackground 
    style={{width: "100%", height: "100%",backgroundColor:"#404040a6" }} 
    
    source={require("../../assets/account.png")}
>

{/* start header  **********************************************************************/}

   
        

        <View
    style={{backgroundColor:"#FFF",height:80,borderBottomRightRadius:25,flexDirection:'row',width:'100%'}}
    >        

                      
                      <View style={styles.Name}>
                        <Text style={styles.text}>Moveis App</Text>
                      </View>
                      <View style={styles.List}>
                      <TouchableOpacity  onPress={() =>navigation.navigate('Mylist')}>

                      <MaterialIcons name="my-library-books" size={24} color="black" style={{opacity:0.6}} />    
                      </TouchableOpacity> 
                       </View>
                     

            </View>

       
{/* end header  **********************************************************************/}

        <SafeAreaView >
      <FlatList
      style={{marginBottom:80}}
        data={Data}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item,index) => 'key'+index}
      />
      
    </SafeAreaView>
   
      
      </ImageBackground>
    </View>
  );
}


const styles = StyleSheet.create({
  
  text:{
    
    textAlign:'center',
  marginTop:35,
  fontSize:20,
  color:"red",  
  opacity:0.7

  
},
List:{
  marginTop:40,
  width:'22%',
  alignItems:"flex-end",
  flexDirection:'column'
}
,Name:{
  marginLeft:'29%',
  width:'40%',
  alignItems:'center'
}
});