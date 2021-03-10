import { StatusBar } from 'expo-status-bar';
import React ,{useState, useEffect , componentDidMount} from 'react';
import { StyleSheet, Text, View ,Pressable,SafeAreaView,FlatList,ImageBackground,TouchableOpacity } from 'react-native';
import ShowAll from './MyList/ListOne'
import { Ionicons,MaterialIcons } from '@expo/vector-icons';




export default function List({navigation,route}) {
  const List = route.params?.List;
  const Del = route.params?.Del;

  const [Data, steData] = useState([ ]);
 

 useEffect(() => {
 
  steData(List)
  
}, [Data])


function Show() { 
  //console.log(Data)
 
  if (Data !== null) {
  

return <ShowAll Data={Data} Del={Del}/>

}
     
  }



 
 
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
                    <View style={styles.List}>
                      <TouchableOpacity  onPress={() => navigation.goBack()}>

                      <Ionicons name="md-arrow-back" size={26} color="black"   /> 
            
                         </TouchableOpacity> 
                       </View>
                      
                      <View style={styles.Name}>
                        <Text style={styles.text}>My List</Text>
                      </View>
                      
                     

            </View>
  
{/* end header  **********************************************************************/}
    
       
        
            
        
         <Show/>
        
   
      
      </ImageBackground>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{textAlign:'center',
  marginTop:35,fontSize:20,
  color:"red",
  opacity:0.7

},
List:{
  marginTop:40,
  width:'15%',
  alignItems:"flex-end",
  flexDirection:'column'
}
,Name:{
  marginLeft:'15%',
  width:'40%',
  alignItems:'center'
}
});