import { StatusBar } from 'expo-status-bar';
import React, { useState ,useEffect} from 'react';
import { StyleSheet, Text, View,ImageBackground,TextInput,SafeAreaView,FlatList,TouchableOpacity } from 'react-native';
import Item from '../TabScreen/Item'
import { MaterialIcons,Entypo,AntDesign } from '@expo/vector-icons';
import axios from 'axios';
import SearcheItem from '../TabScreen/Item'

export default function Search({navigation}) {

const [search,setsearch]=useState('')
const [Moveis,setmoveis]=useState([])
const [api,setapi]=useState('https://api.themoviedb.org/3/search/multi?api_key=b6958e0f1dfb582b43656f847c0a9822&language=en-US&query=R&page=1&include_adult=false')
  //console.log(search)


   const Funsearch = async (text) =>{
        setsearch(text)
      //console.log(search)
  const api ='https://api.themoviedb.org/3/search/multi?api_key=b6958e0f1dfb582b43656f847c0a9822&language=en-US&query='+search+'&page=1&include_adult=false'
  setapi(api)
  const result = await axios(api)
  .then(function (response) {
    //console.log(response);
    setmoveis(response.data.results)
  })

  .catch(function (error) {
    console.log(error);
  });
}
 
 
  useEffect(() => {
    const fetchItems = async () => {
    
      const result = await axios(api)
      .then(function (response) {
        //console.log(response);
        setmoveis(response.data.results)
       
      })
      .catch(function (error) {
        console.log(error);
      });
      //steData(result.data.results)
      
    }
    
    
   
    fetchItems()
  }, [])

  const renderItem = ({ item }) => (
    <TouchableOpacity  onPress={() => navigation.navigate('Detail',{item:item})}>
      <SearcheItem item={item}/>
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

<View  >
        <View
    style={{backgroundColor:"#FFF",height:80 }}
    >        
           <View style={styles.input}>
                 <TextInput  placeholder='search'
                    onChangeText={text => Funsearch(text)}
                    defaultValue={search}
                 />
          </View>
         
          </View>
    </View>
{/* end header  **********************************************************************/}

   
<SafeAreaView style={styles.container}>
      <FlatList
       style={{marginBottom:80}}
        data={Moveis}
        renderItem={renderItem}
        keyExtractor={(item,index) => 'key'+index}
        
      />
    </SafeAreaView>
      
    
      <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginHorizontal:10,
   marginTop:30,
   height:40,
   backgroundColor:"#DDD",
   borderRadius:10,
   padding: 10
  },
});