import React from 'react'
import {Image, StyleSheet, Text, View,ScrollView,TouchableHighlight} from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native';

const GetAct = ({item}) => {
    const url = `https://image.tmdb.org/t/p/original`+item.profile_path
    return(
      
        <View  > 
           <TouchableHighlight onPress={() => alert("hi")}  underlayColor="white">
      <View>
            <View 
                            
                         
                        style={styles.Item}
                        
                    >
                        <Image
                     source={{
                        uri: url,
                        }}
                            style={{
                                height:135,
                                borderRadius:15,
                                width:160,
                                
                            }}
                            
                        />
                         <Text numberOfLines={2} style={styles.ItemTitel} 
                         
                         >
                         {item.original_name}</Text>

                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            
                        }}>
                           
                            
                      
                      
                        <Text style={styles.TextName}>
                        character:{item.character}
                        </Text>
                    
                        </View>
                      
             </View>
             
         
        <LinearGradient
                        colors={["black", "transparent"]}
                        style={{
                            position:"absolute",
                            left:1,
                            right:0,
                            height:1,
                            marginTop:-3,
                            top:5
                        }}
                    />

     </View>
     </TouchableHighlight>
  
     </View>
     
    )
}

export default GetAct;

const styles = StyleSheet.create({
    Item:{
        height:205,
        elevation:2,
        backgroundColor:"#FFF",
        marginLeft:20,
        marginTop:10,
        borderRadius:15,
        marginBottom:10,
        width:160
    },

    ItemTitel: {
        fontWeight:"bold",
        fontSize:14,
        paddingTop:5,
        paddingLeft:5,
        paddingRight:5
    },
    TextName: {
        paddingHorizontal:10,
        fontWeight:"bold",
        fontSize:13,
        color:"black",
        opacity:0.2,
        position: 'absolute', 
        paddingTop:5,
        bottom: -12,
        width:"100%",
    },
    TextItem: {
        fontWeight:"bold",
        fontSize:13,
        color:"black",
       opacity:0.2,
        position: 'absolute', 
        alignItems:"flex-end",
        right: -19,
        paddingTop:5,
        bottom: -12,
        width:"50%",
    },
  });