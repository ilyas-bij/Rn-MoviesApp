import React ,{useEffect,useState}from 'react'
import {Image, StyleSheet, SafeAreaView,Text, View,FlatList } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import GetAct from './GetAct'
import axios from 'axios';



export default function SowACt({item}) {
    
    const id = item.id
    const api ='https://api.themoviedb.org/3/movie/'+id+'/credits?api_key=b6958e0f1dfb582b43656f847c0a9822&language=en-US'
 

    const [cast,setcast]= useState([]);
    
     
 useEffect(() => {
    const fetchItems = async () => {
    
      const result = await axios(api
      )

      .then(function (response) {
        console.log(response);
        setcast(response.data.cast)
       
      })
      .catch(function (error) {
        console.log(error);
      });
      //steData(result.data.results)
      
    }
    
      
    fetchItems()
    
  }, [])




      const renderItem = ({ item }) => (
        <GetAct item={item}/>
       
      );
    
    return (
       <View>
       
                 <View>
                {/*flat head*/}
                        <View style={styles.head}>
                   <View style={{width:"50%"}}>
                        <Text style={styles.left}> Series Cast </Text>
                   </View>
                  
               </View>
      
         
            <View>
            <LinearGradient
                        colors={["#DDD", "transparent"]}
                        style={{
                            position:"absolute",
                            left:0,
                            right:0,
                            height:20,
                            marginTop:205,
                            top:0
                        }}
                    />
                
                <SafeAreaView >
                <FlatList
                horizontal={true}
                    data={cast}
                    renderItem={renderItem}
                    keyExtractor={(item,index) => 'key'+index}
                    showsHorizontalScrollIndicator={false}
                />
                </SafeAreaView>
              
                
             
               
           
              

               
             
            </View>
        
     </View>
   
  
       </View>
    )
}

const styles = StyleSheet.create({
    head:{
    
        flexDirection:"row",
        paddingHorizontal:20,
        width:"100%",
        
        
        
        paddingBottom:2,
    },
    left:{
        fontWeight:"bold",
        fontSize:18,
        color:"black"
    },
    rigth:{
        backgroundColor:"#DDD",
        paddingHorizontal:20,
        paddingVertical:5,
        borderRadius:15
    },
    text:{
        fontWeight:"bold",
        fontSize:13,
        color:"#FFF"
    }

})