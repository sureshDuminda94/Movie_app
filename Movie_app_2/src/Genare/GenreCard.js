import {View, Text, StyleSheet, StatusBar, ScrollView ,Dimensions} from 'react-native';

import Color from '../Constant/Color';
const {height, width} =Dimensions.get("screen");
const setWidth=(w)=>(width/100)*w;
const  GenreCard=({name})=>{

    return(
        <View style={styles.container}>
        
        

               
                <Text style={styles.genereText}>{name}</Text>   
                     
     
         </View>   
    );


}


const styles = StyleSheet.create({
    container: {
    
  
      backgroundColor:'white',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:5,
      marginVertical:2,
      paddingVertical:8,
      elevation:3,
      width: setWidth(25),

      
  
    },
    genereText:{

            color:Color.ACTIVE,

    },
  });

export default GenreCard;