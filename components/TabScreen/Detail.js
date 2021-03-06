import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ScrollView ,Pressable,Image} from 'react-native';
import { MaterialIcons,Entypo,AntDesign } from '@expo/vector-icons';
import Act from '../TabScreen/Act/SowACt'
import { LinearGradient } from 'expo-linear-gradient'

export default function Detail({ navigation,route}) {
  const item = route.params?.item;
 // console.log(item)
const Imges =({imge})=>{
  
  const url = `https://image.tmdb.org/t/p/original`+imge
  console.log(url)
  return (
    <View>
     

    
  <Image
  style={styles.imge}
  source={{
          uri: url,
        }}
/>
          
</View>
)

}
  return (  
     
    <View >
     <StatusBar style="auto" />
     <ScrollView style={{backgroundColor:"#FFF"}}>
  
      
      <View style={styles.sweper}>
      
        <Imges  imge={item.poster_path}/>
        <View >
                   
               </View>
      </View>

        
      <View>
      <View>
      
                {/*flat head*/}
                        <View style={styles.head}>
                   <View style={{width:"50%",alignItems:"flex-start"}}>
                              <Pressable
                                      onPress={() => navigation.goBack()}>
                                  <View style={styles.rigth}>
                                  <Entypo name="home" size={26} color="black"  style={{ textAlign: 'center', marginTop:8 }} />
                                  </View>
                        </Pressable>
                   </View>
                   <View style={{width:"50%", alignItems:"flex-end",flexDirection:"row"}}>
                           <Pressable style={{marginLeft:50}}
                                      onPress={() => navigation.goBack()}>
                                  <View style={styles.rigth}>
                                  <AntDesign name="like1" size={26} color="black" style={{ textAlign: 'center', marginTop:8 }}/>
                                  </View>
                                  
                          </Pressable>
                          <Pressable
                          style={{marginLeft:5}}
                                      onPress={() => navigation.goBack()}>
                                  <View style={styles.rigth}>
                                  <MaterialIcons name="add" size={30} color="black" style={{ textAlign: 'center', marginTop:8 }}/>
                                  </View>
                                  
                          </Pressable>
                          
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
                            top:70
                        }}
                    />
               </View>
               
      
      </View>
      <View style={styles.dec}>
         

            {/** moves info ********************* */}
      
        <Text style={styles.Ptitel}>
        {item.original_title}
        </Text>
        <Text style={styles.Pprix}>
        {item.release_date} 
        </Text>
    
        <Text style={styles.Ptitel}>
        Overview
        </Text>
        <Text style={styles.Pdec}>
        {item.overview}
        </Text>
      </View>
      
      
      <Act item={item}/>
      </ScrollView>
      
    </View>
  );
}


const styles = StyleSheet.create({
  
  //titel styles
  Ptitel:{
    marginHorizontal:10,
    marginVertical:5,
    fontWeight: '700',
    fontSize:25
  },

  Pprix:{
    marginLeft:25,
    marginRight:9,
    marginVertical:2,
    marginTop:10,
    fontSize:20,
    fontWeight: '500',
  },
  Pdec:{
    textAlign:'center',
    marginHorizontal:5,
    marginRight:9,
    
    
    fontSize:18
  },
  dec:{
    backgroundColor:"#FFF",
    
    
    marginBottom:10
    },

  // all

  header:{
      
  },
  sweper:{
    width:'100%',
    
    height:550,
    borderBottomLeftRadius:60
    
  },

  
  imge:{
    width:'100%',
    height:'100%',
    resizeMode:"cover",
    
    

  },

  buttonsContainer: {
    position: 'absolute',
    bottom: 2,
    width: '95%',
    backgroundColor:'#DDD',
    
    borderRadius:20,
    marginLeft:'2.5%'
  },
  button: {
    height: 45,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    textTransform:'capitalize',
    color:'black',
    
  },

  head:{
    
    flexDirection:"row",
    paddingHorizontal:20,
    width:"100%",
    marginTop:10,
    paddingBottom:2,
    marginBottom:10
},
left:{
    fontWeight:"bold",
    fontSize:25,
    color:"black"
},
rigth:{
    backgroundColor:"#DDD",
    textAlign: 'center' ,
   
    borderRadius:50,
    width:45,
    height:45
},

});